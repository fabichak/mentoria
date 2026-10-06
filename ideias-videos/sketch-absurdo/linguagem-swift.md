# "Criando o Swift" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Swift com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Swift. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Pré-requisito.** Pra programar, você precisa de um Mac. Ah, não tem? Paga a taxa e o risco desaparece.

**Nome.** Swift. Rápido. Menos pra compilar.

**Compilador.** Às vezes o compilador desiste. Literalmente. Tem mensagem pra isso.
`[tela: error: the compiler is unable to type-check this expression in reasonable time]`

**String.** Não dá pra pegar a terceira letra com `texto[2]`. Tem que pedir um índice pro índice do começo da string, andando duas casas. Uma linha pra pegar uma letra.
`[tela: s[s.index(s.startIndex, offsetBy: 2)]]`

**Emoji.** Uma família de emoji conta como uma letra só. Mas pode usar emoji no nome da variável. `let 🐶 = "Rex"`. Prioridades.

**Opcional.** Pode ser nulo? Interrogação. Quer abrir? `if let`, `guard let`, `??`, ou exclamação. Quatro portas giratórias.

**Exclamação.** A exclamação força. Se for nulo, o app fecha na cara do usuário. Na hora do pagamento, de preferência.

**`++`.** Tirei o `++`. E o `for` de C. No Swift 3. Quem propôs foi o criador. Arrependimento de pai.

**Versão nova.** Do Swift 2 pro 3, mudou o nome de metade das funções. Todo projeto quebrou. Mas tem um migrador. Que também quebra.

**Estabilidade.** Compatibilidade binária só no Swift 5, em 2019. Até lá, cada app levava a linguagem inteira dentro. Tipo mala de mão que ocupa o bagageiro todo.

**Arroba.** `@State`, `@Published`, `@MainActor`, `@escaping`, `@objc`, `@discardableResult`. Arroba é a nova pontuação.

**Protocolo.** Programação orientada a protocolo. Com `associatedtype`. Aí você não consegue usar como tipo. Aí vem o `some`. Aí vem o `any`. Aí você volta pra classe.

**Objective-C.** Tudo com prefixo NS. `NSString`, `NSArray`. De NeXTSTEP. Empresa de 1985. Faz parte da decoração.

**Struct.** Struct copia quando passa. Mas só copia de verdade quando muda. Copia, mas não copia. Mágica.

**SwiftUI.** Prévia ao vivo da tela. Enquanto escreve, você vê. Quando funciona. Normalmente aparece "Preview crashed".

**Concorrência.** No Swift 6, modo estrito de concorrência. Seu projeto ganha mil avisos novos. Pra você ter o que fazer no fim de semana.

**IDE.** Só o Xcode. Trava? Apaga a pasta `DerivedData`. Todo dev iOS sabe o caminho de cor. É o chazinho de abacaxi.

**Publicar.** Pra publicar, paga a conta de desenvolvedor por ano. E a loja fica com uma parte da venda. Eles confiam o dinheiro deles em mim, eu cobro pra deixar eles entrarem.

**Fechamento.** Seguro, moderno, rápido. Em um Mac, com Xcode, depois de apagar o DerivedData.

---

## Cortes

- **Corte principal (~75s):** Pré-requisito, Compilador, String, Emoji, Opcional, Exclamação, `++`, Versão nova, Arroba, SwiftUI, IDE, Publicar, Fechamento.
- **Parte 2 (sobra):** Nome, Estabilidade, Protocolo, Objective-C, Struct, Concorrência.

**Legenda sugerida:** "Se o Swift fosse criado hoje, em reunião de planejamento 🍎 (o compilador desiste. De verdade)"
