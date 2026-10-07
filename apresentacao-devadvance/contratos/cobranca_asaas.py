"""Cria cobrança no Asaas pro aluno. Anual = pagamento único; mensal = assinatura.
python cobranca_asaas.py --nome ... --cpf ... --email ... --telefone ... --endereco ... --valor 197 --plano mensal [--sandbox] [--vencimento 2026-10-05] [--taxa 250 --parcelas-taxa 3]
Taxa de adesão no mensal: 1ª assinatura de <parcelas> meses com valor+taxa/parcelas, 2ª com o valor puro até fechar 12 meses.
"""
import argparse, calendar, datetime, json, pathlib, re, sys, urllib.request
from dinheiro import split_cents

ROOT = pathlib.Path(__file__).resolve().parent.parent
ap = argparse.ArgumentParser()
for k in ["nome", "cpf", "email", "telefone", "endereco", "valor", "plano"]:
    ap.add_argument(f"--{k}", required=True)
ap.add_argument("--sandbox", action="store_true")
ap.add_argument("--vencimento", help="YYYY-MM-DD da 1ª cobrança; padrão = próximo dia útil")
ap.add_argument("--taxa", type=float, default=0, help="taxa de adesão em reais")
ap.add_argument("--parcelas-taxa", type=int, default=1, choices=[1, 2, 3])
a = ap.parse_args()
assert a.plano in ("mensal", "anual"), "plano: mensal|anual"
assert a.plano == "mensal" or a.parcelas_taxa == 1, "anual: taxa vai inteira na cobrança única"


def add_months(d, n):
    m = d.month - 1 + n
    y, m = d.year + m // 12, m % 12 + 1
    return d.replace(year=y, month=m, day=min(d.day, calendar.monthrange(y, m)[1]))

env = {}
for line in (ROOT / ".env").read_text().splitlines():
    m = re.match(r"^([A-Z_]+)=(.*?)\s*(#.*)?$", line)
    if m:
        env[m.group(1)] = m.group(2).strip().strip("'\"")
if a.sandbox:
    URL, KEY = "https://api-sandbox.asaas.com/v3", env["ASAAS_SANDBOX_API_KEY"]
else:
    URL, KEY = "https://api.asaas.com/v3", env["ASAAS_PROD_API_KEY"]
assert KEY, "chave Asaas vazia no .env"

def api(method, path, body=None):
    req = urllib.request.Request(URL + path, method=method, data=json.dumps(body).encode() if body else None,
                                 headers={"access_token": KEY, "Content-Type": "application/json", "User-Agent": "devadvance"})
    try:
        with urllib.request.urlopen(req) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"Asaas {e.code} {path}: {e.read().decode()}")

digits = lambda s: re.sub(r"\D", "", s)
cpf, phone = digits(a.cpf), digits(a.telefone)

if a.vencimento:
    due = datetime.date.fromisoformat(a.vencimento).isoformat()
else:
    # ponytail: só pula fim de semana; feriados ficam pra quando doer
    d = datetime.date.today() + datetime.timedelta(days=1)
    while d.weekday() >= 5:
        d += datetime.timedelta(days=1)
    due = d.isoformat()

# cliente: reusa por CPF
found = api("GET", f"/customers?cpfCnpj={cpf}")["data"]
if found:
    cust = found[0]
else:
    cust = api("POST", "/customers", {"name": a.nome, "cpfCnpj": cpf, "email": a.email, "mobilePhone": phone,
                                      "address": a.endereco, "notificationDisabled": False,
                                      "externalReference": "Programa ADVANCE"})

ref = f"Programa ADVANCE - {a.nome}"
# teto legal: multa 2% (CDC art. 52 §1º) + juros de mora 1% ao mês (CC art. 406)
ENCARGOS = {"fine": {"value": 2, "type": "PERCENTAGE"}, "interest": {"value": 1}}
valor = float(a.valor)
sub_ids = []
if a.plano == "anual":
    pay = api("POST", "/payments", {"customer": cust["id"], "billingType": "BOLETO", "value": round(valor + a.taxa, 2),
                                    "dueDate": due, "description": "Programa ADVANCE - 12 meses (anual)",
                                    "externalReference": ref, **ENCARGOS})
elif not a.taxa:
    sub = api("POST", "/subscriptions", {"customer": cust["id"], "billingType": "BOLETO", "value": valor,
                                         "nextDueDate": due, "cycle": "MONTHLY",
                                         "description": "Programa ADVANCE - mensalidade", "externalReference": ref, **ENCARGOS})
    sub_ids.append(sub["id"])
    pay = api("GET", f"/subscriptions/{sub['id']}/payments")["data"][0]
else:
    n = a.parcelas_taxa
    parcelas = split_cents(a.taxa, n)
    sub = api("POST", "/subscriptions", {"customer": cust["id"], "billingType": "BOLETO", "value": round(valor + parcelas[-1], 2),
                                         "nextDueDate": due, "cycle": "MONTHLY", "maxPayments": n,
                                         "description": f"Programa ADVANCE - mensalidade + taxa de adesão ({n}x)",
                                         "externalReference": ref, **ENCARGOS})
    sub_ids.append(sub["id"])
    pay = api("GET", f"/subscriptions/{sub['id']}/payments")["data"][0]
    if parcelas[0] != parcelas[-1]:  # centavo da sobra na 1ª cobrança
        pay = api("PUT", f"/payments/{pay['id']}", {"value": round(valor + parcelas[0], 2), "dueDate": pay["dueDate"]})
    sub2 = api("POST", "/subscriptions", {"customer": cust["id"], "billingType": "BOLETO", "value": valor,
                                          "nextDueDate": add_months(datetime.date.fromisoformat(due), n).isoformat(),
                                          "cycle": "MONTHLY", "maxPayments": 12 - n,
                                          "description": "Programa ADVANCE - mensalidade", "externalReference": ref, **ENCARGOS})
    sub_ids.append(sub2["id"])

print(json.dumps({"sandbox": a.sandbox, "customer": cust["id"], "subscriptions": sub_ids, "payment": pay["id"],
                  "dueDate": pay["dueDate"], "value": pay["value"], "invoiceUrl": pay["invoiceUrl"],
                  "bankSlipUrl": pay.get("bankSlipUrl")}, ensure_ascii=False, indent=1))
