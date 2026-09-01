# Mentoria LRPG — deck

Baseado no harness da apresentação da Larissa. Parte interativa (app) removida.

## Apresentar
Abrir `index.html` no navegador. Navegar com ← → (ou clique / dots).

## Editar
Todo o texto está em `slides.js` (1 objeto por slide). Estilo em `styles.css`.

- **Revelação item a item** (Metodologia e Value Stack): o slide tem `revela:true`.
  Cada seta pra direita mostra o próximo item; a última volta pro fluxo normal.
- **Slides de resultado** (`tipo:'resultado'`): duplique o bloco em `slides.js`,
  troque `img` e `legenda`. Imagens em `assets/` (ex.: `resultado-4.png`).

## Exportar PPTX
```
uv venv .venv && uv pip install --python .venv/bin/python -r requirements.txt
.venv/bin/python -m playwright install chromium
.venv/bin/python export_pptx.py
```
Gera `Mentoria-LRPG.pptx`. Slides com `revela` viram vários slides sucessivos
(um por item revelado) — o build acontece dentro do próprio PPTX.
