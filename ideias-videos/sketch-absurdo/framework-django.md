# "Criando o Django" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Django com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Django. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Slogan.** "O framework para perfeccionistas com prazo." Ou seja: vai ficar perfeito. Na medida do prazo.

**Nome.** Homenagem ao Django Reinhardt, guitarrista de jazz que tocava os solos com dois dedos na mão esquerda. Pra ficar parecido, o dev também programa com dois dedos.

**Projeto.** `startproject mysite`. Cria uma pasta `mysite`. E dentro, outra pasta `mysite`. Boneca russa.
`[tela: mysite/mysite/settings.py]`

**App.** Projeto tem apps. App não é aplicativo. App é uma pasta. Com `__init__.py`.

**settings.py.** Toda a configuração num arquivo Python. Com a `SECRET_KEY` lá dentro. Que vai pro GitHub no primeiro commit.

**DEBUG.** Com `DEBUG = True`, dá erro e aparece uma página linda, com variável, settings, tudo. Em produção também, se esquecer ligado. Transparência total.

**DEBUG desligado.** Desligou? Os arquivos estáticos param de aparecer e o `ALLOWED_HOSTS` vazio dá Bad Request. Aí o dev liga de volta. Resolvido.

**Migração.** `makemigrations`, depois `migrate`. Dois comandos. Dois devs criam a migração `0005` no mesmo dia. Conflito. Mais uma migração pra juntar as duas.

**ORM.** `select_related` e `prefetch_related`. Nomes quase iguais. Um é pra ForeignKey, o outro é pra muitos-pra-muitos. Esqueceu os dois? N+1. Cem queries pra uma tela.

**on_delete.** Obrigatório. Colocou `CASCADE`? Apagou o usuário, foi junto pedido, nota fiscal, comentário. Faxina.

**User.** Tem um model de usuário pronto. Quer customizar depois? A documentação diz que você devia ter feito isso no começo. Agora é cirurgia.

**Template.** Não pode chamar função com argumento no template. Pra não ter lógica no template. Quer? Cria uma template tag. Em outra pasta, chamada `templatetags`, com `__init__.py`. Burocracia com carinho.

**CSRF.** Esqueceu o `{% csrf_token %}` no formulário? 403. Proibido. Nem pra você.

**Class-based views.** `ListView`, `DetailView`, `UpdateView`, cinco mixins. Pra entender a herança, tem um site inteiro só pra isso. Feito pela comunidade. Por desespero.

**API.** Não vem. Instala o Django REST Framework. Outro framework em cima do framework.

**Async.** Tem view async. O ORM async... em partes. No resto, embrulha com `sync_to_async`. Assíncrono de fachada.

**Admin.** Admin automático. O cliente vê o admin funcionando e pergunta: "então o sistema já tá pronto?"

**Fechamento.** Baterias incluídas. Menos a API, o async e o frontend. Essas são vendidas separadamente.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Slogan, Nome, Projeto, settings.py, DEBUG, DEBUG desligado, ORM, User, Template, API, Admin, Fechamento.
- **Parte 2 (sobra):** App, Migração, on_delete, CSRF, Class-based views, Async.

**Legenda sugerida:** "Se o Django fosse criado hoje, em reunião de planejamento 🤡 (mysite/mysite/mysite)"
