# "Criando o Elasticsearch" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Elasticsearch com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é (ou foi) verdade no Elasticsearch. Quem já viu cluster vermelho às 3 da manhã reconhece e ri; quem não viu ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Mensagem de boas-vindas.** Você acessa o endereço do banco e ele responde "You Know, for Search". Você sabe, pra busca. Simpático. Descontraído.
`[tela: { "tagline": "You Know, for Search" }]`

**É banco?** Não é banco. Mas todo mundo vai usar como banco. Aí eu escrevo na documentação que não é pra usar como banco. Pronto, avisei.

**Segurança.** Acho que sem senha por padrão. Porta aberta. Aí vaza dado de uns milhões de pessoas por semana. Aí na versão 8, em 2022, liga segurança por padrão. Não é como se alguém tivesse me avisado antes.

**Tipo do campo.** Não precisa definir. Eu adivinho pelo primeiro documento. Chegou `"idade": "30"`? Texto. Pra sempre. Todos os próximos.

**Mudar o tipo.** Não pode. Cria outro índice e reindexa tudo. Um bilhão de documentos. Leva o fim de semana. Leva café, cheio de açúcar.

**Salvou?** Salvou. Mas não aparece na busca. Espera um segundo. É quase tempo real. Quase.

**Paginação.** Até 10 mil resultados. Página 1001? Não existe. Ninguém chega lá. Ninguém nunca chegou na página 2 do Google.

**Query.** Pra buscar um nome, JSON. Com `bool`, `must`, `should`, `filter`, `must_not`. Umas cinco chaves aninhadas pra dizer "onde nome é Ana".
`[tela: { "query": { "bool": { "must": [ { "match": { "nome": "Ana" } } ] } } }]`

**Cor do cluster.** Verde, amarelo, vermelho. Rodou com um nó só? Amarelo. Pra sempre. Porque a réplica não tem onde ficar. Mas funciona. Só fica amarelo te olhando.

**Split brain.** Com dois nós, se cair a rede, cada um vira chefe. Dois chefes. Cada um aceitando escrita. Tipo os dois seguranças do shopping, só que brigados.

**Memória.** Metade da RAM pro Java, metade pro sistema. Mas não passa de uns 32 GB no Java, senão fica mais lento com mais memória. Faz sentido.

**Shard.** Escolhe o número de shards quando criar o índice. Errou? Tem API pra dividir, mas é por múltiplo, com índice bloqueado. Tipo escolher o tamanho do sapato do filho no dia que ele nasce.

**Campos.** Limite de mil campos por índice. Aí o log manda um JSON com chave dinâmica e explode o mapeamento. Mapping explosion. Nome técnico.

**Deletar.** Deletou o documento? Eu marco como deletado. Apagar mesmo, depois. Quando der vontade.

**Licença.** Open source. Aí em 2021 eu fecho, pra Amazon não usar. A Amazon faz um fork, o OpenSearch. Aí em 2024 eu abro de novo. Mas a Amazon já está lá.

**Fechamento.** E no fim, você só queria uma busca com autocompletar no site. Agora você tem um cluster de seis nós, um Kibana, um Logstash, um Beats e um DBA de Elastic. Pra um campo de busca.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Mensagem de boas-vindas, É banco?, Segurança, Tipo do campo, Mudar o tipo, Salvou?, Paginação, Query, Cor do cluster, Split brain, Licença, Fechamento.
- **Parte 2 (sobra):** Memória, Shard, Campos, Deletar.

**Legenda sugerida:** "Se o Elasticsearch fosse criado hoje, em reunião de planejamento 🤡 (You Know, for Search)"
