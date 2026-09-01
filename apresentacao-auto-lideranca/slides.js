/* Conteúdo do deck. 1 objeto por slide. Edite só aqui.
   Slides com `revela:true` mostram os itens um por um a cada seta pra direita.
   Estilo gráfico: Code Leadership (preto + azul neon) — mesmo harness do LRPG. */
window.SLIDES = [

  /* 1 — CAPA */
  { tipo:'capa',
    selo:'Live · Auto-liderança',
    titulo:'Lidere a sua', destaque:'carreira',
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

  /* 3 — CAMARÃO NO MAR */
  { tipo:'foto', badge:'INTRO',
    titulo:'Camarão no mar',
    img:'assets/camarao.jpg' },

  /* 4 — LARRY MELLON */
  { tipo:'perfil', badge:'MENTOR',
    titulo:'Larry Mellon',
    img:'assets/larry.jpeg',
    itens:[
      {t:'Maxis'},
      {t:'Goodgame Studios'},
      {t:'Chimera Entertainment'},
      {t:'DARPA'} ] },

  /* 5 — PROBLEMA DE NETWORKING (Monopoly GO!) */
  { tipo:'perfil', badge:'EXEMPLO',
    titulo:'Problema de networking no Monopoly GO',
    img:'assets/monopolygo.png',
    itens:[
      {t:'Problema'},
      {t:'KPIs e dashboards', d:'pra entender onde estávamos'},
      {t:'Plano inicial', d:'Load test, teste com usuários, poucos territórios'},
      {t:'Execução com pessoal externo'}] },

  /* 6 — METAS */
  { tipo:'lista', revela:true, badge:'01',
    titulo:'Metas',
    itens:[
      {t:'Qual a sua meta?'},
      {t:'Você tem uma projeção financeira?'},
      {t:'Quanto tempo dura o seu dinheiro?'} ] },

  /* 7 — ESTADO ATUAL */
  { tipo:'lista', revela:true, badge:'02',
    titulo:'Estado atual',
    itens:[
      {t:'Como você mensura o sucesso do seu trabalho atual?', d:'no meu caso: grana ou conhecimento'},
      {t:'Qual seu objetivo atual?', d:''},
      {t:'Onde estou vai me dar o que eu quero?', d:'reconhecimento? conhecimento? tempo pra estudar? dinheiro?'} ] },

  /* 8 — DEFINIR  */
  { tipo:'lista', revela:true, badge:'03',
    titulo:'Definir um objetivo profissional',
    itens:[
      {t:'No geral dinheiro é o motivador principal'},
      {t:'Aumento? Promoção?'},
      {t:'Outro área que paga mais?'},
      {t:'Morar fora do Brasil?'} ] },
/*  — RECAP (sem título, lista conectada, revela) */
  { tipo:'cronologia', revela:true, badge:'RECAP',
    itens:[
      {t:'Definiu ou escreveu a nossa meta'},
      {t:'Estado atual'},
      {t:'Como mensurar sucesso'},
      {t:'Definiu um objetivo ou mais profissionais'} ] },
  /* 9 — TÉCNICA */
  { tipo:'lista', revela:true, badge:'04',
    titulo:'Técnica',
    itens:[
      {t:'Espectro técnico', d:'entender o espectro do que você quer fazer'},
      {t:'Contexto da sua área', d:'contexto importa pra contratações — ex: entender tudo de um banco, certificações'},
      {t:'Vagas no LinkedIn', d:'entender o que você precisa em outras empresas'},
      {t:'Fale com pessoas', d:'que trabalham onde você quer trabalhar — adicione no LinkedIn'},
      {t:'IA', d:'Hermes/OpenClaw, loop engineering, plugins…'},
      {t:'Inglês'} ] },

  /* 10 — SOFT-SKILLS */
  { tipo:'lista', revela:true, badge:'05',
    titulo:'Soft-skills',
    itens:[
      {t:'Falar em público'},
      {t:'Explicar coisas técnicas', d:'para pessoas não técnicas'},
      {t:'Construir relacionamentos', d:'dentro da empresa'},
      {t:'LinkedIn e Instagram'},
      {t:'Eventos e grupos de networking'} ] },

  { tipo:'cronologia', revela:true, badge:'RECAP',
    itens:[
      {t:'Definiu ou escreveu a nossa meta'},
      {t:'Estado atual'},
      {t:'Como mensurar sucesso'},
      {t:'Definiu um objetivo ou mais profissionais'}, 
      {t:'Sabe o que se desenvolver'} 
	  
	  ] },

  /* 12 — MENTALIDADE (divisor, palavra grande no meio) */
  { tipo:'divisor',
    titulo:'Mentalidade' },

  /* 13 — MENTALIDADE DE EMPRESA */
  { tipo:'lista', revela:true, badge:'06',
    titulo:'Mentalidade de empresa',
    itens:[
      {t:'Tome a frente e seja agressivo', d:'não espere ser reconhecido — roube o reconhecimento'},
      {t:'Ocupe espaço, não espere', d:'pessoas respeitam quem tem um plano, uma solução, e pede espaço pra resolver'},
      {t:'Todo problema é uma oportunidade'},
      {t:'Extenda o status quo'},
      {t:'Faça entrevistas', d:'mesmo que você não queira sair da empresa'} ] },

  /* 14 — LOOP (diagrama circular) */
  { tipo:'loop', badge:'07',
    titulo:'Loop',
    itens:['Meta','Dinheiro guardado','Conhecimento do que mudar','Ações','Promoção'] },
	
	{ tipo:'loop', badge:'08',
    titulo:'Martin',
    itens:['Ir pra Europa','50k','Trabalhar o mínimo possível','110 entrevistas','Fui pra Europa'] },	
	
	{ tipo:'loop', badge:'09',
    titulo:'Martin',
    itens:['Pagar meu apartamento','0','Virar head','Liderei 3 projetos','consegui'] },
	

  /* 15 — LIDERANÇA */
  { tipo:'lista', revela:true, badge:'10',
    titulo:'Liderança',
    itens:[
      {t:'O que fazer no dia a dia'},
      {t:'O que organizar'},
      {t:'Como organizar'},
      {t:'Como mensurar sucesso da equipe'} ] },

  /* 16 — PAPEL DO MENTOR */
  { tipo:'lista', badge:'MENTORIA',
    titulo:'Papel do mentor',
    itens:[
      {t:'Organizar cada um desses pontos e itens'},
      {t:'Te ajudar a executar'},
      {t:'Achar seus pontos fortes e fracos'} 
	  ] },

  /* 17 — DUNNING-KRUGER (só a imagem) */
  { tipo:'foto', contain:true,
    img:'assets/dunning-kruger.png' },

  /* 18 — DÚVIDAS */
  { tipo:'checkpoint',
    titulo:'Dúvidas' },

  /* 18 — LINKS (placeholders — edite aqui) */
  { tipo:'agenda', badge:'LINKS', qr:true,
    titulo:'PRÓXIMOS PASSOS',
    itens:[
      {k:'EXERCÍCIO',  d:'METAS - ESTADO ATUAL - OBJETIVO PROFISSIONAL - PASSOS PRÁTICOS'},
      {k:'TERÇA',  d:'WORKSHOP ROADMAP TECH LEAD'},
      {k:'MENTORIA', d:'DM OU WHATSAPP'} ] }
];
