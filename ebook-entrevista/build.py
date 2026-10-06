"""Gera ebook.pdf a partir de ebook.md.

Uso: python3 build.py
Edite só o ebook.md (conteúdo) e o ebook.css (visual). Cada "# Título" começa numa página nova.
"""
import pathlib
import markdown
from playwright.sync_api import sync_playwright
from pypdf import PdfWriter

ROOT = pathlib.Path(__file__).resolve().parent
md = (ROOT / "ebook.md").read_text(encoding="utf-8")
body = markdown.markdown(md, extensions=["tables", "fenced_code", "md_in_html"])

# repete a seção "O DevAdvance Club" na última página, com o logo
ini = body.index("<h1>O DevAdvance Club</h1>")
club = body[ini:body.index("<h1>", ini + 1)]
body += club.replace("</h1>", '</h1><div class="fim-logo"><img src="assets/logo.png" alt="DevAdvance Club"></div>', 1)
def page(b):
    return f"""<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link rel="stylesheet" href="ebook.css"></head><body>{b}</body></html>"""

# fica no disco pra você abrir no navegador e conferir
(ROOT / "ebook.html").write_text(page(body), encoding="utf-8")

footer = """<div style="width:100%;font-size:8px;color:#8aa0c6;padding:0 18mm;
display:flex;justify-content:space-between;font-family:sans-serif">
<span>Entrevista é treino · devadvance.club</span><span class="pageNumber"></span></div>"""

def render(pg, html_body, out, **kw):
    f = ROOT / "_tmp.html"  # na pasta do ebook, pra achar ebook.css e assets/
    f.write_text(page(html_body), encoding="utf-8")
    pg.goto(f.as_uri())
    pg.wait_for_load_state("networkidle")
    pg.pdf(path=str(out), format="A4", print_background=True, **kw)
    f.unlink()

# capa sem rodapé; miolo com rodapé e número de página (a contagem começa na história)
cut = body.index("<h1>")
capa_pdf, miolo_pdf = ROOT / "_capa.pdf", ROOT / "_miolo.pdf"
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    render(pg, body[:cut], capa_pdf, margin={"top": "0", "bottom": "0", "left": "0", "right": "0"})
    render(pg, body[cut:], miolo_pdf, display_header_footer=True, header_template="<div></div>",
           footer_template=footer, margin={"top": "18mm", "bottom": "18mm", "left": "18mm", "right": "18mm"})
    b.close()

w = PdfWriter()
for f in (capa_pdf, miolo_pdf):
    w.append(str(f))
    f.unlink()
w.write(str(ROOT / "ebook.pdf"))
print("ok:", ROOT / "ebook.pdf")
