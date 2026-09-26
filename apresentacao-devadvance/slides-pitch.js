/* DevAdvance.club — Programa ADVANCE · Turma Fundadora. Versão PITCH (vídeo de 7 min pro WhatsApp).
   Corte do slides.js: sem checagem, sem FAQ, sem plano B. Preço aparece, porque não há conversa.
   Roteiro com tempo por slide: pitch-roteiro.md. Exportar: python export_pdf.py pitch */

var CAMADAS = ['Valorização','Resolução de problemas','Liderança e soft-skill','Técnico'];

window.SLIDES = [

  /* 1 — CAPA · 0:00 */
  { tipo:'marca', img:'assets/logo.png', sub:'', selo:'Turma Fundadora · 15/30 vagas' },

  /* 3 — QUEM SOU EU · 0:55 */
  { tipo:'perfil', badge:'QUEM SOU EU',
    titulo:'Martin Fabichak',
    img:'assets/martin.png',
    itens:[
      {t:'Matemática no IME-USP', d:'formado com honra ao mérito'},
      {t:'20 anos de desenvolvimento de software', d:'jogos, SaaS, web, mobile, embarcado'},
      {t:'16 anos de liderança', d:'até 160 pessoas lideradas'},
      {t:'Europa desde 2015', d:'Alemanha e Portugal, 10 anos fora'},
      {t:'Head of Development aos 30, CTO aos 34', d:'+ €100M operados'},
      {t:'Já sentei dos dois lados da mesa:', d:'fui o dev que queria crescer e o CTO que decidia quem crescia'} ],
    logos:['assets/insolita.png','assets/magicmedia.png','assets/goodgame.png','assets/chimera.png'] },

  /* 3 — QUEM SOU EU · 0:55 */
  { tipo:'perfil', badge:'QUEM SOU EU',
    titulo:'Porque devadvance club?',
    img:'assets/logo.png',
    itens:[
      {t:'Mentoro há muitos anos', d:'formado com honra ao mérito'},
      {t:'Matemática no IME-USP', d:'formado com honra ao mérito'},
      {t:'Matemática no IME-USP', d:'formado com honra ao mérito'},
      {t:'Matemática no IME-USP', d:'formado com honra ao mérito'},
      {t:'Matemática no IME-USP', d:'formado com honra ao mérito'},
      ],
    logos:[] },

  /* 5 — MÉTODO · 1:45 */
  { tipo:'piramide', badge:'DEVADVANCECLUB',
    titulo:'Método ADVANCE',
    sub:'Nas três camadas de baixo você cria valor. No topo você captura esse valor',
    itens:CAMADAS },

  /* 6 — A PROMESSA · 2:30 */
  { tipo:'checkpoint', badge:'COMO FUNCIONA',
    titulo:'Toda semana nos falamos',
    sub:'Conteúdo você acha em qualquer lugar. O que muda carreira é direção, cobrança e alguém experiente olhando as suas decisões.' },
  /* 9 — O CICLO · 4:30 */
  { tipo:'cronologia', badge:'PROGRAMA · 14 DIAS → 12 MESES',
    titulo:'O ciclo advance',
    itens:[
      {t:'Dia 0: acesso liberado, vídeo de introdução e ficha de onboarding'},
      {t:'Dias 2 a 5: onboarding 1:1 comigo. Saímos com a sua meta de 12 meses, o objetivo de 90 dias e tarefas'},
      {t:'check-in semanal com retorno pessoal meu', cycle:true, cicloTexto:'12 meses'},
      {t:'Pod, encontro ao vivo com hot seats e office hours abertas'},
      {t:'Revisão do plano a cada 90 dias'} ] },
	  
  /* 7 — SUA SEMANA · 3:00 */
  { tipo:'tabela', badge:'COMO FUNCIONA · SEMANA',
    titulo:'Sua semana no programa',
    colunas:['Quando','O que acontece','Seu tempo'],
    linhas:[
      ['Segunda ou Quarta', {t:'Check-in semanal:', d:'o que fiz, onde travei, próximo passo'}, '5 min'],
      ['Terça ou quinta', {t:'Retorno pessoal meu', d:'sobre o seu check-in (áudio ou texto), em até 48h úteis'}, '5 min'],
      ['3 vezes na semana', {t:'Office hours abertas:', d:'sala aberta, sem agendar, aparece quem precisa'}, 'opcional'],
      ['Quarta', {t:'Encontro ao vivo de 2h:', d:'conteúdo + hot seats (fica gravado)'}, '2h'],
      ['2x por mês', {t:'Seu pod:', d:'até 6 pessoas com objetivo parecido'}, '1h'],
      ['Quando puder', {t:'Vídeos indicados pra sua fase'}, '~1h'] ],
    nota:'Total: cerca de 4 horas por semana. Numa semana ruim, check-in + pod: pouco mais de 1 hora.' },

  /* 8 — POD · HOT SEAT · OFFICE HOURS · 3:50 */
  { tipo:'duplo', badge:'COMO FUNCIONA · POD · HOT SEAT · OFFICE HOURS',
    titulo:'Pod, hot seat e office hours',
    esquerda:{ titulo:'Seu pod', itens:[
      'Até 6 pessoas com objetivo parecido: sênior→lead, recolocação, internacional',
      'Encontro 2x por mês de 1h com pauta pronta: cada um traz o que prometeu',
      'Uma vez a cada 6 semanas eu entro no seu pod e rodo 2 hot seats',
      'Contar pra alguém o que você vai fazer, toda semana, é o que faz você fazer' ] },
    centro:{ titulo:'Hot seat', itens:[
      '20 minutos com foco total no seu problema real: a conversa difícil, a proposta, o time que não entrega',
      'Lugares agendados por mim, não é quem levanta a mão primeiro. Todo mundo senta',
      'Você aprende vendo o hot seat dos outros: o problema deles hoje é o seu daqui a seis meses' ] },
    direita:{ titulo:'Office hours', itens:[
      'De 2h a 4h por semana: sala aberta, sem agendar. Aparece quem precisa',
      'Traz a dúvida da semana: a conversa difícil, a decisão travada, o CV antes de enviar',
      'Em grupo: você resolve a sua e aprende com a dos outros' ] } },



  /* 10 — RESULTADOS · 5:10 */
  { tipo:'depoimentos', badge:'RESULTADOS',
    titulo:'Quem já está no clube',
    imgs:[
      'assets/depoimentos/1.jpeg','assets/depoimentos/2.jpeg','assets/depoimentos/3.jpeg',
      'assets/depoimentos/4.jpeg','assets/depoimentos/5.jpeg' ] },

  /* 11 — GARANTIA · 5:35 */
  { tipo:'duplo', cls:'dp-selos', badge:'RISCO ZERO',
    titulo:'Garantia dupla: o risco é meu, não seu',
    esquerda:{ titulo:'7 dias', itens:[
      'Entrou, não gostou, devolvo 100%',
      'Sem pergunta' ] },
    direita:{ titulo:'90 dias de execução', itens:[
      'Você faz os check-ins semanais, participa do seu pod e dos encontros',
      'Ao fim de 90 dias, se achar que não avançou no objetivo que definimos juntos, eu devolvo tudo o que você pagou' ] } },

  /* 12 — TURMA FUNDADORA · 6:00 */
  { tipo:'planos', badge:'TURMA FUNDADORA · 20 VAGAS',
    titulo:'Turma Fundadora',
    sub:'Entrada dia [DATA] · fecha em [DATA] ou quando lotar, o que vier primeiro.',
    planos:[
      { nome:'Programa ADVANCE', preco:'R$ 197/mês', ano:'ou R$ 1.970 no Pix: 12 meses pelo preço de 10', destaque:true, itens:[
        'Preço travado enquanto você continuar. Depois: R$ 247/mês',
        'Boleto ou cartão. Mínimo de 3 meses, os 90 dias da garantia',
        'Nota fiscal pra reembolso pela sua empresa',
        'Só fundador: onboarding 1:1 de 60 min e voz ativa no formato' ] },
      { nome:'A conta', preco:'R$ 6,57 por dia', ano:'R$ 197/mês ÷ 30 dias', itens:[
        'Um aumento de R$ 2.000/mês pagaria os 12 meses em 5 semanas',
        'Uma pós ou MBA em tech passa de R$ 10 mil, sem personalização',
        'Quanto custa ficar mais 12 meses no mesmo lugar?' ] } ] },

];
