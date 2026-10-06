# "Criando o MongoDB" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do MongoDB com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é (ou foi) verdade no MongoDB. Quem viveu 2012 reconhece e ri; quem não viveu ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Schema.** Não vai ter schema. Liberdade. Cada documento do jeito que quiser. Igual a pasta de downloads.

**Erro de digitação.** Escreveu `emial` em vez de `email`? Parabéns, campo novo. Agora metade dos usuários tem email e a outra metade tem emial.
`[tela: { nome: "Ana", emial: "ana@..." }]`

**Autenticação.** Acho que desligada por padrão. E escutando em todas as interfaces da internet. Aí em 2017 umas dezenas de milhares de bancos são sequestrados, e eu mudo o padrão. Não é como se alguém tivesse avisado antes.

**Escrita.** Mandou gravar? Eu digo que gravei. Não confirmo. Não espero. Se não gravou, azar. É rápido, isso que importa. É web scale.

**Join.** Não vai ter join. Relacionamento é coisa de banco velho. Aí em 2015 eu faço o `$lookup`. Que é um join. Mas com cifrão, então é diferente.

**Transação.** Também não precisa. Aí em 2018 eu lanço transação multi-documento. E anuncio como novidade.

**Operador.** Pra dizer "maior que", `{ idade: { $gt: 18 } }`. Chave, cifrão, chave. Uma query simples vira uma escada de chaves.
`[tela: db.pedidos.aggregate([{ $match: {...} }, { $group: { _id: "$cliente", total: { $sum: "$valor" } } }])]`

**Nome do campo.** O nome do campo é gravado em todo documento. Um bilhão de documentos, um bilhão de vezes "data_de_nascimento". Aí o pessoal começa a chamar o campo de `d`. Economia.

**Tamanho do documento.** 16 MB no máximo. Coloca tudo dentro do documento, aninha, é o jeito Mongo. Mas não passa de 16. Aí tira. Aí tem que fazer join. Que não tem. Tem, mas com cifrão.

**Aninhar.** Pedido dentro do cliente, item dentro do pedido, produto dentro do item. Mudou o preço do produto? Atualiza em 400 mil lugares. Pra treinar.

**Tipo.** O `_id` é um ObjectId. Não é string. Aí você compara com string e não acha nada. E jura que o documento existe.

**JavaScript na query.** Dá pra rodar JavaScript dentro da busca com `$where`. Deixa o pessoal criativo.

**Dropar coleção.** `db.clientes.drop()`. Sem confirmação. Confio no dev. Às vezes confio demais.

**Licença.** Open source. Aí em 2018 troco a licença pra um provedor de nuvem não ganhar dinheiro com meu banco. Eu que ganho. Tem a versão em nuvem, com taxa. Pagando a taxa, o risco desaparece.

**Marketing.** Vou fazer tudo pra startup. Todo projeto novo começa com Mongo. E dois anos depois faz uma palestra "Por que migramos pro Postgres".

**Fechamento.** Web scale. É web scale. Você tem que usar. É web scale.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Schema, Erro de digitação, Autenticação, Escrita, Join, Transação, Operador, Nome do campo, Aninhar, Licença, Marketing, Fechamento.
- **Parte 2 (sobra):** Tamanho do documento, Tipo, JavaScript na query, Dropar coleção.

**Legenda sugerida:** "Se o MongoDB fosse criado hoje, em reunião de planejamento 🤡 (mas é web scale)"
