# "Criando o Kotlin" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Kotlin com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Kotlin. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Quem faz.** Uma empresa de IDE cria uma linguagem. Pra você usar na IDE dela. Nada suspeito.

**Nome.** Java é uma ilha. Kotlin também é uma ilha. Perto de São Petersburgo. Vai que dá certo de novo.

**Null.** Acabou o `NullPointerException`. Tipo nulo só com interrogação. Mas se você colocar `!!`, pode dar `NullPointerException` de novo. Duas exclamações. De raiva.
`[tela: val nome = usuario!!.nome]`

**Java.** Variável que vem do Java tem tipo com exclamação: `String!`. Não é nulo, não é não-nulo. É talvez. Tipo de plataforma.

**`lateinit`.** Promete que vai iniciar depois. Esqueceu? Erro na hora de rodar. Promessa é dívida.

**Funções de escopo.** `let`, `run`, `with`, `apply`, `also`. Cinco funções quase iguais. Diferença é se é `it` ou `this` e o que volta. Tem tabela na internet. Cola na parede.

**`it`.** Parâmetro da lambda se chama `it` sozinho. Aí dentro de outra lambda, outro `it`. Qual `it`? It.

**`val` e `var`.** Imutável e mutável. Uma letra de diferença. Pra revisar código com atenção.

**Static.** Não vai ter `static`. Vai ter `companion object`. Um objeto companheiro. Que é o static. Mas com amigo.

**Exceção.** Não tem exceção checada. Tipo placa de banheiro no andar sem banheiro: pode seguir, depois você descobre.

**Herança.** Toda classe é final. Quer herdar? Escreve `open`. E o Spring precisa herdar tudo. Aí vem um plugin pra abrir tudo de volta.

**Extensão.** Dá pra adicionar método em qualquer classe, de qualquer lugar. `String.virarCpf()`. Em qualquer arquivo. Boa sorte achando.

**Tipos especiais.** `Any`, `Unit` e `Nothing`. O tudo, o nada que é alguma coisa, e o nada de verdade. Filosofia.

**Coroutine.** `suspend` numa função e ela pode pausar. Aí toda função que chama ela também vira `suspend`. Contagioso.

**Data class.** `data class` gera `equals`, `hashCode`, `copy`, tudo sozinho. O Java levou mais uns anos pra ter o `record`. Sem pressa.

**Android.** O Google adota em 2017. Em 2019, Kotlin primeiro. Aí todo tutorial antigo de Android vira arqueologia.

**Build.** O Gradle agora é em Kotlin também. Pra compilar Kotlin, você escreve Kotlin, que compila demorado. Cafezinho com açúcar.

**Compilador.** Tava lento. Faz um compilador novo, o K2, em 2024. Agora compila rápido. O Gradle continua igual.

**`when`.** O `switch` virou `when`. Muito melhor. Isso é verdade, não tem piada. Me perdi.

**Fechamento.** É o Java que o Java queria ser. Feito por quem vende a IDE que você vai usar pra escrever os dois.

---

## Cortes

- **Corte principal (~75s):** Quem faz, Nome, Null, Java, Funções de escopo, `it`, Static, Herança, Extensão, Coroutine, Build, `when`, Fechamento.
- **Parte 2 (sobra):** `lateinit`, `val` e `var`, Exceção, Tipos especiais, Data class, Android, Compilador.

**Legenda sugerida:** "Se o Kotlin fosse criado hoje, em reunião de planejamento 🏝️ (e o pior: é tudo verdade)"
