# "Criando o Rust" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Rust com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Rust. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** Rust. Ferrugem. Pra linguagem que promete segurança. Um fungo, na verdade. Pior ainda.

**Mascote.** Um caranguejo. Que anda de lado. Igual o pessoal subindo a escada do avião.

**Compilador.** Vai ter um fiscal dentro do compilador. O borrow checker. Ele decide quem pode mexer em cada variável. Você não. Ele.
`[tela: error[E0502]: cannot borrow `x` as mutable because it is also borrowed as immutable]`

**Tempo de compilação.** Demora. Mas quando compila, funciona. Dá pra tomar dois cafés. Com açúcar.

**String.** Uma é pouco. `String`, `&str`, `OsString`, `CString`, `&[u8]`, `Cow<str>`. Seis. E você vai precisar converter entre todas.

**Lifetime.** Vai ter anotação de tempo de vida. Com apóstrofo. `'a`. Ninguém sabe ler em voz alta.

**Turbofish.** Pra passar tipo genérico, `::<>`. Tem nome oficial: turbofish. Um peixe.
`[tela: "42".parse::<i32>()]`

**`unwrap`.** Resultado pode dar erro. Você trata. Ou escreve `.unwrap()` e reza. O programa todo segurado por `unwrap`. Tipo caixa automático usado.

**`unsafe`.** Linguagem segura. Mas tem a palavra `unsafe`. Aí dentro, vale tudo. Paga a taxa e o risco desaparece.

**Lista ligada.** Fazer lista ligada é tão difícil que tem um livro inteiro sobre isso. Lista ligada. Primeiro semestre da faculdade.

**Vazamento.** Vazar memória é seguro. Oficialmente. Tem até função pra isso, `Box::leak`. Seguro é outra coisa.

**Estouro de número.** Em debug, dá pânico. Em release, dá a volta. Dois comportamentos. Você testa um e sobe o outro.

**Async.** Vai ter `async`. Mas sem runtime. Você escolhe um de fora. Todo mundo escolhe o mesmo. Mas escolhe.

**Compartilhar.** Quer compartilhar e mudar um valor? `Rc<RefCell<T>>`. Entre threads? `Arc<Mutex<T>>`. Tipo embalagem de ovo de Páscoa.

**Macro.** `println!` com exclamação. É macro. Pra imprimir. Empolgado.

**Tratamento de erro.** O operador `?` é lindo. Aí você precisa escolher entre `anyhow`, `thiserror` e mais três. Cada lib com o seu tipo de erro.

**Regra do órfão.** Você não pode implementar uma trait de fora num tipo de fora. Nem se você quiser muito. Regra do órfão. Tem até nome triste.

**Comunidade.** Todo projeto que existe, alguém vai propor reescrever em Rust. No issue. Educadamente.

**Pesquisa.** Linguagem mais admirada no Stack Overflow, ano após ano. Admirada. Usar é outra conversa.

**Pacote.** O `cargo` funciona de primeira. Só pra você estranhar.

**Fechamento.** Zero bug de memória. Porque o código nunca compilou.

---

## Cortes

- **Corte principal (~75s):** Nome, Compilador, Tempo de compilação, String, Lifetime, Turbofish, `unwrap`, `unsafe`, Lista ligada, Estouro de número, Compartilhar, Comunidade, Fechamento.
- **Parte 2 (sobra):** Mascote, Vazamento, Async, Macro, Tratamento de erro, Regra do órfão, Pesquisa, Pacote.

**Legenda sugerida:** "Se o Rust fosse criado hoje, em reunião de planejamento 🦀 (o borrow checker aprovou esse vídeo)"
