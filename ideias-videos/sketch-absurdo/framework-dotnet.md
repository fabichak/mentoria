# "Criando o .NET" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do .NET com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no .NET. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** .NET. Com ponto na frente. Pra ninguém conseguir pesquisar no Google.

**Versões.** .NET Framework. Aí .NET Core. Aí .NET 5, sem o Core. Pula o 4 pra não confundir com o .NET Framework 4.8. Que continua existindo. Pra confundir.

**Tela.** WinForms, WPF, UWP, WinUI, Xamarin, MAUI, Blazor. Acho que um framework de interface a cada reorganização da empresa. O Xamarin a gente já aposentou.

**Web.** Web Forms, MVC, Web API, ASP.NET Core, Razor Pages, Blazor, Minimal APIs. Tudo ASP.NET. Nome de família.

**HttpClient.** Tudo que é `IDisposable` você coloca no `using`. Menos esse. Se colocar no `using` a cada requisição, acabam os sockets do servidor. Aí a gente cria uma fábrica de HttpClient. Pra fabricar o que não pode jogar fora.
`[tela: using var client = new HttpClient(); // não]`

**async.** Deu `.Result` numa Task em app antigo? Travou. Deadlock. `async void`? A exceção some. Vai pro céu das exceções.

**ConfigureAwait.** Em biblioteca, `ConfigureAwait(false)` em todo `await`. Todos. Um por um. Pra deixar o código mais comprido.

**Startup.** Tinha o `Startup.cs`, com `ConfigureServices` e `Configure`. No .NET 6 some, vai tudo pro `Program.cs`. Todo tutorial anterior virou mapa do tesouro.

**Injeção de dependência.** Singleton, Scoped, Transient. Botou um Scoped dentro de um Singleton? Ele fica preso lá pra sempre. Chama "dependência cativa". Nome de filme de sequestro.

**Null.** Liga o nullable no projeto: três mil warnings. Aí tem o operador `!`, que é você dizendo pro compilador "confia em mim". O compilador não confia em você, mas aceita a exclamação.
`[tela: var nome = usuario!.Nome!;]`

**Banco.** Entity Framework. Aí Entity Framework Core. Dois. Com nome quase igual. Tradição da casa.

**Solution.** Arquivo `.sln`, formato próprio que nenhum humano lê. Anos depois lançam o `.slnx`, em XML. Aí melhorou.

**bin e obj.** Erro estranho no build? Apaga as pastas `bin` e `obj`. Não é solução oficial. É a única que funciona.

**Configuração.** `appsettings.json`, `appsettings.Development.json`, user secrets, variável de ambiente. Cada um sobrescreve o outro. Qual valeu? Coloca um breakpoint e descobre.

**LTS.** Versão par dura mais. Versão ímpar dura menos. Escolhe pelo número, tipo rodízio de carro.

**IDE.** Visual Studio. No Mac, Visual Studio for Mac. Aí aposenta. Vai de VS Code ou Rider. Seu Mac, seu problema.

**Compilar.** Solution grande, build de vários minutos. Dá pra pegar um café. Com açúcar.

**Fechamento.** E tudo com nome parecido. Pra ter certeza de que você instalou o errado.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Nome, Versões, Tela, Web, HttpClient, async, Startup, Null, Banco, bin e obj, IDE, Fechamento.
- **Parte 2 (sobra):** ConfigureAwait, Injeção de dependência, Solution, Configuração, LTS, Compilar.

**Legenda sugerida:** "Se o .NET fosse criado hoje, em reunião de planejamento 🤡 (apaga bin e obj que resolve)"
