# MÓDULO 3 — Gestão de Equipe e Expectativas

**Tese:** liderança = engenharia de expectativas. Pra cima, pra baixo, pros lados. Sem psychological safety, expectativa vira teatro.

---

## 1. Objetivos da Aula

- Expectation management bidirecional: chefe ↔ aluno ↔ time
- Delegar sem perder qualidade: matriz task × maturidade × risco: Delegate and control
- 1:1 que gera dado, não chat
- Feedback difícil com Radical Candor
- Lidar com arquétipos: sênior resistente, júnior perdido, performer tóxico
- Hiring básico: evitar contratar errado
- Escalação: 1:1 → performance review → PIP

### 1.1 Semana passada
**a) Lista de tarefas com KPIs**
**b) Problem Journal — foco em comunicação**

---

## 2. Conteúdos para Tocar na Aula

### 2.1. Crença-chave a quebrar
- "Time bom se vira sozinho" = falso.
- "Microgerenciar é único jeito de garantir qualidade" = também falso.
- Liderança = sistema de expectativas explícitas + safety pra falhar cedo + direção
- Cada pessoa do time = sistema próprio de expectativas

### 2.1.1 Importância de mensurar
- "people react on how they are measured"

### 2.2. Psychological Safety
- 4 sinais de safety: pergunta burra OK, erro admitido sem punição, discordância sem retaliação, vulnerabilidade do líder primeiro.
- Líder fala primeiro de erro próprio = destrava o resto.
- Sem safety: 1:1 vira teatro, status report vira ficção, bug fica escondido.

### 2.3. Expectation Management 

**Pra cima (chefe):**
- É sua responsabilidade iniciar o processo de expectativa
- O que chefe espera de ti em 30/60/90 dias? Sabe responder com palavras dele?
- Se não sabe → próxima 1:1 com chefe pergunta: "Como é sucesso pra ti no meu cargo nos próximos 90 dias?"
- como o chefe mensura e como ele DEVERIA mensurar o resultado.
- Levar idéia de mensuração e resultados
- Reportar antes de ser perguntado. Surpresa = falha de comunicação.
	- Cuidado com a Frequência (identificar o que é importante)
	- Verificar se ele realmente lê ou não
	
**Pra baixo (time):**
- Cada liderado sabe: o que se espera dele, como é avaliado, quando é "bom".
	- Sem isso → ansiedade, retrabalho, turnover.
- Contrato explícito por pessoa: expectativas + KPIs + prazo.
	- Diferenciar senior, mid e junior

**Pros lados (peers, PM, design):**
- Acordo de interface. Quem entrega o quê, quando, em que formato.
- Como o seu time é visto x como deveria ser visto: Como os peers "ganham mais" com o trabalho do seu time (e/ou visibilidade)
- Pergunte: "O que meu time faz? Quais resultados ele teve no ultimo mês"
	- Boa indicação do que você precisa mostrar
	- Soft skill / "trocar idéia"
- Reports publicos

### 2.4. Delegação — matriz task × maturidade × risco (10 min)

Eixos:
- Maturidade do liderado na task (não no cargo): novato → competente → autônomo
- Risco da task: reversível barato → irreversível caro

Regra:
- Novato + alto risco → ensina + acompanha de perto
- Autônomo + baixo risco → delega total, não pergunta
- Erro comum: delegar pelo cargo ("é sênior, vira sozinho") em vez de pela maturidade na task específica.

Para cada task: 
- como mensurar sucesso? 
	- Sucesso de desenvolvimento
	- Sucesso de "produção" (KPI próprio?)
- Fazer um review de subtask ANTES de implementar (testes, mudanças no ci/cd, mudanças na UI, dependências em outros times)
	- Para junior: pedir um doc de implementação técnica e revisar junto

KPI de delegação: % de sprint entregue sem tocar código.

Importantissímo: ALOQUE TEMPO COM PM E PJM PARA LIDERAR
	- reuniões, delegação, code review, etc

### 2.5. 1:1 que gera dado

Estrutura sugerida (30 min, semanal ou quinzenal):
1. Como tu tá? (5 min — humano, não pula)
2. O que tá travando? (10 min — bloqueios reais)
3. Feedback dos dois lados (10 min — eu pra ti, tu pra mim)
4. O que eu posso fazer por você até o próximo 1:1?

