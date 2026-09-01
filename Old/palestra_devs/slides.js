// Cada slide = objeto. type: "title" | "content" | "quote" | "questions"
// Exemplos marcados com [EXEMPLO] — apagar depois.

const slides = [
  {
    type: "title",
    title: "Gerência de Expectativa",
    subtitle: "Um framework para entregar resultados"
  },

  {
    type: "questions",
    title: "Você já viveu isso?",
    items: [
      "Já entregou uma tarefa e alguém disse: \"não era isso\", mesmo sendo o que tava no JIRA?",
      "Já teve que falar com várias pessoas antes de fazer uma tarefa que era pra você, e descobriu que o conceito/direção faziam a tarefa ser inútil?",
      "Já deu delegou algo pra outro dev e melhor do que imaginava?",
    ]
  },

  {
    type: "quote",
    text: "People react on how they are measured.",
    caption: "Lei fundamental"
  },

  {
    type: "content",
    title: "Liderança = Engenharia de Expectativa",
    bullets: [
      "Não é sobre execução. É sobre alinhamento.",
      "Time bom + expectativa errada = entrega errada.",
      "Time mediano + expectativa clara = entrega previsível."
    ]
  },

  {
    type: "content",
    title: "Engenharia de Expectativa — 3 pilares",
    bullets: [
      "Explicar ou entender",
      "Como medir",
      "Quando medir"
    ]
  },

  {
    type: "content",
    title: "1. Explicar ou entender",
    subtitle: "Fácil, né?",
    bullets: [
      "❌ \"Quero aumentar a performance do sistema\"",
      "❌ \"Quero aumentar a produtividade do time\"",
      "❌ \"Usar IA pra ser mais rápido\"",
      "Faltou: quanto, até quando, em qual canal, para qual cliente, com qual margem."
    ]
  },

  {
    type: "content",
    title: "Exemplos — vago vs. específico",
    bullets: [
      "Vago: \"Aumentar performance\" → Específico: \"Aumentar performance do i/o do db em 30% sem diminuir tempo de resposta\"",
      "Vago: \"Aumentar produtividade\" → Específico: \"Reduzir tempo de crianção de uma UI em 30% no sistema sem diminuir load-time e número de bugs médios por UI\"",
      "Vago: \"Usar IA para escrever testes no código\" → Específico: \"Escrever IA para escrever testes no código aumentado a cobertura para 80% mas mantendo a identificação de edge-cases pelo dev/qa. \""
    ]
  },

  {
    type: "content",
    title: "2. Como medir",
    bullets: [
      "Como medir o que vai ser feito?",
      "Qual processo vai ser seguido?",
      "Em quais partes do projeto a medição acontece?",
      "Como medimos a efetividade da tarefa — não só o resultado, mas o uso da ferramenta nova?"
    ]
  },

  {
    type: "content",
    title: "Exemplos — métrica de resultado vs. de processo",
    bullets: [
      "Resultado: Performance. Processo: I/O bd, response time do bd, response time REST médio, response time do sistema para cada API",
      "Resultado: satisfação do cliente. Processo: Número de bugs, número de crashes, ANR, número de ligações pro suporte, análise qualitativa (form)",
      "Resultado: adoção de IA. Processo: nº de consultas/dia por usuário / % de respostas aceitas sem edição / casos onde IA foi ignorada e por quê. / custo da IA / Tokens por usuário / tarefa."
    ]
  },

  {
    type: "content",
    title: "3. Quando medir",
    bullets: [
      "Só no final? Tarde demais.",
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
      "Lead define a régua. O time pensa dentro dela.",
      "Crie um framework: a equipe pensa nisso por você."
    ]
  },

  {
    type: "content",
    title: "Framework — por nível",
    bullets: [
      "Leads com equipes: o que espera de cada tarefa, o que cada um pode mensurar.",
      "Devs: como mensurar, o que, porque. Criação de dashboards, etc"
    ]
  },

  {
    type: "content",
    title: "Como criar esse framework — workshop",
    bullets: [
      "Escolha uma tarefa/mudança substancial",
      "Lead e PO na sala",
      "Time fazem perguntas até acreditarem ter capturado toda a expectativa.",
      "Lead e PO saem da sala.",
      "Devs escrevem como vão medir — KPIs, pontos de mensuração, processo, requerimentos",
      "Revisão final com todos juntos."
    ]
  },

  {
    type: "content",
    title: "Saída do workshop",
    bullets: [
      "Coleção de perguntas úteis.",
      "Mapa de onde e como medir (para casos similares)",
      "Linguagem comum de expectativa entre lead e time."
    ]
  },
  {
    type: "quote",
    text: "Aplicando isso você mesmo",
    caption: ""
  },
  {
    type: "content",
    title: "Começando simples",
    bullets: [
      "Lead: Faça uma pergunta para um dev do seu time: Para esta tarefa, o que você vai medir como sucesso da tarefa, como e quando",
	  "Dev: Faça uma pergunta para o seu lead: Posso medir essa tarefa desta maneira?"
    ]
  },
  {
    type: "content",
    title: "Com chefes",
    bullets: [
      "Use o framework para: promoções, aumento de salário, próximos projetos, benefícios.",
      "KPIs internos (processo, qualidade, adoção) e externos (faturamento, market share).",
	  "\"O que eu preciso fazer para um promoção? Quais são os pontos mais importantes da minha performance? Como você mede o sucesso do meu time? \""
    ]
  },
  {
    type: "content",
    title: "É muito trabalho",
    bullets: [
      "Pegue UMA tarefa. Pergunte: \"Vamos fazer isso. Como e quando vamos medir seu resultado?\"",
      "Repita semana após semana.",
      "Em 3 meses, vira hábito. Em 6, vira cultura."
    ]
  },
  {
    type: "quote",
    text: "People react on how they are measured.",
    caption: "Lembre-se"
  },

  {
    type: "title",
    title: "Obrigado.",
    subtitle: "Perguntas?"
  }
];
