# B.2 - Orçamento & Headcount
**Bônus (v2 / premium)**

## Esqueleto (o que falar)
- Gancho: a pergunta que separa head de gerente sênior não é técnica, é "quanto custa seu time e o que a empresa recebe em troca?". Se você não sabe responder em 30 segundos, alguém acima de você responde por você, geralmente na reunião de corte. Como head na Europa, aprendi que quem não fala a língua do P&L não senta na mesa onde o P&L é decidido.
- Problema: líder técnico trata orçamento como assunto "do financeiro". Aí chega o planning anual, ele pede "mais 5 devs porque estamos sobrecarregados", e perde pra área que pediu 3 vagas amarradas a R$ 2M de receita projetada. Não foi injustiça; foi linguagem.
- Ideia central: engenharia é (quase sempre) centro de custo no papel; seu trabalho é narrá-la como motor de valor. Isso exige dominar 3 coisas: quanto custa (P&L do time), o que produz (capacidade → resultado), e como pedir mais (business case de vaga).
- Bloco 1: O custo real do time. Salário é só o começo. Fully loaded cost = salário + encargos (no Brasil, CLT multiplica por ~1.7-1.8x) + benefícios + ferramentas/licenças + cloud + recrutamento + o mais esquecido: custo de ramp-up (3-6 meses até produtividade plena). Um "dev de 15k" custa ~300-350k/ano pra empresa. Faça essa conta pro seu time hoje, o número muda como você prioriza.
- Cloud e ferramentas entram no SEU P&L mental mesmo que contabilmente estejam em outra linha: time de 10 devs com AWS de 80k/mês é um time de 10 devs + 3 "devs fantasmas" de custo. Otimizar infra às vezes vale mais que uma vaga.
- Bloco 2: Ler um P&L sem ser contador. Receita, custo, margem, e onde engenharia aparece (OPEX vs CAPEX; em algumas empresas, desenvolvimento de produto capitaliza, e isso muda a conversa com o CFO). Você não precisa fazer a contabilidade; precisa entender o que o CFO vê quando olha seu time: uma linha de custo que cresce. Sua narrativa muda essa leitura.
- A régua que executivos usam de cabeça: custo de engenharia como % da receita (SaaS saudável: algo entre 15-30% dependendo do estágio). Saiba onde sua empresa está nessa régua antes de pedir qualquer coisa.
- Bloco 3: Planejamento de headcount. Não comece por "quantas pessoas", comece por "o que a empresa precisa entregar no ano". Fluxo: metas da empresa → o que engenharia precisa entregar → capacidade necessária → gap vs capacidade atual → plano (contratar / realocar / cortar escopo / terceirizar). Headcount é a ÚLTIMA variável, não a primeira.
- Contratar não é a única alavanca, e executivo respeita quem mostra que considerou as outras: realocar gente de projeto de baixo valor, matar produto zumbi, automatizar toil, terceirizar o não-core (gancho pra B.3). Pedir vaga tendo mostrado as alternativas dobra sua credibilidade.
- Bloco 4: O business case de uma vaga, o framework da aula. (1) o problema em número (ex: "backlog de integração cresce 20%/trimestre, perdemos 2 deals por falta da feature X"); (2) o custo de NÃO contratar (receita perdida, risco, burnout/turnover, que também tem preço: repor um sênior custa 30-50% do salário anual); (3) o retorno esperado com prazo ("com 2 devs, feature X em Q2, destravando os deals de ~R$ 1.5M"); (4) o plano B se negarem (o que será despriorizado, explícito, por escrito).
- O plano B é a parte mais poderosa: "sem a vaga, escolham o que sai do roadmap" transfere a decisão de trade-off pra quem negou. Deixa de ser "engenharia reclamando" e vira decisão de negócio documentada.
- Timing e política: orçamento se ganha antes da reunião de orçamento. Plante os números com seu chefe e com finanças 1-2 meses antes do ciclo de planning; na reunião, ninguém deve ver seu pedido pela primeira vez.
- Quando mandarem cortar (e vão mandar): tenha SEMPRE uma visão em camadas do time, o que é inegociável (sustentação do que gera receita), o que dói mas dá (projetos de aposta), o que você mesmo cortaria. Quem chega na conversa de corte com um plano controla o corte; quem chega sem, sofre o corte.
- Ação prática: monte esta semana o P&L de uma página do seu time: fully loaded cost por pessoa, cloud/ferramentas, custo total anual, e do outro lado, as 3 entregas do ano traduzidas em valor (receita habilitada, custo evitado, risco mitigado). Esse documento é seu passaporte pra conversa de head.
- Transição: uma das alternativas ao headcount é comprar capacidade fora, fornecedores e consultorias. Como fazer isso sem receber entrega ruim é a B.3.

## O que mostrar (complementos visuais)
- Planilha de fully loaded cost por pessoa (template com encargos BR, benefícios, ferramentas, ramp-up).
- P&L simplificado de um time de engenharia em 1 página, exemplo preenchido com números realistas.
- Diagrama do fluxo de headcount planning: metas → entregas → capacidade → gap → alavancas.
- Template de business case de vaga (problema em número / custo de não contratar / retorno / plano B).
- Exemplo real (anonimizado) de pedido de vaga negado vs o mesmo pedido reescrito e aprovado.
- Tabela de referência: custo de engenharia como % de receita por estágio de empresa.
- Framework de corte em camadas: inegociável / dói mas dá / eu mesmo cortaria.
