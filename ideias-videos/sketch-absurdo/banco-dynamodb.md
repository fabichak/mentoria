# "Criando o DynamoDB" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do DynamoDB com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir. Uma calculadora na mão ajuda.
**Sacada:** quase tudo aqui é verdade no DynamoDB. Quem já recebeu a fatura da AWS reconhece e ri; quem não recebeu ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Modelagem.** Antes de criar a tabela, você tem que saber todas as perguntas que o sistema vai fazer. Todas. Pelos próximos dez anos. Planejamento.

**Tabela.** Uma. Pro sistema inteiro. Usuário, pedido, produto, tudo na mesma tabela. Com chave `USUARIO#123` e `PEDIDO#456`. Chamam de single-table design. Eu chamo de gaveta da bagunça.
`[tela: PK: USER#123  SK: ORDER#2026-09-29#456]`

**Join.** Não tem. Nem `COUNT`. Nem `SUM`. Quer saber quantos clientes tem? Lê a tabela inteira. E paga por isso.

**Scan.** O `Scan` lê a tabela toda. Cobro por leitura. Você queria um registro, lê 40 milhões. Cobro 40 milhões. Justo.

**Filtro.** Filtro existe. Mas ele filtra depois de ler. Então você paga pelo que leu, não pelo que voltou. Leu mil, voltou três, paga mil. Tipo o estacionamento: tolerância de 5 minutos, mas leva 10 pra achar a saída.

**Página.** Cada resposta volta no máximo 1 MB. O resto vem numa próxima chamada, com um `LastEvaluatedKey`. Tipo novela.

**Consistência.** Leitura normal pode vir desatualizada. Quer o dado certo? Leitura forte. Custa o dobro. Pagando, a inconsistência desaparece.

**Transação.** Tem transação. Também custa o dobro. Segurança é importante, né? Mas é cobrada.

**Tamanho do item.** 400 KB. Coube o JSON do usuário? Coube. Até ele ter endereço, pedido, foto em base64 e histórico. Aí não cabe.

**Palavra reservada.** Mais de 500 palavras reservadas. `name`, `status`, `date`, `year`, `data`. Quer usar a coluna `status`? Apelido com cerquilha. `#s`. Em toda query.
`[tela: ExpressionAttributeNames: { "#s": "status" }]`

**Formato.** Pra mandar um número, manda em texto. Dentro de um objeto que diz que é número. `{"N": "42"}`. Pra deixar bem claro.
`[tela: { "idade": { "N": "42" } }]`

**Texto vazio.** Não pode salvar texto vazio. Aí em 2020 pode. Não é como se alguém tivesse pedido antes.

**Partição quente.** Se muita gente acessar a mesma chave, eu limito. Throttling. Black Friday, todo mundo no mesmo produto? Limito. Pra proteger. A mim.

**Índice local.** Índice local só na criação da tabela. Esqueceu? Cria tabela nova e migra. Tipo sapato de bebê de novo.

**Índice global.** Índice global pode criar depois. Até 20. E cada um cobra escrita separada. Uma escrita vira vinte e uma. Multiplicação dos pães, só que de fatura.

**TTL.** Coloca data de expiração no item. Eu apago. Em alguns dias. Quando der. Expira, mas sem pressa.

**Fechamento.** E aí depois de modelar tudo certinho, o PO chega e fala: "Dá pra fazer um relatório filtrando por qualquer campo?" Aí você exporta tudo pro S3, joga no Athena, e paga mais uma vez.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Modelagem, Tabela, Join, Scan, Filtro, Consistência, Transação, Palavra reservada, Formato, Partição quente, Índice global, Fechamento.
- **Parte 2 (sobra):** Página, Tamanho do item, Texto vazio, Índice local, TTL.

**Legenda sugerida:** "Se o DynamoDB fosse criado hoje, em reunião de planejamento 🤡 (a fatura chega depois)"
