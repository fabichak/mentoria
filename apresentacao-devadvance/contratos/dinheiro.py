"""Helpers de valor em reais, compartilhados por gerar_contrato.py e cobranca_asaas.py."""

UN = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze",
      "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
DEZ = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
CEN = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos",
       "novecentos"]


def split_cents(total, n):
    """Divide total em n parcelas em centavos; sobra vai na 1ª. 250/3 -> [83.34, 83.33, 83.33]."""
    c = round(total * 100)
    return [(c // n + (c % n if i == 0 else 0)) / 100 for i in range(n)]


def brl(v):
    """1970 -> '1.970,00'"""
    return f"{v:,.2f}".replace(",", "_").replace(".", ",").replace("_", ".")


def _ate999(n):
    if n == 100:
        return "cem"
    c, r = divmod(n, 100)
    dez = UN[r] if r < 20 else DEZ[r // 10] + (f" e {UN[r % 10]}" if r % 10 else "")
    return " e ".join(p for p in (CEN[c], dez) if p)


def _inteiro(n):
    # ponytail: até 999.999, contrato não passa disso
    m, r = divmod(n, 1000)
    if not m:
        return _ate999(r)
    mil = "mil" if m == 1 else f"{_ate999(m)} mil"
    if not r:
        return mil
    return f"{mil} e {_ate999(r)}" if r < 100 or r % 100 == 0 else f"{mil}, {_ate999(r)}"


def extenso(v):
    """197 -> 'cento e noventa e sete reais'; 83.33 -> 'oitenta e três reais e trinta e três centavos'"""
    r, c = divmod(round(v * 100), 100)
    partes = []
    if r:
        partes.append(_inteiro(r) + (" real" if r == 1 else " reais"))
    if c:
        partes.append(_inteiro(c) + (" centavo" if c == 1 else " centavos"))
    return " e ".join(partes)


if __name__ == "__main__":
    assert extenso(197) == "cento e noventa e sete reais"
    assert extenso(1970) == "mil, novecentos e setenta reais"
    assert extenso(83.33) == "oitenta e três reais e trinta e três centavos"
    assert extenso(1100) == "mil e cem reais"
    assert extenso(2001.01) == "dois mil e um reais e um centavo"
    assert extenso(100) == "cem reais"
    assert brl(1970) == "1.970,00" and brl(83.3) == "83,30"
    assert split_cents(250, 3) == [83.34, 83.33, 83.33] and sum(split_cents(250, 3)) == 250
    print("ok")
