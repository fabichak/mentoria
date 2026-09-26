/* Workshop — A Jornada do Desenvolvedor. 90min. 1 objeto por slide. Baseado em idea.md. */
window.SLIDES = [

  /* ===== A. ABERTURA (10min) ===== */

  { tipo:'capa',
    selo:'Workshop · 90 min',
    titulo:'A Jornada do', destaque:'Desenvolvedor',
    sub:'o mapa que ninguém te deu',
    rodape:'Martin Fabichak' },

  { tipo:'divisor',
    titulo:'Quantos empregos você realmente escolheu?',
    sub:'' },


  { tipo:'cronologia', revela:false, badge:'A HISTÓRIA',
    titulo:'O caminho até CTO',
    itens:[
      {t:'Flash/ActionScript adolescente → USP matemática → PHP/web'},
      {t:'Sócio de estúdio: Chico Bento, 5M+ jogadores, 1º jogo PSP da América Latina'},
      {t:'Alemanha: primeira vez que percebi que era bom — não só tecnicamente'},
      {t:'Chimera: Monopoly GO, head de múltiplas equipes'},
      {t:'CTO Magic Media: $25M vendidos, 150 engenheiros, 100+ contratações'},
	  {t:'Hoje: Empresário em 3 áreas diferentes'}  
	  ] },

  { tipo:'lista', revela:false, badge:'OS TROPEÇOS',
    titulo:'Nem tudo foi linear',
    itens:[
      {t:'Multiplos projetos cancelados', d:''},
      {t:'110 entrevistas', d:'pra conseguir a vaga na Europa'},
      {t:'Dev -> Tech lead -> Empresário -> dev -> tech lead -> dex -> head -> CTO -> Empresário', d:''} ] },

  { tipo:'divisor',
    titulo:'Passei pelos 3 caminhos: técnico, liderança, empreendedor.',
    sub:'vou te mostrar o mapa que eu não tive.' },

  /* ===== B. O MAPA: AS TRILHAS (15min) ===== */

  { tipo:'divisor',
    titulo:'Anota: Carreira não é escada',
    sub:'é mapa com várias rotas' },

  { tipo:'foto', badge:'O MAPA', contain:true,
    titulo:'As trilhas',
    img:'assets/trilhas-ic-gestao.svg' },

  { tipo:'agenda', badge:'TRILHA TÉCNICA',
    titulo:'Jr → Distinguished',
    texto:'o que muda em cada nível é o escopo de impacto',
    itens:[
      {k:'Jr → Pleno → Sr', d:'escopo: task → projeto'},
      {k:'Staff',          d:'escopo: time inteiro'},
      {k:'Principal / Distinguished', d:'escopo: org / indústria'} ] },

  { tipo:'lista', revela:false, badge:'MITO',
    titulo:'Staff+ não é "sênior mais rápido"',
    itens:[
      {t:'É influência técnica sem cargo', d:'decide direção sem gerir pessoas'} ] },

  { tipo:'agenda', badge:'TRILHA GESTÃO',
    titulo:'Sr → CTO',
    texto:'Troca de profissão',
    itens:[
      {k:'Sr → Tech Lead', d:'primeiro passo, ainda perto do código. Gestão de pessoas'},
      {k:'EM → Head',      d:'resultado através dos outros. Gestão de líderes'},
      {k:'Diretor → CTO',  d:'visão de negócio, não de stack. Gestão de todos'} ] },

  { tipo:'lista', revela:false, badge:'MITO',
    titulo:'Virar gestor não é necessariamente uma promoção',
    itens:[
      {t:'É mudança de profissão', d:'líder é papel, não cargo: dá pra começar hoje sem título'} ] },

  { tipo:'pilar', badge:'A PORTA LATERAL', tag:'Empreendedor',
    titulo:'3 formatos',
    sub:'risco alto, mas é a única trilha sem teto',
    bullets:[
      {t:'SaaS / produto próprio', d:'escala sem vender hora'},
      {t:'Consultoria / freela high-ticket', d:'vende expertise, não tempo'},
      {t:'Agência / estúdio', d:'história do Martin: Insolita'} ] },

{ tipo:'pilar', badge:'A PORTA LATERAL', tag:'Empreendedor',
    titulo:'Skills de um empreendedor',
    sub:'',
    bullets:[
      {t:'Venda', d:''},
      {t:'Marketing', d:''},
      {t:'Tributário, RH, Financeiro', d:''},
      {t:'Tecnologia é o que fica entre você e o dinheiro', d:''}] },

  { tipo:'lista', revela:false, badge:'A PONTE',
    titulo:'Mesmas skills, trilhas diferentes',
    itens:[
      {t:'O que te leva a Distinguished ou a CTO é o que te leva a empreender', d:'comunicação, visão de negócio, vendas. Liderança de pessoas, processos e situações'} ] },

  { tipo:'divisor',
    titulo:'Trocar de trilha ou voltar não é derrota',
    sub:'dev → lead → dev pode ser uma estratégia' },

  { tipo:'checkpoint',
    titulo:'Quem aqui já sabe qual trilha quer?' },

  /* ===== C. DINHEIRO (15min) ===== */

  { tipo:'divisor',
    titulo:'Dinheiro',
    sub:'salários BR e mundo' },

  { tipo:'agenda', badge:'CLT/PJ BRASIL',
    titulo:'Faixas por nível',
    itens:[
      {k:'Pleno',            d:'R$6–8k'},
      {k:'Sênior',           d:'R$8–12k'},
      {k:'Staff / Tech lead',     d:'R$12–20k'},
      {k:'Principal / CTO',  d:'R$30–60k+'} ] },

  { tipo:'agenda', badge:'REMOTO EXTERIOR',
    titulo:'USD por nível',
    itens:[
      {k:'Sênior',          d:'$3–6k/mês'},
      {k:'Staff / Head',    d:'$6–10k/mês'},
      {k:'Principal / CTO', d:'$11k+/mês'} ] },

  { tipo:'divisor',
    titulo:'O platô dos R$12k',
    sub:'onde a maioria dos sêniors trava: porque "só técnico" não sobe mais' },
	
	{ tipo:'lista', revela:false, badge:'Skills',
    titulo:'O que te leva ao próximo nívels',
    itens:[
      {t:'Liderança'},
      {t:'Soft-skill'},
      {t:'Intencionalidade'},
      {t:'Networking'},
      {t:'Visibilidade'},	  
	  ] },	
	

  { tipo:'lista', revela:false, badge:'O ELEFANTE NA SALA',
    titulo:'IA não substitui dev',
    itens:[
      {t:'IA não substitui', d:'julgamento, arquitetura, liderança, comunicação'} ] },
  
  /* ===== C. TABALHAR FORA ===== */
  { tipo:'divisor',
    titulo:'Trabalhar fora',
    sub:'' },

  { tipo:'lista', revela:false, badge:'3 CAMINHOS',
    titulo:'Como trabalhhar pro exterior',
    itens:[
      {t:'Remoto BR pra fora', d:'PJ / contractor'},
      {t:'Relocação', d:'visto'},
      {t:'Empresa global com escritório BR', d:'depois sair'} ] },

  { tipo:'lista', revela:false, badge:'CASE',
    titulo:'Meu caso',
    itens:[
      {t:'Pra chegar na Europa:', d:'resiliência não é dom, é repetição'},
      {t:'110 CVs enviados', d:''},
      {t:'81 primeiras entrevistas entrevistas', d:''},
      {t:'57 primeiros testes', d:''},
      {t:'130 entrevistas no geral', d:''},
      {t:'4 ofertas', d:''},
      {t:'6 meses', d:''},
	  ] },

  { tipo:'lista', revela:false, badge:'REALIDADE',
    titulo:'Sem romantizar',
    itens:[
      {t:'Inglês é o gate #1'},
      {t:'É funil de volume, não de sorte, e timing'},
      {t:'Custo de vida, distância, recomeço social'} ] },
	  
  { tipo:'lista', revela:false, badge:'REALIDADE',
    titulo:'Entrevista é treino',
    itens:[
      {t:'Ache vagas parecidas com o que você quer'},
      {t:'Ordene os requisitos por prioridade'},
      {t:'Estude o que você não sabe'},
      {t:'Se aplique pra todas as vagas parecidas'},
      {t:'Grave todas as entrevistas'},
      {t:'Anote todas as perguntas feitas e responda novamente'},
	  ] },	  

  /* ===== D. DESAFIOS DE CADA TRILHA (15min) ===== */

  { tipo:'divisor',
    titulo:'Os desafios de cada trilha',
    sub:'e o que elas têm em comum' },

  { tipo:'confronto', badge:'OS DESAFIOS',
    itens:[
      {titulo:'Técnica', icone:'</>'},
      {titulo:'Liderança', icone:'⚑'} ] },

  { tipo:'lista', revela:false, badge:'TRILHA TÉCNICA',
    titulo:'Onde a trilha técnica dói',
    itens:[
      {t:'Obsolescência', d:'Constante aprendizado'},
      {t:'Teto invisível', d:'de Sr pra Staff a barreira é liderança, não código'},
      {t:'Commodity trap', d:'ser só "mais um dev de X" na era da IA'} ] },

  { tipo:'lista', revela:false, badge:'TRILHA LIDERANÇA',
    titulo:'Onde a trilha de liderança dói',
    itens:[
      {t:'Luto do código', d:'você não "faz" mais, e demora a aceitar'},
      {t:'Impacto invisível', d:'seu resultado aparece nos outros, meses depois'},
      {t:'Sanduíche', d:'pressão de cima + expectativa de baixo'},
      {t:'Conversas difíceis', d:'feedback, demissão, conflito'},
      {t:'Pode não ser tão excitante quanto antes', d:'menos mão na massa'} ] },

  { tipo:'divisor',
    titulo:'O que toda trilha exige',
    sub:'' },

  { tipo:'lista', revela:true, badge:'CONVERGÊNCIA',
    titulo:'5 skills que nenhuma trilha escapa',
    itens:[
      {t:'Comunicação', d:'trabalho em grupo é mais valioso do que nunca'},
      {t:'Liderança', d:'Liderar pessoas, situações ou processos'},
      {t:'Networking', d:'Grande parte das vagas altas não passam pelo Linkedin'},
      {t:'Visibilidade', d:'Mostrar seu trabalho é mandatório'},
      {t:'Auto-liderança', d:'Emocional vai ditar como você é visto'},
	] },

	{ tipo:'divisor',
    titulo:'A parte técnica te leva até sênior.',
    sub:'da porta do sênior em diante, o jogo é outro' },

  /* ===== E. OS 5 PITFALLS (15min) ===== */

  { tipo:'divisor',
    titulo:'As 5 armadilhas',
    sub:'' },

  { tipo:'lista', revela:false, badge:'ARMADILHA 1',
    titulo:'Baixa auto-estima e auto-sabotagem',
    itens:[
      {t:'Sintoma', d:'"será que sou bom o suficiente?"'},
      {t:'Custo', d:'não aplica pra vaga, não pede aumento, aceita menos'},
      {t:'Antídoto', d:'evidências escritas'},
	  {t:'Sintoma', d:'não aplica "porque não preencho 100% dos requisitos"'},
      {t:'Custo', d:'entrevista vira evento raro, não hábito'},
      {t:'Antídoto', d:'fazer entrevistas sempre'}
	  ] },

  { tipo:'lista', revela:false, badge:'ARMADILHA 2',
    titulo:'Não arriscar, não pedir, não ocupar espaço',
    itens:[
      {t:'Sintoma', d:'Você acredita que seu trabalho deve ser visto e recompensando porque ele é bom'},
      {t:'Custo', d:'Fica no mesmo lugar, vendo amigos menos capazes sendo promovido'},
      {t:'Antídoto', d:'Ocupar espaço, ser visto'} ] },

  { tipo:'lista', revela:false, badge:'ARMADILHA 4',
    titulo:'Focar só na parte técnica',
    itens:[
      {t:'Sintoma', d:'mais um curso, mais um framework, mais uma pós'},
      {t:'Custo', d:'Ser passado pra trás'},
      {t:'Antídoto', d:'Liderança, comunicação e mentoria'} ] },

  { tipo:'lista', revela:false, badge:'ARMADILHA 3',
    titulo:'Falta de networking',
    itens:[
      {t:'Sintoma', d:'"bom trabalho fala por si" é mentira'},
      {t:'Custo', d:'Vagas boas circulam por indicação'},
      {t:'Antídoto', d:'network interno e externo deliberado'} ] },

  { tipo:'lista', revela:false, badge:'ARMADILHA 5',
    titulo:'Falta de comunidade',
    itens:[
      {t:'Sintoma', d:'Carreira solo'},
      {t:'Custo', d:'Ponto cego permanente. Sem calibragem e perspectiva'},
      {t:'Antídoto', d:'Comunidade certa'} ] },

  /* ===== F. ARTEFATO: MAPA DA JORNADA (12min) ===== */
 { tipo:'agenda', badge:'RESUMO',
    titulo:'O que vimos e por que',
    itens:[
      {k:'Trilhas',      d:'Para vermos as diferenças'},
      {k:'Dinheiro',     d:'Níveis de salário e teto'},
      {k:'Trabalhar fora', d:'Dar realidade a esse conceito'},
      {k:'Desafios das trilhas',  d:'O que elas tem em comum'},
      {k:'Armadilhas', d:'Prestar atenção'},
      {k:'Desmistificar alguns conceitos', d:''} ] },	

{ tipo:'divisor',
    titulo:'Aplicar na nossa carreira',
    sub:'' },

{ tipo:'divisor',
    titulo:'Dúvidas?',
    sub:'' },
		
  { tipo:'agenda', badge:'MAPA DA JORNADA',
    titulo:'Preencha agora',
    itens:[
      {k:'1. ONDE ESTOU',       d:'cargo, salário, força, lacuna'},
      {k:'2. MINHA TRILHA',     d:'Dev / Liderança / Empreendedor / explorando'},
      {k:'3. DESTINO 24 MESES', d:'cargo + faixa salarial'},
      {k:'4. 2 ARMADILHAS',  d:'das 5, quais me pegam hoje'},
      {k:'5. PRÓXIMOS 3 PASSOS', d:'1 esta semana · 1 este mês · 1 este trimestre'} ] },

  { tipo:'agenda', badge:'MAPA DA JORNADA',
    titulo:'Dicas',
    itens:[
      {k:'Escolher trilha',       d:'O que te motiva, o que você é bom, o que dá dinheiro'},
      {k:'Dinheiro',     d:'Dinheiro possibilita arriscar'},
      {k:'Trabalhar fora', d:'Veja condições e o quão difícil é ir pra um lugar ou trabalhar em um segmento: use linkedin '},
      {k:'2 armadilhas',  d:'Terapia, comunidade, falar com pessoas experientes'},
      {k:'Fale com alguém', d:'Não saia escolhendo curso sem falar com alguém antes'} ] },
	  
	  
  /* ===== G. COMUNIDADE + ENCERRAMENTO (8min) ===== */

  { tipo:'divisor',
    titulo:'Você acabou de fazer sozinho o passo 1.',
    sub:'os próximos 3, a maioria também tenta sozinho. é por isso que a maioria trava.' },

  { tipo:'lista', revela:false, badge:'POR QUÊ COM OUTRAS PESSOAS',
    titulo:'Carreira não se faz sozinho',
    itens:[
      {t:'Perspectiva'},
      {t:'União'},
      {t:'Resolver o mesmo problema, juntos'},
      {t:'Mentoria'},
      {t:'Exemplos'} ] },

  /* ===== H. O CLUBE: o que é, método, como funciona, valores ===== */

  { tipo:'marca', img:'assets/devadvance-logo.png', sub:'', selo:'' },

  { tipo:'pilar', badge:'DEVADVANCE CLUB', tag:'Clube de devs',
    titulo:'O que é o DevAdvance Club',
    sub:'Método completo + comunidade + acompanhamento próximo. Carreira intencional, não no susto.',
    bullets:[
      {t:'Método ADVANCE', d:'Vídeos gravados'},
      {t:'Mentoria', d:'comigo'},
      {t:'Pods', d:'Grupo com o mesmo objetivo que você'},
      {t:'Comunidade', d:'com diversos eventos'},
      {t:'Acompanhamento', d:'Toda semana nos falamos'} ] },

  { tipo:'piramide', badge:'MÉTODO ADVANCE',
    titulo:'Método ADVANCE',
    sub:'Nas três camadas de baixo você cria valor. No topo você captura esse valor',
    itens:['Valorização','Resolução de problemas','Liderança e soft-skill','Técnico'] },

  { tipo:'agenda', badge:'MÉTODO ADVANCE · 4 CAMADAS',
    titulo:'Da base pro topo',
    itens:[
      {k:'1. Técnico',                 d:'decidir com dados técnicos, IA, arquitetura, frameworks'},
      {k:'2. Liderança e soft-skill',  d:'1:1, feedback, delegação, contratação, PDI, auto-liderança'},
      {k:'3. Resolução de problemas',  d:'métricas, OKR, crise, débito técnico, influenciar pessoas'},
      {k:'4. Valorização',             d:'metas, mostrar o trabalho, CV, LinkedIn, entrevistas, negociar salário'} ] },

  { tipo:'duplo', badge:'COMO FUNCIONA · POD · HOT SEAT · OFFICE HOURS · CHECK-IN',
    titulo:'Pod, hot seat, office hours e check-in',
    cards:[
      { titulo:'Seu pod', itens:[
      'Até 6 pessoas com objetivo parecido: sênior→lead, recolocação, internacional',
      'Encontro 2x por mês de 1h com pauta pronta: cada um traz o que prometeu',
      'Uma vez a cada 6 semanas eu entro no seu pod e rodo 2 hot seats',
      'Entradas dia 1 e 16 de cada mês, com parceiro. Pods remontados a cada 3 ou 4 meses',
      'Contar pra alguém o que você vai fazer, toda semana, é o que faz você fazer' ] },
      { titulo:'Hot seat', itens:[
      '20 minutos com foco total no seu problema real: a conversa difícil, a proposta, o time que não entrega',
      'Lugares agendados por mim',
      'Roteiro antes, você chega preparado. ',
      'Você aprende vendo o hot seat dos outros: o problema deles hoje é o seu daqui a seis meses' ] },
      { titulo:'Office hours', itens:[
      'De 2h a 4h por semana: sala aberta, sem agendar. Aparece quem precisa',
      'Traz a dúvida da semana: a conversa difícil, a decisão travada, o CV antes de enviar',
      'Em grupo: você resolve a sua e aprende com a dos outros' ] },
      { titulo:'Check-in semanal comigo', itens:[
      'Toda semana, por escrito, 5 minutos: o que fiz, onde travei, próximo passo',
      'Retorno pessoal meu em até 48h úteis, áudio ou texto',
      'É o que transforma saber o que fazer em fazer' ] } ] },

  { tipo:'lista', revela:false, badge:'COMUNIDADE',
    titulo:'O que a comunidade te dá',
    itens:[
      {t:'Encontros semanais de 2h ao vivo', d:'todos gravados'},
      {t:'Comentários em cada aula', d:'dúvida travada vira resposta'},
      {t:'Discord com canais por tema', d:'carreira, conteúdo, oportunidades, vagas, exterior'},
      {t:'Clube do livro e do filme', d:'desafios mensais e blog comunitário'},
      {t:'Peer review', d:'CV, status report e roadmap entre os membros'},
      {t:'Banco de vagas', d:'com bounty e programa de indicação'} ] },

  { tipo:'tabela', badge:'DOIS JEITOS DE ENTRAR', destaque:1,
    titulo:'Programa ADVANCE ou Comunidade?',
    colunas:['', 'Programa ADVANCE', 'Comunidade'],
    linhas:[
      ['5 blocos · 4 trilhas · 67 aulas', '✅', '✅'],
      ['Encontros semanais ao vivo', '✅ com hot seat', '✅ assistindo'],
      ['Comunidade completa', '✅', '✅'],
      ['Onboarding 1:1 + plano de carreira', '✅', '—'],
      ['Retorno pessoal meu toda semana', '✅', '—'],
      ['Pod com buddy', '✅', '—'],
      ['Office hours abertas', '✅', '—'],
      ['Revisão de CV, roadmap, status report', '✅ comigo', 'entre membros'], ] },

  { tipo:'planos', badge:'TURMA',
    titulo:'Programa ADVANCE',
    sub:'Preço travado enquanto você continuar.',
    planos:[
      { nome:'Programa ADVANCE', preco:'R$ 247/mês', ano:'ou R$ 2.470 no pix ou cartão', destaque:true, itens:[
        'Mínimo de 3 meses, os 90 dias da garantia',
        'Boleto ou cartão',
        'Nota fiscal e contrato',
        'Só fundador: Voz ativa no formato' ] },
      { nome:'A conta', preco:'R$ 8,23 por dia', ano:'R$ 247/mês ÷ 30 dias', itens:[
        'Um aumento de R$ 2.000/mês pagaria os 12 meses em 6 semanas',
        'Uma pós ou MBA em tech passa de R$ 10 mil, sem a minha experiência ou personalização',
        'Sua empresa pode pagar',
        'Quanto custa ficar mais 12 meses no mesmo lugar?' ] } ] },

  { tipo:'planos', badge:'SÓ O MÉTODO',
    titulo:'Comunidade DevAdvance',
    sub:'Curso + Comunidade + Encontros. Você aplica o método com o grupo, sem acompanhamento individual.',
    planos:[
      { nome:'Comunidade', preco:'R$ 89/mês', ano:'ou R$ 897/ano no pix ou cartão', itens:[
        '5 blocos · 4 trilhas · 67 aulas: técnico, liderança e soft-skill',
        'Encontros semanais de 2h ao vivo, todos gravados',
        'Comentários em cada aula: dúvida travada vira resposta',
        'Discord com canais por tema: carreira, conteúdo, oportunidades, vagas',
        'Clube do livro e do filme, desafios mensais e blog comunitário',
        'Peer review de CV, status report e roadmap entre os membros',
        'Garantia de 7 dias' ] } ] },
  
  { tipo:'duplo', cls:'dp-selos', badge:'RISCO ZERO',
    titulo:'Garantia dupla para o programa ADVANCE: o risco é meu, não seu',
    esquerda:{ titulo:'7 dias', itens:[
      'Entrou, não gostou, devolvo 100%',
      'Sem pergunta' ] },
    direita:{ titulo:'30 dias de execução', itens:[
      'Você faz os check-ins semanais, participa do seu pod e dos encontros',
      'Ao fim de 30 dias, se achar que não avançou no objetivo que definimos juntos, eu devolvo tudo o que você pagou' ] } },

  { tipo:'planos', badge:'PROMOÇÃO · 15 VAGAS',
    titulo:'SÓ ATÉ SEXTA - Preencher form hoje',
    sub:'',
    planos:[
      { nome:'Programa ADVANCE', preco:'R$ 197/mês', ano:'ou R$ 1.997 no pix ou cartão', destaque:true, itens:[
        'Mínimo de 3 meses, os 90 dias da garantia',
        'Boleto ou cartão',
        '7 dias: não gostou, devolvo 100% e garantia de 30 dias',
        'Nota fiscal pra reembolso pela sua empresa',
        'Só fundador: onboarding 1:1 de 60 min e voz ativa no formato' ] },
      { nome:'comunidade ADVANCE', preco:'R$ 69/mês por dia', ano:'ou R$ 697/mês no pix ou cartão', itens:[
        '5 blocos · 4 trilhas · 67 aulas: técnico, liderança e soft-skill',
        'Encontros semanais de 2h ao vivo, todos gravados',
        'Comentários em cada aula: dúvida travada vira resposta',
        'Discord com canais por tema: carreira, conteúdo, oportunidades, vagas',
        'Clube do livro e do filme, desafios mensais e blog comunitário',
        'Peer review de CV, status report e roadmap entre os membros',
        'Garantia de 7 dias' ] } ] },
];
