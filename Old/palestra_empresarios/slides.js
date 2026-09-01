// Cada slide = objeto. type: "title" | "content" | "quote" | "questions"
// Exemplos marcados com [EXEMPLO] — apagar depois.

const slides = [
  {
    type: "title",
    title: "Gerência de Expectativa",
    subtitle: "Um framework para entregar resultados previsíveis"
  },

  {
    type: "questions",
    title: "Você já viveu isso?",
    items: [
      "Já delegou e te apresentaram algo completamente diferente?",
      "Já deu direção solta e o resultado voltou melhor do que imaginava?",
      "Estava fazendo um projeto, mas no meio do processo descobriu algo ainda melhor?",
      "Já entregou pro cliente e ele disse: \"não era isso que eu esperava\"?"
    ]
  },

  {
    type: "quote",
    text: "Pessoas reagem conforme são mensuradas",
    caption: "Lei fundamental"
  },

  {
    type: "content",
    title: "Liderança = Engenharia de Expectativa",
    bullets: [
      "Time bom + expectativa errada = entrega errada.",
      "Time mediano + expectativa clara = entrega previsível."
    ]
  },

  {
    type: "content",
    title: "Engenharia de Expectativa — 3 pilares",
    bullets: [
      "Explicar",
      "Como medir",
      "Quando medir"
    ]
  },

  {
    type: "content",
    title: "Explicar o que se quer",
    subtitle: "Deveria ser fácil, né?",
    bullets: [
      "❌ \"Quero aumentar o faturamento\"",
      "❌ \"Quero aumentar a produtividade\"",
      "❌ \"Usar IA pra ganhar vantagem\""
    ]
  },

  {
    type: "content",
    title: "Vago vs. específico",
    bullets: [
      "Vago: \"Aumentar faturamento\" → Específico: \"Subir ticket médio do plano Pro de R$ 400 para R$ 550 até Q3, sem perder churn atual\"",
      "Vago: \"Aumentar produtividade\" → Específico: \"Reduzir tempo de onboarding de um novo cliente de 3 dias para 2 dias sem causar disrupção em outros processos e qualidade de atendimento\"",
      "Vago: \"Usar IA pra ganhar vantagem\" → Específico: \"Usar IA em atendimento com humanos, diminuindo tempo médio para atendimento para 2 min, escalar para humanos em 30% dos atendimentos e manter o feedback de atendimento acima de 4.2 estrelas \""
    ]
  },

  {
    type: "content",
    title: "2. Como medir",
    bullets: [
      "Como medir o que vai ser feito?",
      "Qual processo vai ser seguido?",
      "Em quais partes do projeto a medição acontece?",
    ]
  },

  {
    type: "content",
    title: "Exemplos — métrica de resultado vs. de processo",
    bullets: [
      "Resultado: faturamento mensal. Processo: nº de propostas enviadas / ciclo médio de venda / taxa de conversão por etapa.",
      "Resultado: satisfação do cliente. Processo: Número de novos atendimento / análise qualitativa / % de usuários que voltam depois de um problema",
      "Resultado: adoção de IA. Processo: nº de consultas/dia por usuário / % de respostas aceitas sem edição / casos onde IA foi ignorada e por quê. / custo da IA"
    ]
  },

  {
    type: "content",
    title: "3. Quando medir",
    bullets: [
      "Só no final? Geralmente é tarde demais.",
      "Quantas vezes você descobriu no meio do processo algo ainda melhor?",
      "Pontos de medição = pontos de correção de rota.",
      "Sem checkpoint, projeto vira fé."
    ]
  },

  {
    type: "content",
    title: "Cabe a você fazer isso?",
    bullets: [
      "Sim. E não.",
      "Você define a régua. O time pensa dentro dela.",
      "Crie um framework: a equipe pensa nisso por você."
    ]
  },

  {
    type: "content",
    title: "Framework — por nível",
    bullets: [
      "Diretores / Heads / Gerência: como mensurar o departamento semana a semana, mês a mês (ex: financeiro).",
      "Diretores / Gestores com Leads: o que esperar dos times, como mensurar.",
      "Leads com equipes: o que espera de cada pessoa, o que cada um pode mensurar.",
    ]
  },

  {
    type: "content",
    title: "Workshop",
    bullets: [
      "Escolha uma tarefa/mudança que envolve quase todos os departamentos.",
      "Chefe escreve o que quer.",
      "Diretores fazem perguntas até acreditarem ter capturado toda a expectativa.",
      "Chefe sai da sala.",
      "Diretores escrevem como vão medir — KPIs e pontos de mensuração.",
      "Repete o ciclo com leads.",
      "Revisão final com todos juntos."
    ]
  },

  {
    type: "content",
    title: "Saída do workshop",
    bullets: [
      "Coleção de perguntas por nível (chefe → diretor → lead → time).",
      "Mapa de onde e como cada time mede.",
      "Linguagem comum de expectativa entre níveis."
    ]
  },
  {
    type: "content",
    title: "Comece simples",
    bullets: [
      "Peça uma pergunta pra cada nível da empresa. O que medir, como medir",
	  "Use esta pergunta sempre que falarem de algo novo ou importante."
    ]
  },
  {
    type: "content",
    title: "Expectativa como cultura",
    bullets: [
      "Use o framework para: promoções, aumento de salário, próximos projetos, benefícios.",
      "KPIs internos (processo, qualidade, adoção) e externos (faturamento, market share).",
	  "Usar KPIs como métrica de sucesso de novas iniciativas."
    ]
  },

  {
    type: "content",
    title: "Expectativa com cliente",
    bullets: [
      "Ensinar o cliente a esperar a coisa certa:",
      "• Falar dos processos internos e externos (governo, sindicato, dependências)",
      "• Mostrar trade-off antes (escopo × prazo × qualidade)",
      "• Definir \"pronto\" por escrito antes de começar",
      "• Status frequente, mesmo quando ele não pediu",
	  "• Criar métricas de produção ou resultado",
	  "• Priorizar baseado nas métricas",
      "• Mostrar o que NÃO vai entregar — tão importante quanto o que vai"
    ]
  },
  {
    type: "content",
    title: "É muito trabalho",
    bullets: [
      "Pegue UMA tarefa ou tópico. Pergunte: \"Vamos começar um novo projeto. Como e quando vamos medir seu resultado?\"",
      "Repita semana após semana.",
      "Em 3 meses, vira hábito. Em 6, vira cultura."
    ]
  },
  {
    type: "quote",
    text: "Pessoas reagem conforme são mensuradas",
    caption: ""
  },

  {
    type: "title",
    title: "Obrigado.",
    subtitle: "Perguntas?"
  }
];
