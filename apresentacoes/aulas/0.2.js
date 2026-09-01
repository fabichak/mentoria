/* Aula 0.2 — A mudança de papel. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'A mudança de', destaque:'papel',
    sub:'A habilidade que te trouxe até aqui é a que vai te travar daqui pra frente.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* aviso: vale pra todo mundo */
  { tipo:'divisor',
    titulo:'Líder é papel, não cargo',
    sub:'vale pra quem lidera E pra quem não lidera: desenvolvedor também gera impacto através de outros: mentoria, RFC, influência' },

  /* história típica */
  { tipo:'cronologia', revela:false, badge:'A HISTÓRIA TÍPICA',
    titulo:'O melhor dev vira líder',
    itens:[
      {t:'Melhor dev do time é promovido'},
      {t:'Continua resolvendo tudo sozinho'},
      {t:'Vira gargalo, o time para'},
      {t:'Se frita tentando dar conta'},
      {t:'Conclui: "não sirvo pra liderar". Errado: jogou o jogo antigo no tabuleiro novo'} ] },

  /* a mudança fundamental */
  { tipo:'confronto', badge:'A MUDANÇA FUNDAMENTAL',
    itens:[
      {titulo:'O que EU entrego', icone:'‹/›'},
      {titulo:'O que acontece POR CAUSA de mim', icone:'⇶'} ] },

  /* tabela dev vs líder */
  { tipo:'foto', badge:'DOIS JOGOS', contain:true,
    titulo:'Bom dev × bom líder',
    img:'assets/dev-vs-lider.svg' },

  /* herói vs sistema */
  { tipo:'lista', revela:false, badge:'HERÓI × SISTEMA',
    titulo:'Resolver sozinho × construir sistema',
    itens:[
      {t:'Bug às 2h da manhã', d:'herói uma vez'},
      {t:'Runbook + time treinado', d:'líder para sempre'} ] },

  /* diagrama gargalo */
  { tipo:'foto', badge:'O GARGALO', contain:true,
    titulo:'Você no meio × sistema que roda',
    img:'assets/gargalo.svg' },

  /* frase-âncora */
  { tipo:'divisor',
    titulo:'"Se eu sumir 2 semanas, o que quebra?"',
    sub:'o que quebra é o que você ainda não sistematizou' },

  /* impacto através de outros */
  { tipo:'lista', revela:false, badge:'NA PRÁTICA',
    titulo:'Impacto através de outros',
    itens:[
      {t:'Delegar não é largar', d:'contexto + critério de pronto + espaço pra errar barato'},
      {t:'Aceite o 80% do outro', d:'refazer no seu 100% = time nunca cresce'},
      {t:'Novo backlog: destravar, alinhar, remover atrito', d:'trabalho invisível que multiplica'} ] },

  /* a dor da transição */
  { tipo:'lista', revela:false, badge:'A DOR',
    titulo:'"Passei o dia em conversa, não entreguei nada"',
    itens:[
      {t:'Conversa que destrava 3 pessoas vale mais que seu PR'},
      {t:'A métrica antiga (código) sumiu', d:'e a nova ainda não existe'},
      {t:'"Será que sou bom o suficiente?"', d:'normal, esperado, passa com sistema'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Esta semana',
    texto:'O exercício "o que só eu faço":',
    itens:[
      {k:'LISTAR',   d:'tudo que só você faz no time hoje'},
      {k:'ESCOLHER', d:'1 item da lista'},
      {k:'SISTEMATIZAR', d:'doc, runbook, par ou delegação, ainda esta semana'} ] },

  { tipo:'fim',
    titulo:'Antes de construir o sistema, escolha o tabuleiro.',
    rodape:'desenvolvedor ou gestão? · Próximo: trilha desenvolvedor vs gestão' }
];
