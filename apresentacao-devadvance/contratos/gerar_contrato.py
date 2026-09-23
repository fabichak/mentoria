"""Gera contrato preenchido (docx + pdf) a partir do template.
python gerar_contrato.py --nome "..." --cpf "..." --endereco "..." --telefone "..." --email "..." --cidade "..."
"""
import argparse, datetime, pathlib, subprocess
from docx import Document

HERE = pathlib.Path(__file__).resolve().parent
TEMPLATE = HERE / "Contrato_Programa_ADVANCE_Turma_Fundadora.docx"
SOFFICE = "/mnt/c/Program Files/LibreOffice/program/soffice.exe"
MESES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

ap = argparse.ArgumentParser()
for k in ["nome","cpf","endereco","telefone","email","cidade"]:
    ap.add_argument(f"--{k}", required=True)
a = ap.parse_args()

hoje = datetime.date.today()
subs = {
    "[NOME COMPLETO]": a.nome, "[CPF]": a.cpf, "[ENDEREÇO COMPLETO]": a.endereco,
    "[TELEFONE]": a.telefone, "[E-MAIL]": a.email,
    "[CIDADE]": a.cidade, "[DATA]": f"{hoje.day} de {MESES[hoje.month-1]} de {hoje.year}",
}

d = Document(TEMPLATE)
for p in d.paragraphs:
    for r in p.runs:
        for k, v in subs.items():
            if k in r.text:
                r.text = r.text.replace(k, v)
    if p.text.strip() == "CONTRATANTE":  # bloco de assinatura
        p.add_run(f"\n{a.nome}\nCPF: {a.cpf}")

out = HERE / f"Contrato_Programa_ADVANCE_{a.nome}.docx"
d.save(out)
win = lambda p: subprocess.check_output(["wslpath", "-w", str(p)]).decode().strip()
subprocess.run([SOFFICE, "--headless", "--convert-to", "pdf", "--outdir", win(HERE), win(out)], check=True)
pdf = out.with_suffix(".pdf")

# posições (%) pra campos de assinatura no Autentique: 1 acima de cada label do bloco de assinatura
import fitz, json
pos = {}
for i, pg in enumerate(fitz.open(pdf)):
    W, H = pg.rect.width, pg.rect.height
    for b in pg.get_text("blocks"):
        t = b[4].strip()
        for k in ("CONTRATANTE", "CONTRATADA"):
            if t.startswith(k) and not t.startswith(k + ":"):
                pos[k] = {"z": i + 1, "x": str(round(b[0] / W * 100, 1)), "y": str(round(b[1] / H * 100 - 7, 1))}
print(out)
print(pdf)
print("SIZE", pdf.stat().st_size)
print("POSICOES", json.dumps(pos))
