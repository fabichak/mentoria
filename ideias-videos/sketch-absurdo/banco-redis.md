# "Criando o Redis" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Redis com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é (ou foi) verdade no Redis. Quem já rodou `KEYS *` em produção reconhece e ri; quem não rodou ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Onde guardar.** Na memória RAM. Toda. Desligou o servidor? Aí depende. Depende de quê? De sorte.

**Salvar no disco.** Vou fazer dois jeitos. Um tira foto de tempos em tempos. O outro anota tudo num diário e grava uma vez por segundo. Perder um segundo de dados não é nada. É tipo um piscar de olho. De dinheiro.

**Thread.** Uma. Um comando por vez. Igual banco com um caixa normal e quatro prioritários.

**`KEYS *`.** Esse comando lista todas as chaves. Todas. Enquanto isso, ninguém mais usa o banco. Pra você refletir sobre o que fez.
`[tela: > KEYS *   ⏳⏳⏳ (produção inteira travada)]`

**Senha.** Acho que sem senha. Escutando em todo lugar. Aí o pessoal da internet entra, usa `CONFIG SET` e grava uma chave SSH no seu servidor. Aí eu faço um "modo protegido". Depois.

**`FLUSHALL`.** Apaga tudo. Tudo mesmo. Sem confirmação. Um comando, oito letras. Ninguém digita isso sem querer, né?

**Transação.** Vai ter `MULTI` e `EXEC`. Mas não tem rollback. Deu erro no meio? O resto executa. Transação otimista. Muito otimista.

**Banco de dados.** Vou ter 16 bancos. Sem nome. Banco 0, banco 1, banco 2... E no modo cluster, só pode usar o banco 0. Os outros 15 são de enfeite.

**Nome da chave.** Não tem tabela. Tem chave. Aí o pessoal inventa: `usuario:123:perfil:foto`. Com dois pontos. Cada time com uma convenção diferente.

**Memória cheia.** Encheu? Padrão: dou erro. Não apago nada. Cache que não esquece nada. Tipo um cache que guarda rancor.

**Cluster.** Operação com várias chaves só se estiverem no mesmo nó. Pra garantir, bota chave entre chaves. `{usuario:123}`. Chave dentro da chave.

**Pub/Sub.** Mandou uma mensagem e ninguém estava ouvindo? Sumiu. Não guardo. Tipo recado dado no corredor.

**Lua.** Pode rodar script em Lua dentro do banco. Enquanto roda, bloqueia tudo. Mas é rapidinho. Geralmente.

**Nome.** REmote DIctionary Server. Redis. Porque "RemDicServ" não pegou.

**Uso.** Vai ser cache. Aí vira fila. Aí vira sessão. Aí vira banco principal. Aí vira a coisa mais importante da empresa, rodando na RAM, sem senha.

**Licença.** Open source por 15 anos. Aí em 2024 eu fecho a licença. Aí a comunidade faz um fork, o Valkey. Aí em 2025 eu abro de novo. Tipo namoro de adolescente.

**Fechamento.** E aí, quando alguém perguntar "o que é mais difícil na computação", a resposta vai ser invalidação de cache. E nomear coisas. E aqui vai ter os dois.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Onde guardar, Salvar no disco, Thread, `KEYS *`, Senha, `FLUSHALL`, Transação, Banco de dados, Memória cheia, Uso, Licença, Fechamento.
- **Parte 2 (sobra):** Nome da chave, Cluster, Pub/Sub, Lua, Nome.

**Legenda sugerida:** "Se o Redis fosse criado hoje, em reunião de planejamento 🤡 (quem nunca rodou KEYS * em produção?)"
