# "Criando o Ruby" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Ruby com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Ruby. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Objetivo.** A linguagem tem que deixar o programador feliz. Feliz. Performance a gente vê depois.

**Nome de método.** Um nome é pouco. `map` e `collect`. `reduce` e `inject`. `length`, `size` e `count`. Fazem a mesma coisa. Um pra cada humor.

**Negação.** Vai ter `if` e `unless`. `while` e `until`. Aí dá pra escrever `unless !nao_ativo`. Tripla negação. Poesia.

**Pergunta.** Método pode terminar com interrogação. `vazio?`. E com exclamação. `salvar!`. A linguagem tem emoção.

**Classe aberta.** Qualquer um pode abrir qualquer classe e mudar. Até o `Integer`. Quer que 2 + 2 dê 5? Pode.
`[tela: class Integer; def +(o) = 5; end]`

**Zero.** Zero é verdadeiro. Só `nil` e `false` são falsos. Zero, string vazia, array vazio: tudo verdade.

**`nil`.** O `nil` é um objeto. Com métodos. `nil.to_a` dá um array vazio. O nada tem mais método que você.

**Imprimir.** `puts`, `print`, `p` e `pp`. Quatro jeitos de imprimir. Cada um mostra diferente.

**Closure.** Bloco, `proc` e `lambda`. Três jeitos de fazer função anônima. O `return` funciona diferente em cada um. Surpresa de Kinder Ovo.

**`method_missing`.** Chamou um método que não existe? A classe pode inventar ele na hora. Tipo o banco que diz que tem caixa, mas não tem.

**`and` e `&&`.** Vai ter os dois. Com precedência diferente. Parece igual. Não é.

**Retorno.** Não precisa escrever `return`. A última linha volta sozinha. Até quando você não queria.

**`end`.** Todo bloco termina com `end`. No final do arquivo, `end end end end end`. Parece um choro.

**Símbolo.** `:nome` e `"nome"` são coisas diferentes. Aí o Rails faz um hash que aceita os dois. Pra resolver o que a gente criou.

**String congelada.** Pra string não ser mutável, você coloca um comentário mágico no topo do arquivo. Um comentário. Que muda o código.
`[tela: # frozen_string_literal: true]`

**Thread.** Vai ter thread. Mas com trava global. Uma de cada vez. Igual elevador de doze andares.

**Versão.** Pra trocar de versão do Ruby: `rvm`, `rbenv`, `chruby`, `asdf`. Escolhe um e defende na internet.

**Rails.** Aí vem o Rails e mistura com a linguagem. `2.days.ago`. Isso não é Ruby, é Rails. Mas ninguém sabe mais onde acaba um e começa o outro.

**Escala.** O Twitter ficou fora do ar tanto que virou meme a baleia. Aí a manchete: "Rails não escala". Quinze anos respondendo isso.

**Fechamento.** O programador fica feliz. O servidor, nem tanto.

---

## Cortes

- **Corte principal (~75s):** Objetivo, Nome de método, Negação, Pergunta, Classe aberta, Zero, Closure, `method_missing`, `end`, Símbolo, Rails, Escala, Fechamento.
- **Parte 2 (sobra):** `nil`, Imprimir, `and` e `&&`, Retorno, String congelada, Thread, Versão.

**Legenda sugerida:** "Se o Ruby fosse criado hoje, em reunião de planejamento 💎 (e o pior: é tudo verdade)"
