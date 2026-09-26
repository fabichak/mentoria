/* Aula 0.2 — Disclaimer. 1 objeto por slide. Edite só aqui. Esboço: esbocos/0.2-disclaimer.md */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'Disclaimer', destaque:'',
    sub:'Algumas coisas não funcionam da maneira que você espera.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Isso aqui não é um curso',
    sub:'curso você assiste. Mentoria você executa. Quem só assiste sai igual entrou' },

  /* expectativa × realidade */
  { tipo:'confronto', badge:'EXPECTATIVA × REALIDADE',
    itens:[
      {titulo:'Assistir tudo e "estar pronto"', icone:'✗'},
      {titulo:'Rodar uma volta e ajustar', icone:'↻'} ] },

  /* o que não funciona */
  { tipo:'lista', revela:true, badge:'O QUE NÃO FUNCIONA',
    titulo:'6 coisas que vão te frustrar se você não souber antes',
    itens:[
      {t:'Não é linear', d:'você vai avançar, travar, voltar. Faz parte'},
      {t:'Nem toda ferramenta serve pro seu contexto', d:'adapte, descarte, traga pro check-in. Framework é mapa, não território'},
      {t:'Nem todo mundo joga limpo', d:'algumas técnicas assumem boa-fé. Algumas situações não têm resolução, e reconhecer isso também é decisão'},
      {t:'Resultado demora mais que 14 dias', d:'a primeira vitória é rápida; promoção e salário levam meses'},
      {t:'Eu não vou fazer por você', d:'dou direção e cobrança. A conversa difícil é sua'},
      {t:'Minha opinião não é lei', d:'discorda? Traz o argumento pro hot seat, office hours ou comunidade'} ] },

  /* você não assiste tudo */
  { tipo:'confronto', badge:'SOBRE AS AULAS',
    itens:[
      {titulo:'66 aulas no catálogo', icone:'▦'},
      {titulo:'10 a 12 pra sua fase', icone:'✓'} ] },

  { tipo:'lista', revela:false, badge:'SOBRE AS AULAS',
    titulo:'Como consumir o catálogo',
    itens:[
      {t:'Mentoria', d:'no onboarding 1:1 eu indico as aulas da sua fase. O Bloco 0 todo mundo vê'},
      {t:'Só vídeos', d:'use o autodiagnóstico (0.4) e as trilhas (0.5) pra escolher as suas'},
      {t:'Líder é papel, não cargo', d:'vídeo que fala "líder" vale pra todo mundo'},
      {t:'A ação é a aula', d:'cada vídeo termina com uma. Sem ela, não aconteceu'} ] },

  /* glossário */
  { tipo:'agenda', badge:'COMO FUNCIONA A MENTORIA',
    titulo:'O que cada palavra quer dizer',
    itens:[
      {k:'CHECK-IN',     d:'5 min por escrito, toda semana: o que fiz, onde travei, próximo passo. Retorno meu em até 48h úteis'},
      {k:'POD',          d:'até 6 pessoas com objetivo parecido, 1h, 2x por mês. Cada um traz o que prometeu'},
      {k:'HOT SEAT',     d:'20 min no SEU problema real, na frente do grupo. Agendado por mim, com roteiro'},
      {k:'OFFICE HOURS', d:'sala aberta, sem agendar. Pra onde vai a urgência de verdade'},
      {k:'DISCORD',      d:'a comunidade, inclusive quem comprou só os vídeos'} ] },

  /* o contrato */
  { tipo:'agenda', badge:'O CONTRATO',
    titulo:'O que eu espero de você',
    itens:[
      {k:'HONESTIDADE', d:'responda o que É, não o que gostaria que fosse. Ninguém além de nós lê'},
      {k:'CONSTÂNCIA',  d:'check-in toda semana, mesmo na semana ruim. Principalmente na semana ruim'},
      {k:'AÇÃO',        d:'versão feia executada vale mais que versão perfeita imaginada'} ] },

  /* garantia */
  { tipo:'divisor', badge:'GARANTIA · MENTORIA',
    titulo:'7 dias: não fez sentido, devolvo tudo',
    sub:'90 dias de execução (check-ins + pod + encontros) sem avançar no objetivo que definimos juntos: também' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Antes do próximo vídeo',
    itens:[
      {k:'DERRUBADA', d:'1 expectativa que você tinha e este vídeo derrubou'},
      {k:'DIFERENTE', d:'1 coisa que você vai fazer diferente por causa disso'} ] },

  { tipo:'fim',
    titulo:'Expectativa alinhada. Agora o método.',
    rodape:'Próximo: o método' }
];
