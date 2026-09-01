# MÓDULO 2 — Comunicação Executiva

**Tese:** trabalho técnico que ninguém entende = trabalho que não existe pra quem decide.

---

## 1. Objetivos da Aula
- Traduzir técnica em linguagem de negócio: custo, risco, prazo, impacto
- Definir e apresentar KPIs técnicos
- Status report, executive summary, roadmap pitch, post-mortem
- Vender technical debt como prioridade de negócio
- Comunicar crise sem perder credibilidade

### 1.1 Semana passada
a) DISC 
b) Problem Journal — primeira semana
c) Definir os 3 KPIs de evolução

---

## 2. Perguntas
- Como você se comunica com o chefe e a Inarai? diariamente? semanalmente? Tem objetivos?
  - Quando precisa. Não tem plano. Não tem escritas.
  - De carreira: teve um CV mas é irreal. Não definiu exatamente o que ele fez.
- Última vez que chefe pediu pra repetir / explicar de novo? Sobre quê?
  - Não é relevante
- Plano x realidade? o plano existe? as pessoas seguem?
  - não
- Tem technical debt mapeado? Lista?
  - Não é relevante
---

## 3. Conteúdos para Tocar na Aula

### 3.1. Crença-chave a quebrar (10 min)
- "Bom trabalho fala por si" = falso.
- Trabalho técnico invisível = trabalho descartável no orçamento.
- "People react in how they are measured"
- Case do Martin: "Como expliquei pro CEO por que sistema caiu — saí como herói." Comunicação correta vira crise em prova de competência.
- O único ponto que importa: business value
	- Em grandes corporações, tem outros: O quanto o gestor vai aparecer.

### 3.2. Pirâmide de resposta
- Top-down: conclusão primeiro, evidência depois.
- Estrutura: situação → complicação → pergunta → resposta.

- Junior: traz situação e complicação
- Pleno: traz situação, complicação e pergunta
- Senior: traz situação, complicação e pergunta e possíveis respostas, e uma sugestão de resposta
- Lead >: traz situação, complicação e pergunta, a melhor resposta E O IMPACTO na organização
	- DRIVE A conversa

### 3.3. DORA como linguagem canônica (10 min)
- 4 métricas: deploy frequency, lead time for changes, Mean Time to Repair, change failure rate.
- Por que diretor entende: liga velocidade × estabilidade × risco.
- Mas isso é fácil e é mais corporate. Melhores métricas:
	- ANR, crash rate (mobile)
	- 40x, 50x (backend) + api response time
	- Number of bugs (QA)
- Yang:
	- KPI quantitativos x qualitativos.
	- QUEM está usando. COMO está usando. QUANTO está usando.
	- Custo por tarefa ou até custo por token
	- Uptime das ferramentas
	- Segurança
	- Number de feedback (quanto mais melhor)
	- Ou seja, o desafio é: como mensurar o quanto tão usando de forma saudável, e o quanto isso impacta o trabalho delas.
	- **Transformar os KPIS como parte do trabalho. Não depois. Durante.**
	

### 3.4. Tradução técnica → negócio (10 min)
Frame de tradução:
- Técnico fala: "precisamos refatorar o módulo X"
- Negócio ouve: "Eu sou ruim e perdi seu dinheiro"

Exercício:
- Pitch de refactor.
- traz custo/risco/prazo/impacto
- tenha sempre o "porque" na manga. Mas foque em business value.

### 3.5. Formatos canônicos (10 min)
- **Status report executivo** — 1 página, traffic light (verde/amarelo/vermelho), delta vs. semana anterior, top 3 risks, top 3 wins.
- **Executive summary** — 5 linhas máx, decisão pedida explícita. -> sempre foque no positivo. E se tiver negativo, o que você já fez pra resolver.
  - Pra um executivo, é importante pra ele ler algo e saber se precisa fazer algo ou não.

- **Post-mortem blameless** — timeline, causal vs. contributing, action items com owner + prazo.
  - mais semana que vem
- **Roadmap pitch** — 5 min, 3 slides: por quê agora, o quê entrega, quanto custa.
  - Yang: Focaria em kanban, reuniões semanais

### 3.6. Technical debt como conversa de negócio (5 min)
- Debt = juros sobre velocidade futura.
- Frame: "Cada sprint sem pagar X custa Y horas de feature."
- Não pedir refactor. Apresentar trade-off de capacity.

### 3.7. Yang
**Definir os 3 KPIs de evolução:**
- Redução de reatividade.
- Saber o que falar e como falar (Entregas, Conflitos etc).
- **Como trazer as pessoas para meu time sem eu ter que ser falso ou desleal com elas.**
  - Inarai e chefe (Tiago)


**Objetivos:**
- Resolver as responsabilidades e tarefas
- Trazer o seu gerente pro seu lado
	- descobrir se o gerente não gosta dele por talaricagem
- Ajudar a escolher caminho, procurar vagas na internet
- falar/lidar com reatividade
- 3 fraquezas técnicas. 3 fraquezas de liderança.
	- Reativadade
	- Não tem foco bom (geral)
	- planejamento
	- saber priorizar
	- Reclama bastante
	- ta sempre estressado - mas esconde
	
#### O que eu faria
- Objetivo: fazer o chefe assumir/aceitar que tem problema de organização (IA)
- Objetivo: trazer planejamento e previsibilidade pra você. Ajuda você a trabalhar nos pontos fracos.


- Focar em planejamento de curto (1 semana) e médio prazo (2 semanas NO MÁXIMO)

  1. Conversa com a Inarai sobre o plano
     1. Trazer ela pro seu lado
     2. Trazer um lado emocional -> buddy

  2. Conversa com o chefe sobre foco, distribuições de tarefas, ele fazendo sua tarefa, você fazendo coisa da menina
     1. Solução: Kanban/scrum. Status report diário no slack. Reunião semanal de 30m (você conduz)
     2. Definir o que é responsabilidade sua ou não (e escrever)
     3. Já levar uma sugestão de lista, de software, de modelo de report.

- Se der certo: Você **DRIVE** a lista, as conduções

- Toda semana: resumo do que foi feito. Expectativa x realidade.

O que isso resolve:
- Traz a Inarai pro seu lado.
- Começa a trazer o Tiago pro seu lado. 
- Se fizerem coisa errada, dá pra usar a lista como referência. Sem ataque, sem ser pessoal.

Importantíssimo:
- Usar KPIs PRA CADA tarefa. Principalmente referente a quem usa e impacto na organização.
	- Acceptance of done
	

---

## 4. Tarefas de Casa (até Módulo 3)

**a) Lista de tarefas com KPIs** — Lista de tarefas reais do seu trabalho

**b) Problem Journal continua** — mínimo 3 entradas na semana, foco em problemas de comunicação observados.

OBS: whatsapp do grupo

---

## 5. Referências

- *Accelerate* — Forsgren, Humble, Kim (DORA)
- *The Pyramid Principle* — Barbara Minto
- *The Culture Map* — Erin Meyer
- State of DevOps Report (anual, DORA)
- Google SRE Workbook — post-mortem template
- "Technical debt quadrant" — Martin Fowler