Feedback:
Carreira / próximos passos (5 min — não toda semana, mas mensal)

Ruim quando:
- 1:1 vira status meeting → cancela, faz status assíncrono
- Chefe fala 80% → inverte
- Sem nota / follow-up → próxima sessão começa do zero, sem progresso

### 2.6. Radical Candor — feedback difícil
- 2 eixos: care personally × challenge directly
- Quadrantes:
  - Alto care + alto challenge = Radical Candor (alvo)
  - Baixo care + alto challenge = Obnoxious Aggression
  - Alto care + baixo challenge = Ruinous Empathy (mais comum em líder novo)
  - Baixo + baixo = Manipulative Insincerity

Frame de feedback:
- Situação específica + comportamento observado + impacto + pedido.
- Não "você é desorganizado". Sim "ontem PR foi mergeado sem testes, time refez. Próxima vez, roda CI antes de pedir review."

### 2.7. Arquétipos difíceis

- **Sênior resistente** — geralmente medo de obsolescência ou frustração com decisão antiga. Diagnostica antes de confrontar. Dá ownership de algo que ele domina.
- **Júnior perdido** — falta clareza, não capacidade. Quebra task menor, pair programming, check-in mais frequente.
- **Performer tóxico** — entrega resultado, destrói cultura. Custo > benefício. Feedback explícito 1x. Se não muda, sai. Tolerar = perde resto do time.
- **Quiet quitter** — desengajado mas presente. 1:1 honesto: "Te vejo desengajado. O que tá acontecendo?" Pode ser burnout, problema pessoal, ou já saiu mentalmente.

De vez em quando, se pergunte: meu time está melhorando ou piorando? Se estiver piorando ou estiver igual, porque?

### 2.8. Hiring básico
- Evitar contratar errado = meio caminho da gestão.
- Entrevista técnica: problema real do dia a dia, não puzzle de LeetCode.
- Sinais de alerta: culpa empresa anterior, não faz pergunta, não tem opinião técnica.
- Take-home pequeno > whiteboard. Mede como pensa, não como performa sob estresse.
- Bar raiser: alguém de fora do time vetar.

Framework:
- Perguntas por whatsapp
- Call inicial
- Teste
- Call técnica (com outra pessoa presente)

USE tempo de experiência.


### 2.9. PIP Performance Improvement Plan
- Feedback informal contínuo (1:1) → primeira linha.
- Performance review formal (trimestral/semestral) → registro.
- PIP (Performance Improvement Plan) → último recurso, prazo definido (30-90 dias), critério mensurável.
- PIP não é demissão disfarçada. Se for, demita direto. Honestidade > processo de fachada.

---

## 3. Tarefas de Casa (até Módulo 4)

### 3.1. Obrigatórias

**a) Mapa do time** — planilha por liderado:
- Nome, cargo, tempo
- Maturidade (1-5) em 2-3 dimensões da task principal
- 3 expectativas explícitas pros próximos 90 dias
- KPIs pra cada (em caso um deles ajude em outras tarefas, por exemplo
- 1 risco / preocupação

**b) Template de 1:1 próprio** — escrever o teu, testar com 2 liderados na semana. Trazer notas de como foi.

**c) Uma conversa difícil** — adiada, identificada na aula. Ter a conversa antes do módulo 4. Trazer transcrição mental: o que disse, o que ouviu, o que faria diferente.

**d) Pergunta de expectativa pro chefe** — na próxima 1:1 com chefe: "Como é sucesso pra ti no meu cargo em 90 dias?" Trazer resposta literal.

**e) Problem Journal continua** — foco em problemas de pessoas / expectativa.

### 3.2. Leitura

- *Radical Candor* — capítulos 1-3
- *The Manager's Path* — capítulo sobre 1:1 e delegação
- Projeto Aristóteles (Google re:Work) — resumo de psychological safety

---

## 4. Referências

- *Radical Candor* — Kim Scott
- *Five Dysfunctions of a Team* — Patrick Lencioni
- *Turn the Ship Around!* — L. David Marquet
- *Engineering Management for the Rest of Us* — Sarah Drasner
- *The Manager's Path* — Camille Fournier (cap. 1:1, delegação)
- Projeto Aristóteles (Google re:Work) — psychological safety
- *The Fearless Organization* — Amy Edmondson
