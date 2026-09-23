"""Cria cobrança no Asaas pro aluno. Anual = pagamento único; mensal = assinatura.
python cobranca_asaas.py --nome ... --cpf ... --email ... --telefone ... --endereco ... --valor 197 --plano mensal [--sandbox] [--vencimento 2026-10-05]
"""
import argparse, datetime, json, pathlib, re, sys, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
ap = argparse.ArgumentParser()
for k in ["nome", "cpf", "email", "telefone", "endereco", "valor", "plano"]:
    ap.add_argument(f"--{k}", required=True)
ap.add_argument("--sandbox", action="store_true")
ap.add_argument("--vencimento", help="YYYY-MM-DD da 1ª cobrança; padrão = próximo dia útil")
a = ap.parse_args()
assert a.plano in ("mensal", "anual"), "plano: mensal|anual"

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
if a.plano == "anual":
    pay = api("POST", "/payments", {"customer": cust["id"], "billingType": "BOLETO", "value": float(a.valor),
                                    "dueDate": due, "description": "Programa ADVANCE - 12 meses (anual)",
                                    "externalReference": ref, **ENCARGOS})
    sub_id = None
else:
    sub = api("POST", "/subscriptions", {"customer": cust["id"], "billingType": "BOLETO", "value": float(a.valor),
                                         "nextDueDate": due, "cycle": "MONTHLY",
                                         "description": "Programa ADVANCE - mensalidade", "externalReference": ref, **ENCARGOS})
    sub_id = sub["id"]
    pay = api("GET", f"/subscriptions/{sub_id}/payments")["data"][0]

print(json.dumps({"sandbox": a.sandbox, "customer": cust["id"], "subscription": sub_id, "payment": pay["id"],
                  "dueDate": pay["dueDate"], "value": pay["value"], "invoiceUrl": pay["invoiceUrl"],
                  "bankSlipUrl": pay.get("bankSlipUrl")}, ensure_ascii=False, indent=1))
