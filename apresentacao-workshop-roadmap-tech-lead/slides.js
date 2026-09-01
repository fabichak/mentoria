/* Conteúdo do deck. 1 objeto por slide. Edite só aqui.
   Slides com `revela:true` mostram os itens um por um a cada seta pra direita.
   Estilo gráfico: Code Leadership (preto + azul neon) — mesmo harness do LRPG. */
window.SLIDES = [

  /* ============ BLOCO 1 — ABERTURA ============ */

  /* 1 — CAPA */
  { tipo:'capa',
    selo:'Workshop · Roadmap Tech Lead',
    titulo:'Seus próximos', destaque:'90 dias',
    rodape:'Martin Fabichak · Code Leadership' },

  /* 2 — MEU BACKGROUND (logos das empresas) */
  { tipo:'logos', badge:'INTRO',
    titulo:'Meu background',
    logos:[
      {img:'assets/insolita.png'},
      {img:'assets/goodgame.png'},
      {img:'assets/chimera.png'},
      {img:'assets/magicmedia.png'},
      {cl:true} ] },

  /* 3 — LARRY MELLON */
  { tipo:'perfil', badge:'MENTOR',
    titulo:'Larry Mellon',
    img:'assets/larry.jpeg',
    itens:[
      {t:'Maxis'},
      {t:'Goodgame Studios'},
      {t:'Chimera Entertainment'},
      {t:'DARPA'} ] },

  /* 4 — PROVA: MONOPOLY GO */
  { tipo:'perfil', badge:'EXEMPLO',
    titulo:'Monopoly GO',
    img:'assets/monopolygo.png',
    itens:[
      {t:'Problema: Escala/networking'},
      {t:'Mapear:', d:'KPIs e dashboards'},
      {t:'Priorizar:', d:'Plano base com comunicação executiva'},
      {t:'Agir e Medir', d:'Execução e load tests'},
      {t:'Mostrar', d:'Reuniões semanais'} ] },

  /* 5 — A PROMESSA DA NOITE */
  { tipo:'lista', revela:true, badge:'HOJE',
    titulo:'A promessa da noite',
    itens:[
      {t:'Você sai com um roadmap dos próximos 90 dias'},
      {t:'Entregáveis:', d:'Checklist 90 dias + Mapa de stakeholders'},
      ] },

  /* 6 — LOOP DE DESENVOLVIMENTO */
  { tipo:'loop', badge:'MÉTODO',
    titulo:'Loop de desenvolvimento',
    itens:['Mapear','Priorizar','Agir e Medir','Mostrar'] },
    /* Fala: esse loop repete o resto da sua carreira de líder */

  /* ============ BLOCO 2 — MAPEAR ============ */

  /* 7 — DIVISOR */
  { tipo:'divisor',
    titulo:'Disclaimer', sub:'' },

  /* 8 — DIVISOR */
  { tipo:'divisor',
    titulo:'Entrando em nova empresa', sub:'dia 0' },

  /* 9 — O ERRO CLÁSSICO */
  { tipo:'lista', revela:true, badge:'01',
    titulo:'O erro clássico do tech lead novo',
    itens:[
      {t:'Chegar aplicando toda a experiência prévia sem filtro', d:''},
      {t:'Time se fecha, chefe pode ter reação extrema'},
      {t:'Você vira "quem quebrou o que funcionava"'},
      {t:'Antídoto:', d:'expectativa clara'} ] },

  /* 10 — DIVISOR */
  { tipo:'divisor',
    titulo:'Mapear', sub:'Entenda o status-quo' },

  /* 11 — DIVISOR */
  { tipo:'divisor',
    titulo:'Mapear e Priorizar', sub:'' },

  /* 12 — CONVERSAS COM A EQUIPE */
  { tipo:'lista', revela:true, badge:'02',
    titulo:'As conversas com a equipe',
    itens:[
      {t:'1:1 com cada pessoa do time', d:'1 hora cada'},
      {t:'Se conectar', d:'entender de onde cada pessoa vem e seus objetivos, criar expectativa positiva e clara para o primeiro mês'},
      {t:'O que perguntar', d:'o que funciona? o que te irrita? o que você mudaria amanhã?'},
      {t:'O que NÃO fazer', d:'prometer mudanças, criticar o líder anterior'},
      {t:'Sinais pra observar', d:'quem fala, quem se cala, quem resolve de verdade'} ] },

  /* 13 — CONVERSAS COM OS COLEGAS */
  { tipo:'lista', revela:true, badge:'03',
    titulo:'As conversas com os colegas',
    itens:[
      {t:'1:1 com PM, PO, Designer…', d:'1 hora cada'},
      {t:'Se conectar', d:'entender de onde cada pessoa vem, criar expectativa positiva e clara'},
      {t:'O que perguntar', d:'no que a equipe é boa? no que ela é ruim?'},
      {t:'O que NÃO fazer', d:'prometer mudanças, criticar o líder anterior'},
      {t:'Sinais pra observar', d:'quem fala, quem se cala, quem resolve de verdade'} ] },

  /* 14 — O QUE ANOTAR */
  { tipo:'lista', revela:true, badge:'04',
    titulo:'O que anotar',
    itens:[
      {t:'Mapa de forças', d:'quem é bom em quê'},
      {t:'Riscos', d:'pessoa-chave única? alguém já com um pé fora?'},
      {t:'Conflitos e panelinhas'},
      {t:'Porque o tech lead antigo saiu'},
      {t:'Expectativas incongruentes da direção'},
      {t:'Entregável', d:'Roadmap de conversas da 1ª semana (template)'} ] },

  /* 15 — 3 CAMADAS (gráfico: clientes fora, processos no meio, código no centro) */
  { tipo:'camadas', badge:'05',
    titulo:'O que analisar antes de mudar qualquer coisa',
    itens:['Clientes','Processos','Código'] },

  /* 16 — VISÃO DO CLIENTE */
  { tipo:'lista', revela:true, badge:'06',
    titulo:'Visão do cliente',
    itens:[
      {t:'Quem são os clientes?'},
      {t:'Como o sucesso é mensurado do seu time?'},
      {t:'Como as próximas prioridades são definidas? Quem define?'} ] },

  /* 17 — PROCESSOS DE PROJETO */
  { tipo:'lista', revela:true, badge:'07',
    titulo:'Processos de projeto',
    itens:[
      {t:'Metodologia?', d:'Scrum? Waterfall?'},
      {t:'Qualidade dos cards?', d:''},
      {t:'Quebra das tarefas', d:''},
      {t:'Quem dá opinião e quando?', d:''},
      {t:'O que funciona, não funciona pro time'} ] },

  /* 18 — PROCESSOS TÉCNICOS */
  { tipo:'lista', revela:true, badge:'08',
    titulo:'Processos Técnicos',
    itens:[
      {t:'Deploy', d:'da branch à produção, onde dói?'},
      {t:'Dívida técnica', d:'o que o time reclama vs. o que quebra de verdade'},
      {t:'Histórico de incidentes', d:'o que já pegou fogo?'},
      {t:'Observabilidade'} ] },

  /* 19 — CÓDIGO */
  { tipo:'lista', revela:true, badge:'09',
    titulo:'Código',
    itens:[
      {t:'Arquitetura', d:'desenhe o que existe — caixas e setas bastam'},
      {t:'Processos de código', d:'code review, débito técnico, git flow'},
      {t:'As branches quebram sempre? O que é difícil de executar aqui?'},
      {t:'Qualidade dos testes automáticos'},
      ] },

  /* ============ BLOCO 3 — MAPEAR PRA CIMA ============ */

  /* 20 — ALINHAR EXPECTATIVAS COM O CHEFE */
  { tipo:'lista', revela:true, badge:'10',
    titulo:'Alinhar expectativas com seu chefe',
    itens:[
      {t:'Pergunta de ouro', d:'"como você vai medir se eu fui bem daqui a 6 meses?"'},
      {t:'O que é mais importante pra empresa e pro seu time? Faturamento? Qualidade? Retenção?'},
      {t:'Traduza a resposta em 2–3 métricas escritas'},
      {t:'Sem virar refém', d:'expectativa não escrita = dívida emocional'} ] },

  /* 21 — MAPA DE STAKEHOLDERS */
  { tipo:'lista', revela:true, badge:'11',
    titulo:'Mapa de stakeholders',
    itens:[
      {t:'Quem depende indiretamente do seu time'},
      {t:'Quem pode te promover, quem pode te travar'},
      {t:'Pessoas com contato direto com a diretoria'},
      {t:'Produto, QA, infra, outros leads', d:'o que cada um espera do seu time'},
      {t:'Entregável', d:'Mapa de Stakeholders & Expectativas (template)'} ] },

  /* 22 — RECAP */
  { tipo:'cronologia', revela:true, badge:'RECAP',
    itens:[
      {t:'Mapeou o time (conversas da 1ª semana)'},
      {t:'Mapeou o sistema (análise técnica + observabilidade mínima)'},
      {t:'Mapeou pra cima (chefe + stakeholders)'},
      {t:'Agora sim: Priorizar'} ] },

  /* ============ BLOCO 4 — PRIORIZAR E AGIR ============ */

  /* 23 — DIVISOR */
  { tipo:'divisor',
    titulo:'Priorizar', sub:'dia 0' },

  /* 24 — COMO PRIORIZAR */
  { tipo:'lista', revela:true, badge:'12',
    titulo:'Como priorizar',
    itens:[
      {t:'Quais as dores do time, o que o chefe quer, o que os usuários querem', d:''},
      // 3 alteranativas: se algo no meio: bingo.
      // existe a chance do chefe não saber o que é proridade, o que atrasa o time, etc
      // existe a chance do PO/etc não saber dos problemas do time
      // muita chance de ter reclamaçõers mais abstratas
      ] },

  /* 25 — ALGUMAS IDÉIAS */
  { tipo:'lista', revela:true, badge:'13',
    titulo:'Algumas idéias',
    itens:[
      {t:'Critério: quick win', d:'visível, baixo risco, dor real do time'},
      {t:'Exemplos', d:'automatizar deploy manual, matar reunião inútil, alerta no erro que mais repete'},
      {t:'Mapear coisas grandes em pequenas', d:'teste automatizado, etc...'},
      {t:'O que evitar', d:'reescrever sistema, trocar stack, reorganizar time'},
      {t:'Mudanças de processo', d:'com o PM/PO'},
      {t:'1 mudança por vez, medida antes/depois'} ] },

  /* 26 — DIVISOR */
  { tipo:'divisor',
    titulo:'Agir' },

  /* 27 — OBSERVABILIDADE TÉCNICA */
  { tipo:'lista', revela:true, badge:'14',
    titulo:'Observabilidade técnica',
    itens:[
      {t:'Você não gerencia o que não enxerga'},
      {t:'Mínimo viável', d:'erros (alertas), latência/uptime do crítico, pipeline de deploy visível'},
      {t:'1 dashboard simples > 10 ferramentas'},
      {t:'Barato/grátis', d:'o que já existe na empresa antes de comprar ferramenta'} ] },

  /* 28 — OBSERVABILIDADE PROCESSO */
  { tipo:'lista', revela:true, badge:'15',
    titulo:'Observabilidade processo',
    itens:[
      {t:'Tem interrupções? De onde? Quanto tempo ocupam?'},
      {t:'Todos os tickets no Jira? Retrabalho e bugs também?'},
      {t:'Histórico de deploys, code reviews, etc...'},
      ] },

  /* 29 — COMO COMUNICAR A MUDANÇA */
  { tipo:'lista', revela:true, badge:'16',
    titulo:'Como comunicar a mudança',
    itens:[
      {t:'Antes', d:'Se for necessário, chefe. Depois: PO/PM, sempre'},
      {t:'Durante', d:'dar crédito a quem executou'},
      {t:'Depois', d:'mostrar o número (antes/depois) — é aqui que a observabilidade paga'},
      {t:'Resultado invisível = resultado que não existe'} ] },

  /* 30 — CHEFE */
  { tipo:'lista', revela:true, badge:'17',
    titulo:'Chefe',
    itens:[
      {t:'Check-in novamente com o plano', d:'pelo menos 1 vez por mês'},
      {t:'Trazer tudo, mas focar nas coisas boas'},
      {t:'Update semanal no Slack/Teams'} ] },

  /* ============ BLOCO 5 — OTIMIZAR ============ */

  /* 31 — DIVISOR */
  { tipo:'divisor',
    titulo:'Otimizar' },

  /* 32 — NETWORKING INTERNO */
  { tipo:'lista', revela:true, badge:'18',
    titulo:'Networking interno',
    itens:[
      {t:'Aliados', d:'1 café/mês com pares e outros leads. Coloque no calendário pra trocar uma idéia'},
      {t:'Ajude outros times de graça', d:'volta em dobro'},
      {t:'Seu chefe deve ouvir seu nome de outras bocas'},
      {t:'Tome a frente', d:'não espere ser reconhecido — roube o reconhecimento'} ] },

  /* 33 — SOBRE O SEU TIME */
  { tipo:'lista', revela:true, badge:'19',
    titulo:'Sobre o seu time',
    itens:[
      {t:'Expectativa clara'},
      {t:'Reconhecimento'},
      {t:'Plano de carreira'} ] },

  /* 34 — VISIBILIDADE DO TIME */
  { tipo:'lista', revela:true, badge:'20',
    titulo:'Visibilidade do time',
    itens:[
      {t:'Demo curta por sprint/mês', d:'pra quem importa'},
      {t:'Update escrito quinzenal', d:'3 bullets, sem jargão'},
      {t:'Celebre o time em público, corrija em privado'},
      {t:'Time visível = líder promovível'} ] },

  /* 35 — EM TEMPOS DE CRISE */
  { tipo:'lista', revela:true, badge:'21',
    titulo:'Em tempos de crise',
    itens:[
      {t:'Sem caça as bruxas: arrume o problema com colaboração'},
      {t:'Comunicação constante e visível por slack/teams'},
      {t:'Postmortem'},
      {t:'Criação de tickets no jira'},
      {t:'Relatório privado par ao chefe (ou se precisar, reunião)'}
      ] },

  /* 36 — RECAP */
  { tipo:'cronologia', revela:true, badge:'RECAP',
    itens:[
      {t:'Mapeou com time, colegas, processo, código'},
      {t:'Priorizou um plano inicial'},
      {t:'Agiu e mediu'},
      {t:'Comunicou com visibilidade'} ] },

  /* 37 — SEU ROADMAP DE 90 DIAS */
  { tipo:'cronologia', revela:true, badge:'90 DIAS',
    itens:[
      {t:'Semana 1–2: conversas + mapeamento técnico'},
      {t:'Semana 3–4: expectativas com chefe + priorizar + tasks iniciais'},
      {t:'Mês 2: primeiro quick win + comunicação + stakeholders'},
      {t:'Mês 3: otimizar e planejar visibilidade'} ] },

  /* ============ BLOCO 6 — DICAS ============ */

  /* 38 — DIVISOR */
  { tipo:'divisor',
    titulo:'Dicas', sub:'20 anos de tech, 10 anos de Europa, 9 anos executivo' },

  /* 39 — ALGUMAS DICAS */
  { tipo:'lista', revela:true, badge:'22',
    titulo:'Algumas dicas',
    itens:[
      {t:'Falar em público pagam mais que framework novo'},
      {t:'Faça entrevistas mesmo sem querer sair'},
      {t:'Aprenda IA de verdade'},
      {t:'Pessoas reagem conforme elas são mensuradas'},
      {t:'O mais visto ganha do melhor'},
      ] },

  /* 40 — DICAS SOBRE VOCÊ */
  { tipo:'lista', revela:true, badge:'23',
    titulo:'Dicas sobre você',
    itens:[
      {t:'Não busque reconhecimento'},
      {t:'Todo problema é uma oportunidade'},
      {t:'Não respeite o status quo'},
      {t:'Invista em você'},
      ] },

  /* 41 — DUNNING-KRUGER (só a imagem) */
  { tipo:'foto', contain:true,
    img:'assets/dunning-kruger.png' },
    /* Fala: humildade no vale, coragem no platô */

  /* ============ BLOCO 7 — PRÓXIMOS PASSOS ============ */

  /* 42 — DÚVIDAS E PRÓXIMOS PASSOS */
  { tipo:'agenda', badge:'LINKS', qr:true,
    titulo:'DÚVIDAS - PRÓXIMOS PASSOS',
    itens:[
      {k:'ENTREGÁVEIS', d:'CHECKLIST 90 DIAS + MAPA DE STAKEHOLDERS + E-BOOK'},
      {k:'MENTORIA',    d:'DM OU WHATSAPP'} ] },

  /* 43 — PONTE PRA MENTORIA */
  { tipo:'lista', badge:'MENTORIA',
    titulo:'Mentoria',
    itens:[
      {t:'Diagnóstico pessoal', d:'monto o plano com você'},
      {t:'Método completo', d:'Te ajudo em todas etapas, diariamente'},
      {t:'Formatos', d:'Acompanhamento de 6–12 meses, WhatsApp, encontros em grupo quinzenais'},
      {t:'Processo', d:'Diagnóstico inicial e depois iniciamos o processo — para quem quer chegar no próximo nível'},
      {t:'Mais informações no ', d:'formulário'} ] }
];
