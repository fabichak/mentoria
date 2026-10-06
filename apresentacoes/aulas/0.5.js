/* Aula 0.5 — O mapa das 3 trilhas. 1 objeto por slide. Edite só aqui. Esboço: esbocos/0.5-mapa-das-3-trilhas.md */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'O mapa das', destaque:'3 trilhas',
    sub:'Ninguém te ensinou a ter carreira. Te ensinaram a programar.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Quantos anos de carreira você tem?',
    sub:'e quantas vezes, nesse tempo, escolheu conscientemente o próximo passo em vez de aceitar o que apareceu?' },

  /* problema */
  { tipo:'lista', revela:false, badge:'O PROBLEMA',
    titulo:'Te ensinaram a programar, não a ter carreira',
    itens:[
      {t:'Sem mapa, você não fica parado por falta de talento'},
      {t:'Fica parado porque nunca decidiu pra onde ir'},
      {t:'Decidir com intencionalidade'} ] },

  /* mapa visual */
  { tipo:'foto', badge:'AS 3 TRILHAS', contain:true,
    titulo:'Rotas, não escada. Não são mutuamente exclusivas',
    img:'assets/caminhos-renda.svg' },

  /* progressões */
  { tipo:'agenda', badge:'PROGRESSÃO',
    titulo:'Os cargos de cada trilha',
    itens:[
      {k:'TÉCNICA',       d:'Jr → Pleno → Sênior → Staff → Principal → Distinguished'},
      {k:'GESTÃO',        d:'Sênior → TL → EM → Head → Diretor → CTO'},
      {k:'EMPREENDEDORA', d:'SaaS ou produto próprio · consultoria ou freela high-ticket · agência ou estúdio'} ] },

  /* glossário gestão */
  { tipo:'agenda', badge:'SIGLAS DA GESTÃO',
    titulo:'Quem faz o quê',
    itens:[
      {k:'TL',      d:'Tech Lead: lidera tecnicamente um time e ainda coda'},
      {k:'EM',      d:'Engineering Manager: cuida das pessoas e da entrega do time'},
      {k:'HEAD',    d:'responde por uma área inteira, com vários times'},
      {k:'DIRETOR', d:'responde por várias áreas'},
      {k:'CTO',     d:'responde pela tecnologia da empresa inteira'} ] },

  /* escopo de impacto */
  { tipo:'cronologia', revela:false, badge:'O QUE MUDA POR NÍVEL',
    titulo:'Escopo de impacto, nas 3 trilhas',
    itens:[
      {t:'Tarefa'},
      {t:'Projeto'},
      {t:'Time'},
      {t:'Organização'},
      {t:'Indústria'} ] },

  { tipo:'lista', revela:false, badge:'O INSTRUMENTO MUDA',
    titulo:'Mesmo escopo crescendo, jeitos diferentes',
    itens:[
      {t:'Técnica', d:'o que muda não é quanto código ou velocidade que você escreve, é a qualidade e o alcance da sua decisão'},
      {t:'Gestão', d:'deixa de produzir e multiplica o que os outros produzem. Adicionar valor de negócio nas decisões e empoderar os membros da equipe.'},
      {t:'Empreendedora', d:'a porta lateral: risco maior, sem teto'} ] },

  /* mitos */
  { tipo:'divisor', badge:'MITO 1 · TÉCNICA',
    titulo:'Staff+ não é o sênior que programa mais rápido',
    sub:'é influência técnica sem cargo: muda a direção de uma arquitetura e organiza vários times, sem gerenciar ninguém' },

  { tipo:'divisor', badge:'MITO 2 · GESTÃO',
    titulo:'Gestão não é promoção, é mudança de profissão',
    sub:'ser o melhor da trilha técnica não te qualifica. E não ir pra gestão não é problema, é escolha' },

  /* o pêndulo */
  { tipo:'cronologia', revela:false, badge:'PÊNDULO VÁLIDO',
    titulo:'Ir e voltar é estratégia, não fracasso',
    itens:[
      {t:'Trilha técnica'},
      {t:'TL / EM: descobre como o negócio pensa', cycle:true},
      {t:'Volta pra técnica mais forte'} ] },

  /* exemplo real */
  { tipo:'cronologia', revela:false, badge:'EXEMPLO REAL',
    titulo:'Eu passei pelas 3',
    itens:[
      {t:'Técnica: Desenvolvedor de site, saas, mobile, jogos (Advergame, serious games, entretenimento)'},
      {t:'Empreendedora: sócio de estúdio. Chico Bento, 5M+ jogadores, primeiro jogo de PSP da América Latina'},
      {t:'Gestão: Insolita, Goodgames studios (mobile), Head of Development (mobile, pc), depois CTO da Magic Media (mobile, pc, console, saas, backend, vr, etc).'},
      {t:'200+ engenheiros contratados, 160 pessoas lideradas'} ] },
  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Antes do próximo vídeo',
    texto:'Não precisa estar certo, precisa estar honesto.',
    itens:[
      {k:'1 LINHA',  d:'por pergunta, por escrito'},
      {k:'NÃO SEI?', d:'escreva "ainda explorando"'} ] },
  /* perguntas */
  { tipo:'lista', revela:true, badge:'PERGUNTAS · TRILHA ATUAL',
    titulo:'Onde você está',
    itens:[
      {t:'Eu escolhi, ou foi escolhida por mim?'},
      {t:'Eu gosto do que faço?'},
      {t:'Sou bom no que faço?'},
      {t:'O que é um dia muito bom? E um muito ruim?'},
      {t:'O que eu realmente não gosto de fazer?'} ] },

  { tipo:'lista', revela:true, badge:'PERGUNTAS · PRA ONDE VOU',
    titulo:'Pra onde você vai',
    itens:[
      {t:'Qual trilha e cargo é minha meta final?', d:'por quê'},
      {t:'Qual trilha e cargo é o próximo passo?', d:'por quê'} ] },



  { tipo:'fim',
    titulo:'Próximo: trilha desenvolvedor vs gestão',
    rodape:'' }
];
