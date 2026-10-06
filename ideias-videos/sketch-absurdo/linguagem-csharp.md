# "Criando o C#" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do C# com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no C#. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Ideia.** O Java tá fazendo sucesso. Acho que a gente faz um Java. Mas nosso.

**Nome.** C#. Porque o jogo da velha são quatro "mais" empilhados. C++++. Ninguém vai conseguir pesquisar no Google, mas tudo bem.

**Plataforma.** Primeiro só roda no Windows. Uns quinze anos depois, a gente libera pro Linux. Com outro nome.

**Nome do .NET.** .NET Framework. Depois .NET Core. Depois .NET Standard, que não é plataforma. Aí vem o .NET 5, que pula o 4 pra não confundir com o Framework 4. Confuso? Imagina.

**IDE.** Visual Studio. E o Visual Studio Code, que é outra coisa. Nome igual, produto diferente. Tipo placa de banheiro no andar sem banheiro.

**String.** `string` minúsculo e `String` maiúsculo. São a mesma coisa. Aí cada time escolhe um e briga com o outro.

**Interface.** Toda interface começa com I. `IDisposable`, `IEnumerable`, `IServiceProvider`. Se não tiver I, você não sabe que é interface. A IDE sabe, mas você não.

**Null.** Qualquer objeto pode ser nulo. Em 2019 a gente coloca tipo anulável. Mas é só aviso. Vira mil avisos amarelos. O pessoal desliga.

**Versão nova.** Uma versão por ano, com recurso novo. `record`, `record struct`, `init`, `required`, construtor primário. Você nem terminou de aprender o do ano passado.

**Jeitos de fazer uma classe de dados.** `class`, `struct`, `record`, `record struct`. Quatro. Um pra cada estação do ano.

**Programa.** Durante vinte anos: namespace, classe `Program`, método `Main`. Em 2020 a gente descobre que dá pra só escrever o código. Revolução.

**`async void`.** Pode existir. Se der erro lá dentro, derruba o processo. E ninguém consegue esperar. Mas compila.
`[tela: async void Salvar() { ... }]`

**`dynamic`.** Linguagem com tipo forte. Mas tem o `dynamic`, que desliga tudo. Tipo guichê sem funcionário: tá ali, mas você que se vira.

**SQL no meio do código.** LINQ com sintaxe de consulta. `from x in lista where ... select`. SQL dentro do C#. De trás pra frente.
`[tela: var r = from u in usuarios where u.Ativo select u.Nome;]`

**`goto`.** Vai ter `goto`. Dentro do `switch`, até `goto case`. Moderno.

**Evento.** Inscrever em evento é `+=`. Somar uma função. Esqueceu de fazer `-=`? Vazamento de memória. Pra lembrar de você.

**Descarte.** Objeto que precisa liberar recurso implementa `IDisposable` e você usa `using`. Se esquecer, o arquivo fica aberto. O coletor de lixo não liga.

**Decimal.** `decimal`, `double` e `float`. Pra dinheiro, `decimal`. Se usar `double`, o centavo some. Pro banco, tá ótimo.

**Licença.** O Visual Studio completo é pago. O Community é grátis, mas tem regra de quantos funcionários. Pagou, o risco desaparece.

**Fechamento.** É o Java que deu certo. Segundo quem fez.

---

## Cortes

- **Corte principal (~75s):** Ideia, Nome, Plataforma, Nome do .NET, IDE, String, Interface, Null, Versão nova, Programa, `async void`, Licença, Fechamento.
- **Parte 2 (sobra):** Jeitos de fazer uma classe de dados, `dynamic`, SQL no meio do código, `goto`, Evento, Descarte, Decimal.

**Legenda sugerida:** "Se o C# fosse criado hoje, em reunião de planejamento 🪟 (e o pior: é tudo verdade)"
