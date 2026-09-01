"""Exporta como-funciona.html pra PDF: python export.py"""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent
URL = ROOT.joinpath("como-funciona.html").as_uri()
OUT = ROOT / "mentoria-como-funciona.pdf"

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(URL)
    pg.pdf(path=str(OUT), format="A4", print_background=True)
    b.close()

print(f"OK: {OUT.name}")
