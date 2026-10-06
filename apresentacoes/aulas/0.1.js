/* Aula 0.1 — Introdução. 1 objeto por slide. Edite só aqui. Esboço: esbocos/0.1-o-metodo-devadvance.md */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'Bem-vindo ao', destaque:'DevAdvance.club',
    sub:'Transforme sua carreira com quem passou 20 anos em tecnologia.',
    rodape:'Martin Fabichak' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Não é falta de capacidade',
    sub:'é falta de método' },

  /* as dores */
  { tipo:'lista', revela:false, badge:'AS DORES',
    titulo:'O que essa mentoria ataca de frente',
    itens:[
      {t:'Não saber quais passos tomar e em qual ordem', d:'o que importa no SEU momento de carreira'},
      {t:'Tomar as decisões técnicas certas'},
      {t:'Ninguém ensina soft-skill e liderança pra dev', d:'faculdade ensina código, empresa cobra liderança'},
      {t:'Ocupar espaço e se vender na empresa', d:'fazer mais, no mesmo tempo, com mais sucesso'},
      {t:'O que um líder faz no dia a dia', d:'programar menos e fazer mais'},
      {t:'Convencer outras áreas', d:'KPIs, OKRs, falácias lógicas'},
      {t:'"Será que sou bom o suficiente?"', d:'a auto-sabotagem que trava sênior competente'} ] },

  /* norte */
  { tipo:'confronto', badge:'O NORTE',
    itens:[
      {titulo:'Ganhar mais dinheiro', icone:'R$'},
      {titulo:'Caminho de carreira claro', icone:'↗'} ] },

  /* quem sou eu */
  { tipo:'perfil', badge:'QUEM SOU EU',
    titulo:'Martin Fabichak',
    img:'assets/martin.png',
    itens:[
      {t:'20 anos em tecnologia'},
      {t:'Flash', d:'adolescente programando sozinho'},
      {t:'Web e Saas', d:'ASP e PHP'},
      {t:'Estúdio de jogos', d:'sócio, Chico Bento com 5M+ jogadores'},
      {t:'Tech lead na Alemanha', d:'~30 pessoas'},
      {t:'Head em Munique', d:'~50'},
      {t:'CTO remoto, em portugal', d:'160 pessoas lideradas'},
      {t:'Agora: empresário', d:'Spa, Mentoria e app para empreendedores'} ] },

  /* líder é papel */
  { tipo:'divisor',
    titulo:'Líder é papel, não cargo',
    sub:'vale pra quem lidera e pra quem não lidera: mentoria, RFC, influência também são impacto através de outros' },

  /* 3 caminhos */
  { tipo:'foto', badge:'3 CAMINHOS', contain:true,
    titulo:'Um método, três trilhas',
    img:'assets/caminhos-renda.svg' },

  /* método em 1 frase */
  { tipo:'agenda', badge:'O MÉTODO',
    titulo:'O que desenvolver e como rodar',
    texto:'',
    itens:[
      {k:'PIRÂMIDE', d:'O QUÊ: técnico, liderança/soft skill, resolução de problemas, valorização'},
      {k:'CICLO',    d:'COMO: PREPARAR → AGIR → MOSTRAR → OTIMIZAR no seu emprego atual'} ] },

  /* pirâmide visual */
  { tipo:'piramide', badge:'MÉTODO ADVANCE',
    titulo:'Método ADVANCE',
    sub:'Nas três camadas de baixo você cria valor. No topo você captura esse valor',
    itens:['Valorização','Resolução de problemas','Liderança e soft-skill','Técnico'] },

  /* mapa da mentoria */
  { tipo:'agenda', badge:'MAPA DA MENTORIA',
    titulo:'Blocos 0 a 4 + trilhas',
    itens:[
      {k:'BLOCO 0', d:'onboarding: o necessário pra nossa conversa inicial'},
      {k:'BLOCO 1', d:'liderança e soft skill: o que dá mais retorno primeiro'},
      {k:'BLOCO 2', d:'resolução de problemas: decidir melhor e convencer pessoas'},
      {k:'BLOCO 3', d:'valorização: mostrar o trabalho e ser pago por ele'},
      {k:'BLOCO 4', d:'técnico: por último, porque é o que você já tem mais'},
      {k:'TRILHAS', d:'extras por fase: júnior, sênior, internacional, auto-estima'} ] },

  /* ação prática */
  { tipo:'lista', revela:false, badge:'AÇÃO',
    titulo:'Marque as 2 dores que mais são suas',
    itens:[
      {t:'☐ Passos e ordem'},
      {t:'☐ Decisões técnicas'},
      {t:'☐ Soft-skill e liderança'},
      {t:'☐ Ocupar espaço e se vender'},
      {t:'☐ O dia a dia do líder'},
      {t:'☐ Convencer outras áreas'},
      {t:'☐ "Sou bom o suficiente?"', d:'guarde: vai pra ficha de onboarding (0.10)'} ] },

  { tipo:'fim',
    titulo:'Você não precisa se sentir pronto.',
    rodape:'Próximo: disclaimer, o que não funciona como você espera' }
];
