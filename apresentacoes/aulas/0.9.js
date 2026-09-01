/* Aula 0.9 — Onboarding. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'Bem-vindo à', destaque:'mentoria',
    sub:'A partir de agora não é mais conteúdo, é trabalho conjunto.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Sem diagnóstico honesto',
    sub:'todo plano de ação é chute. O onboarding existe pra isso' },

  /* como funciona */
  { tipo:'agenda', badge:'COMO FUNCIONA',
    titulo:'A mentoria na prática',
    itens:[
      {k:'VÍDEOS',   d:'as aulas moram na plataforma, assista na sequência'},
      {k:'ENCONTROS',d:'sessões ao vivo em cadência fixa'},
      {k:'AJUDA',    d:'travou? posta no canal, não espera a próxima sessão'},
      {k:'DE VOCÊ',  d:'Problem Journal em dia + exercícios das aulas'} ] },

  /* mapa da jornada */
  { tipo:'foto', badge:'A JORNADA', contain:true,
    titulo:'Onboarding → diagnóstico → plano → loop',
    img:'assets/jornada-onboarding.svg' },

  /* contrato */
  { tipo:'divisor',
    titulo:'Contrato de honestidade',
    sub:'responda o que É, não o que gostaria que fosse: ninguém além de nós vai ler' },

  /* blocos do questionário 1–4 */
  { tipo:'agenda', badge:'O QUESTIONÁRIO · 1/2',
    titulo:'Blocos: onde você está',
    itens:[
      {k:'CONTEXTO', d:'cargo real vs formal, quem lidera, como virou líder, de onde você parte'},
      {k:'FEEDBACKS',d:'chefe e time: a régua externa que você talvez nunca olhou de frente'},
      {k:'TEMPO',    d:'código vs gestão vs reunião, onde sua semana vaza'},
      {k:'TRAVAS',   d:'problemas mal resolvidos, onde o método ataca primeiro'} ] },

  /* blocos do questionário 5–7 */
  { tipo:'agenda', badge:'O QUESTIONÁRIO · 2/2',
    titulo:'Blocos: pra onde você vai',
    itens:[
      {k:'DESTINO', d:'12m · 24m · 5 anos, quanto quer ganhar. Sem destino não há priorização'},
      {k:'FORÇAS',  d:'técnicas e de liderança, insumo direto pro diagnóstico do 0.7'},
      {k:'SAÚDE',   d:'horas, sono, férias, performance sustentável, não sprint eterno'} ] },

  /* resposta boa vs vaga */
  { tipo:'agenda', badge:'CAPRICHA',
    titulo:'Resposta boa × resposta vaga',
    itens:[
      {k:'VAGA', d:'"lidero algumas pessoas"'},
      {k:'BOA',  d:'"lidero 4 devs direto, 2 indireto via par"'} ] },

  /* instruções práticas */
  { tipo:'lista', revela:false, badge:'INSTRUÇÕES',
    titulo:'Como responder',
    itens:[
      {t:'Por escrito, antes da sessão', d:'a conversa parte das suas respostas'},
      {t:'Pergunta sem sentido? Deixa em branco'},
      {t:'Não existe resposta errada', d:'existe resposta desperdiçada, a vaga'} ] },

  /* DISC */
  { tipo:'lista', revela:false, badge:'DISC',
    titulo:'DISC em 1 minuto',
    itens:[
      {t:'Modelo de perfil comportamental', d:'linguagem comum pra falar de você, não caixinha'},
      {t:'Teste de 5 minutos', d:'link na plataforma, junto do questionário'},
      {t:'Poste o gráfico do resultado', d:'a gente interpreta junto no onboarding'} ] },

  /* próximos passos */
  { tipo:'cronologia', revela:false, badge:'PRÓXIMOS PASSOS',
    titulo:'Até a primeira sessão',
    itens:[
      {t:'Responder o questionário por escrito'},
      {t:'Fazer o teste DISC (5 min)'},
      {t:'Postar respostas + gráfico na plataforma'},
      {t:'Onboarding: diagnóstico e plano, juntos'} ] },

  { tipo:'fim',
    titulo:'Responde essa semana.',
    rodape:'A qualidade da 1ª sessão é proporcional à honestidade das respostas' }
];
