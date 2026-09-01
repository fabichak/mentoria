# Live · Auto-liderança — deck

Mesmo harness da apresentação LRPG (preto + azul neon).

## Apresentar
Abrir `index.html` no navegador. Navegar com ← → (ou clique / dots).

## Editar
Todo o texto está em `slides.js` (1 objeto por slide). Estilo em `styles.css`.

- **Links (último slide):** placeholders `LINK TERÇA` e `MENTORIA QUARTA` — edite em `slides.js`.
- **Revelação item a item:** slides com `revela:true` mostram um bullet por seta. Remova a flag pra mostrar tudo de uma vez.
- Tipos novos deste deck: `logos` (grid de empresas), `foto` (imagem grande), `perfil` (foto + bullets), `loop` (ciclo da carreira).

## Exportar PPTX
```
uv venv .venv && uv pip install --python .venv/bin/python -r requirements.txt
.venv/bin/python -m playwright install chromium
.venv/bin/python export_pptx.py
```
Gera `Live-Auto-Lideranca.pptx` (revelações viram slides sucessivos).
