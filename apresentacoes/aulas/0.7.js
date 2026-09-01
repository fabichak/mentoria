/* Aula 0.7 — Autodiagnóstico do líder. 1 objeto por slide. Edite só aqui. */
window.SLIDES = [

  { tipo:'capa',
    selo:'Fase 0 · Fundamentos',
    titulo:'O autodiagnóstico', destaque:'do líder',
    sub:'Quase ninguém falta em tudo. Falta em 2 ou 3 coisas específicas.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'"Não sei o que falta pro próximo nível"',
    sub:'a frase que mais escuto de sênior. O problema é não saber QUAIS 2 ou 3 coisas' },

  /* esforço aleatório */
  { tipo:'lista', revela:false, badge:'O CUSTO',
    titulo:'Diagnóstico ruim = esforço aleatório',
    itens:[
      {t:'Mais um curso'},
      {t:'Mais uma cert'},
      {t:'Mais horas'},
      {t:'Sem atacar a lacuna que segura a promoção'} ] },

  /* ferramenta 1: mapa */
  { tipo:'agenda', badge:'FERRAMENTA 1',
    titulo:'Mapa de competências: 4 domínios',
    itens:[
      {k:'TÉCNICO',    d:'arquitetura, qualidade, visão de sistema, o que te trouxe até aqui'},
      {k:'EXECUÇÃO',   d:'priorização, entrega previsível, gestão de risco'},
      {k:'PESSOAS',    d:'feedback, delegação, desenvolvimento do time, conflito'},
      {k:'INFLUÊNCIA', d:'stakeholders, visibilidade, negociação, escrita'} ] },

  /* como preencher */
  { tipo:'lista', revela:false, badge:'COMO PREENCHER',
    titulo:'Duas colunas, régua honesta',
    itens:[
      {t:'Nota 1–5 em cada competência'},
      {t:'Compare com a régua do PRÓXIMO nível', d:'não do atual'},
      {t:'Calibre com 2–3 pessoas', d:'gestor, par, liderado, mesmas competências'},
      {t:'Onde a percepção externa diverge da sua', d:'mora o ponto cego (Dunning-Kruger, aula 0.5)'} ] },

  /* exemplo real */
  { tipo:'foto', badge:'CASO REAL', contain:true,
    titulo:'TL recém-promovido',
    img:'assets/mapa-competencias.svg' },

  /* ferramenta 2 */
  { tipo:'lista', revela:false, badge:'FERRAMENTA 2',
    titulo:'Top-3 lacunas com KPI',
    itens:[
      {t:'Só 3 lacunas', d:'maior gap ponderado pelo impacto na SUA trilha (aula 0.3)'},
      {t:'Atacar 8 lacunas = atacar nenhuma'},
      {t:'Cada lacuna vira frase com KPI', d:'frequência + feedback observável, não sentimento'} ] },

  /* KPI bom vs ruim */
  { tipo:'confronto', badge:'KPI RUIM × KPI BOM',
    itens:[
      {titulo:'"Melhorar comunicação"', icone:'✕'},
      {titulo:'1 update executivo/mês, feedback ≥4/5', icone:'✓'} ] },

  /* ferramenta 3: DISC */
  { tipo:'foto', badge:'FERRAMENTA 3', contain:true,
    titulo:'DISC: como você tende a agir',
    img:'assets/disc-quadrantes.svg' },

  /* uso certo vs errado */
  { tipo:'lista', revela:false, badge:'DISC NA PRÁTICA',
    titulo:'Uso certo × uso errado',
    itens:[
      {t:'Certo: prever suas armadilhas sob pressão'},
      {t:'Certo: adaptar comunicação a perfis diferentes', d:'gestor D quer bullets; liderado S quer segurança'},
      {t:'Errado: virar desculpa', d:'"sou C, não falo em público"'},
      {t:'Errado: caixa pra rotular colegas', d:'DISC descreve tendência, não teto'} ] },

  /* anti-sabotagem */
  { tipo:'divisor',
    titulo:'Lacuna mapeada é lacuna com plano',
    sub:'a alternativa é a ansiedade difusa de "falta algo e não sei o quê"' },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Esta semana',
    itens:[
      {k:'30 MIN',   d:'preencha o mapa de competências'},
      {k:'2 PESSOAS',d:'peça calibração externa nas mesmas competências'},
      {k:'TOP-3',    d:'escreva as 3 lacunas com KPI e cole no topo do Problem Journal'} ] },

  { tipo:'fim',
    titulo:'Diagnóstico pronto. Agora falta tempo e energia pra executar.',
    rodape:'Próximo: alta performance e gestão de tempo' }
];
