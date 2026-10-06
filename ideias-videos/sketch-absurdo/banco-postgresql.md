# "Criando o PostgreSQL" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do PostgreSQL com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** é o banco que todo mundo ama, e mesmo assim tudo aqui é verdade. Quem já foi acordado por autovacuum reconhece e ri.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Nome.** Acho que Postgres. Não, POSTGRES. Não, Postgres95. Não, PostgreSQL. E a pronúncia oficial é "post-gres-quiu-él". Ninguém fala assim. Nem eu.

**UPDATE.** Quando você atualiza uma linha, eu não atualizo. Eu crio uma linha nova e deixo a velha lá. Morta. Ocupando espaço. Pra ter memória afetiva.

**Faxina.** Aí pra limpar as linhas mortas eu crio o VACUUM. Um aspirador. Que roda sozinho, no horário que ele quiser. Geralmente no horário de pico. Igual o turno da limpeza do shopping.
`[tela: autovacuum: VACUUM public.pedidos (to prevent wraparound)]`

**Número de transação.** 32 bits. Uns 2 bilhões. Quando acabar, o banco para de aceitar escrita pra se proteger. Pra você nunca esquecer do VACUUM. Nunca mais.

**Conexão.** Cada conexão é um processo inteiro do sistema operacional. Cem conexões, cem processos. Quer mil? Instala outro programa na frente, o PgBouncer. É tipo o guichê sem funcionário.

**`COUNT(*)`.** Tabela com 100 milhões de linhas, `COUNT(*)` vai lá e conta uma por uma. Na mão. Precisa ver se cada linha está viva, né?

**Maiúscula.** Criou a tabela `Usuarios`? Eu salvo `usuarios`. Quer com maiúscula? Aspas. Pra sempre. Em toda query. Até o fim do projeto.
`[tela: SELECT * FROM "Usuarios" WHERE "NomeCompleto" = 'Ana';]`

**Tabela `user`.** Se você fizer `SELECT * FROM user`, eu não leio sua tabela. Eu te digo quem você é. Autoconhecimento.
`[tela: SELECT * FROM user;  →  postgres]`

**Cast.** Pra converter tipo, dois pontos duas vezes. `'2 days'::interval`. Parece um emoji assustado.

**JSON.** Um tipo JSON é pouco. Vou fazer `json` e `jsonb`. Um é o certo, o outro está lá pra você errar.

**Dica pro planejador.** Não aceito. O planejador sabe o que faz. Se ele escolher seq scan em 50 milhões de linhas, é porque ele acredita em você.

**Autenticação.** Tem um método chamado `trust`. Confia em todo mundo que chegar. Sem senha. O nome já diz: confiança.

**Documentação.** E vou manter uma página oficial chamada "Don't Do This". Lista de coisas do meu banco que você não deve usar. Tipo `money`, `char(n)`, `timestamp` sem fuso. Tudo existe, tudo funciona, só não usa.

**Tipo `money`.** Esse é legal. Depende do locale do servidor. Mudou o servidor de país, mudou seu dinheiro de moeda. Viagem internacional grátis.

**`NULL` em UNIQUE.** Coluna única. Pode ter um NULL, dois NULL, cem NULL. NULL não é igual a NULL. Filosofia.

**Atualizar de versão.** Versão maior não abre o arquivo da anterior. Tem que migrar. `pg_upgrade`, dump, restore. Um fim de semana. Leva café, cheio de açúcar.

**Tudo é extensão.** Fila? Extensão. Vetor pra IA? Extensão. Geolocalização? Extensão. Daqui a pouco tem extensão pra lavar louça.

**Fechamento.** E aí quando alguém perguntar qual banco usar, a resposta vai ser sempre "usa Postgres". Pra tudo. Até pra problema que não é de banco.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Nome, UPDATE, Faxina, Número de transação, Conexão, Maiúscula, Tabela `user`, Cast, Autenticação, Documentação, Tipo `money`, Fechamento.
- **Parte 2 (sobra):** `COUNT(*)`, JSON, Dica pro planejador, `NULL` em UNIQUE, Atualizar de versão, Tudo é extensão.

**Legenda sugerida:** "Se o Postgres fosse criado hoje, em reunião de planejamento 🐘🤡 (e a gente ainda ama)"
