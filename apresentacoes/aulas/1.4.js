/* Aula 1.4 — Alta performance e gestão de tempo. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 1 · Liderança e soft-skill',
    titulo:'Alta performance e', destaque:'gestão de tempo',
    sub:'Plano sem tempo é lista de desejos.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Você vai falhar no plano',
    sub:'não por falta de vontade, pela agenda que você tem hoje' },

  /* tese */
  { tipo:'confronto', badge:'A TESE',
    itens:[
      {titulo:'Ocupado', icone:'×'},
      {titulo:'Produtivo', icone:'✓'} ] },

  /* passo 1 — auditoria */
  { tipo:'lista', revela:false, badge:'PASSO 1',
    titulo:'Auditoria de tempo',
    itens:[
      {t:'1 semana, blocos de 30 min', d:'código · reunião · interrupção · incêndio · desenvolvimento próprio'},
      {t:'Não julgar durante a coleta', d:'primeiro medir, depois otimizar, igual performance de sistema'},
      {t:'O choque típico', d:'60–70% reativo, quase 0% nas lacunas do seu plano'} ] },

  { tipo:'foto', badge:'PASSO 1', contain:true,
    titulo:'Onde o tempo foi × onde precisava',
    img:'assets/auditoria-tempo.svg' },

  /* passo 2 — priorização */
  { tipo:'foto', badge:'PASSO 2', contain:true,
    titulo:'Importante × urgente',
    img:'assets/matriz-tempo.svg' },

  { tipo:'lista', revela:false, badge:'PASSO 2',
    titulo:'Blocos de carreira',
    itens:[
      {t:'2 blocos de 90 min por semana', d:'na agenda, com nome: "bloco carreira: KPI da lacuna 1"'},
      {t:'Protegidos como reunião com o CEO', d:'não se move por Slack'},
      {t:'"Não" com alternativa', d:'"não consigo hoje; consigo quinta OU o fulano resolve agora"'} ] },

  /* passo 3 — foco */
  { tipo:'lista', revela:false, badge:'PASSO 3',
    titulo:'Foco de verdade',
    itens:[
      {t:'Cada interrupção custa ~20 min', d:'10 espiadas no Slack = manhã destruída'},
      {t:'Notificações em lote', d:'3 janelas por dia, status de foco visível'},
      {t:'Celular fora da mesa', d:'ambiente vence força de vontade'} ] },

  /* passo 4 — disciplina */
  { tipo:'lista', revela:false, badge:'PASSO 4',
    titulo:'Disciplina > motivação',
    itens:[
      {t:'Motivação é clima, disciplina é infraestrutura', d:'sistema bom funciona nos dias ruins'},
      {t:'Hábito mínimo viável', d:'encolher até ser impossível falhar: 10 min de journal na sexta'},
      {t:'Gatilho: "depois de X, faço Y"', d:'depois da daily de sexta, abro o journal'} ] },

  /* passo 5 — energia */
  { tipo:'lista', revela:false, badge:'PASSO 5',
    titulo:'Energia é recurso, não detalhe',
    itens:[
      {t:'Revisão mensal do Problem Journal', d:'progresso escrito mata o "não estou saindo do lugar"'},
      {t:'Cognitivo pesado no pico, operacional no vale', d:'gerencie energia, não só horas'},
      {t:'Tanque vazio = incidente', d:'irritabilidade, procrastinação, sono ruim → reduzir carga. burnout não é medalha'} ] },

  /* amarração: entregáveis até aqui */
  { tipo:'agenda', badge:'ATÉ AQUI',
    titulo:'Checklist dos entregáveis',
    itens:[
      {k:'0.3',  d:'as 3 frases (hoje · 12 meses · lacuna)'},
      {k:'0.4',  d:'mapa de competências + top-3 KPIs'},
      {k:'0.6',  d:'trilha escolhida'},
      {k:'0.8',  d:'2 armadilhas com exemplo'},
      {k:'0.9',  d:'template de metas'},
      {k:'0.10', d:'ficha de onboarding'},
      {k:'1.1',  d:'lista "só eu faço"'},
      {k:'1.2',  d:'exercício de mentalidade'},
      {k:'1.3',  d:'Problem Journal criado'},
      {k:'1.4',  d:'auditoria + blocos de carreira'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Antes de fechar este vídeo',
    texto:'Pausa agora e faz os 3:',
    itens:[
      {k:'SEGUNDA', d:'começar a auditoria de tempo: 1 semana'},
      {k:'AGORA',   d:'criar os 2 blocos de carreira na agenda'},
      {k:'1 HÁBITO',d:'mínimo viável, com gatilho "depois de X, faço Y"'} ] },

  { tipo:'fim',
    titulo:'Você tem sistema, régua e tempo.',
    rodape:'Próximo: controle emocional, energia e inteligência emocional' }
];
