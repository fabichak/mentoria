/* Aula 0.6 — Trilha desenvolvedor vs Gestão. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'Trilha', destaque:'desenvolvedor vs Gestão',
    sub:'Qual das duas é o seu jogo?',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'A maioria dos devs vira gestor por acidente',
    sub:'não por escolha. E depois passa anos infeliz sem saber por quê' },

  /* o mito */
  { tipo:'divisor', badge:'O MITO',
    titulo:'Gestão não é promoção, é mudança de profissão',
    sub:'e Staff+ não é "quem não quis liderar"' },

  /* as duas trilhas */
  { tipo:'agenda', badge:'AS DUAS TRILHAS',
    titulo:'Lado a lado',
    texto:'Dá pra atravessar de uma pra outra nos dois sentidos.',
    itens:[
      {k:'TÉCNICA', d:'Sênior → Staff → Principal → Distinguished · profundidade técnica + influência sem autoridade formal'},
      {k:'GESTÃO',  d:'Tech Lead → EM → Head → CTO · pessoas, direção, resultado através do time + valor de negócio'},
      {k:'PONTES',  d:'Sênior ↔ Tech Lead · Staff ↔ EM: dá pra ir e voltar'} ] },

  /* o que cada trilha exige */
  { tipo:'pilar', badge:'TRILHA TÉCNICA', tag:'O QUE EXIGE DE VERDADE',
    titulo:'Sênior → Staff → Principal',
    bullets:[
      {t:'Problemas que atravessam times', d:'arquitetura, padrões, decisões caras de errar'},
      {t:'Escrever e comunicar', d:'design docs, RFCs, ferramentas internas'},
      {t:'Influenciar sem mandar', d:'convencer 5 times sem ser chefe de nenhum, organizar pessoas pra resolver problema'} ] },

  { tipo:'pilar', badge:'TRILHA DE GESTÃO', tag:'O QUE EXIGE DE VERDADE',
    titulo:'Tech Lead → EM → Head → CTO',
    bullets:[
      {t:'Energia genuína para pessoas', d:'1:1s, feedback difícil, contratação, demissão, negociação'},
      {t:'Tolerar distância do código', d:'quem sente abstinência de codar sofre como EM'},
      {t:'Prestar contas sem executar', d:'resultado que não sai das suas mãos'} ] },

  /* mini-glossário */
  { tipo:'agenda', badge:'GLOSSÁRIO',
    titulo:'Duas palavras que você vai ouvir muito',
    itens:[
      {k:'DESIGN DOC', d:'documento que descreve um problema técnico e a solução proposta, antes de codar'},
      {k:'RFC',        d:'proposta aberta pra outros times comentarem antes da decisão'} ] },

  /* 3 perguntas-filtro */
  { tipo:'agenda', badge:'COMO ESCOLHER',
    titulo:'3 perguntas-filtro',
    itens:[
      {k:'ENERGIA',   d:'destravar um problema técnico cabeludo ou destravar uma pessoa?'},
      {k:'INVISÍVEL', d:'aceito que meu sucesso seja invisível e indireto?'},
      {k:'1:1',       d:'faria 1:1s bem feitos sem ninguém cobrar? "não" = sinal amarelo forte pra gestão'} ] },

  /* verdades desconfortáveis */
  { tipo:'lista', revela:false, badge:'VERDADES DESCONFORTÁVEIS',
    titulo:'O que ninguém te conta',
    itens:[
      {t:'Dá pra voltar', d:'o pêndulo TL → técnica → EM é comum e saudável, não é fracasso'},
      {t:'Trilha técnica no Brasil é imatura', d:'seguir Staff+ pode exigir trocar de empresa'},
      {t:'Salário topo é parecido nas duas', d:'escolher gestão "pelo dinheiro" é a pior razão'} ] },

  /* conexão com a dor */
  { tipo:'divisor',
    titulo:'Sem trilha definida, não existe régua',
    sub:'"não sei quais passos tomar e em qual ordem" quase sempre começa por não saber QUAL trilha' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Escreva',
    texto:'Ponto de partida: suas respostas do 0.5 (dia bom, dia ruim, o que não gosta de fazer). Vai pra ficha de onboarding (0.10).',
    itens:[
      {k:'RESPONDER', d:'as 3 perguntas-filtro'},
      {k:'MAPEAR',    d:'última semana: quais atividades deram energia?'},
      {k:'MARCAR',    d:'cada uma como técnica ou pessoas'} ] },

  { tipo:'fim',
    titulo:'Escolhida a trilha, falta entender o dinheiro.',
    rodape:'Próximo: o platô de renda' }
];
