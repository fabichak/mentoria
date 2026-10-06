# "Criando o Vue" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Vue com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Vue. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**API.** Options API. Todo mundo aprende. Aí no Vue 3: Composition API. Dá pra usar as duas. No mesmo componente, se quiser emoção.

**ref.** Variável reativa é `ref`. No script, você usa `.value`. No template, não usa. Esqueceu o `.value` no script? Tá comparando um objeto com um número. E tá tudo bem.
`[tela: count.value++   {{ count }}]`

**ref ou reactive.** Dois jeitos de criar estado. O `reactive`, se você desestruturar, perde a reatividade. Sem aviso.

**Vue 2.** Adicionou uma propriedade nova no objeto? Não é reativa. Tem que usar `this.$set`. Mudou o item do array pelo índice? Não atualiza a tela. Charme da versão.

**data.** Tem que ser uma função que retorna um objeto. Se for só objeto, os componentes dividem o mesmo estado. Comunismo de estado.

**this.** Método com arrow function perde o `this`. Aí o `this` é `undefined`. Filosofia pura.

**v-if com v-for.** No mesmo elemento. No Vue 2 o `for` ganha. No Vue 3 o `if` ganha. Mudou a prioridade. Sem mudar a sintaxe.

**defineProps.** Não precisa importar. Tá lá. Aparece do nada. Importou? Aviso dizendo que não precisa. Mágica educada.

**Nome de prop.** No JavaScript é `userName`. No HTML é `user-name`. Converte sozinho. Na maioria das vezes.

**Estado global.** Vuex. Todo mundo aprende. Aí criam o Pinia, que vira o oficial. O Vuex vai pra manutenção.

**Filtros.** Vue 2 tinha `{{ preco | moeda }}`. Bonito. Vue 3 tira. Quem usava, reescreve.

**Vue 2 acabou.** Fim do suporte em 31 de dezembro de 2023. Não migrou? Tem suporte estendido pago. Paga a taxa, daí o risco desaparece.

**Atalho.** `v-bind` vira `:`. `v-on` vira `@`. `v-slot` vira `#`. Três símbolos. Parece senha de Wi-Fi.
`[tela: <Comp :item="x" @click="y" #header>]`

**CSS.** `style scoped`. Quer estilizar o filho? `:deep()`. Antes era `::v-deep`. Antes era `>>>`. Muda a cada versão, pra treinar a memória.

**Build.** Vue CLI. Aí o criador do Vue cria o Vite. O Vue CLI vai pra manutenção. Tudo em família.

**Documentação.** Acho que a documentação vai ser boa. Clara. Com exemplo. Pra ninguém achar que é framework de verdade.

**Fechamento.** Framework progressivo. Começa simples. Progressivamente, vira Vue 3.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** API, ref, Vue 2, data, v-if com v-for, defineProps, Estado global, Vue 2 acabou, Atalho, Documentação, Fechamento.
- **Parte 2 (sobra):** ref ou reactive, this, Nome de prop, Filtros, CSS, Build.

**Legenda sugerida:** "Se o Vue fosse criado hoje, em reunião de planejamento 🤡 (.value no script, sem .value no template)"
