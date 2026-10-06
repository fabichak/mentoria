# "Criando o Tailwind" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Tailwind com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Tailwind. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**CSS.** Arquivo de CSS separado é bagunça. Acho que vai tudo no HTML. Numa linha. Quarenta classes.
`[tela: class="flex items-center justify-between px-4 py-2 md:px-6 lg:px-8 bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-md transition"]`

**Separação de responsabilidades.** É mito. Todo mundo separou CSS de HTML por vinte anos. Tavam errados.

**Estilo inline.** Não é estilo inline. É classe. É diferente. Confia.

**Título.** O reset tira todo estilo. O `h1` fica igual a um parágrafo. Título que não parece título. Humildade.

**Responsivo.** `sm:` não é celular. `sm:` é tela de 640 pixels pra cima. Celular é sem prefixo. `sm` de "small", que não é small.

**Cinza.** `slate`, `gray`, `zinc`, `neutral`, `stone`. Cinco cinzas. Cada um com onze tons. Cinquenta e cinco tons de cinza.

**Classe dinâmica.** `bg-${cor}-500` não funciona. O Tailwind lê o texto do arquivo. Tem que escrever a classe inteira. Por extenso. Tipo cheque.

**Valor arbitrário.** `w-[137px]`. `top-[13px]`. Aí é CSS. Com colchete.

**Conflito.** `class="p-4 p-2"`. Qual ganha? Não é a última da lista, é a que vem depois no CSS gerado. Pra resolver, instala outra biblioteca.

**Ordem.** Tem um plugin do Prettier que reordena suas classes. Você escreve, ele arruma. Você não manda na sua própria div.

**@apply.** Dá pra juntar as classes num nome só, tipo CSS normal. O criador pede pra evitar. Pra não virar CSS normal.

**!important.** Coloca exclamação na frente: `!bg-red-500`. Na versão 4, atrás: `bg-red-500!`. Mudou de lado. Pra ver se você tá prestando atenção.

**Config.** `tailwind.config.js`. Na versão 4, a configuração vai pro CSS. O CSS que a gente disse que não precisava.

**Componentes.** Quer os componentes bonitos prontos? Tem a versão paga. Paga a taxa, daí o problema desaparece.

**Estados.** `hover:`, `focus:`, `dark:`, `group-hover:`, `peer-checked:`. Dá pra empilhar: `md:dark:hover:`. Três condições, zero espaço.

**Code review.** Div com cinquenta classes. O revisor aprova sem ler. Não tem como ler.

**Fechamento.** Você nunca mais vai escrever CSS. Vai escrever Tailwind. Que é CSS, abreviado, dentro do HTML.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** CSS, Separação de responsabilidades, Estilo inline, Título, Responsivo, Cinza, Classe dinâmica, Conflito, Config, Code review, Fechamento.
- **Parte 2 (sobra):** Valor arbitrário, Ordem, @apply, !important, Componentes, Estados.

**Legenda sugerida:** "Se o Tailwind fosse criado hoje, em reunião de planejamento 🤡 (55 tons de cinza, literalmente)"
