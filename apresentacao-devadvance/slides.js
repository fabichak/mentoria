/* DevAdvance.club — Programa ADVANCE · Turma Fundadora. Deck da call de venda 1:1 (tela compartilhada).
   Texto e notas do apresentador: devadvance-turma-fundadora.md. Edite o conteúdo só aqui.
   [DATA] e [PREENCHER] ficam visíveis de propósito: nunca inventar dado.
   Preço só aparece no slide 21, depois da checagem. Slides 24-25 são plano B (só se disse não ao Programa). */

var CAMADAS = ['Valorização','Resolução de problemas','Liderança e soft-skill','Técnico'];

window.SLIDES = [

  /* 1 — CAPA */
  { tipo:'marca', img:'assets/logo.png',
    sub:'',
    selo:'Turma Fundadora · 13/30 vagas' },

  /* 2 — O PROBLEMA: não apresente, pergunte "qual desses é o seu hoje?" e deixe falar */
  { tipo:'lista', revela:false, badge:'O PROBLEMA',
    titulo:'Sua carreira está sendo escolhida por você, ou está só acontecendo?',
    itens:[
      {t:'Você entrega muito, mas ninguém vê'},
      {t:'A promoção "está vindo" há mais de um ano'},
      {t:'Virou líder (ou quer virar) e ninguém te ensinou a liderar'},
      {t:'Sabe o que deveria fazer mas acha que não vai conseguir ou não tem conhecimento'},
      {t:'Tem muito conhecimento mas não sabe qual área seguir'},
      {t:'Decide o próximo passo no susto:', d:'quando a vaga aparece, quando o chefe sai, quando vem o layoff'} ] },

  /* 3 — QUEM SOU EU: a última linha é a que vende */
  { tipo:'perfil', badge:'QUEM SOU EU',
    titulo:'Martin Fabichak',
    img:'assets/martin.png',
    itens:[
      {t:'Matemática no IME-USP', d:'formado com honra ao mérito'},
      {t:'20 anos de desenvolvimento de software', d:'jogos, SaaS, web, mobile, embarcado'},
      {t:'16 anos de liderança', d:'até 160 pessoas lideradas'},
      {t:'Europa desde 2015', d:'Alemanha e Portugal, 10 anos fora'},
      {t:'Head of Development aos 30, CTO aos 34', d:'+ €100M operados'},
      {t:'Empreendedor', d:'sócio de 4 empresas'},
      {t:'Já sentei dos dois lados da mesa:', d:'fui o dev que queria crescer e o CTO que decidia quem crescia'} ],
    logos:['assets/insolita.png','assets/magicmedia.png','assets/goodgame.png','assets/chimera.png'] },

  /* 4 e 5 — FOTOS: gente de verdade */
  { tipo:'colagem', imgs:[
      'assets/collage/1.jpg','assets/collage/2.jpg','assets/collage/3.jpg',
      'assets/collage/4.jpg','assets/collage/5.jpg','assets/collage/6.jpg' ] },

  { tipo:'colagem', imgs:[
      'assets/collage/7.jpg','assets/collage/8.jpg','assets/collage/9.jpg',
      'assets/collage/10.jpg','assets/collage/11.jpg','assets/collage/12.jpg' ] },

  /* 6 — MÉTODO ADVANCE (topo = Valorização) */
  { tipo:'piramide', badge:'DEVADVANCECLUB',
    titulo:'Método ADVANCE',
    sub:'Nas três camadas de baixo você cria valor. No topo você captura esse valor',
    itens:CAMADAS },

  /* 7 a 10 — UMA CAMADA POR SLIDE, da base pro topo */
  { tipo:'metodo', badge:'MÉTODO · CAMADA 1 DE 4', titulo:'Método', itens:CAMADAS, nivel:3,
    texto:{ titulo:'Técnico · Fundação', itens:[
      'Como tomar decisões',
      'Como usar dados técnicos para influenciar o desenvolvimento',
      'Temas técnicos: IA, frameworks etc.' ],
      onde:'' } },

  { tipo:'metodo', badge:'MÉTODO · CAMADA 2 DE 4', titulo:'Método', itens:CAMADAS, nivel:2,
    texto:{ titulo:'Liderança e soft-skill', itens:[
      'Gestão: 1:1, feedback, delegação, contratação, PDI',
      'Soft skill e liderança: pessoas, processos e tecnologia',
      'Auto-liderança: auto-sabotagem, ir atrás do que você quer' ],
      onde:'' } },

  { tipo:'metodo', badge:'MÉTODO · CAMADA 3 DE 4', titulo:'Método', itens:CAMADAS, nivel:1,
    texto:{ titulo:'Resolução de problemas', itens:[
      'Liderando situações: métricas, OKR, crise, débito técnico',
      'Tomando decisões: decisão por dado, não por achismo',
      'Influenciando pessoas: as skills que não ensinam' ],
      onde:'' } },

  { tipo:'metodo', badge:'MÉTODO · CAMADA 4 DE 4', titulo:'Método', itens:CAMADAS, nivel:0,
    texto:{ titulo:'Valorização', itens:[
      'Metas: seu mapa, mostrar seu trabalho e definir o seu próximo nível',
      'Vender-se: CV, LinkedIn, entrevistas e usar situações para se vender',
      'Networking: como construir e manter conexões',
      'Negociar: salário, promoção e proposta, com dados e sem achismo' ],
      onde:'' } },

  /* 15 — 14 DIAS → 12 MESES */
  { tipo:'cronologia', badge:'PROGRAMA · 14 DIAS → 12 MESES',
    titulo:'O ciclo advance',
    itens:[
      {t:'Dia 0: acesso liberado, vídeo de introdução e ficha de onboarding'},
      {t:'Dias 2 a 5: onboarding 1:1 comigo. Saímos com a sua meta de 12 meses, o objetivo de 90 dias e a primeira vitória'},
      {t:'Dia 1 ou 16: entrada no pod, com parceiro. Primeiros check-in e retorno meu'},
      {t:'Dia 14: fechamos a primeira vitória. '},
      /* cycle:true → daqui até o último item vira um ciclo que se repete */
      {t:'check-in semanal com retorno pessoal meu', cycle:true, cicloTexto:'12 meses'},
      {t:'Pod 2x por semana, encontro ao vivo com hot seats e office hours abertas'},
      {t:'Revisão do plano a cada 90 dias'} ] },

  /* 13 — SUA SEMANA: se disser "não tenho tempo", volte aqui */
  { tipo:'tabela', badge:'COMO FUNCIONA · SEMANA',
    titulo:'Sua semana no programa',
    colunas:['Quando','O que acontece','Seu tempo'],
    linhas:[
      ['Segunda ou Quarta', {t:'Check-in semanal:', d:'o que fiz, onde travei, próximo passo'}, '5 min'],
      ['Terça ou quinta', {t:'Retorno pessoal meu', d:'sobre o seu check-in (áudio ou texto), em até 48h úteis'}, '5 min'],
      ['3 vezes na semana', {t:'Office hours abertas:', d:'sala aberta, sem agendar, aparece quem precisa'}, 'opcional'],
      ['Quarta', {t:'Encontro ao vivo de 2h:', d:'conteúdo + hot seats (fica gravado)'}, '2h'],
      ['2x por mês', {t:'Seu pod:', d:'até 6 pessoas com objetivo parecido'}, '1h'],
      ['Quando puder', {t:'Vídeos indicadas pra sua fase'}, '~1h'] ],
    nota:'Total: cerca de 4 horas por semana. Numa semana ruim, check-in + pod: pouco mais de 1 hora.' },

  /* 12 — A PROMESSA */
  { tipo:'checkpoint', badge:'COMO FUNCIONA',
    titulo:'Toda semana nos falamos',
    sub:'Conteúdo você acha em qualquer lugar. O que muda carreira é direção, cobrança e alguém experiente olhando as suas decisões.' },

	
  /* 11 — JORNADA: não leia a lista. "No onboarding eu te digo quais são as 10 ou 12 da sua fase." */
  { tipo:'duplo', badge:'JORNADA · 5 BLOCOS · 4 TRILHAS · 67 AULAS',
    titulo:'Jornada para carreira intencional',
    esquerda:{ titulo:'Blocos (na ordem que você vê)', itens:[
      'Onboarding · 12 aulas — ficha e DISC, autodiagnóstico, as 3 trilhas, platô de renda, Mapa da Jornada',
      'Liderança e soft-skill · 10 aulas — mentalidade, emocional, 1:1, feedback, delegação, contratação, PDI',
      'Resolução de problemas · 13 aulas — mapear contexto, decidir por dado, métricas, OKR, débito técnico, crise',
      'Valorização · 13 aulas — mostrar seu trabalho, promoção, CV, LinkedIn, entrevistas, negociação salarial, O Ciclo (ao vivo)',
      'Técnico · 7 aulas — IA no time, arquitetura, bancos, DevOps/SRE, qualidade, segurança' ] },
    direita:{ titulo:'Trilhas (indicadas por fase)', itens:[
      'Júnior → Pleno · 4 aulas — autonomia técnica, ritos de passagem, o que estudar',
      'Sênior → Lead · 2 aulas — liderar sem cargo, sinalizar que quer liderar',
      'Internacional · 2 aulas — Brasil vs exterior, inglês e networking externo',
      'Mentalidade e Auto-estima · 4 aulas — auto-estima, exercícios, confronto' ] } },

  /* 14 — POD + HOT SEAT + OFFICE HOURS */
  { tipo:'duplo', badge:'COMO FUNCIONA · POD · HOT SEAT · OFFICE HOURS',
    titulo:'Pod, hot seat e office hours',
    esquerda:{ titulo:'Seu pod', itens:[
      'Até 6 pessoas com objetivo parecido: sênior→lead, recolocação, internacional',
      'Encontro 2x por mês de 1h com pauta pronta: cada um traz o que prometeu',
      'Uma vez a cada 6 semanas eu entro no seu pod e rodo 2 hot seats',
      'Entradas dia 1 e 16 de cada mês, com parceiro. Pods remontados a cada 3 ou 4 meses',
      'Contar pra alguém o que você vai fazer, toda semana, é o que faz você fazer' ] },
    centro:{ titulo:'Hot seat', itens:[
      '20 minutos com foco total no seu problema real: a conversa difícil, a proposta, o time que não entrega',
      'Lugares agendados por mim, não é quem levanta a mão primeiro. Todo mundo senta',
      'Roteiro antes, você chega preparado. Primeiro nas 6 primeiras semanas, depois um a cada 6 ou 7',
      'Você aprende vendo o hot seat dos outros: o problema deles hoje é o seu daqui a seis meses' ] },
    direita:{ titulo:'Office hours', itens:[
      'De 2h a 4h por semana: sala aberta, sem agendar. Aparece quem precisa',
      'Traz a dúvida da semana: a conversa difícil, a decisão travada, o CV antes de enviar',
      'Em grupo: você resolve a sua e aprende com a dos outros' ] } },

  /* 17 — RESULTADOS: depoimentos em vídeo (assets/depoimentos/1-5.jpeg) */
  { tipo:'depoimentos', badge:'RESULTADOS',
    titulo:'Quem já está no clube',
    imgs:[
      'assets/depoimentos/1.jpeg','assets/depoimentos/2.jpeg','assets/depoimentos/3.jpeg',
      'assets/depoimentos/4.jpeg','assets/depoimentos/5.jpeg' ] },

  /* 17b — RECOMENDAÇÕES: colagem dos prints do LinkedIn (assets/depoimentos/*.png) */
  { tipo:'mosaico', imgs:[
      'assets/depoimentos/thomas.png','assets/depoimentos/artemis.png','assets/depoimentos/bernard.png',
      'assets/depoimentos/ben.png','assets/depoimentos/caga.png','assets/depoimentos/felipe.png',
      'assets/depoimentos/julien.png','assets/depoimentos/krz.png','assets/depoimentos/martjn.png',
      'assets/depoimentos/vex.png','assets/depoimentos/victor.png' ] },

  /* 18 — GARANTIA: vem antes do preço de propósito */
  { tipo:'duplo', cls:'dp-selos', badge:'RISCO ZERO',
    titulo:'Garantia dupla: o risco é meu, não seu',
    esquerda:{ titulo:'7 dias', itens:[
      'Entrou, não gostou, devolvo 100%',
      'Sem pergunta' ] },
    direita:{ titulo:'90 dias de execução', itens:[
      'Você faz os check-ins semanais, participa do seu pod e dos encontros',
      'Ao fim de 90 dias, se achar que não avançou no objetivo que definimos juntos, eu devolvo tudo o que você pagou' ] } },

  /* 19 — PERGUNTAS COMUNS. Preço antes da hora: "já chego lá, é o próximo bloco" */
  { tipo:'lista', badge:'PERGUNTAS',
    titulo:'O que costumam me perguntar',
    itens:[
      {t:'"Não tenho tempo."', d:'São cerca de 4h por semana. Numa semana ruim, o check-in de 5 min e o pod te mantêm andando.'},
      {t:'"Sou mais na minha, não sei se vou participar."', d:'O check-in é por escrito. O hot seat é agendado e você chega com roteiro. E se você sumir, eu vou atrás.'},
      {t:'"Por que não é 1:1 toda semana?"', d:'Porque não escala e ficaria muito mais caro. Aqui você tem retorno meu toda semana e 1:1 nos momentos que decidem.'},
      {t:'"E se não for pra mim?"', d:'7 dias sem pergunta + garantia de execução de 90 dias.'},
      {t:'"Serve pro meu nível?"', d:'O método é o mesmo; o que muda é o plano. No onboarding eu indico as aulas e o pod da sua fase.'} ] },

  /* 16 — O QUE VOCÊ RECEBE / O QUE ISSO FAZ PELA SUA CARREIRA */
  { tipo:'duplo', badge:'RESUMO - PROGRAMA ADVANCE',
    titulo:'O que você recebe',
    esquerda:{ titulo:'O que você recebe', itens:[
      'Plano de carreira sob medida, em uma página: META, OBJETIVO de 90 dias, TAREFAS',
      'Retorno pessoal meu toda semana',
      'Pod, hot seats e office hours',
      '1:1 comigo no onboarding',
      'Revisão de artefatos: CV, roadmap, status report',
      '5 blocos · 4 trilhas · 67 aulas + comunidade completa' ] },
    direita:{ titulo:'O que isso faz pela sua carreira', itens:[
      'Plano pro seu contexto: metas, prazo e próximo passo definidos',
      'Suas decisões revisadas por quem já sentou do outro lado da mesa',
      'Subir de nível e negociar o seu valor com estratégia, não com sorte',
      'Cobrança e ajuste de rota: você executa, não só sabe o que fazer',
      'Valorização',
	  ] } },
	  
  /* 20 — CHECAGEM: só mostre o preço com nota 8+, resposta específica e nenhum impedimento */
  { tipo:'cronologia', revela:true, badge:'ANTES DO INVESTIMENTO',
    titulo:'Antes de falar de investimento',
    itens:[
      {t:'De 0 a 10, o quanto isso resolve o que você me contou no começo?'},
      {t:'Qual parte faria mais diferença pra você nos próximos 90 dias?'},
      {t:'Qual parte não te convenceu, ou você acha que não usaria?'},
      {t:'Tirando o investimento, que ainda não mostrei: existe algo que te impediria de começar amanhã?'} ] },

  /* 21 — TURMA FUNDADORA + A CONTA: fale o preço e fique em silêncio. Troque o R$ 2.000 pelo número que a pessoa disse no slide 2. */
  { tipo:'planos', badge:'TURMA FUNDADORA · 20 VAGAS',
    titulo:'Turma Fundadora',
    sub:'Entrada dia [DATA] · fecha em [DATA] ou quando lotar, o que vier primeiro.',
    planos:[
      { nome:'Programa ADVANCE', preco:'R$ 197/mês', ano:'ou R$ 1.970 no Pix: 12 meses pelo preço de 10', destaque:true, itens:[
        'Preço travado enquanto você continuar. Depois: R$ 247/mês',
        'Boleto ou cartão',
        'Mínimo de 3 meses, os 90 dias da garantia.',
        'Nota fiscal pra reembolso pela sua empresa',
        'Só fundador: onboarding 1:1 de 60 min e voz ativa no formato',] },
      { nome:'A conta', preco:'R$ 6,57 por dia', ano:'R$ 197/mês ÷ 30 dias', itens:[
        'Um aumento de R$ 2.000/mês pagaria os 12 meses em 5 semanas',
        'Uma pós ou MBA em tech passa de R$ 10 mil, sem a minha experiência ou personalização',
        'Sua empresa pode pagar',
        'Quanto custa ficar mais 12 meses no mesmo lugar?' ] } ] },

  /* 24 e 25 — PLANO B: só abra se a pessoa disse não ao Programa. Fora do devadvance-programa.pdf. */
  { tipo:'planos', badge:'SÓ O MÉTODO',
    titulo:'Comunidade DevAdvance',
    sub:'Curso + Comunidade + Encontros. Você aplica o método com o grupo, sem acompanhamento individual.',
    planos:[
      { nome:'Comunidade', preco:'R$ 69/mês', ano:'ou R$ 697/ano', itens:[
        '5 blocos · 4 trilhas · 67 aulas por trilha: técnico, liderança e soft-skill',
        'Encontros semanais de 2h ao vivo, todos gravados',
        'Comentários em cada aula: dúvida travada vira resposta',
        'Discord com canais por tema: carreira, conteúdo, oportunidades, vagas',
        'Clube do livro e do filme, desafios mensais e blog comunitário',
        'Peer review de CV, status report e roadmap entre os membros',
        'Banco de vagas com bounty e programa de indicação' ] } ] },
];
