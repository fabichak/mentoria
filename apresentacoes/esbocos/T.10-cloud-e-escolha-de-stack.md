# T.10: Cloud e Escolha de Stack
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: "vamos usar esse framework novo, é o futuro". Dois anos depois o framework morreu, o único dev que sabia mexer saiu, e você herda a reescrita. Escolha de stack é decisão de líder porque quem paga a conta de longo prazo é você.
- Verdade desconfortável: dev escolhe tecnologia pelo que quer aprender (currículo-driven development); o negócio precisa que você escolha pelo custo total de propriedade. Seu papel é ser o adulto na sala sem matar o entusiasmo do time.
- Os critérios de avaliação de qualquer tecnologia (framework, linguagem, serviço de cloud), sua rubrica de líder:
  - Maturidade: quantos anos, quem usa em produção em escala, cadência de releases, breaking changes com que frequência?
  - Ecossistema e comunidade: acha resposta no Stack Overflow/docs? Tem biblioteca pra tudo ou vai escrever do zero?
  - Contratação: quantos devs no SEU mercado sabem isso? Tecnologia exótica = salário premium + reposição difícil. Esse critério mata mais opções do que qualquer benchmark.
  - Curva de aprendizado do time atual: migrar stack é pagar meses de produtividade reduzida.
  - Saída: se der errado, quão caro é sair? (a pergunta que quase ninguém faz)
- Regra do "boring technology": você tem fichas limitadas de inovação. Gaste em UMA aposta por vez, no que diferencia seu produto, e deixe o resto de tecnologia chata, madura e comprovada. Postgres chato em produção vale mais que banco revolucionário em call de incidente.
- Cloud: os critérios além da tabela de preços:
  - AWS vs Azure vs GCP: pra maioria dos casos, os três resolvem. O desempate real é: onde seu time já tem experiência, o que sua empresa já usa (contrato, créditos), requisitos específicos (região, compliance).
  - Multicloud "por segurança" quase sempre é custo dobrado por um risco teórico. Desconfie de quem propõe sem requisito regulatório concreto.
- Custo de cloud: onde líderes são mais enrolados:
  - A conta não é o preço da instância, é o tráfego de saída (egress, a pegadinha clássica), storage crescendo pra sempre, ambientes de dev ligados no fim de semana, recursos órfãos.
  - Cobre do time: tagueamento de recursos por projeto/time (sem tag, sem dono, sem controle), alerta de orçamento configurado, revisão mensal de 30 min da fatura. FinOps começa com esse ritual simples.
  - Pergunta que revela maturidade: "quanto custa por mês ESSA feature rodando?" Se ninguém sabe nem aproximadamente, o custo está sem dono.
- Lock-in, o trade-off adulto: serviço gerenciado proprietário (DynamoDB, Lambda, BigQuery) te dá velocidade agora e prende depois; ferramenta portável te dá liberdade e cobra operação. Nenhum dos dois é errado, errado é escolher sem saber que escolheu. Regra prática: aceite lock-in em commodity (fila, e-mail), pense duas vezes no coração do sistema (dados).
- Processo de decisão pra instaurar: proposta de tecnologia nova entra por ADR/RFC com a rubrica acima preenchida + um spike com prazo (2 semanas provando o ponto crítico) antes de qualquer compromisso. Entusiasmo vira evidência ou morre barato.
- Como dizer não sem desmotivar: "não pra produção, sim pro spike/projeto interno". Isso canaliza a vontade de aprender pra onde o risco é baixo. Time precisa de espaço pra brincar; produção não é o parquinho.
- Ação prática: liste as tecnologias do seu stack atual e marque: quem no time domina cada uma? Alguma com bus factor 1? Alguma morta/morrendo (sem release há anos)? Esse mapa de risco é mais urgente que qualquer tecnologia nova.
- Fechamento: stack não se escolhe pra impressionar em conferência, se escolhe pra empresa ainda estar entregando rápido daqui a 5 anos, com gente que você consegue contratar. Chato, previsível e lucrativo ganha de moderno, empolgante e reescrito.

## O que mostrar (complementos visuais)
- A rubrica de avaliação em tabela (maturidade, ecossistema, contratação, curva, saída) com um exemplo preenchido
- Gráfico "fichas de inovação": uma aposta nova, resto boring
- Anatomia de uma fatura de cloud real: destacando egress, recursos órfãos, ambiente dev 24/7
- Matriz de lock-in: commodity vs core x gerenciado vs portável
- Fluxo do processo: proposta → ADR com rubrica → spike com prazo → decisão
- Exemplo real: custo de uma migração de framework que "era o futuro"
