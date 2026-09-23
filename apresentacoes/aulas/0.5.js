/* Aula 0.5 — Mentalidade. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'Mentalidade', destaque:'',
    sub:'Entre quem sobe e estagna, a diferença raramente é técnica.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Ficou calado com a opinião melhor da sala?',
    sub:'isso não é humildade, é auto-sabotagem com fantasia de modéstia' },

  /* tese */
  { tipo:'divisor',
    titulo:'Mentalidade se treina',
    sub:'como se treina código: com prática deliberada' },

  /* pilar 1 */
  { tipo:'pilar', badge:'PILAR 1', tag:'01/04',
    titulo:'Ocupar espaço',
    sub:'ninguém te dá espaço de líder, você ocupa antes do título',
    bullets:[
      {t:'1 posição clara por reunião importante', d:'"eu faria X porque Y", não só pergunta'},
      {t:'Assumir responsabilidade órfã', d:'a retro difícil, o resumo que ninguém mandou'},
      {t:'≠ falar mais alto', d:'frase-modelo: "posso assumir isso"'} ] },

  /* pilar 2 + reframe */
  { tipo:'confronto', badge:'PILAR 2 · O REFRAME',
    itens:[
      {titulo:'"Problema"', icone:'✗'},
      {titulo:'"Oportunidade"', icone:'◎'} ] },

  { tipo:'divisor',
    titulo:'Reclamar e achar uma solução gasta a mesma energia',
    sub:'Qual te leva mais próximo pro seu objetivo?' },

  /* exemplo real */
  { tipo:'cronologia', revela:false, badge:'EXEMPLO REAL',
    titulo:'Do problema órfão à promoção',
    itens:[
      {t:'Deploy manual que todo mundo odiava'},
      {t:'Um dev assumiu, sem ninguém pedir'},
      {t:'Automatizou de ponta a ponta'},
      {t:'Virou a referência do assunto'},
      {t:'Citado na rodada de promoção'} ] },

  /* pilar 3 */
  { tipo:'pilar', badge:'PILAR 3', tag:'03/04',
    titulo:'Fazer entrevistas sempre',
    sub:'2 por semestre, mesmo feliz no emprego',
    bullets:[
      {t:'Régua externa do seu nível real', d:'feedback de mercado > voz da insegurança'},
      {t:'Vacina contra "será que sou bom?"', d:'evidência no lugar de sensação'},
      {t:'Poder de negociação', d:'entrevista sem desespero é treino barato, só quando precisa é prova sem estudar'} ] },

 { tipo:'pilar', badge:'PILAR 3', tag:'03/04',
    titulo:'Eventos e networking',
    sub:'1 evento por semestre',
    bullets:[
      {t:'Conversar com outras pessoas', d:'referências e network'},
      {t:'Exposição a outras tecnologias', d:''},
      {t:'Vencer seus medos', d:'Só converse com quem você não conhece'} ] },


  /* pilar 4 — a curva */
  { tipo:'foto', badge:'PILAR 4', contain:true,
    titulo:'Dunning-Kruger: a régua quebrada',
    img:'assets/dunning-kruger.png' },

  { tipo:'lista', revela:false, badge:'PILAR 4',
    titulo:'Os dois lados da régua quebrada',
    itens:[
      {t:'Início de domínio novo: excesso de confiança', d:'quanto menos sabe, menos vê o que não sabe'},
      {t:'A sensação de fraude CRESCE com a competência', d:'quanto mais aprende, mais enxerga o iceberg'},
      {t:'Sentir-se impostor ≈ estar no nível certo', d:'cercado de gente boa'},
      {t:'Antídoto: trocar sensação por evidência', d:'registro escrito de resultados'} ] },

  /* síntese: ciclo dos 4 pilares */
  { tipo:'foto', badge:'SÍNTESE', contain:true,
    titulo:'Os 4 pilares se reforçam',
    img:'assets/4-pilares-ciclo.svg' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Esta semana',
    itens:[
      {k:'1 REUNIÃO',   d:'contribuir com posição clara: "eu faria X porque Y"'},
      {k:'3 PROBLEMAS', d:'listar os órfãos do seu time, adotar 1 e falar com lead/PM'},
      {k:'1 ENTREVISTA',d:'candidatar em 2 meses'} ] },

  { tipo:'fim',
    titulo:'Mentalidade se renova, se aprender, se treina e se lembra',
    rodape:'Próximo: o hábito' }
];
