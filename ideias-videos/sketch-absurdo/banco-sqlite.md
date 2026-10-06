# "Criando o SQLite" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do SQLite com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** o banco mais instalado do planeta, e tudo aqui é verdade. Quem já usou reconhece e ri; quem não sabe que usa (está no celular dele) ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Servidor.** Acho que não precisa. O banco é um arquivo. Um arquivo só. Quer backup? Copia e cola. Manda por WhatsApp.

**Tipo de coluna.** Coluna `INTEGER`. Aí você coloca "banana". Eu aceito. O tipo é mais uma sugestão. Tipo placa de "proibido estacionar".
`[tela: INSERT INTO t(idade) VALUES ('banana');  -- ok 👍]`

**Tabela estrita.** Se você quiser que o tipo valha, escreve `STRICT` no final. Opcional. Lançado em 2021. Antes era na fé.

**Chave estrangeira.** Existe. Mas vem desligada. Pra ligar, `PRAGMA foreign_keys = ON`. Em cada conexão. Toda vez. Se esquecer uma vez, tanto faz.

**Chave primária.** Chave primária pode ser NULL. Foi um bug. Mas aí já tinha gente usando, então agora é tradição.

**Escrita.** Uma escrita por vez. No banco inteiro. Os outros esperam na fila. Umas 4, 5 horas, no máximo.

**Data.** Tipo data não vou fazer. Salva como texto, número ou número com vírgula. Cada tabela escolhe o seu. Surpresa na hora de comparar.

**Booleano.** Zero ou um. Adulto sabe o que é verdadeiro.

**Aspas duplas.** Se você escrever um texto com aspas duplas, eu procuro uma coluna com esse nome. Se não achar, trato como texto. Meio que adivinho o que você quis dizer.

**`ALTER TABLE`.** Remover coluna? Não. Cria uma tabela nova, copia tudo, apaga a velha e renomeia. Tá no manual, passo a passo. Aí em 2021 eu libero o `DROP COLUMN`. Não é como se alguém tivesse pedido antes.

**Licença.** Não vou ter licença. Domínio público. No lugar da licença, uma bênção: "Que você faça o bem e não o mal." Tá no código-fonte.
`[tela: /* May you do good and not evil. */]`

**Código de conduta.** Acho que a Regra de São Bento. Monge do século VI. Adaptado pra open source.

**Contribuição.** Código aberto, mas contribuição fechada. Pode olhar. Não pode mexer. Tipo aquário.

**Git.** Não vou usar Git. Vou fazer meu próprio controle de versão. Fossil. Pra ninguém se sentir em casa.

**Teste.** Pra cada linha de código, umas centenas de linhas de teste. É mais teste que banco. O banco é o brinde do teste.

**Onde roda.** Celular, navegador, televisão, carro. E avião. Aquele que o bagageiro cabe 150 malas pra 200 passageiros.

**Equipe.** Três pessoas. Suporte garantido até 2050. Os três já combinaram.

**Fechamento.** E com tudo isso, vai ser o banco mais usado do mundo. Tem uns trilhões rodando agora. Um no seu bolso. Sem senha.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Servidor, Tipo de coluna, Chave estrangeira, Chave primária, Escrita, Data, `ALTER TABLE`, Licença, Código de conduta, Git, Onde roda, Fechamento.
- **Parte 2 (sobra):** Tabela estrita, Booleano, Aspas duplas, Contribuição, Teste, Equipe.

**Legenda sugerida:** "Se o SQLite fosse criado hoje, em reunião de planejamento 🤡 (ele tá no seu celular agora)"
