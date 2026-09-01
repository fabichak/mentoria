# T.5: DevOps e SRE
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: seu time fala "a gente é DevOps" mas o deploy é sexta-feira com o coração na mão e rollback é rezar? Então vocês têm o crachá, não a cultura.
- DevOps não é cargo nem ferramenta, é o princípio de que quem constrói também opera. O muro entre "dev joga código" e "ops apaga incêndio" é o que gera lentidão e briga.
- Como líder, você mede cultura DevOps com 4 números (DORA metrics, decore, é sua régua):
  - Frequência de deploy (elite: várias por dia; problema: uma por mês)
  - Lead time da mudança (commit até produção)
  - Taxa de falha em mudanças
  - Tempo de recuperação (MTTR)
  - O pulo do gato: times de elite são melhores nos QUATRO ao mesmo tempo. Velocidade e estabilidade não são opostos, quem diz que são está justificando processo ruim.
- SRE em uma frase: tratar operação como problema de engenharia, com metas numéricas em vez de "fica no ar o máximo possível".
- SLI, SLO, SLA: o vocabulário que você precisa dominar pra não ser enrolado:
  - SLI: a métrica em si (ex: % de requests com sucesso em menos de 300ms)
  - SLO: a meta interna (ex: 99,9% no mês)
  - SLA: o contrato com cliente, com multa. SLA sempre mais frouxo que o SLO: você promete menos do que cobra de si.
  - Erro comum que você deve vetar: time sem SLO discutindo confiabilidade no achismo. Sem número, toda discussão de "está estável?" vira opinião.
- Error budget: a ideia mais poderosa do SRE pra um líder:
  - Se o SLO é 99,9%, os 0,1% são o orçamento de erro. Enquanto tem orçamento, o time entrega feature com liberdade. Estourou o orçamento, para tudo e investe em estabilidade.
  - Isso transforma a eterna briga "feature vs estabilidade" numa regra objetiva e combinada ANTES da crise. Você para de ser o juiz de cada discussão.
- 100% de disponibilidade é meta errada: cada "nove" a mais custa ordens de grandeza mais caro, e o usuário não percebe diferença entre 99,99% e 99,999%. Pergunta de líder: "quanto custa esse nove a mais e quem pediu?"
- Cultura blameless: incidente gera post-mortem sem culpado, focado em sistema e processo. No dia em que alguém é punido por causar incidente, as pessoas param de reportar, e você perde a visibilidade. Isso é decisão sua, não do time.
- On-call sustentável: se plantão é sofrimento, é sinal de sistema ruim, a solução é engenharia (reduzir alerta falso, automatizar resposta), não heroísmo. Cobre o número de páginas por semana como métrica.
- Ação prática: esta semana, defina com o time UM SLO pro serviço mais crítico (um SLI, uma meta, uma janela). Simples assim. E puxe as 4 métricas DORA, mesmo que na mão. Agora você tem baseline pra tudo.
- Fechamento: o líder não precisa configurar pipeline. Precisa garantir que existem números combinados (SLO, error budget, DORA), porque sem números, operação vira drama; com números, vira engenharia.

## O que mostrar (complementos visuais)
- As 4 métricas DORA com faixas (elite / alto / médio / baixo) pra time se localizar
- Diagrama SLI → SLO → SLA com exemplo numérico concreto
- Gráfico de error budget queimando ao longo do mês, com a linha de "parou feature, foca estabilidade"
- Curva de custo por "nove" de disponibilidade (99% → 99,999%)
- Template de post-mortem blameless de 1 página
- Exemplo real: time que saiu de deploy mensal pra semanal e o que mudou nos números
