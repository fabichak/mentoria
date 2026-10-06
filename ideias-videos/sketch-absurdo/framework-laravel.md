# "Criando o Laravel" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Laravel com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Laravel. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Linguagem.** PHP. Aquela que morre todo ano. Tá morrendo desde 2010. Firme e forte.

**Facade.** `Cache::get()` parece método estático. Não é. Por trás tem um container resolvendo um objeto. Chama Facade. Que não é o padrão Facade. É só o nome.
`[tela: Cache::get('chave') // não é estático. confia.]`

**Mágica.** `$user->posts` funciona sem a propriedade existir. Método mágico. A IDE não acha nada. Aí instala um pacote que gera arquivo só pra IDE entender.

**Scope.** Cria o método `scopeAtivos`, e chama `->ativos()`. Tira o "scope" do nome. Acessor: `getNomeAttribute`, e chama `->nome`. O nome do método é uma charada.

**Artisan.** `make:model`, `make:controller`, `make:migration`, `make:request`, `make:policy`, `make:observer`. Um comando pra criar cada arquivo. O dev só escolhe o make.

**Debug.** `dd()`. Dump and die. Mostra a variável e mata o processo. Debugger oficial da comunidade.

**Blade.** `{{ }}` escapa o HTML. `{!! !!}` não escapa. A diferença entre seguro e invadido são duas exclamações. Pra ficar emocionante.

**.env.** `APP_DEBUG=true` em produção mostra tudo pra todo mundo. Em 2021 teve falha na página de erro que permitia executar código no servidor com o debug ligado. Detalhe.

**Mass assignment.** Tem que listar os campos no `$fillable`. Deu erro? Coloca `$guarded = []` que para. Agora o usuário vira admin mandando um campo a mais no formulário.

**Ambiente local.** Homestead. Aí Valet. Aí Sail. Aí Herd. Cada ano um jeito recomendado de rodar na sua máquina. Pra variar.

**Ecossistema.** O framework é grátis. Deploy? Forge. Serverless? Vapor. Painel admin? Nova. Assinatura? Spark. Tudo pago. Paga a taxa, daí o problema desaparece.

**Frontend.** Blade. Ou Livewire. Ou Inertia com Vue. Ou Inertia com React. Starter kit: Breeze, Jetstream, e depois os novos. Cada versão um cardápio.

**Upgrade.** Antes, versão nova a cada seis meses. Agora uma por ano. Pra atualizar tem um serviço que faz o upgrade por você. Pago. De terceiro. Tem mercado.

**Rota.** `Route::get('/user/{user}')` e o usuário chega pronto no controller. Mudou o nome do parâmetro? Chega vazio. Sem erro.

**Collection.** `->map->filter->pluck->groupBy->sortBy`. Mais de cem métodos. Tem método que você nunca vai usar, mas tá lá. Tipo caneta na corrente.

**Service provider.** Tem o método `register` e o `boot`. Qual usar? Depende. Do quê? Depende.

**Investimento.** Em 2024 a empresa do Laravel recebe 57 milhões de dólares de investimento. Framework PHP. Aquele que morreu.

**Fechamento.** Framework pra artesãos da web. As ferramentas do artesão são vendidas separadamente.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Linguagem, Facade, Mágica, Artisan, Debug, Blade, Mass assignment, Ecossistema, Upgrade, Investimento, Fechamento.
- **Parte 2 (sobra):** Scope, .env, Ambiente local, Frontend, Rota, Collection, Service provider.

**Legenda sugerida:** "Se o Laravel fosse criado hoje, em reunião de planejamento 🤡 (dd() é debugger sim)"
