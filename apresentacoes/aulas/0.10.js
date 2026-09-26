/* Aula 0.10 — Mapa da Jornada + ficha de onboarding (inclui DISC). Última aula do Bloco 0. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'Mapa da Jornada', destaque:'+ ficha de onboarding',
    sub:'Você sai daqui com um documento, não com mais uma ideia solta na cabeça.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Diagnóstico, trilha, dinheiro, armadilhas e metas',
    sub:'agora vai tudo pro papel, num documento só. É ele que a gente usa no seu onboarding 1:1' },

  /* problema */
  { tipo:'lista', revela:false, badge:'O PROBLEMA',
    titulo:'Quase ninguém escreve o próprio plano de carreira',
    itens:[
      {t:'Fica tudo na cabeça', d:'meio decidido, meio adiado'},
      {t:'Plano que só existe na cabeça', d:'é esquecido na primeira semana corrida'},
      {t:'Sem diagnóstico honesto', d:'o plano de ação do 1:1 é chute'} ] },

  /* contrato */
  { tipo:'divisor', badge:'O CONTRATO (0.2)',
    titulo:'Responda o que É, não o que gostaria que fosse',
    sub:'ninguém além de nós lê. Pergunta sem sentido, deixa em branco: não existe resposta errada' },

  /* o documento */
  { tipo:'agenda', badge:'O DOCUMENTO',
    titulo:'4 partes',
    texto:'Arquivo → Fazer uma cópia e escreva direto nele. Dica: dite com o Wispr Flow (tier gratuito generoso).',
    itens:[
      {k:'1 · MAPA',      d:'onde estou, trilha, destino final, 2 armadilhas'},
      {k:'2 · PERGUNTAS', d:'contexto, feedbacks, tempo, comportamento, saúde'},
      {k:'3 · DISC',      d:'teste de perfil comportamental, 5 minutos'},
      {k:'4 · META',      d:'meta, objetivos e tarefas'} ] },

  /* 2 caminhos */
  { tipo:'confronto', badge:'DOIS CAMINHOS',
    itens:[
      {titulo:'Mentoria: só a meta, o resto no 1:1', icone:'1:1'},
      {titulo:'Só vídeos: tudo + vídeo no Discord', icone:'▶'} ] },

  /* mapa: 4 passos */
  { tipo:'agenda', badge:'MAPA · PASSO 1',
    titulo:'Onde estou',
    texto:'Sem se vender pra você mesmo.',
    itens:[
      {k:'CARGO',     d:'e salário atual'},
      {k:'DINHEIRO',  d:'guardado: quantos meses fica OK sem trabalhar?'},
      {k:'FORÇA',     d:'a maior'},
      {k:'LACUNAS',   d:'top-3 com KPI, do autodiagnóstico (0.4)'} ] },

  { tipo:'agenda', badge:'MAPA · PASSO 2',
    titulo:'Minha trilha',
    texto:'As perguntas do 0.5 e 0.6. Não precisa ter certeza, precisa ser honesto.',
    itens:[
      {k:'HOJE',     d:'trilha atual, escolhi ou foi escolhida, gosto, sou bom'},
      {k:'DIAS',     d:'dia muito bom, dia muito ruim, o que não gosto de fazer'},
      {k:'PRA ONDE', d:'meta final e próximo passo, sempre com o por quê'} ] },

  { tipo:'agenda', badge:'MAPA · PASSO 3',
    titulo:'Destino final',
    texto:'Em 1 ano ou em 15: o prazo é seu.',
    itens:[
      {k:'CARGO',   d:'e faixa salarial, com o número'},
      {k:'ONDE',    d:'empresa, país, segmento, formato'},
      {k:'POR QUÊ', d:'e o que falta pra chegar lá'},
      {k:'EMPRESA', d:'a atual comporta esse destino? ou preciso trocar?'},
      {k:'SENTIR',  d:'se magicamente já estivesse lá, o que sentiria?'} ] },

  { tipo:'confronto', badge:'PASSO 3 · COMPROMISSO PSICOLÓGICO',
    itens:[
      {titulo:'"Queria ganhar mais"', icone:'?'},
      {titulo:'"R$ X até tal ano"', icone:'#'} ] },

  { tipo:'agenda', badge:'MAPA · PASSO 4',
    titulo:'Minhas 2 armadilhas',
    texto:'Das 5 do 0.8.',
    itens:[
      {k:'QUAIS',  d:'as 2 que te pegam hoje'},
      {k:'COMO',   d:'como cada uma aparece no seu dia a dia'},
      {k:'PLANO',  d:'como você pretende lidar com elas'} ] },

  /* de onde vem cada campo */
  { tipo:'agenda', badge:'DE ONDE VEM',
    titulo:'O Bloco 0 inteiro cabe aqui',
    itens:[
      {k:'ONDE ESTOU', d:'0.4'},
      {k:'TRILHA',     d:'0.5 e 0.6'},
      {k:'SALÁRIO',    d:'0.7'},
      {k:'ARMADILHAS', d:'0.8'},
      {k:'META',       d:'0.9'} ] },

  /* perguntas */
  { tipo:'agenda', badge:'PARTE 2 · PERGUNTAS',
    titulo:'A intenção de cada bloco',
    itens:[
      {k:'CONTEXTO',      d:'cargo real vs formal, as 2 dores do 0.1, se lidera: de onde você parte'},
      {k:'FEEDBACKS',     d:'chefe e time: a régua externa que você nunca olhou de frente'},
      {k:'TEMPO',         d:'código vs gestão vs reunião: onde sua semana vaza'},
      {k:'COMPORTAMENTO', d:'o que repete, o que te dá raiva: as armadilhas que você não escreveu'},
      {k:'SAÚDE',         d:'horas, sono, férias: performance sustentável, não sprint eterno'} ] },

  { tipo:'agenda', badge:'CAPRICHA',
    titulo:'Resposta boa × resposta vaga',
    itens:[
      {k:'VAGA', d:'"lidero algumas pessoas"'},
      {k:'BOA',  d:'"lidero 4 devs direto, 2 indireto via par"'} ] },

  /* DISC */
  { tipo:'lista', revela:false, badge:'PARTE 3 · DISC',
    titulo:'DISC em 1 minuto',
    itens:[
      {t:'4 fatores', d:'Dominância, Influência, eStabilidade, Conformidade'},
      {t:'Mede COMO você tende a agir', d:'não o que você é capaz, nem qual trilha seguir'},
      {t:'Por que uso', d:'linguagem comum pra falar de perfil, não caixinha'} ] },

  { tipo:'foto', badge:'DISC · COMO LER', contain:true,
    titulo:'Sem perfil bom ou ruim: cada um tem superpoder e armadilha',
    img:'assets/disc-quadrantes.svg' },

  { tipo:'agenda', badge:'DISC · COMUNICAÇÃO',
    titulo:'Como falar com cada perfil',
    itens:[
      {k:'PAR D',    d:'bullet points, direto ao resultado'},
      {k:'COLEGA I', d:'energia, contexto, espaço pra falar'},
      {k:'COLEGA S', d:'segurança antes da mudança'},
      {k:'GESTOR C', d:'dados, critérios, tempo pra analisar'} ] },

  { tipo:'confronto', badge:'DISC · TENDÊNCIA, NÃO TETO',
    itens:[
      {titulo:'Certo: prever suas armadilhas e adaptar a comunicação', icone:'✓'},
      {titulo:'Errado: "sou C, não falo em público"', icone:'✗'} ] },

  { tipo:'lista', revela:false, badge:'DISC · O TESTE',
    titulo:'5 minutos',
    itens:[
      {t:'Faça o teste', d:'link no documento'},
      {t:'Cole o gráfico e a explicação do seu perfil', d:'na parte 3'},
      {t:'Na mentoria', d:'interpretamos juntos no 1:1'} ] },

  /* parte 4 */
  { tipo:'agenda', badge:'PARTE 4 · FRAMEWORK DO 0.9',
    titulo:'Meta, objetivos e tarefas',
    itens:[
      {k:'META',      d:'destino final em 1 frase · prazo seu'},
      {k:'OBJETIVOS', d:'1 ano · mentoria: fazemos juntos no 1:1'},
      {k:'TAREFAS',   d:'1 dia a 3 meses · mentoria: fazemos juntos no 1:1'} ] },

  /* exemplo real */
  { tipo:'cronologia', revela:false, badge:'EXEMPLO REAL · MARTIN, 2015',
    titulo:'Se eu tivesse preenchido antes da Alemanha',
    itens:[
      {t:'Trilha técnica: já tinha passado'},
      {t:'Trilha empreendedora: o estúdio de jogos'},
      {t:'Trilha: "ainda explorando". Voltar a empreender ou ir pra gestão?'},
      {t:'Na Alemanha, a trilha de gestão ficou clara'} ] },

  { tipo:'divisor',
    titulo:'O mapa não começa com certeza',
    sub:'começa com honestidade' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Faça a cópia agora',
    itens:[
      {k:'HOJE',      d:'o Mapa da Jornada, enquanto está fresco'},
      {k:'ANTES 1:1', d:'perguntas, DISC e meta'},
      {k:'90 DIAS',   d:'volta no mapa e vê o que mudou'} ] },

  /* checklist final */
  { tipo:'agenda', badge:'BLOCO 0 CONCLUÍDO',
    titulo:'E agora',
    itens:[
      {k:'MENTORIA',  d:'documento preenchido → 1:1 de onboarding → aulas da sua fase + pod'},
      {k:'SÓ VÍDEOS', d:'documento completo → vídeo no Discord → aulas pelas suas lacunas (0.4) e trilha (0.5)'} ] },

  { tipo:'fim',
    titulo:'A qualidade da sua primeira sessão é proporcional à honestidade dessas respostas.',
    rodape:'Te vejo no 1:1 · Bloco 0 concluído' }
];
