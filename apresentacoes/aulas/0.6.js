/* Aula 0.6 — Trilha desenvolvedor vs Gestão. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'Trilha', destaque:'Desenvolvedor vs Gestão',
    sub:'Qual das duas é o seu jogo?',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'A maioria dos devs vira gestor por acidente',
    sub:'não por escolha.' },

  /* as duas trilhas */
  { tipo:'agenda', badge:'AS DUAS TRILHAS',
    titulo:'Lado a lado',
    texto:'Dá pra atravessar de uma pra outra nos dois sentidos.',
    itens:[
      {k:'TÉCNICA', d:'Profundidade técnica + experiência + influência'},
      {k:'GESTÃO',  d:'Pessoas, direção, resultado através do time + valor de negócio; Política'},
      {k:'PONTES',  d:'Sênior ↔ Tech Lead · Staff ↔ EM: dá pra ir e voltar'} ] },

  /* o que cada trilha exige */
  { tipo:'pilar', badge:'TRILHA TÉCNICA', tag:'O QUE EXIGE DE VERDADE',
    titulo:'Sênior → Staff → Principal',
    bullets:[
      {t:'Problemas que atravessam times', d:'arquitetura, padrões, decisões caras de errar'},
      {t:'Escrever e comunicar', d:'Design docs, ferramentas internas e juntar pessoas para uma decisão'},
      {t:'Influenciar sem mandar', d:'Convencer 5 times sem ser chefe de nenhum, organizar pessoas pra resolver problema, Entender quais KPIs seguir e usar'} ] },

  { tipo:'pilar', badge:'TRILHA DE GESTÃO', tag:'O QUE EXIGE DE VERDADE',
    titulo:'Tech Lead → EM → Head → CTO',
    bullets:[
      {t:'Energia genuína para pessoas', d:'1:1s, feedback difícil, contratação, demissão, negociação'},
      {t:'Tolerar distância do código', d:'quem sente abstinência de codar sofre como EM'},
      {t:'Prestar contas sem executar', d:'resultado que não sai das suas mãos, resultado não tangível e demorado'} ] },

  /* 3 perguntas-filtro */
  { tipo:'agenda', badge:'COMO ESCOLHER',
    titulo:'3 perguntas-filtro',
    itens:[
      {k:'ENERGIA',   d:'destravar um problema técnico cabeludo ou destravar uma pessoa?'},
      {k:'INVISÍVEL', d:'aceito que meu sucesso seja invisível e indireto?'},
      {k:'ENSINAR',   d:'Sente prazer genuíno em ver outras pessoas crescerem?'},
      {k:'1:1',       d:'faria 1:1s bem feitos sem ninguém cobrar?'} ] },

  /* conexão com a dor */
  { tipo:'divisor',
    titulo:'Sem trilha definida, não existe régua',
    sub:'"não sei quais passos tomar e em qual ordem"' },

  { tipo:'fim',
    titulo:'Escolhida a trilha, falta entender o dinheiro.',
    rodape:'Próximo: Renda' }
];
