/* Aula 0.7 — O platô de renda. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'O platô', destaque:'de renda',
    sub:'Quais decisões definem se você trava num salário?',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* problema */
  { tipo:'divisor',
    titulo:'Existe um platô que pega a maioria dos sêniors',
    sub:'' },

  { tipo:'confronto', badge:'O PROBLEMA',
    itens:[
      {titulo:'Excelente tecnicamente e parado', icone:'▬'},
      {titulo:'Mediano tecnicamente e subindo', icone:'↗'} ] },

  /* contexto do mercado */
  { tipo:'cronologia', revela:false, badge:'O MERCADO · BRASIL',
    titulo:'Quem olha só "quanto ganha um sênior hoje" perde o filme',
    itens:[
      {t:'2020–22: boom'},
      {t:'2023–24: correção forte'},
      {t:'Agora: IA na mesa, o que é valioso mudou de novo'},
      {t:'O que importa é a mecânica por trás da subida'} ] },

  /* framework: escopo de impacto */
  { tipo:'divisor',
    titulo:'A progressão não é tempo de casa',
    sub:'é escopo de impacto' },
	


  { tipo:'agenda', badge:'A MECÂNICA',
    titulo:'Escopo de impacto por nível',
    itens:[
      {k:'JÚNIOR', d:'resolve tarefa com ajuda'},
      {k:'PLENO',  d:'resolve projeto sozinho'},
      {k:'SÊNIOR', d:'decide o que deve ser feito, não só como fazer'} ] },
	  
   { tipo:'agenda', badge:'A MECÂNICA',
    titulo:'Escopo de impacto por nível',
    itens:[
      {k:'JÚNIOR', d:'Faz perguntas abertas'},
      {k:'PLENO',  d:'Faz perguntas e sugere soluções'},
      {k:'SÊNIOR', d:'Faz pergunta, sugere soluções e diz qual é a melhor'} ] },	  

  /* o platô */
  { tipo:'lista', revela:false, badge:'O PLATÔ',
    titulo:'A curva sobe até sênior e achata',
    itens:[
      {t:'Continua "só técnico" depois de já ter dominado o técnico'},
      {t:'O que destrava de novo', d:'comunicação, influência sem cargo, visão de negócio'},
      {t:'Mais um curso de framework', d:'é raspar num nível que já foi resolvido'},
      {t:'Júnior e pleno', d:'o técnico ainda pesa muito. Mas quem começa comunicação e visibilidade cedo chega no sênior sem bater nesse teto'} ] },

  /* o que sobe × o que trava */
  { tipo:'confronto', badge:'O QUE SOBE × O QUE TRAVA O SALÁRIO',
    itens:[
      {titulo:'Escopo de impacto', icone:'↗'},
      {titulo:'"Só técnico"', icone:'▬'} ] },

  /* por que a empresa não te promove */
  { tipo:'lista', revela:false, badge:'A EMPRESA',
    titulo:'Por que a empresa não te promove sozinha',
    itens:[
      {t:'Promoção = custo maior no dia seguinte', d:'pro mesmo output'},
      {t:'Você não vai magicamente produzir mais amanhã'},
      {t:'Ninguém ganha com isso além de você'} ] },

  { tipo:'divisor',
    titulo:'Não espere reconhecimento.',
    sub:'Tome reconhecimento.' },
	
	/* framework: escopo de impacto */
  { tipo:'divisor',
    titulo:'Ninguém vai enxergar o seu trabalho',
    sub:'Você precisa mostrar' },	

  { tipo:'divisor', badge:'SE VOCÊ É TECH LEAD',
    titulo:'Reconheça seu time em público',
    sub:'faça o que não fizeram por você' },

  /* IA */
  { tipo:'agenda', badge:'O QUE A IA MUDA',
    titulo:'IA não substitui dev. Muda o que é valioso.',
    texto:'Quem só escreve código rápido compete com a IA. Quem decide o que escrever, não.',
    itens:[
      {k:'PERDE', d:'código repetitivo'},
      {k:'GANHA', d:'julgamento: o que construir'},
      {k:'GANHA', d:'arquitetura: como construir sem quebrar depois'},
      {k:'GANHA', d:'comunicação: convencer os outros da decisão certa'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Olha seu salário atual e responde com honestidade',
    texto:'Guarda a resposta. Vai pra ficha de onboarding.',
    itens:[
      {k:'12 MESES', d:'mudou meu escopo de impacto ou só meu conhecimento técnico?'},
      {k:'Dinheiro', d:'Quantos meses consigo viver se reduzir bem meu estilo de vida?'},
      {k:'Dinheiro', d:'Na minha área específica, quanto posso ganhar vs mudar?'},
	  
	  
	  ] },

  { tipo:'fim',
    titulo:'Saber que existe um platô não resolve o platô.',
    rodape:'Próximo: as armadilhas que travam carreira' }
];
