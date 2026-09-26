/* Aula 0.8 — As armadilhas que travam carreira. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'As armadilhas que', destaque:'travam carreira',
    sub:'Nenhuma delas tem a ver com código.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'O técnico é necessário, mas não é suficiente.',
    sub:'quanto mais você sobe, menos ele sozinho explica quem cresce e quem trava' },

  /* problema */
  { tipo:'lista', revela:false, badge:'O PROBLEMA',
    titulo:'O que trava não tá no editor de código',
    itens:[
      {t:'Dev bom acha que o problema é sempre técnico', d:'então resolve tudo estudando mais'},
      {t:'O que trava está em comportamentos invisíveis'},
      {t:'Anota em quais você se reconhece', d:'vai pra ficha de onboarding (0.10)'} ] },

  /* o que toda trilha exige */
  { tipo:'agenda', badge:'TÉCNICA, GESTÃO OU EMPREENDEDORA',
    titulo:'O que toda trilha exige',
    itens:[
      {k:'COMUNICAÇÃO',    d:'trabalho em grupo é mais valioso do que nunca'},
      {k:'LIDERANÇA',      d:'de pessoas, de situações ou de processos'},
      {k:'NETWORKING',     d:'grande parte das vagas altas não passa pelo LinkedIn'},
      {k:'VISIBILIDADE',   d:'mostrar seu trabalho é obrigatório'},
      {k:'AUTO-LIDERANÇA', d:'o seu emocional vai ditar como você é visto'} ] },

  /* armadilha 1 */
  { tipo:'pilar', badge:'ARMADILHA · PONTO CEGO', tag:'BAIXA AUTO-ESTIMA E AUTO-SABOTAGEM',
    titulo:'"Será que eu sou bom o suficiente?"',
    sub:'sintoma → custo → antídoto',
    bullets:[
      {t:'Sintoma', d:'não aplica "porque não preenche 100% dos requisitos", adia a entrevista "porque não tá pronto"'},
      {t:'Custo', d:'não aplica, não pede aumento, aceita menos do que vale. Entrevista vira evento raro'},
      {t:'Antídoto 1', d:'evidência escrita: o que você resolveu, com o número de antes e depois'},
      {t:'Antídoto 2', d:'fazer entrevistas sempre. Entrevista é treino'} ] },

  /* checklist entrevista é treino */
  { tipo:'cronologia', revela:false, badge:'ENTREVISTA É TREINO',
    titulo:'O checklist',
    itens:[
      {t:'Ache vagas parecidas com o que você quer'},
      {t:'Ordene os requisitos por prioridade'},
      {t:'Estude o que você não sabe'},
      {t:'Aplique pra todas as vagas parecidas'},
      {t:'Grave as entrevistas só pra você revisar. Nunca publique'},
      {t:'Anote todas as perguntas e responda de novo'} ] },

  /* armadilha 2 */
  { tipo:'pilar', badge:'ARMADILHA · PONTO CEGO', tag:'NÃO OCUPAR ESPAÇO',
    titulo:'Não arriscar, não pedir',
    sub:'sintoma → custo → antídoto',
    bullets:[
      {t:'Sintoma', d:'acredita que o trabalho vai ser visto e recompensado só porque é bom'},
      {t:'Custo', d:'fica no mesmo lugar, vendo colegas menos capazes sendo promovidos'},
      {t:'Antídoto', d:'ocupar espaço e ser visto. Lembra do 0.7: tome reconhecimento'} ] },

  /* armadilha 3 */
  { tipo:'pilar', badge:'ARMADILHA · PONTO CEGO', tag:'FOCO SÓ NO TÉCNICO',
    titulo:'"Vou fazer mais um curso"',
    sub:'sintoma → custo → antídoto',
    bullets:[
      {t:'Sintoma', d:'mais um curso, framework, pós, sempre que a carreira trava. Confortável porque é o que você já sabe'},
      {t:'Custo', d:'ser passado pra trás por quem se comunica e aparece'},
      {t:'Antídoto', d:'liderança, comunicação e mentoria. Não escolha curso sem falar com alguém experiente'} ] },

  /* armadilha 4 */
  { tipo:'pilar', badge:'ARMADILHA · PONTO CEGO', tag:'FALTA DE NETWORKING',
    titulo:'Esperar ser descoberto',
    sub:'sintoma → custo → antídoto',
    bullets:[
      {t:'Sintoma', d:'acreditar que "bom trabalho fala por si"'},
      {t:'Custo', d:'vagas e promoções circulam por indicação antes de virar anúncio. Você nem sabe que existiram'},
      {t:'Antídoto', d:'network deliberado: interno (quem te indica, te ensina, fala bem de você numa sala que você não tá) e externo'} ] },

  { tipo:'divisor',
    titulo:'"Bom trabalho fala por si"',
    sub:'✗ é mentira' },

  /* armadilha 5 */
  { tipo:'pilar', badge:'ARMADILHA · PONTO CEGO', tag:'FALTA DE COMUNIDADE',
    titulo:'Carreira solo',
    sub:'sintoma → custo → antídoto',
    bullets:[
      {t:'Sintoma', d:'ninguém pra comparar nota'},
      {t:'Custo', d:'ponto cego permanente: não sabe se ganha bem, se está no nível certo, se a decisão faz sentido'},
      {t:'Antídoto', d:'comunidade certa: pares alguns passos à frente ou vivendo o mesmo momento'} ] },

  /* exemplo real: funil */
  { tipo:'cronologia', revela:true, badge:'EXEMPLO REAL · MEU FUNIL PRA EUROPA',
    titulo:'6 meses',
    itens:[
      {t:'110 CVs enviados'},
      {t:'81 primeiras entrevistas'},
      {t:'57 testes técnicos'},
      {t:'4 ofertas'} ] },

  { tipo:'divisor',
    titulo:'130 entrevistas no total',
    sub:'somando todas as etapas. Resiliência não é dom, é repetição' },

  /* como sair */
  { tipo:'lista', revela:false, badge:'COMO SAIR',
    titulo:'Armadilha de comportamento raramente se resolve sozinha',
    itens:[
      {t:'Terapia'},
      {t:'Comunidade'},
      {t:'Falar com pessoas experientes'} ] },

  /* autodiagnóstico */
  { tipo:'lista', revela:false, badge:'AUTODIAGNÓSTICO',
    titulo:'Em quais eu me reconheço?',
    itens:[
      {t:'☐ Baixa auto-estima e auto-sabotagem'},
      {t:'☐ Não arriscar, não pedir, não ocupar espaço'},
      {t:'☐ Foco só no técnico'},
      {t:'☐ Falta de networking'},
      {t:'☐ Falta de comunidade'},
      {t:'Escolha as 2 que mais pegam', d:'vão pra ficha de onboarding (0.10)'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Escreva as 2 armadilhas que mais pegam você hoje',
    texto:'Com um exemplo concreto de cada: a vaga que não aplicou, a conversa que evitou, o aumento que não pediu.',
    itens:[
      {k:'ARMADILHA 1', d:'+ exemplo concreto'},
      {k:'ARMADILHA 2', d:'+ exemplo concreto'} ] },

  { tipo:'fim',
    titulo:'Você acabou de identificar onde trava.',
    rodape:'Próximo: auto-liderança e metas' }
];
