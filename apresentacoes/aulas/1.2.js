/* Aula 1.2 — Mentalidade. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 1 · Liderança e soft-skill',
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
  { tipo:'pilar', badge:'PILAR 1', tag:'01/05',
    titulo:'Ocupar espaço',
    sub:'ninguém te dá espaço, você ocupa antes do título',
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
  { tipo:'pilar', badge:'PILAR 3', tag:'03/05',
    titulo:'Fazer entrevistas sempre',
    sub:'2 por semestre, mesmo feliz no emprego',
    bullets:[
      {t:'Régua externa do seu nível real', d:'feedback de mercado > voz da insegurança'},
      {t:'Vacina contra "será que sou bom?"', d:'evidência no lugar de sensação'},
      {t:'Poder de negociação', d:'entrevista sem desespero é treino barato, só quando precisa é prova sem estudar'} ] },

  { tipo:'pilar', badge:'PILAR 3', tag:'03/05',
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

  /* pilar 5 — custo afundado */
  { tipo:'divisor',
    titulo:'"Já investi 5 anos nisso, não posso largar agora"',
    sub:'os 5 anos já foram. Não voltam se você ficar nem se você sair' },

  { tipo:'pilar', badge:'PILAR 5', tag:'05/05',
    titulo:'Custo afundado (sunk cost)',
    sub:'o que você já gastou não é argumento pra continuar gastando',
    bullets:[
      {t:'Onde aparece', d:'a stack que dominou e o mercado abandonou, a empresa que "já deu tanto", a trilha escolhida por acidente'},
      {t:'A pergunta certa', d:'"se eu começasse hoje, do zero, escolheria isso?" Se não, o passado não é motivo'},
      {t:'Decisão olha pra frente', d:'compara os próximos 24 meses, não os últimos 5 anos. O pêndulo (aula 0.5) existe pra isso'} ] },

  { tipo:'confronto', badge:'PILAR 5 · O REFRAME',
    itens:[
      {titulo:'"Perdi 5 anos"', icone:'✗'},
      {titulo:'"Aprendi em 5 anos que não é isso"', icone:'✓'} ] },

  /* síntese: ciclo dos pilares */
  { tipo:'foto', badge:'SÍNTESE', contain:true,
    titulo:'Os pilares se reforçam',
    img:'assets/4-pilares-ciclo.svg' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Esta semana',
    itens:[
      {k:'1 REUNIÃO',   d:'contribuir com posição clara: "eu faria X porque Y"'},
      {k:'3 PROBLEMAS', d:'listar os órfãos do seu time, adotar 1 e falar com lead/PM'},
      {k:'1 ENTREVISTA',d:'candidatar em 2 meses'},
      {k:'1 PERGUNTA',  d:'"se começasse hoje, escolheria isso?" pra 1 coisa que você mantém por custo afundado'} ] },

  { tipo:'fim',
    titulo:'Mentalidade se renova, se aprende, se treina e se lembra',
    rodape:'Próximo: alta performance e gestão de tempo' }
];
