/* Aula 0.3 — O método. 1 objeto por slide. Edite só aqui. Esboço: esbocos/0.3-o-metodo.md */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'O método', destaque:'ADVANCE',
    sub:'Carreira se planeja.',
    rodape:'Martin Fabichak' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Carreira não se resolve com motivação',
    sub:'se resolve com sistema. Esse é o sistema' },

  /* recap do norte */
  { tipo:'foto', badge:'O NORTE', contain:true,
    titulo:'Mais dinheiro e caminho claro, nas 3 trilhas',
    img:'assets/caminhos-renda.svg' },

  /* a pirâmide */
  { tipo:'agenda', badge:'PARTE 1 · A PIRÂMIDE',
    titulo:'Nas 3 de baixo você cria valor, no topo você captura',
    itens:[
      {k:'VALORIZAÇÃO', d:'CAPTURA · mostrar o trabalho e ser pago por ele: promoção, CV, entrevista, negociação'},
      {k:'RESOLUÇÃO',   d:'CRIA · ferramentas pra decidir melhor e convencer pessoas'},
      {k:'LIDERANÇA',   d:'CRIA · auto-liderança, mentalidade, tempo, emocional, gestão de pessoas'},
      {k:'TÉCNICO',     d:'CRIA · fundação: decidir, avaliar e cobrar com propriedade'} ] },

  /* erro clássico */
  { tipo:'lista', revela:false, badge:'ERRO CLÁSSICO',
    titulo:'Pular camada',
    itens:[
      {t:'Querer valorização', d:'sem ter resolvido problema visível'},
      {t:'Empilhar técnico', d:'quando a trava está em liderança e resolução'} ] },

  /* pirâmide = catálogo */
  { tipo:'agenda', badge:'A PIRÂMIDE É O CATÁLOGO',
    titulo:'Cada camada é um bloco',
    texto:'Começamos por liderança: técnico é o que você já tem mais.',
    itens:[
      {k:'BLOCO 1', d:'liderança e soft skill'},
      {k:'BLOCO 2', d:'resolução de problemas'},
      {k:'BLOCO 3', d:'valorização'},
      {k:'BLOCO 4', d:'técnico'} ] },

  /* o ciclo */
  { tipo:'cronologia', revela:true, badge:'PARTE 2 · O CICLO',
    titulo:'Como agir no seu emprego atual',
    itens:[
      {t:'PREPARAR: onde você está, o que falta. E onde está seu time, quais problemas a empresa tem agora'},
      {t:'AGIR: executar nas lacunas certas, não em tudo ao mesmo tempo, dentro e fora da empresa'},
      {t:'MOSTRAR: impacto invisível não conta, quem decide sua promoção precisa ver'},
      {t:'OTIMIZAR: medir, ajustar, subir a régua', cycle:true},
      {t:'Recomeçar: PREPARAR de novo'} ] },

  /* MOSTRAR */
  { tipo:'divisor',
    titulo:'MOSTRAR',
    sub:'a fase que devs mais odeiam e mais precisam. Não é marketing pessoal, é tornar o trabalho visível pra quem decide' },

  /* exemplo */
  { tipo:'cronologia', revela:true, badge:'EXEMPLO · DEV PLENO, 90 DIAS',
    titulo:'Uma volta do ciclo',
    itens:[
      {t:'PREPARAR: time sofre com deploy manual toda sexta. Sua lacuna: visibilidade fora do squad'},
      {t:'AGIR: assume o deploy, automatiza, manda update quinzenal pro gestor e pro PM'},
      {t:'MOSTRAR: no 1:1, antes e depois com número: 3h → 15 min, 0 incidentes em 6 semanas'},
      {t:'OTIMIZAR: o que funcionou, o que não, qual a próxima régua', cycle:true},
      {t:'Próxima volta'} ] },

  /* pirâmide = o quê, ciclo = como */
  { tipo:'confronto', badge:'COMO SE ENCAIXAM',
    itens:[
      {titulo:'Pirâmide = O QUÊ', icone:'▲'},
      {titulo:'Ciclo = COMO', icone:'↻'} ] },

  /* por que ciclo */
  { tipo:'lista', revela:false, badge:'POR QUÊ',
    titulo:'Ciclo, não linha reta',
    itens:[
      {t:'Cada nível novo zera parte do jogo'},
      {t:'Quem tem o ciclo internalizado não entra em pânico', d:'roda mais uma volta'},
      {t:'Cada volta ataca uma lacuna', d:'em alguma camada da pirâmide'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Antes do próximo vídeo',
    texto:'Escreva 3 frases e guarde: vão pro autodiagnóstico (0.4) e pra ficha (0.10).',
    itens:[
      {k:'HOJE',     d:'onde você está'},
      {k:'12 MESES', d:'onde quer estar'},
      {k:'LACUNA',   d:'a maior distância entre os dois'} ] },

  { tipo:'fim',
    titulo:'Você não precisa se sentir pronto.',
    rodape:'Precisa rodar a primeira volta do ciclo · Próximo: autodiagnóstico de carreira' }
];
