/* Aula 0.4 — Autodiagnóstico de carreira. 1 objeto por slide. Edite só aqui. Esboço: esbocos/0.4-autodiagnostico-de-carreira.md */
window.SLIDES = [

  { tipo:'capa',
    selo:'Bloco 0 · Onboarding',
    titulo:'O autodiagnóstico', destaque:'de carreira',
    sub:'Quase ninguém falta em tudo. Falta em 2 ou 3 coisas específicas.',
    rodape:'Martin Fabichak · DevAdvance.club' },

  /* gancho */
  { tipo:'divisor',
    titulo:'"Não sei o que falta pro próximo passo"',
    sub:'a frase que mais escuto, de estagiário a sênior. O problema é não saber QUAIS 2 ou 3 coisas' },

  /* esforço aleatório */
  { tipo:'confronto', badge:'DIAGNÓSTICO RUIM = ESFORÇO ALEATÓRIO',
    itens:[
      {titulo:'Mais um curso, certificado, pós, horas', icone:'✗'},
      {titulo:'Atacar a lacuna que segura o próximo passo', icone:'✓'} ] },

  /* pirâmide ≠ mapa */
  { tipo:'confronto', badge:'NÃO CONFUNDA',
    itens:[
      {titulo:'Pirâmide: o que a mentoria ensina', icone:'▲'},
      {titulo:'Mapa: como você analisa sua carreira', icone:'◎'} ] },

  /* ferramenta 1: mapa */
  { tipo:'agenda', badge:'FERRAMENTA 1',
    titulo:'Mapa de competências: 4 domínios',
    texto:'Serve pras 3 trilhas. Muda o peso de cada domínio.',
    itens:[
      {k:'TÉCNICO',     d:'profundidade na stack, qualidade de código, visão de sistema'},
      {k:'EXECUÇÃO',    d:'priorização, entrega previsível, autonomia, delegar (se lidera)'},
      {k:'COMUNICAÇÃO', d:'PR claro, feedback, se posicionar em reunião, negociar prazo, outras áreas, valor de negócio'},
      {k:'CARREIRA',    d:'visibilidade, rede, clareza de destino, clareza de tarefas'} ] },

  /* como preencher */
  { tipo:'lista', revela:false, badge:'COMO PREENCHER',
    titulo:'Duas colunas, régua honesta',
    itens:[
      {t:'Nota 1–5 em cada competência'},
      {t:'Coluna 1', d:'sua autoavaliação'},
      {t:'Coluna 2', d:'a régua do próximo passo que VOCÊ quer dar, não a média do mercado'},
      {t:'Calibre com 2–3 pessoas', d:'gestor, par, alguém que revisa seu código'} ] },

  /* dunning-kruger */
  { tipo:'foto', badge:'PONTO CEGO · DUNNING-KRUGER', contain:true,
    titulo:'Quem sabe pouco se superestima. Quem sabe muito se subestima',
    img:'assets/dunning-kruger.png' },

  { tipo:'divisor',
    titulo:'Por isso você precisa de nota externa',
    sub:'onde a percepção dos outros diverge da sua, mora o ponto cego. Aprofundamos em 1.2' },

  /* mensagem-modelo */
  { tipo:'agenda', badge:'MENSAGEM-MODELO',
    titulo:'Pedindo calibração sem constrangimento',
    texto:'"Tô fazendo um diagnóstico de carreira e sua visão vale muito. Pode me dar nota de 1 a 5 nessas competências? Leva 5 minutos, e pode ser sincero."',
    itens:[
      {k:'QUEM',  d:'gestor, par, alguém que revisa seu código'},
      {k:'O QUÊ', d:'as mesmas competências do seu mapa'},
      {k:'QUANDO',d:'esta semana'} ] },

  /* exemplos reais */
  { tipo:'agenda', badge:'EXEMPLO REAL 1 · PLENO',
    titulo:'2 anos de casa',
    itens:[
      {k:'MAPA',  d:'técnica 3/5 · comunicação 2/5 · visibilidade 2/5'},
      {k:'KPI 1', d:'1 tech talk interno'},
      {k:'KPI 2', d:'1 PR grande revisado sem retrabalho'},
      {k:'KPI 3', d:'1 conversa de carreira agendada com o gestor'} ] },

  { tipo:'agenda', badge:'EXEMPLO REAL 2 · SÊNIOR → GESTÃO',
    titulo:'Mesmo formato, peso diferente',
    itens:[
      {k:'MAPA',  d:'técnica 4/5 · delegação 2/5 · visibilidade com stakeholders 2/5'},
      {k:'POR QUÊ',d:'a trilha escolhida é outra, então o peso de cada domínio muda'} ] },

  /* ferramenta 2 */
  { tipo:'lista', revela:false, badge:'FERRAMENTA 2',
    titulo:'Top-3 lacunas com KPI',
    itens:[
      {t:'KPI', d:'um número que dá pra checar. Outra pessoa conseguiria verificar'},
      {t:'Só 3 lacunas', d:'maior gap ponderado pelo impacto no próximo passo (trilha: 0.5 e 0.6)'},
      {t:'Atacar 8 lacunas = atacar nenhuma'},
      {t:'Comportamento também tem KPI', d:'frequência + feedback observável, não sentimento'} ] },

  /* KPI bom vs ruim */
  { tipo:'confronto', badge:'KPI RUIM × KPI BOM',
    itens:[
      {titulo:'"Melhorar comunicação"', icone:'✕'},
      {titulo:'1 update/mês pro time, feedback ≥4/5', icone:'✓'} ] },

  /* anti-sabotagem */
  { tipo:'divisor',
    titulo:'Lacuna mapeada é lacuna com plano',
    sub:'a alternativa é a ansiedade difusa de "falta algo e não sei o quê"' },

  /* pra onde vai */
  { tipo:'cronologia', revela:false, badge:'PRA ONDE VAI',
    titulo:'O diagnóstico alimenta o resto do bloco',
    itens:[
      {t:'Top-3 lacunas com KPI'},
      {t:'Meta, objetivos e tarefas (0.9)'},
      {t:'Ficha de onboarding (0.10)'} ] },

  /* ação prática */
  { tipo:'agenda', badge:'AÇÃO',
    titulo:'Esta semana',
    itens:[
      {k:'30 MIN',   d:'preencha o mapa de competências'},
      {k:'2 PESSOAS',d:'peça calibração externa nas mesmas competências'},
      {k:'TOP-3',    d:'escreva as 3 lacunas com KPI e guarde'} ] },

  { tipo:'fim',
    titulo:'Diagnóstico pronto. Agora falta saber pra onde ir.',
    rodape:'Próximo: o mapa das 3 trilhas' }
];
