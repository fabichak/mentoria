/* Aula 0.1 — O método DevAdvance.club. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'O método', destaque:'devAdvance',
    sub:'Carreira se planeja.',
    rodape:'Martin Fabichak' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Você trava no próximo passo',
    sub:'não é falta de capacidade, é falta de método' },

  /* as 4 dores */
  { tipo:'lista', revela:false, badge:'AS 4 DORES',
    titulo:'O que trava o dev sênior',
    itens:[
      {t:'"Será que sou bom o suficiente?"', d:'auto-sabotagem silenciosa'},
      {t:'Não saber quais passos tomar', d:'todo mundo dá conselho, ninguém dá sequência'},
      {t:'Não saber o que falta pro próximo nível', d:'a régua da promoção é invisível'},
      {t:'Ninguém ensina soft-skill pra programador', d:'faculdade ensina código, empresa cobra liderança'} ] },

  /* norte */
  { tipo:'confronto', badge:'O NORTE',
    itens:[
      {titulo:'Mais dinheiro', icone:'R$'},
      {titulo:'Caminho de renda', icone:'↗'} ] },

  /* 3 caminhos */
  { tipo:'foto', badge:'3 CAMINHOS', contain:true,
    titulo:'Um método, três caminhos',
    img:'assets/caminhos-renda.svg' },

  /* o método */
  { tipo:'agenda', badge:'O MÉTODO',
    titulo:'4 fases',
    itens:[
      {k:'PREPARAR', d:'diagnóstico honesto: onde você está, o que falta'},
      {k:'AGIR',     d:'executar nas lacunas certas, não em tudo'},
      {k:'MOSTRAR',  d:'impacto invisível não conta, quem decide precisa ver'},
      {k:'OTIMIZAR', d:'medir, ajustar, subir a régua e recomeçar'} ] },

  /* ponto-chave MOSTRAR */
  { tipo:'divisor',
    titulo:'MOSTRAR',
    sub:'a fase que devs mais odeiam e mais precisam.' },

  /* o loop */
  { tipo:'loop', badge:'O LOOP',
    titulo:'O loop que repete a carreira inteira',
    itens:['Mapear','Priorizar','Agir','Medir','Mostrar'] },

  /* exemplo concreto */
  { tipo:'cronologia', revela:false, badge:'EXEMPLO',
    titulo:'Uma volta do loop',
    itens:[
      {t:'Mapear: falta visibilidade com stakeholders'},
      {t:'Priorizar: 1 ritual, update quinzenal'},
      {t:'Agir 30 dias e medir a reação'},
      {t:'Mostrar o resultado no 1:1', cycle:true},
      {t:'Próxima volta: régua mais alta'} ] },

  /* por que loop */
  { tipo:'lista', revela:false, badge:'POR QUÊ',
    titulo:'Loop, não linha reta',
    itens:[
      {t:'Cada nível novo zera parte do jogo'},
      {t:'Quem tem o loop não entra em pânico', d:'roda mais uma volta'},
      {t:'Serve pra tech lead, staff, head', d:'muda o conteúdo, não a estrutura'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Antes do próximo vídeo',
    texto:'Escreva 3 frases',
    itens:[
      {k:'HOJE',    d:'onde você está'},
      {k:'12 MESES',d:'onde quer estar'},
      {k:'LACUNA',  d:'a maior distância entre os dois'} ] },

  { tipo:'fim',
    titulo:'Você não precisa se sentir pronto.',
    rodape:'Precisa rodar a primeira volta do loop · Próximo: a mudança de papel' }
];
