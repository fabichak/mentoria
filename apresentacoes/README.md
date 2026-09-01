# Apresentações — DevAdvance.club

Engine de slides pra todas as aulas. Copiado de `apresentacao-auto-lideranca/` (estilo cyberpunk preto + azul neon, 16:9).

## Uso

- **`index.html`** — abre o seletor de aulas (funciona em `file://`).
- **`aula.html?a=0.1`** — toca uma aula direto.
- **Conteúdo**: cada aula é um arquivo `aulas/<id>.js` (mesmo formato do antigo `slides.js`). Edite só ele.
- **Aula nova**: crie `aulas/<id>.js` + adicione 1 linha em `aulas/manifest.js`.
- **Export**: `python export_pptx.py 0.3` / `python export_pdf.py 0.3` (deps em `requirements.txt`, usa o `.venv` da pasta antiga se quiser).

Navegação: `← →` / espaço / clique. Slides com `revela:true` mostram itens um a um.

## Referência de templates (`tipo:` em cada objeto de slide)

| tipo | campos | uso |
|---|---|---|
| `capa` | selo, titulo, destaque (palavra neon), sub, rodape | abertura |
| `divisor` | titulo, sub | palavra grande no meio, muda de bloco |
| `checkpoint` | titulo | tela única tipo "Dúvidas" |
| `fim` | titulo, rodape | encerramento |
| `lista` | titulo, badge, tag, revela, itens:[{t,d}] | bullets grandes (t=negrito, d=descrição) |
| `pilar` | titulo, badge, tag, sub, bullets:[{t,d}] | título ciano + bullets |
| `agenda` | titulo, badge, texto, qr, itens:[{k,d}] | linhas rotuladas (k=chave mono ciano) |
| `cronologia` | titulo?, badge, revela, itens:[{t, cycle?}] | roadmap numerado conectado; `cycle:true` liga item ao seguinte com ↻ |
| `loop` | titulo, badge, itens:[5 strings] | diagrama circular — EXATAMENTE 5 nós |
| `foto` | titulo?, badge, img, contain? | imagem grande (contain=fundo branco, não corta) |
| `perfil` | titulo, badge, img, revela, itens:[{t,d}] | foto quadrada à esquerda + bullets |
| `logos` | titulo, badge, logos:[{img} ou {cl:true}] | grid de logos |
| `confronto` | badge, itens:[{titulo,icone},{titulo,icone}] | A × B gigante |
| `timeline` | titulo, badge, de, ate, tagA, tagB, nota, revela | linha do tempo com marcos |
| `stack` | titulo, badge, tag, revela, itens:[{t,v}], total, totalDe | value stack (vendas) |
| `preco` / `precoDupla` | ver deck.js | slides de preço (vendas) |
| `resultado` | badge, imgs:[{img,legenda}], layout:'row' | prints com moldura |

Campos comuns: `badge` (etiqueta HUD topo-esquerda), `revela:true` (revelação progressiva), `qr:true` (QR code canto).

Assets em `assets/` (SVGs funcionam em `img`). Estilo dos SVGs: fundo transparente ou `#0a1220`, traços `#22d3ff`/`#3d9bff`, acentos `#ff3db4`, texto `#eaf2ff`.
