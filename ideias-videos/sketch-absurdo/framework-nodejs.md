# "Criando o Node.js" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Node.js com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Node, no npm e no Express. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Linguagem.** JavaScript no servidor. A mesma do navegador. Com os mesmos problemas, só que agora com acesso ao disco.

**Thread.** Uma. Uma thread pra todo mundo. Alguém fez um cálculo pesado, todo mundo espera. Tipo um elevador só pra um prédio de doze andares.

**Assíncrono.** Callback. Dentro de callback. Dentro de callback. Vira uma pirâmide. Aí vem Promise. Aí vem async/await. Os três no mesmo projeto, pra contar a história.
`[tela: })})})})});]`

**Erro.** Vai no primeiro parâmetro do callback. `(err, data)`. Esqueceu de checar o `err`? Segue a vida com `undefined`.

**Módulo.** `require`. Aí `import`. Os dois. Arquivo `.js`, `.mjs`, `.cjs`. E um `"type": "module"` no package.json pra decidir qual dos três o `.js` é.

**Pacote.** Acho que cada função vira um pacote. O `left-pad` tinha onze linhas. Em 2016 o autor tirou do ar e quebrou o build de meio mundo. Onze linhas.

**is-even.** Tem um pacote pra saber se o número é par. Ele depende de outro pacote, que sabe se o número é ímpar. E tem gente baixando toda semana.

**node_modules.** Um todo-list, milhares de pastas. É o objeto mais pesado do universo. Depois do buraco negro, empatado.

**Versão.** `^1.2.3` aceita qualquer 1.alguma coisa. Atualiza sozinho. De preferência sexta à tarde.

**Segurança.** O `npm install` roda script de qualquer pacote. Código de um estranho rodando na sua máquina. Eu confio em mil e quinhentos desconhecidos. Mas a caneta do escritório fica presa na corrente.

**Gerenciador de pacote.** npm. Aí yarn. Aí pnpm. Aí bun. Cada um com seu lockfile. Quatro lockfiles no repositório. Um pra cada humor.

**fetch.** Fazer requisição HTTP, nativo? Só em 2022. Até lá, instala `request`, `node-fetch`, `axios`. O `request` foi descontinuado. Os tutoriais, não.

**Promise sem catch.** Antes dava só um aviso. Desde o Node 15, derruba o processo inteiro. Pra você aprender.

**Express.** O framework padrão. A versão 5 começou em 2014. Saiu em 2024. Dez anos. Dá pra pegar um café. Com açúcar.

**Express 4 com async.** Deu erro dentro de função async? O Express não pega. A requisição fica pendurada. Esperando. Tipo fila de banco.

**Fork.** Em 2014 um grupo discorda e cria o io.js. Em 2015 volta tudo pro Node. Separação de fachada.

**O criador.** Em 2018 ele sobe no palco e dá uma palestra: "10 coisas que eu me arrependo no Node". E cria outro runtime, o Deno. Que depois aprende a rodar pacote do npm.

**Fechamento.** Full stack com uma linguagem só. Um problema só. Em dois lugares.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Linguagem, Thread, Assíncrono, Módulo, Pacote, is-even, node_modules, Segurança, Gerenciador de pacote, Express, O criador, Fechamento.
- **Parte 2 (sobra):** Erro, Versão, fetch, Promise sem catch, Express 4 com async, Fork.

**Legenda sugerida:** "Se o Node.js fosse criado hoje, em reunião de planejamento 🤡 (o criador pediu desculpas em palestra)"
