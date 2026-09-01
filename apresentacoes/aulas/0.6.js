/* Aula 0.6 — Problem Journal. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'O hábito central:', destaque:'Problem Journal',
    sub:'O registro que vira promoção, entrevista e 1:1.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'Chega a rodada de promoção…',
    sub:'você não lembra metade do que fez. seu gestor lembra menos ainda. o impacto evaporou' },

  /* problema, não tarefa */
  { tipo:'lista', revela:false, badge:'A UNIDADE DE VALOR',
    titulo:'Por que PROBLEM, não task journal',
    itens:[
      {t:'Tarefa concluída ninguém promove'},
      {t:'Problema resolvido com resultado, sim'},
      {t:'A unidade de valor do líder é o problema'} ] },

  /* template */
  { tipo:'agenda', badge:'O TEMPLATE',
    titulo:'4 campos, sem firula',
    itens:[
      {k:'PROBLEMA', d:'o que estava quebrado, vago ou custando caro, e por que importa'},
      {k:'HIPÓTESE', d:'o que você acredita que resolve e por quê: treina seu raciocínio de líder'},
      {k:'AÇÃO',     d:'o que você efetivamente fez: decisão, conversa, código, processo'},
      {k:'RESULTADO',d:'o que mudou, com número, inclusive "não funcionou, aprendi X"'} ] },

  /* exemplo preenchido */
  { tipo:'foto', badge:'EXEMPLO', contain:true,
    titulo:'Entrada preenchida',
    img:'assets/problem-journal-preenchido.svg' },

  /* exemplo não-técnico */
  { tipo:'agenda', badge:'NÃO É SÓ CÓDIGO',
    titulo:'Exemplo não-técnico',
    itens:[
      {k:'PROBLEMA', d:'reunião de planning durando 3h'},
      {k:'HIPÓTESE', d:'falta refinamento prévio'},
      {k:'AÇÃO',     d:'ritual de refinamento assíncrono'},
      {k:'RESULTADO',d:'planning em 1h'} ] },

  /* antes/depois */
  { tipo:'confronto', badge:'ANTES × DEPOIS',
    itens:[
      {titulo:'"Melhorei o deploy"', icone:'?'},
      {titulo:'0 incidentes em 6 semanas', icone:'#'} ] },

  /* regras do hábito */
  { tipo:'lista', revela:false, badge:'REGRAS',
    titulo:'O que faz o hábito colar',
    itens:[
      {t:'10 minutos por semana, dia fixo', d:'sexta antes de fechar o laptop, não é diário'},
      {t:'Registre problemas em andamento', d:'a hipótese existe antes do resultado'},
      {t:'Feio e escrito > bonito e imaginado', d:'uma linha por campo já vale'} ] },

  /* alimenta o método */
  { tipo:'foto', badge:'O MÉTODO', contain:true,
    titulo:'O journal alimenta as 4 fases',
    img:'assets/journal-4-fases.svg' },

  /* dores + uso avançado */
  { tipo:'lista', revela:false, badge:'POR QUE IMPORTA',
    titulo:'Evidência > sentimento',
    itens:[
      {t:'A resposta ao "será que sou bom o suficiente"', d:'você para de discutir com sentimento'},
      {t:'Antes de entrevista ou promoção', d:'filtre as 5 melhores entradas'},
      {t:'Cada entrada vira história', d:'problema → ação → resultado'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Crie o journal AGORA',
    texto:'Notion, doc, markdown, tanto faz. Registre as 2 primeiras entradas:',
    itens:[
      {k:'ENTRADA 1', d:'1 problema resolvido no último mês'},
      {k:'ENTRADA 2', d:'1 problema em andamento, com hipótese'} ] },

  { tipo:'fim',
    titulo:'Com o registro rodando, dá pra fazer diagnóstico de verdade.',
    rodape:'Próximo: o autodiagnóstico do líder' }
];
