#!/usr/bin/env python
"""Gera PDF de cada entregavel-*.md da pasta raiz.
Uso: apresentacao-workshop-roadmap-tech-lead/.venv/bin/python gerar_entregaveis_pdf.py
Edite os .md e rode de novo pra regenerar."""
from pathlib import Path
import markdown
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent

CSS = """
@page { size: A4; margin: 18mm 16mm; }
body { font: 11pt/1.5 'Segoe UI', system-ui, sans-serif; color: #111827; }
h1 { font-size: 20pt; color: #0b3d91; border-bottom: 3px solid #22d3ff; padding-bottom: 6px; }
h2 { font-size: 14pt; color: #0b3d91; margin-top: 22px; }
h3 { font-size: 12pt; color: #1f2937; }
strong { color: #0b3d91; }
hr { border: none; border-top: 1px solid #d1d5db; margin: 18px 0; }
table { border-collapse: collapse; width: 100%; margin: 10px 0; }
th, td { border: 1px solid #9ca3af; padding: 6px 8px; text-align: left; vertical-align: top; }
th { background: #eef6ff; color: #0b3d91; }
td:empty::after { content: ""; display: inline-block; min-height: 14pt; }
ul { padding-left: 20px; }
li { margin: 3px 0; }
li input[type=checkbox] { margin-right: 6px; }
em { color: #6b7280; }
"""

def main():
    mds = sorted(ROOT.glob("entregavel-*.md"))
    if not mds:
        print("Nenhum entregavel-*.md encontrado.")
        return
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        for md in mds:
            html = markdown.markdown(md.read_text(encoding="utf-8"),
                                     extensions=["tables"])
            page.set_content(f"<html><head><meta charset='utf-8'>"
                             f"<style>{CSS}</style></head><body>{html}</body></html>")
            out = md.with_suffix(".pdf")
            page.pdf(path=str(out), format="A4", print_background=True)
            print(f"OK: {out.name}")
        browser.close()

if __name__ == "__main__":
    main()
