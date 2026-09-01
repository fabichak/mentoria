/* Aula 0.3 — Trilha desenvolvedor vs Gestão. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'Trilha', destaque:'desenvolvedor vs Gestão',
    sub:'A maioria dos devs vira gestor por acidente e passa anos infeliz sem saber por quê.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* desmontar o mito */
  { tipo:'divisor',
    titulo:'Gestão não é promoção',
    sub:'é mudança de profissão, e desenvolvedor sênior+ não é "quem não quis liderar"' },

  /* as duas trilhas */
  { tipo:'foto', badge:'AS DUAS TRILHAS', contain:true,
    titulo:'Lado a lado',
    img:'assets/trilhas-ic-gestao.svg' },

  /* o que desenvolvedor exige */
  { tipo:'pilar', badge:'TRILHA DESENVOLVEDOR', tag:'O QUE EXIGE DE VERDADE',
    titulo:'Sênior → Staff → Principal',
    bullets:[
      {t:'Problemas que atravessam times', d:'arquitetura, padrões, decisões caras de errar'},
      {t:'Escrever e comunicar', d:'TDDs, design docs: Staff que não escreve não escala'},
      {t:'Influenciar sem mandar', d:'convencer 5 times sem ser chefe de nenhum'} ] },

  /* o que gestão exige */
  { tipo:'pilar', badge:'TRILHA GESTÃO', tag:'O QUE EXIGE DE VERDADE',
    titulo:'Tech Lead → EM → Head → CTO',
    bullets:[
      {t:'Energia genuína para pessoas', d:'1:1s, feedback difícil, contratação, demissão'},
      {t:'Tolerar distância do código', d:'abstinência de codar faz EM sofrer'},
      {t:'Prestar contas sem executar', d:'resultado que não sai das suas mãos'} ] },

  /* 3 perguntas-filtro */
  { tipo:'agenda', badge:'COMO ESCOLHER',
    titulo:'3 perguntas-filtro',
    itens:[
      {k:'ENERGIA',  d:'destravar um problema técnico cabeludo ou destravar uma pessoa?'},
      {k:'INVISÍVEL',d:'aceito que meu sucesso seja invisível e indireto?'},
      {k:'1:1',      d:'faria 1:1s bem feitos sem ninguém cobrar? "não" = sinal amarelo forte'} ] },

  /* verdades desconfortáveis */
  { tipo:'lista', revela:false, badge:'VERDADES DESCONFORTÁVEIS',
    titulo:'O que ninguém te conta',
    itens:[
      {t:'Dá pra voltar', d:'o pêndulo TL → desenvolvedor → EM é comum e saudável, não é fracasso'},
      {t:'Trilha desenvolvedor no Brasil é imatura', d:'seguir Staff+ pode exigir trocar de empresa'},
      {t:'Salário topo é parecido nas duas', d:'escolher gestão "pelo dinheiro" é a pior razão'} ] },

  /* conexão com a dor */
  { tipo:'divisor',
    titulo:'Sem trilha, não existe régua',
    sub:'"não sei o que falta pro próximo nível" quase sempre começa por não saber QUAL trilha' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Escreva',
    texto:'',
    itens:[
      {k:'RESPONDER', d:'as 3 perguntas-filtro'},
      {k:'MAPEAR',    d:'última semana: quais atividades deram energia?'},
      {k:'MARCAR',    d:'cada uma como técnica ou pessoas'} ] },
{ tipo:'agenda', badge:'COMO ESCOLHER',
    titulo:'3 perguntas-filtro',
    itens:[
      {k:'ENERGIA',  d:'destravar um problema técnico cabeludo ou destravar uma pessoa?'},
      {k:'INVISÍVEL',d:'aceito que meu sucesso seja invisível e indireto?'},
      {k:'1:1',      d:'faria 1:1s bem feitos sem ninguém cobrar? "não" = sinal amarelo forte'} ] },
  { tipo:'fim',
    titulo:'Escolhida a trilha, vire meta.',
    rodape:'Passos concretos · Próximo: auto-liderança e metas' }
];
