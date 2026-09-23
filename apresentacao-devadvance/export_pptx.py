"""Exporta uma aula pra PPTX: python export_pptx.py 0.1"""
import pathlib
import sys
from playwright.sync_api import sync_playwright
from pptx import Presentation
from pptx.util import Inches

AULA = sys.argv[1] if len(sys.argv) > 1 else "0.1"
ROOT = pathlib.Path(__file__).resolve().parent
URL = ROOT.joinpath("index.html").as_uri()
W, H = 1920, 1080
OUT = ROOT / "DevAdvance-Como-Funciona.pptx"

def shots():
    imgs = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": W, "height": H}, device_scale_factor=2)
        pg.goto(URL)
        pg.wait_for_selector(".slide")
        n = pg.evaluate("window.deckSlideCount()")
        ROOT.joinpath("_shots").mkdir(exist_ok=True)
        k = 0
        for i in range(n):
            pg.evaluate(f"window.deckGoto({i})")
            pg.wait_for_timeout(450)  # deixa a transição assentar
            path = ROOT / "_shots" / f"s{k:03d}.png"
            pg.locator(".slide.ativo").screenshot(path=str(path))
            imgs.append(path); k += 1
            # slides com revelação progressiva: 1 screenshot por item revelado
            while pg.evaluate("window.deckRevealNext()"):
                pg.wait_for_timeout(380)
                path = ROOT / "_shots" / f"s{k:03d}.png"
                pg.locator(".slide.ativo").screenshot(path=str(path))
                imgs.append(path); k += 1
        b.close()
    return imgs

def build(imgs):
    prs = Presentation()
    prs.slide_width = Inches(13.333); prs.slide_height = Inches(7.5)  # 16:9
    blank = prs.slide_layouts[6]
    for img in imgs:
        s = prs.slides.add_slide(blank)
        s.shapes.add_picture(str(img), 0, 0, width=prs.slide_width, height=prs.slide_height)
    prs.save(str(OUT))
    return len(prs.slides._sldIdLst)

if __name__ == "__main__":
    imgs = shots()
    total = build(imgs)
    print(f"OK: {OUT.name} com {total} slides (revelações viram slides sucessivos)")
