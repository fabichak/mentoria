# "Criando o MySQL" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do MySQL com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é (ou foi) verdade no MySQL. Quem já pegou banco legado reconhece e ri; quem não pegou ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Charset.** Vou fazer um chamado `utf8`. Mas ele não é UTF-8. Aceita até 3 bytes. Emoji não entra. O UTF-8 de verdade vai se chamar `utf8mb4`, que é um nome que todo mundo lembra.
`[tela: CREATE TABLE ... CHARSET=utf8;  -- 🙂 → '?']`

**Senha do root.** Acho que vazia. Quem vai instalar banco é gente séria, né?

**Engine padrão.** Acho que uma sem transação e sem chave estrangeira. Rápida. Se cair a luz no meio do UPDATE, metade atualizou. Metade é melhor que nada.

**Chave estrangeira.** Na engine sem chave estrangeira, você pode escrever `FOREIGN KEY` mesmo assim. Eu aceito, sorrio e ignoro. Pra não te deixar triste.

**CHECK.** Mesma coisa. Aceito o `CHECK (idade > 0)`, não valido nada. Por quase vinte anos. É uma caneta presa na corrente, só que sem tinta.

**Texto grande demais.** Não coube na coluna? Eu corto e sigo. Dou um warning que ninguém lê. O cliente se chamava Maximiliano, agora é Maximil.

**Data.** Acho que `0000-00-00` é uma data válida. Dia zero do mês zero do ano zero. Aniversário do banco.

**Booleano.** Não vou fazer booleano. `BOOLEAN` vira `TINYINT(1)`. Aí dá pra guardar verdadeiro, falso e 127.

**`INT(11)`.** Esse 11 não é o tamanho. Não muda nada. É decorativo. Tipo plantinha no escritório.

**Comparação.** `'abc' = 0` é verdadeiro. A string vira número, ninguém viu, ninguém sabe.
`[tela: SELECT * FROM users WHERE senha = 0;  -- 🔓]`

**Maiúscula.** `'Martin' = 'MARTIN'` é verdadeiro também. Pra ser educado com quem digita com Caps Lock.

**Nome de tabela.** No Linux diferencia maiúscula, no Windows não. Aí o sistema funciona na máquina do dev e quebra no servidor. Mantém o pessoal atento.

**GROUP BY.** Agrupou por cliente e pediu o nome do produto? Eu escolho um produto qualquer e te devolvo. Com confiança.

**Subquery.** `IN` com `LIMIT` dentro? Aí não. "Essa versão do MySQL ainda não suporta." Ainda. Tem uns quinze anos esse ainda.

**Cache de query.** Vou fazer um cache de query global, com um lock só. Aí, na versão 8, eu tiro. Não é como se alguém tivesse me avisado antes, né?

**Proteção contra `DELETE` sem `WHERE`.** Vou fazer, sim. A flag vai se chamar `--i-am-a-dummy`. "Eu sou um tonto." Pra você ter certeza.
`[tela: mysql --i-am-a-dummy]`

**Escapar string.** Uma função `escape_string`. E como ela não escapava direito, outra: `real_escape_string`. A de verdade. Essa sim.

**Dono.** Aí vendo pra Sun, a Sun vende pra Oracle, e o criador faz um fork com o nome da outra filha. MariaDB. Tudo em família.

**Fechamento.** Aí eu ligo o modo estrito por padrão. Em 2015. O sistema que você herdou é de 2012.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Charset, Senha do root, Engine padrão, Chave estrangeira, Texto grande demais, Data, Booleano, Comparação, GROUP BY, Proteção contra `DELETE`, Escapar string, Fechamento.
- **Parte 2 (sobra):** CHECK, `INT(11)`, Maiúscula, Nome de tabela, Subquery, Cache de query, Dono.

**Legenda sugerida:** "Se o MySQL fosse criado hoje, em reunião de planejamento 🤡 (spoiler: o utf8 não é utf8)"
