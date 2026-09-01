# T.1: Arquitetura de Solução
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: "Precisamos migrar pra microsserviços". Quantas vezes você já ouviu isso sem nenhuma justificativa de negócio? Como líder, seu trabalho não é desenhar a arquitetura perfeita, é impedir decisões caras baseadas em moda.
- O erro clássico do líder novo: ou delega 100% a arquitetura pro time (e vira refém), ou tenta desenhar tudo sozinho (e vira gargalo). O caminho é saber avaliar e cobrar justificativa.
- Arquitetura é sobre trade-offs, não sobre certo/errado. Toda escolha compra uma vantagem pagando com uma desvantagem. Se alguém te apresenta uma arquitetura só com prós, desconfie.
- Monolito vs microsserviços: a pergunta certa não é "qual é melhor", é "qual problema estamos resolvendo?"
  - Microsserviços resolvem problema de ORGANIZAÇÃO (times independentes, deploys independentes), não de tecnologia.
  - Regra prática pra cobrar do time: se você não tem times separados donos de domínios separados, microsserviços só te dão a complexidade distribuída sem o benefício.
  - Monolito modular bem feito leva a maioria das empresas mais longe do que admitem.
- Event-driven: desacopla no tempo e na dependência, mas cobra em rastreabilidade e debugging. Pergunta de líder: "como vamos debugar isso em produção às 3 da manhã?"
- Cloud-native: não é "rodar na AWS". É desenhar assumindo falha, elasticidade e infraestrutura descartável. Se o time fala cloud-native mas o sistema não sobrevive a uma instância morrendo, é só marketing.
- As perguntas que o líder faz em toda proposta de arquitetura (seu checklist de não-ser-enrolado):
  - Qual problema de negócio isso resolve? Qual o custo de NÃO fazer?
  - Quais alternativas foram consideradas e por que foram descartadas?
  - Qual o custo operacional (gente, on-call, infra) depois de pronto?
  - Como voltamos atrás se der errado?
- SAD (Solution Architecture Document): o artefato que transforma opinião em decisão auditável. Contexto, requisitos, alternativas, decisão, consequências. Sem documento, daqui a 1 ano ninguém lembra por que escolheram Kafka.
- Como instaurar: você não precisa escrever o SAD, precisa exigir que exista antes de qualquer projeto grande, e revisar fazendo as perguntas acima.
- Ação prática: pegue o sistema mais crítico do seu time hoje e peça pra alguém te explicar a arquitetura em 15 minutos. Se ninguém consegue, ou se as justificativas são "sempre foi assim", você achou seu primeiro projeto de liderança técnica.
- Fechamento: você não precisa ser o melhor arquiteto da sala. Precisa ser a pessoa que garante que as decisões de arquitetura têm dono, justificativa e plano B.

## O que mostrar (complementos visuais)
- Diagrama simples: monolito modular vs microsserviços, com times desenhados por cima (lei de Conway na prática)
- Tabela de trade-offs: monolito / microsserviços / event-driven, colunas: quando usar, custo escondido, sinal de alerta
- Template de SAD de 1 página (contexto, alternativas, decisão, consequências)
- O checklist das 4 perguntas do líder, pra imprimir e usar em reunião
- Exemplo real (anonimizado): proposta de microsserviços que era na verdade problema de organização de time
