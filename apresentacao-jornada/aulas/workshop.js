/* Workshop — A Jornada do Desenvolvedor. 90min. 1 objeto por slide. Baseado em idea.md. */
window.SLIDES = [

  /* ===== A. ABERTURA (10min) ===== */

  { tipo:'capa',
    selo:'Workshop · 90 min',
    titulo:'A Jornada do', destaque:'Desenvolvedor',
    sub:'o mapa que ninguém te deu',
    rodape:'Martin Fabichak' },

  { tipo:'divisor',
    titulo:'Dev sênior no Brasil: R$12–18k.',
    sub:'mesmo dev, mesma stack, remoto pra fora: $8–12k/mês. a diferença não é técnica.' },

  { tipo:'cronologia', revela:true, badge:'A HISTÓRIA',
    titulo:'De adolescente com Flash a CTO',
    itens:[
      {t:'Flash/ActionScript adolescente → USP matemática → PHP/web'},
      {t:'Sócio de estúdio: Chico Bento, 5M+ jogadores, 1º jogo PSP da América Latina'},
      {t:'Alemanha: primeira vez que percebi que era bom — não só tecnicamente'},
      {t:'Chimera/Munique: Monopoly, lead de múltiplas equipes'},
      {t:'CTO Magic Media: $25M vendidos, 150 engenheiros, 100+ contratações'} ] },

  { tipo:'lista', revela:true, badge:'OS TROPEÇOS',
    titulo:'Nem tudo foi reta',
    itens:[
      {t:'Projeto que morreu por marketing', d:'3 anos de trabalho'},
      {t:'110 entrevistas', d:'pra conseguir a vaga na Europa'},
      {t:'"Praticamente não fiz nada"', d:'empresa onde o impacto não apareceu'} ] },

  { tipo:'divisor',
    titulo:'Passei pelos 3 caminhos: técnico, liderança, empreendedor.',
    sub:'vou te mostrar o mapa que eu não tive.' },

  /* ===== B. O MAPA: AS TRILHAS (15min) ===== */

  { tipo:'divisor',
    titulo:'Carreira não é escada',
    sub:'é mapa com várias rotas' },

  { tipo:'foto', badge:'O MAPA', contain:true,
    titulo:'As trilhas',
    img:'assets/trilhas-ic-gestao.svg' },

  { tipo:'agenda', badge:'TRILHA TÉCNICA (IC)',
    titulo:'Jr → Distinguished',
    texto:'o que muda em cada nível é o escopo de impacto',
    itens:[
      {k:'Jr → Pleno → Sr', d:'escopo: task → projeto'},
      {k:'Staff',          d:'escopo: time inteiro'},
      {k:'Principal / Distinguished', d:'escopo: org / indústria'} ] },

  { tipo:'lista', revela:false, badge:'MITO',
    titulo:'Staff+ não é "sênior mais rápido"',
    itens:[
      {t:'É influência técnica sem cargo', d:'decide direção sem mandar em ninguém'} ] },

  { tipo:'agenda', badge:'TRILHA LIDERANÇA',
    titulo:'Sr → CTO',
    texto:'o salto que ninguém avisa que é troca de profissão',
    itens:[
      {k:'Sr → Tech Lead', d:'primeiro passo, ainda perto do código'},
      {k:'EM → Head',      d:'resultado através dos outros'},
      {k:'Diretor → CTO',  d:'visão de negócio, não de stack'} ] },

  { tipo:'lista', revela:false, badge:'MITO',
    titulo:'Virar líder não é promoção',
    itens:[
      {t:'É mudança de profissão', d:'líder é papel, não cargo — dá pra começar hoje sem título'} ] },

  { tipo:'pilar', badge:'A PORTA LATERAL', tag:'Empreendedor',
    titulo:'3 formatos',
    sub:'risco alto, mas é a única trilha sem teto',
    bullets:[
      {t:'SaaS / produto próprio', d:'escala sem vender hora'},
      {t:'Consultoria / freela high-ticket', d:'vende expertise, não tempo'},
      {t:'Agência / estúdio', d:'história do Martin: Insolita'} ] },

  { tipo:'lista', revela:false, badge:'A PONTE',
    titulo:'Mesmas skills, trilhas diferentes',
    itens:[
      {t:'O que te leva a Staff ou a CTO é o que te leva a empreender', d:'comunicação, visão de negócio, vender ideia'} ] },

  { tipo:'divisor',
    titulo:'O pêndulo é válido',
    sub:'IC → lead → IC de novo não é fracasso, é estratégia' },

  { tipo:'checkpoint',
    titulo:'Quem aqui já sabe qual trilha quer?' },

  /* ===== C. DINHEIRO (15min) ===== */

  { tipo:'divisor',
    titulo:'Dinheiro',
    sub:'salários BR e mundo — dados a confirmar 2026' },

  { tipo:'agenda', badge:'CLT BRASIL · dados a confirmar',
    titulo:'Faixas por nível',
    itens:[
      {k:'Pleno',            d:'R$7–12k'},
      {k:'Sênior',           d:'R$12–20k'},
      {k:'Staff / Head',     d:'R$20–35k'},
      {k:'Principal / CTO',  d:'R$30–60k+'} ] },

  { tipo:'agenda', badge:'REMOTO EXTERIOR · dados a confirmar',
    titulo:'USD/EUR por nível',
    itens:[
      {k:'Sênior',          d:'$5–8k/mês'},
      {k:'Staff / Head',    d:'$8–15k/mês'},
      {k:'Principal / CTO', d:'$15k+/mês'} ] },

  { tipo:'divisor',
    titulo:'O platô dos R$15k',
    sub:'onde a maioria dos sêniors trava — porque "só técnico" não sobe mais' },

  { tipo:'lista', revela:false, badge:'O ELEFANTE NA SALA',
    titulo:'IA não substitui dev',
    itens:[
      {t:'Muda o que é valioso', d:'julgamento, arquitetura, liderança, comunicação'} ] },

  { tipo:'divisor',
    titulo:'Trabalhar fora',
    sub:'3 caminhos' },

  { tipo:'lista', revela:true, badge:'3 CAMINHOS',
    titulo:'Como sair daqui',
    itens:[
      {t:'Remoto BR pra fora', d:'PJ / contractor'},
      {t:'Relocação', d:'visto — história do Martin na Alemanha'},
      {t:'Empresa global com escritório BR', d:'sem sair do país'} ] },

  { tipo:'lista', revela:false, badge:'CASE',
    titulo:'110 entrevistas',
    itens:[
      {t:'Pra chegar na Europa', d:'resiliência não é dom, é repetição'} ] },

  { tipo:'lista', revela:true, badge:'REALIDADE',
    titulo:'Sem romantizar',
    itens:[
      {t:'Inglês é o gate #1'},
      {t:'É funil de volume, não de sorte'},
      {t:'Custo de vida, distância, recomeço social'} ] },

  /* ===== D. DESAFIOS DE CADA TRILHA (15min) ===== */

  { tipo:'divisor',
    titulo:'Os desafios de cada trilha',
    sub:'e o que elas têm em comum' },

  { tipo:'confronto', badge:'OS DESAFIOS',
    itens:[
      {titulo:'Técnica', icone:'</>'},
      {titulo:'Liderança', icone:'⚑'} ] },

  { tipo:'lista', revela:true, badge:'TRILHA TÉCNICA',
    titulo:'Onde a trilha técnica dói',
    itens:[
      {t:'Obsolescência', d:'stack de hoje morre em 5 anos'},
      {t:'Teto invisível', d:'de Sr pra Staff a barreira é influência, não código'},
      {t:'Solidão do especialista', d:'quanto mais fundo, menos pares'},
      {t:'Commodity trap', d:'ser só "mais um dev de X" na era da IA'} ] },

  { tipo:'lista', revela:true, badge:'TRILHA LIDERANÇA',
    titulo:'Onde a trilha de liderança dói',
    itens:[
      {t:'Luto do código', d:'você não "faz" mais, e demora a aceitar'},
      {t:'Impacto invisível', d:'seu resultado aparece nos outros, meses depois'},
      {t:'Sanduíche', d:'pressão de cima + expectativa de baixo'},
      {t:'Conversas difíceis', d:'feedback, demissão, conflito'},
      {t:'O erro clássico', d:'sair mudando tudo antes de mapear'} ] },

  { tipo:'divisor',
    titulo:'O que toda trilha exige',
    sub:'a convergência' },

  { tipo:'lista', revela:true, badge:'CONVERGÊNCIA',
    titulo:'4 skills que nenhuma trilha escapa',
    itens:[
      {t:'Comunicação', d:'trabalho que ninguém entende = trabalho que não existe'},
      {t:'Resiliência', d:'110 entrevistas, projeto que morre, teste público que falha'},
      {t:'Auto-liderança', d:'ninguém vai gerenciar sua carreira por você'},
      {t:'Network', d:'oportunidade boa não passa em vaga pública'} ] },

  { tipo:'divisor',
    titulo:'A parte técnica te leva até sênior.',
    sub:'da porta do sênior em diante, o jogo é outro — e ninguém te avisou.' },

  /* ===== E. OS 5 PITFALLS (15min) ===== */

  { tipo:'divisor',
    titulo:'Os 5 pitfalls',
    sub:'onde as carreiras morrem' },

  { tipo:'lista', revela:true, badge:'PITFALL 1',
    titulo:'Baixa auto-estima',
    itens:[
      {t:'Sintoma', d:'"será que sou bom o suficiente?"'},
      {t:'Custo', d:'não aplica pra vaga, não pede aumento, aceita menos'},
      {t:'Antídoto', d:'evidências escritas > sentimento'} ] },

  { tipo:'lista', revela:true, badge:'PITFALL 2',
    titulo:'Auto-sabotagem',
    itens:[
      {t:'Sintoma', d:'não aplica "porque não preencho 100% dos requisitos"'},
      {t:'Custo', d:'entrevista vira evento raro, não hábito'},
      {t:'Antídoto', d:'fazer entrevistas sempre — higiene, não evento'} ] },

  { tipo:'lista', revela:true, badge:'PITFALL 3',
    titulo:'Falta de network',
    itens:[
      {t:'Sintoma', d:'"bom trabalho fala por si" — é mentira'},
      {t:'Custo', d:'vagas boas circulam por indicação; sem sponsor, sem fila'},
      {t:'Antídoto', d:'network interno + externo deliberado'} ] },

  { tipo:'lista', revela:true, badge:'PITFALL 4',
    titulo:'Focar só na parte técnica',
    itens:[
      {t:'Sintoma', d:'mais um curso, mais um framework'},
      {t:'Custo', d:'fuga do desconforto real: comunicação, visibilidade'},
      {t:'Antídoto', d:'pra cada hora técnica, hora de carreira/comunicação'} ] },

  { tipo:'lista', revela:true, badge:'PITFALL 5',
    titulo:'Falta de comunidade',
    itens:[
      {t:'Sintoma', d:'carreira solo'},
      {t:'Custo', d:'ponto cego permanente — sem calibragem, sem vagas, sem accountability'},
      {t:'Antídoto', d:'comunidade certa'} ] },

  /* ===== F. ARTEFATO: MAPA DA JORNADA (12min) ===== */

  { tipo:'divisor',
    titulo:'Seu Mapa da Jornada',
    sub:'exercício guiado — 12 min' },

  { tipo:'agenda', badge:'MAPA DA JORNADA',
    titulo:'Preencha agora',
    itens:[
      {k:'1. ONDE ESTOU',       d:'cargo, salário, força, lacuna'},
      {k:'2. MINHA TRILHA',     d:'IC / Liderança / Empreendedor / explorando'},
      {k:'3. DESTINO 24 MESES', d:'cargo + faixa salarial (número escrito!)'},
      {k:'4. MEUS 2 PITFALLS',  d:'dos 5 da aula, quais me pegam hoje'},
      {k:'5. PRÓXIMOS 3 PASSOS',d:'1 esta semana · 1 este mês · 1 este trimestre'} ] },

  { tipo:'lista', revela:true, badge:'POR QUE FUNCIONA',
    titulo:'Um artefato, não uma promessa',
    itens:[
      {t:'Aplicável em 10 min, sem depender de mais nada'},
      {t:'Escrever o salário desejado é compromisso psicológico'},
      {t:'Os 2 pitfalls personalizam a aula pra você'},
      {t:'É a 1ª etapa do método da mentoria: PREPARAR'} ] },

  /* ===== G. COMUNIDADE + ENCERRAMENTO (8min) ===== */

  { tipo:'divisor',
    titulo:'Você acabou de fazer sozinho o passo 1.',
    sub:'os próximos 3, a maioria também tenta sozinho. é por isso que a maioria trava.' },

  { tipo:'lista', revela:true, badge:'POR QUÊ COM OUTRAS PESSOAS',
    titulo:'Carreira não se faz sozinho',
    itens:[
      {t:'Perspectiva'},
      {t:'União'},
      {t:'Resolver o mesmo problema, juntos'},
      {t:'Mentoria'},
      {t:'Exemplos'} ] },

  { tipo:'pilar', badge:'MENTORIA 2.0', tag:'Clube de devs',
    titulo:'O que é',
    sub:'comunidade + método completo + Martin próximo',
    bullets:[
      {t:'Método gravado completo', d:'fases PREPARAR→AGIR→MOSTRAR→OTIMIZAR + trilha técnica + exterior'},
      {t:'Encontros semanais', d:'hot seat mensal, clube do livro, mock interviews'},
      {t:'Discord ativo', d:'#wins, #vagas, #exterior, peer review de CV'},
      {t:'Trilha de auto-estima', d:'com Alan — endereça o pitfall 1'} ] },

  { tipo:'lista', revela:true, badge:'CADA PITFALL TEM ENDEREÇO',
    titulo:'Pitfall → o que resolve isso dentro',
    itens:[
      {t:'Auto-estima', d:'trilha de auto-estima + evidências no problem journal'},
      {t:'Auto-sabotagem', d:'mock interviews + accountability semanal'},
      {t:'Falta de network', d:'Discord + comunidade + peer review'},
      {t:'Só técnico', d:'método completo cobre carreira, não só stack'},
      {t:'Falta de comunidade', d:'a comunidade em si'} ] },

  { tipo:'agenda', badge:'ENTRE',
    titulo:'Condição especial pra quem tá aqui',
    itens:[
      {k:'LINK / QR', d:'na descrição / tela'},
      {k:'CONDIÇÃO',  d:'especial só pra esta turma'} ] },

  { tipo:'fim',
    titulo:'Você entrou sem mapa. Sai com um.',
    rodape:'A diferença nunca foi talento — é rota escolhida + constância + gente do lado certo. Te vejo do lado de dentro.' }
];
