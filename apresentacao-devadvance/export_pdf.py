"""Exporta uma aula pra PDF: python export_pdf.py 0.1"""
import pathlib
import sys
from playwright.sync_api import sync_playwright
from PIL import Image

AULA = sys.argv[1] if len(sys.argv) > 1 else "0.1"
ROOT = pathlib.Path(__file__).resolve().parent
URL = ROOT.joinpath("index.html").as_uri()
W, H = 1920, 1080
# (nome, quantos slides do fim ficam de fora). Os 2 últimos são o plano B (Comunidade + comparativo).
OUTS = [
    ("devadvance-programa-full.pdf", 0),
    ("devadvance-programa.pdf", 1),
]

def shots():
    imgs = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": W, "height": H}, device_scale_factor=2)
        pg.goto(URL)
        pg.wait_for_selector(".slide")
        pg.add_style_tag(content=".nav-hint,.dots,.progresso{display:none}")
        n = pg.evaluate("window.deckSlideCount()")
        ROOT.joinpath("_shots").mkdir(exist_ok=True)
        for i in range(n):
            pg.evaluate(f"window.deckGoto({i})")
            # revela tudo: só o slide completo entra no PDF
            while pg.evaluate("window.deckRevealNext()"):
                pass
            pg.wait_for_timeout(450)
            path = ROOT / "_shots" / f"pdf{i:03d}.png"
            pg.locator(".slide.ativo").screenshot(path=str(path))
            imgs.append(path)
        b.close()
    return imgs

if __name__ == "__main__":
    pages = [Image.open(p).convert("RGB") for p in shots()]
    for name, drop in OUTS:
        keep = pages[: len(pages) - drop]
        keep[0].save(str(ROOT / name), save_all=True, append_images=keep[1:])
        print(f"OK: {name} com {len(keep)} páginas (1 por slide, sem reveals)")
