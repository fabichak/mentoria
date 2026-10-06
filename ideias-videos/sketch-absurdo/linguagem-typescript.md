# "Criando o TypeScript" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do TypeScript com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no TypeScript. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Ideia.** O JavaScript tem problema. Solução: botar tipo em cima. Os problemas continuam lá embaixo, mas agora com tipo.

**Tipos.** Na hora de rodar, eu apago todos os tipos. Todos. Serviram pra deixar você tranquilo enquanto escrevia.

**Erro de tipo.** Deu erro de tipo? Compila mesmo assim. Gera o JavaScript igual. O erro é mais um conselho.

**`any`.** Vai ter o `any`. Desliga o sistema de tipo inteiro pra aquela variável. Tipo porta giratória com portinha do lado sempre aberta.
`[tela: const user: any = JSON.parse(body)]`

**`as`.** Se o compilador discordar, você diz `as` e ele acredita. `as unknown as Cachorro`. Pronto, virou cachorro.

**Exclamação.** Pode ser nulo? Bota um `!` no final. Não é mais nulo. Força do pensamento.

**Strict.** Se não configurar, o modo estrito vem desligado. A segurança existe, mas tem que pedir.

**Configuração.** O `tsconfig.json` vai ter umas cem opções. Ninguém sabe o que metade faz. Copia do projeto anterior.

**Tipo ou interface.** Dois jeitos de declarar a mesma coisa: `type` e `interface`. Quase iguais. Aí o time faz uma reunião de duas horas pra escolher.

**Enum.** Todo tipo some na hora de rodar. Menos o `enum`, que gera código. Aí o pessoal recomenda não usar `enum`.

**`Object.keys`.** Devolve `string[]`. Não as chaves do objeto. Só string. Você sabe quais são, eu sei quais são, o TypeScript finge que não.

**Índice.** `lista[99]` numa lista de 3 é do tipo `number`. Não `undefined`. Tem uma flag pra consertar. Desligada, claro.

**Objeto vazio.** O tipo `{}` aceita quase tudo. Número, string, função. Só não aceita `null` e `undefined`. Objeto vazio mais cheio do mundo.

**Sistema de tipos.** É Turing completo. Dá pra fazer jogo da velha dentro dos tipos. Precisava? Não. Fizeram? Fizeram.

**Mensagem de erro.** Quarenta linhas pra dizer que faltou uma propriedade. Com o tipo inteiro expandido. Tipo o bagageiro: 200 malas, cabe 150.
`[tela: Type '{ id: number; name: string; ... 14 more ...; }' is not assignable to ...]`

**Três nadas.** `any`, `unknown` e `never`. O primeiro aceita tudo, o segundo aceita tudo mas não deixa usar, o terceiro não aceita nada. Todo mundo usa o primeiro.

**Biblioteca.** Lib sem tipo? Instala o `@types/` separado, escrito por um voluntário, de outra versão.

**Velocidade do compilador.** Tá lento? Reescreve o compilador em Go. Um compilador de TypeScript que não é em TypeScript. Faz sentido.

**Node.** Depois de anos, o Node aprende a rodar TypeScript. Como? Apagando os tipos. Voltamos pro começo.

**Fechamento.** É JavaScript, só que com mais etapas e o mesmo `undefined` no final.

---

## Cortes

- **Corte principal (~75s):** Ideia, Tipos, Erro de tipo, `any`, `as`, Exclamação, Configuração, Tipo ou interface, Enum, Sistema de tipos, Velocidade do compilador, Node, Fechamento.
- **Parte 2 (sobra):** Strict, `Object.keys`, Índice, Objeto vazio, Mensagem de erro, Três nadas, Biblioteca.

**Legenda sugerida:** "Se o TypeScript fosse criado hoje, em reunião de planejamento 🙃 (o tipo some na hora de rodar. De verdade)"
