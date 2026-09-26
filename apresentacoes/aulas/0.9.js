/* Aula 0.9 — Auto-liderança e metas. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'Auto-liderança', destaque:'e metas',
    sub:'Seja o tech lead da sua própria carreira.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Você planeja o sprint do time toda semana',
    sub:'quando foi a última vez que planejou a SUA carreira com o mesmo rigor?' },

  /* auto-liderança */
  { tipo:'lista', revela:false, badge:'AUTO-LIDERANÇA',
    titulo:'Ninguém vai fazer esse roadmap por você',
    itens:[
      {t:'Seu gestor não vai', d:'ele tem 8 diretos e as prioridades dele'},
      {t:'Tech lead da própria carreira', d:'o roadmap é seu'},
      {t:'Liderar o próprio estado emocional', d:'também é auto-liderança'} ] },

  /* o framework */
  { tipo:'agenda', badge:'O FRAMEWORK',
    titulo:'4 blocos, cada um com seu horizonte',
    itens:[
      {k:'META',      d:'destino final, prazo seu (1 a 15 anos): cargo, dinheiro, tempo livre, liberdade geográfica, autonomia, reconhecimento'},
      {k:'ESTADO',    d:'cargo, competências (mapa do 0.4), visibilidade, rede, salário, dinheiro guardado'},
      {k:'OBJETIVOS', d:'1 ano, específicos e verificáveis'},
      {k:'TAREFAS',   d:'de 1 dia a 3 meses'} ] },

  /* de onde vêm as tarefas */
  { tipo:'divisor', badge:'COMO DESCOBRIR AS TAREFAS',
    titulo:'Top-3 lacunas (0.4) → tarefas',
    sub:'cada lacuna com KPI vira pelo menos uma tarefa' },

  /* erros clássicos */
  { tipo:'confronto', badge:'OS 2 ERROS CLÁSSICOS',
    itens:[
      {titulo:'Objetivo sem estado atual = sonho', icone:'☁'},
      {titulo:'Tarefas sem objetivo = busyness', icone:'↺'} ] },

  { tipo:'divisor',
    titulo:'Busyness',
    sub:'ocupado o tempo todo sem sair do lugar: curso atrás de curso sem direção' },

  /* objetivo bem escrito */
  { tipo:'confronto', badge:'OBJETIVO MAL × BEM ESCRITO',
    itens:[
      {titulo:'"Crescer na carreira"', icone:'✗'},
      {titulo:'"EM de um time de produto até dez/2027"', icone:'✓'} ] },

  /* ligação com o ciclo */
  { tipo:'cronologia', revela:false, badge:'O CICLO',
    titulo:'O objetivo de 1 ano roda em várias voltas',
    itens:[
      {t:'PREPARAR: escolhe as próximas tarefas'},
      {t:'AGIR: executa'},
      {t:'MOSTRAR: torna visível pra quem decide'},
      {t:'OTIMIZAR: mede, ajusta, fecha tarefas', cycle:true},
      {t:'Próxima volta, próximas tarefas'} ] },

  /* exemplo real 1 */
  { tipo:'cronologia', revela:false, badge:'EXEMPLO REAL · GESTÃO',
    titulo:'Meta: Head · Objetivo: TL em 9 meses',
    itens:[
      {t:'Estado: forte tecnicamente, zero liderança, gestor nem sabe da ambição'},
      {t:'Contar a ambição no 1:1 (1 dia)'},
      {t:'Assumir o onboarding do próximo dev (1 mês)'},
      {t:'Liderar uma iniciativa pequena de ponta a ponta (3 meses)', cycle:true},
      {t:'Feedback estruturado, mostrar resultado, pedir a próxima responsabilidade'} ] },

  /* exemplo real 2 */
  { tipo:'pilar', badge:'EXEMPLO REAL · TÉCNICA', tag:'LACUNA: SÓ RESOLVE O PRÓPRIO SQUAD',
    titulo:'Pleno-sênior → Staff',
    bullets:[
      {t:'1 RFC cross-team por trimestre', d:'RFC = proposta técnica aberta pra outros times comentarem'},
      {t:'Apresentar numa guild', d:'guild = grupo de devs de vários times em torno de um tema, tipo frontend ou dados'},
      {t:'Virar referência num domínio', d:'o nome que vem à cabeça quando o assunto aparece'} ] },

  /* dinheiro */
  { tipo:'pilar', badge:'POR QUE DINHEIRO IMPORTA',
    titulo:'Dinheiro guardado = margem pra arriscar',
    bullets:[
      {t:'Mudar de área'},
      {t:'Aceitar um salário menor'},
      {t:'Investir em curso'} ] },

  /* tarefa boa */
  { tipo:'divisor', badge:'O TESTE DA TAREFA BOA',
    titulo:'Chegou o prazo: fiz ou não fiz? Funcionou ou não?',
    sub:'se não dá pra responder, a tarefa está mal escrita' },

  /* anti-sabotagem */
  { tipo:'divisor', badge:'ANTI-SABOTAGEM',
    titulo:'Meta grande assusta',
    sub:'"será que sou capaz?" Por isso o sistema só te pede a próxima tarefa, nunca o salto inteiro' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Escreva a sua meta',
    itens:[
      {k:'MENTORIA',   d:'só a meta. Objetivos e tarefas a gente fecha no 1:1 de onboarding'},
      {k:'SÓ VÍDEOS',  d:'meta, objetivos e tarefas: tudo na ficha do próximo vídeo (0.10)'} ] },

  { tipo:'fim',
    titulo:'Meta definida. Agora vai tudo pro papel.',
    rodape:'Próximo: o Mapa da Jornada e a ficha de onboarding' }
];
