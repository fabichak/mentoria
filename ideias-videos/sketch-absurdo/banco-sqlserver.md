# "Criando o SQL Server" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do SQL Server com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é (ou foi) verdade no SQL Server. Quem trabalha com .NET corporativo reconhece e ri; quem não trabalha ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Código.** Não vou começar do zero. Pego o código de outro banco, o Sybase, e troco a capa. Economia.

**Nome.** SQL Server. Nome genérico. Aí quando alguém pesquisar "SQL server" no Google, cai aqui. Estratégia.

**`GO`.** Pra separar os blocos de comando, `GO`. Mas o `GO` não é SQL. O banco nem conhece. Quem entende é o programa que você usa. Dá até pra trocar a palavra nas configurações. Bota `VAI`.
`[tela: SELECT 1\nGO]`

**`LIMIT`.** Não vou ter `LIMIT`. Vai ser `TOP`. No começo da query. `SELECT TOP 10`. Pra você já saber que vai ser pouco.

**Colchete.** Nome com espaço? Coloca entre colchete. `[Nome Do Cliente]`. Aí o banco inteiro vira colchete.

**Maiúscula.** Por padrão, `'martin'` é igual a `'MARTIN'`. Instalou com outro padrão? Aí não é. Depende do servidor. Surpresa na migração.

**Senha do `sa`.** O administrador vai se chamar `sa`. E em muita instalação a senha vai ficar em branco. Aí em 2003 aparece um vírus, o Slammer, e derruba metade da internet em dez minutos. Coisa rara.

**`NOLOCK`.** Query lenta? Bota `WITH (NOLOCK)`. Fica rápida. Lê dado que ainda nem foi gravado. Às vezes lê a mesma linha duas vezes. Mas rápido.
`[tela: SELECT * FROM Pedidos WITH (NOLOCK)  -- em toda query do sistema]`

**`datetime`.** Precisão de um trezentos avos de segundo. 0,003. Você grava 23:59:59.999 e vira meia-noite do dia seguinte. Ganha um dia de brinde.

**Log de transação.** Modo de recuperação completo por padrão. Se não fizer backup do log, ele cresce. E cresce. Até ocupar o disco inteiro. É um log ambicioso.

**Encolher banco.** Aí o pessoal agenda um `SHRINK` todo dia pra liberar espaço. Que fragmenta tudo. Que deixa lento. Que o pessoal resolve com `NOLOCK`.

**`MERGE`.** Vou fazer um `MERGE`, insere e atualiza de uma vez. Com uma lista de bugs conhecidos do tamanho dele. Usa com carinho.

**Somar texto.** `'1' + 1` dá 2. `'a' + NULL` dá NULL. Um nome, um sobrenome NULL, pronto, o cliente não tem mais nome.

**Versão gratuita.** Express. Grátis. Até 10 GB por banco. Aí passa de 10 GB, lá pelo terceiro mês do sistema. Aí paga.

**Preço.** Enterprise, cobra por núcleo. De dois em dois. Uns 15 mil dólares o par. Tipo cadeira de praça de alimentação, vem em par, mas não tem mesa.

**Linux.** Vai rodar só no Windows. Por uns 28 anos. Aí em 2017 roda no Linux. Não é como se alguém tivesse pedido antes.

**Fechamento.** E a versão vai ter nome de ano. 2016, 2017, 2019, 2022. E nível de compatibilidade com número. 130, 140, 150, 160. Aí ninguém sabe qual é qual. Nem o DBA.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Código, `GO`, `LIMIT`, Colchete, Senha do `sa`, `NOLOCK`, `datetime`, Log de transação, Encolher banco, Somar texto, Versão gratuita, Fechamento.
- **Parte 2 (sobra):** Nome, Maiúscula, `MERGE`, Preço, Linux.

**Legenda sugerida:** "Se o SQL Server fosse criado hoje, em reunião de planejamento 🤡 (WITH (NOLOCK))"
