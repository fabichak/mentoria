#!/usr/bin/env python3
"""Export slides.js -> palestra.pptx, matching index.html dark theme."""

import json
import re
from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN
from pptx.util import Emu, Pt

HERE = Path(__file__).parent
SLIDES_JS = HERE / "slides.js"
OUT = HERE / "palestra.pptx"

# --- theme (matches index.html) ---
BG = RGBColor(0x0E, 0x11, 0x16)
FG = RGBColor(0xE8, 0xEA, 0xED)
MUTED = RGBColor(0x8B, 0x94, 0x9E)
ACCENT = RGBColor(0xF5, 0xA5, 0x24)
ACCENT_SOFT = RGBColor(0xFF, 0xD9, 0x8A)

FONT = "Segoe UI"


def parse_slides_js(text: str):
    """Strip JS wrapper and parse the array as JSON-ish."""
    m = re.search(r"const\s+slides\s*=\s*(\[.*\]);", text, re.S)
    if not m:
        raise SystemExit("slides array not found")
    arr_src = m.group(1)
    # Strip line comments
    arr_src = re.sub(r"//[^\n]*", "", arr_src)
    # Strip block comments
    arr_src = re.sub(r"/\*.*?\*/", "", arr_src, flags=re.S)
    # Quote keys: {  title:  -> {  "title":
    arr_src = re.sub(r"([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:", r'\1"\2":', arr_src)
    # Remove trailing commas
    arr_src = re.sub(r",(\s*[\]}])", r"\1", arr_src)
    return json.loads(arr_src)


def set_bg(slide, color):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_text(slide, text, left, top, width, height, *, size, color, bold=False,
             italic=False, align=PP_ALIGN.LEFT, font=FONT):
    tb = slide.shapes.add_textbox(left, top, width, height)
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = 0
    tf.margin_top = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    f = run.font
    f.name = font
    f.size = Pt(size)
    f.bold = bold
    f.italic = italic
    f.color.rgb = color
    return tb


def add_bullets(slide, bullets, left, top, width, height, *, size=22):
    tb = slide.shapes.add_textbox(left, top, width, height)
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = 0
    for i, b in enumerate(bullets):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = PP_ALIGN.LEFT
        p.space_after = Pt(10)
        r_marker = p.add_run()
        r_marker.text = "›  "
        r_marker.font.name = FONT
        r_marker.font.size = Pt(size)
        r_marker.font.bold = True
        r_marker.font.color.rgb = ACCENT
        r_text = p.add_run()
        r_text.text = b
        r_text.font.name = FONT
        r_text.font.size = Pt(size)
        r_text.font.color.rgb = FG


def slide_size(prs):
    return prs.slide_width, prs.slide_height


def add_footer(slide, idx, total, prs):
    sw, sh = slide_size(prs)
    add_text(
        slide, f"{idx} / {total}",
        left=sw - Emu(1_400_000), top=sh - Emu(450_000),
        width=Emu(1_200_000), height=Emu(300_000),
        size=10, color=MUTED, align=PP_ALIGN.RIGHT,
    )


def build_title(prs, s):
    layout = prs.slide_layouts[6]  # blank
    slide = prs.slides.add_slide(layout)
    set_bg(slide, BG)
    sw, sh = slide_size(prs)
    title = s["title"]
    sub = s.get("subtitle", "")
    box_w = sw - Emu(1_000_000)
    left = Emu(500_000)
    top = sh // 2 - Emu(1_500_000)
    add_text(
        slide, title, left, top, box_w, Emu(2_000_000),
        size=60, color=ACCENT, bold=True, align=PP_ALIGN.CENTER,
    )
    if sub:
        add_text(
            slide, sub, left, top + Emu(2_200_000), box_w, Emu(1_000_000),
            size=24, color=MUTED, italic=True, align=PP_ALIGN.CENTER,
        )
    return slide


def build_quote(prs, s):
    layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(layout)
    set_bg(slide, BG)
    sw, sh = slide_size(prs)
    box_w = sw - Emu(2_000_000)
    left = Emu(1_000_000)
    top = sh // 2 - Emu(1_200_000)
    # Left accent bar
    bar = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        left - Emu(200_000), top, Emu(60_000), Emu(2_200_000)
    )
    bar.fill.solid()
    bar.fill.fore_color.rgb = ACCENT
    bar.line.fill.background()
    add_text(
        slide, f'"{s["text"]}"', left, top, box_w, Emu(2_200_000),
        size=44, color=ACCENT_SOFT, italic=True, align=PP_ALIGN.CENTER,
    )
    cap = s.get("caption", "")
    if cap:
        add_text(
            slide, cap.upper(), left, top + Emu(2_400_000), box_w, Emu(500_000),
            size=14, color=MUTED, align=PP_ALIGN.CENTER,
        )
    return slide


def build_content_like(prs, s):
    """For type 'content' and 'questions'."""
    layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(layout)
    set_bg(slide, BG)
    sw, sh = slide_size(prs)
    left = Emu(700_000)
    top = Emu(600_000)
    box_w = sw - Emu(1_400_000)
    add_text(
        slide, s["title"], left, top, box_w, Emu(900_000),
        size=36, color=FG, bold=True,
    )
    cursor = top + Emu(1_000_000)
    if s.get("subtitle"):
        add_text(
            slide, s["subtitle"], left, cursor, box_w, Emu(600_000),
            size=20, color=MUTED, italic=True,
        )
        cursor += Emu(700_000)
    bullets = s.get("bullets") or s.get("items") or []
    if bullets:
        # Auto size: 22 if <=4 bullets, smaller otherwise
        size = 22 if len(bullets) <= 5 else 18 if len(bullets) <= 7 else 16
        add_bullets(
            slide, bullets, left, cursor + Emu(200_000),
            box_w, sh - cursor - Emu(800_000), size=size,
        )
    return slide


def main():
    data = parse_slides_js(SLIDES_JS.read_text(encoding="utf-8"))
    prs = Presentation()
    # 16:9
    prs.slide_width = Emu(12_192_000)
    prs.slide_height = Emu(6_858_000)
    total = len(data)
    for i, s in enumerate(data, start=1):
        t = s.get("type")
        if t == "title":
            slide = build_title(prs, s)
        elif t == "quote":
            slide = build_quote(prs, s)
        else:
            slide = build_content_like(prs, s)
        add_footer(slide, i, total, prs)
    prs.save(OUT)
    print(f"wrote {OUT} ({total} slides)")


if __name__ == "__main__":
    main()
