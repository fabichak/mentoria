# "Criando o JavaScript" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do JavaScript com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no JavaScript. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Prazo.** Acho que dez dias tá bom pra fazer a linguagem. Depois ninguém vai usar mesmo.

**Nome.** JavaScript. Não tem nada a ver com Java. É pra pegar carona no marketing. Tipo casquinha do Mc longe do Mc.

**Somar.** `"5" + 3` dá `"53"`. `"5" - 3` dá `2`. O mais junta, o menos faz conta. Cada um com sua personalidade.

**Array com array.** `[] + []` é uma string vazia. `[] + {}` é `"[object Object]"`. Faz sentido se você não pensar.
`[tela: [] + {}  // "[object Object]"]`

**Igual.** Vou fazer dois iguais. O `==` que meio que compara, e o `===` que compara mesmo. Aí a gente ensina todo mundo a nunca usar o primeiro.

**Nada.** Um "nada" é pouco. Vai ter `null` e `undefined`. Dois nadas. E `typeof null` é `"object"`. Bug? Sim. Conserta? Não, já tem site usando.

**NaN.** "Not a Number" é do tipo `number`. E `NaN` não é igual a ele mesmo. Autoestima baixa.

**Ordenar.** `[10, 1, 3].sort()` dá `[1, 10, 3]`. Ordena como texto. Número é texto, se você olhar de longe.

**`parseInt`.** `parseInt(0.0000005)` dá `5`. Porque vira `"5e-7"` antes. Tá certo, confia.

**`Math.max()`.** Sem argumento, o maior número é `-Infinity`. O pessimista da turma.

**Ponto e vírgula.** Opcional. Se você esquecer, eu coloco pra você. Às vezes no lugar errado. Um `return` sozinho na linha retorna `undefined`, e o objeto de baixo fica lá, olhando.

**`this`.** O `this` vai depender de quem chamou a função. Não de onde ela foi escrita. Surpresa a cada chamada.

**Variável.** `var` vaza do bloco e sobe pro topo da função. Vinte anos depois a gente faz `let` e `const` pra consertar. E deixa o `var` lá, por segurança.

**Data.** Mês começa do zero. Dia começa do um. Janeiro é 0, dia 1 é 1. Aniversário cai sempre no mês errado.
`[tela: new Date(2026, 1, 1) // 1º de fevereiro]`

**Número.** Um tipo de número só: ponto flutuante. Inteiro seguro até 2^53. Passou disso, arredonda. Banco de dados de ID grande que lute. `BigInt` só em 2020.

**Pacote.** Pra deixar string com espaço na esquerda, baixa um pacote. Aí o autor apaga o pacote e metade da internet cai. Aconteceu em 2016. Onze linhas.

**`node_modules`.** A pasta mais pesada do universo. Hello world com 300 mega. Tipo bagageiro: cabe tudo, menos o que você precisa.

**Framework.** Um framework novo por semana. Quando você terminar o tutorial, já é legado.

**Array vazio.** `[,,,].length` é 3. Três buracos. Array de buraco.

**`"use strict"`.** Pra linguagem funcionar direito, você escreve uma string solta no topo do arquivo. Uma string. Solta.

**Fechamento.** Roda em todo navegador do planeta. Infelizmente.

---

## Cortes

- **Corte principal (~75s):** Prazo, Nome, Somar, Array com array, Igual, Nada, NaN, Ordenar, Ponto e vírgula, Data, Pacote, Framework, Fechamento.
- **Parte 2 (sobra):** `parseInt`, `Math.max()`, `this`, Variável, Número, `node_modules`, Array vazio, `"use strict"`.

**Legenda sugerida:** "Se o JavaScript fosse criado hoje, em reunião de planejamento 🤡 (foi em 10 dias. E é tudo verdade)"
