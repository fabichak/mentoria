# "Criando o Go" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Go com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Go. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** Go. Duas letras. Uma palavra que aparece em toda frase em inglês. Pra pesquisar, você digita "golang". Que não é o nome.

**Erro.** Não vai ter exceção. Toda função devolve o resultado e um erro. E você confere. Toda vez. Em toda linha.
`[tela: if err != nil { return err } ×47]`

**Genérico.** Não precisa. O pessoal copia a função pra cada tipo. Treze anos depois, a gente coloca. 2022.

**Variável não usada.** Declarou e não usou? Não compila. Import sobrando? Não compila. Vazamento de memória? Aí compila.

**Público e privado.** Não vai ter palavra `public`. Letra maiúscula é público, minúscula é privado. Renomeou? Mudou a visibilidade. Emoção.

**Data.** Formato de data não vai ser `YYYY-MM-DD`. Vai ser `2006-01-02 15:04:05`. Uma data específica de 2006. Decora.
`[tela: time.Now().Format("02/01/2006")]`

**Formatação.** Não tem discussão de estilo. O `gofmt` decide. Com tab. Acabou a briga. Agora vocês brigam por outra coisa.

**Ternário.** Não vai ter `? :`. Faz um `if` de cinco linhas. É mais legível, confia.

**Loop.** Só vai ter `for`. `while`? É um `for`. Loop infinito? `for`. Um `for` pra cada ajudante, cinquenta idosos.

**Enum.** Não vai ter. Tem `iota`. Uma constante que vai contando sozinha. Letra grega. Moderno.

**Conjunto.** Set? Não precisa. Usa `map[string]struct{}`. Um mapa de nada. Os valores são nada. Elegante.

**Chave.** Chave tem que ficar na mesma linha do `if`. Se descer, dá erro. Não é estilo, é lei.

**Mapa.** A ordem do mapa é aleatória. De propósito. Pra você não se acostumar.

**`nil`.** Uma interface com `nil` dentro não é igual a `nil`. É um nil com tipo. Um nil que se acha.

**Loop e closure.** Durante doze anos, a variável do `for` era a mesma em todas as voltas. Todas as goroutines pegavam o último valor. Consertado em 2024. De nada.

**`append`.** `append` às vezes devolve a mesma lista, às vezes uma nova. Depende da capacidade. Você descobre em produção.

**Goroutine.** Criar goroutine é baratinho. Aí você cria um milhão. E esquece de fechar metade.

**Pasta do projeto.** No começo, todo código tinha que ficar dentro de uma pasta só, o `GOPATH`. Tipo um elevador pra doze andares.

**Pânico.** Não tem exceção. Mas tem `panic` e `recover`. Que é exceção. Mas não chama assim.

**Mascote.** Um esquilo de dente pra fora. É o que dá pra fazer.

**Fechamento.** Uma linguagem simples. Tão simples que você escreve três vezes mais código.

---

## Cortes

- **Corte principal (~75s):** Nome, Erro, Genérico, Variável não usada, Público e privado, Data, Formatação, Ternário, Conjunto, Mapa, `nil`, Loop e closure, Fechamento.
- **Parte 2 (sobra):** Loop, Enum, Chave, `append`, Goroutine, Pasta do projeto, Pânico, Mascote.

**Legenda sugerida:** "Se o Go fosse criado hoje, em reunião de planejamento 🐹 (if err != nil)"
