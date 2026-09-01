# T.4: Bancos de Dados pro Líder
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: "Postgres não aguenta, precisamos de MongoDB": essa frase já custou milhões em reescritas desnecessárias. Hoje você sai sabendo fazer as 3 perguntas que desmontam (ou validam) esse argumento.
- Você não precisa saber otimizar query. Precisa saber avaliar a escolha do banco, porque é das decisões mais caras de reverter que existem: trocar de banco é cirurgia de coração aberto.
- ACID em linguagem de líder: o banco promete que ou a operação inteira acontece, ou nada acontece, e ninguém vê estado pela metade. É o que você quer em dinheiro, estoque, qualquer coisa que gera processo se der errado.
- BASE em linguagem de líder: o sistema aceita ficar temporariamente inconsistente em troca de disponibilidade e escala. Ok pra feed, contador de likes, recomendação. Perigoso pra saldo bancário.
- A pergunta de líder que resolve 80% das discussões: "o que acontece com o NEGÓCIO se esse dado estiver errado por 5 segundos? E por 5 horas?" A resposta diz se você precisa de ACID ou aceita BASE.
- SQL vs NoSQL: desfazendo o mito:
  - Não é "velho vs moderno". Relacional é o padrão sensato: décadas de maturidade, todo mundo sabe usar, ferramenta pra tudo.
  - NoSQL se justifica com requisito específico: escala de escrita massiva, dados genuinamente sem esquema, grafo, cache. "Flexibilidade de schema" quase sempre significa "empurramos a bagunça pro código".
  - Regra pra cobrar: quem propõe NoSQL apresenta o requisito que o relacional não atende, com número, não com adjetivo.
- Custo escondido que o time não menciona: cada tecnologia de banco nova no stack é mais uma coisa pra operar, monitorar, fazer backup, ter alguém de plantão que entende. Três bancos diferentes = três vezes o custo operacional.
- Governança de dados: a parte que ninguém quer fazer e que é sua responsabilidade cobrar:
  - Quem é dono de cada dado? (sem dono, dado apodrece)
  - Onde mora dado pessoal (LGPD)? Quem tem acesso? Como deletamos quando o usuário pedir?
  - Backup existe? Ótimo. Quando foi o último RESTORE testado? Backup nunca restaurado é loteria.
  - Retenção: guardamos tudo pra sempre? Isso é custo e risco jurídico.
- Perguntas de auditoria rápida pra fazer ao time (15 minutos que valem ouro): qual nosso RPO/RTO (quanto dado podemos perder, quanto tempo podemos ficar fora)? Quem acessa produção? Migração de schema é automatizada ou é o Fulano rodando script na mão?
- Ação prática: faça a auditoria das perguntas acima esta semana. Aposto que pelo menos uma resposta vai ser "hmm, boa pergunta", e aí você achou um risco real antes dele virar incidente.
- Fechamento: o líder que entende dados não é o que escreve a query mais rápida, é o que garante que a empresa não perde dado, não vaza dado e não paga por complexidade que não precisava.

## O que mostrar (complementos visuais)
- Fluxograma de decisão: "o dado pode estar errado por quanto tempo?" → ACID vs BASE → SQL vs NoSQL
- Tabela: tipo de dado (financeiro, catálogo, feed, sessão, analytics) x banco recomendado x justificativa
- Exemplo real: migração pra NoSQL que teve que voltar (ou custo operacional que triplicou)
- Checklist de governança de 1 página: dono do dado, LGPD, backup/restore testado, retenção, acesso a produção
- As 3 perguntas de auditoria (RPO/RTO, acesso, migrações) em slide pra usar em reunião
