/* Aula 0.4 — Auto-liderança e metas. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'Auto-liderança', destaque:'e metas',
    sub:'Seja o leader da sua própria carreira.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Você planeja o sprint toda semana',
    sub:'quando foi a última vez que planejou a SUA carreira com o mesmo rigor?' },

  /* ninguém vai fazer por você */
  { tipo:'lista', revela:false, badge:'A VERDADE',
    titulo:'Ninguém vai fazer esse roadmap por você',
    itens:[
      {t:'Seu gestor não vai', d:'ele tem 8 diretos e as prioridades dele'},
      {t:'A empresa não vai', d:'o plano dela é pra ela, não pra você'},
      {t:'Sobra uma pessoa', d:'auto-liderança = ser o tech lead da própria carreira'} ] },

  /* o framework */
  { tipo:'agenda', badge:'O FRAMEWORK',
    titulo:'4 blocos',
    itens:[
      {k:'META',    d:'direção de vida: o que o trabalho te dá, dinheiro, autonomia, tempo?'},
      {k:'ESTADO',  d:'diagnóstico honesto: cargo, competências, visibilidade, escrito, dinheiro'},
      {k:'OBJETIVO',d:'12–24 meses, específico e verificável'},
      {k:'PASSOS',  d:'a lacuna quebrada em ações de 30–90 dias'} ] },

  /* diagrama: blocos + loop */
  { tipo:'foto', badge:'O FRAMEWORK', contain:true,
    titulo:'Os 4 blocos ligados ao loop',
    img:'assets/framework-4-blocos.svg' },

  /* erros clássicos */
  { tipo:'lista', revela:false, badge:'ERROS CLÁSSICOS',
    titulo:'Onde quase todo mundo quebra',
    itens:[
      {t:'Objetivo sem estado atual', d:'vira sonho: sem ponto de partida não há rota'},
      {t:'Passos sem objetivo', d:'vira scholar: curso atrás de curso sem direção'},
      {t:'Sem meta, promoção vira troféu vazio', d:'você chega e pergunta "era isso?"'} ] },

  /* objetivo bem escrito */
  { tipo:'foto', badge:'ANTES × DEPOIS', contain:true,
    titulo:'Objetivo que funciona',
    img:'assets/objetivo-antes-depois.svg' },

  /* o loop da carreira */
  { tipo:'loop', badge:'O LOOP',
    titulo:'Cada ciclo de 30–90 dias é uma volta',
    itens:['Meta','Estado atual','Objetivo','Passos','Resultado'] },

  /* exemplo real 1 */
  { tipo:'cronologia', revela:false, badge:'EXEMPLO REAL · GESTÃO',
    titulo:'Sênior → Tech Lead em 9 meses',
    itens:[
      {t:'Estado: forte tecnicamente, zero liderança, gestor nem sabe da ambição'},
      {t:'Volta 1: contar a ambição no 1:1'},
      {t:'Volta 1: onboarding do próximo dev + 1 iniciativa ponta a ponta'},
      {t:'Volta 2: feedback estruturado, medir, mostrar resultado', cycle:true},
      {t:'Pedir a próxima responsabilidade'} ] },

  /* exemplo real 2 */
  { tipo:'pilar', badge:'EXEMPLO REAL · DESENVOLVEDOR',
    titulo:'Pleno-sênior → Staff',
    sub:'lacuna mapeada: só resolve problema do próprio squad',
    bullets:[
      {t:'Passar autonomia através de treinamentos', d:'sair do dia a dia do squad'},
      {t:'Apresentar em guild', d:'visibilidade técnica além do time'},
      {t:'Virar referência num domínio', d:'o nome que vem à cabeça quando o assunto aparece'} ] },

{ tipo:'pilar', badge:'EXEMPLO REAL · DESENVOLVEDOR',
    titulo:'Dinheiro',
    sub:'Dinheiro possibilita planos ousados',
    bullets:[
      {t:'Fazer um curso ou mentoria', d:''},
      {t:'Pular pra outra empresa e ganhar menos'},
      {t:'Ser mais "agressivo" no trabalho'} ] },
	  
  /* teste do passo bom */
  { tipo:'divisor',
    titulo:'O teste do passo bom',
    sub:'em 90 dias dá pra dizer "fiz ou não fiz" e "funcionou ou não"? se não, o passo está mal escrito' },

  /* anti-sabotagem */
  { tipo:'divisor',
    titulo:'Meta grande assusta',
    sub:'"será que sou capaz?" Por isso o sistema só te pede o próximo passo de 30 dias, nunca o salto inteiro' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Ainda hoje',
    texto:'Versão feia em 25 minutos vale mais que versão perfeita nunca:',
    itens:[
      {k:'PREENCHER', d:'o template dos 4 blocos: Meta, Estado, Objetivo, Passos'},
      {k:'VOLTA 1',   d:'definir a primeira ação de 30 dias'},
      {k:'AGENDAR',   d:'checkpoint de medição no calendário'} ] },

  { tipo:'fim',
    titulo:'Meta definida. O inimigo agora é interno.',
    rodape:'Próximo: mentalidade · Martin Fabichak · DevAdvance.club' }
];
