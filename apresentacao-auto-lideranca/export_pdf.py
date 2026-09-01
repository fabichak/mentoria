import pathlib
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent
URL = ROOT.joinpath("index.html").as_uri()
W, H = 1920, 1080
OUT = ROOT / "Live-Auto-Lideranca.pdf"

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
    pages[0].save(str(OUT), save_all=True, append_images=pages[1:])
    print(f"OK: {OUT.name} com {len(pages)} páginas (1 por slide, sem reveals)")
