# "Criando o Angular" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Angular com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Angular. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** Primeira versão: AngularJS. Segunda versão: reescreve tudo do zero, incompatível com a primeira. E mantém o nome. Quase o mesmo. Pro Google ficar confuso também.

**Versão 3.** Pula. Vai da 2 direto pra 4. O roteador já tava na 3, aí fica feio.

**Componente.** Um botão, quatro arquivos. `.ts`, `.html`, `.css` e `.spec.ts`. O teste a gente gera e ninguém abre.
`[tela: ng generate component botao → CREATE x4]`

**Decorator.** `@Component`, `@Injectable`, `@NgModule`, `@Input`, `@Output`, `@ViewChild`. Mais arroba que Instagram.

**Módulo.** Tudo tem que estar num `NgModule`. `declarations`, `imports`, `exports`, `providers`. Esqueceu de declarar? "não é um elemento conhecido". Anos depois vem o standalone e módulo vira opcional. Obrigado por ter declarado tudo.

**Template.** Colchete entra, parêntese sai. Colchete com parêntese dentro vai e volta. Chama "banana na caixa". Nome oficial.
`[tela: [valor]  (clique)  [(ngModel)] 🍌📦]`

**If.** `*ngIf`, com asterisco. Depois vem `@if`, com arroba. Os dois funcionam. Escolhe um e defende no code review.

**HTTP.** Toda requisição retorna um Observable. E não faz nada até você dar `subscribe`. Chamou e não assinou? A requisição não sai. Tipo newsletter.

**RxJS.** `switchMap`, `mergeMap`, `concatMap`, `exhaustMap`. Quatro jeitos de "faz uma coisa depois da outra". Escolheu errado, pedido duplicado.

**Unsubscribe.** Assinou, tem que desassinar. Esqueceu? Vazamento de memória. Acho que o dev lembra.

**Zone.js.** Pra saber quando atualizar a tela, a gente modifica o `setTimeout`, a `Promise` e os eventos do navegador. Todos. Por baixo dos panos. Anos depois dá pra tirar. Ufa.

**Signals.** Já tem RxJS. Acho que vamos colocar outro sistema de reatividade. Signals. Os dois juntos. Com função pra converter um no outro.

**Erro.** `ExpressionChangedAfterItHasBeenCheckedError`. Nome curto, fácil de lembrar. Só aparece em desenvolvimento. Em produção passa batido.

**CSS.** Estilo fica preso no componente. Quer mudar o filho? `::ng-deep`. Deprecado faz anos. Todo mundo usa.

**Formulário.** Dois jeitos: template-driven e reactive. O reactive passou anos sem tipo. `any` em tudo. Fica leve.

**Hello world.** Pra fazer um hello world precisa saber TypeScript, RxJS, injeção de dependência, decorator e módulo. Aí o estagiário já sai treinado pra enterprise.

**Build.** `ng serve`. Dá tempo de pegar um café. Com açúcar.

**Fechamento.** E uma versão major a cada seis meses. Pro pessoal nunca ficar parado.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Nome, Versão 3, Componente, Decorator, Template, HTTP, RxJS, Zone.js, Signals, Erro, Hello world, Fechamento.
- **Parte 2 (sobra):** Módulo, If, Unsubscribe, CSS, Formulário, Build.

**Legenda sugerida:** "Se o Angular fosse criado hoje, em reunião de planejamento 🤡 (banana na caixa é nome oficial)"
