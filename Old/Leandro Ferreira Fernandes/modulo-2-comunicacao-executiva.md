# MÓDULO 2 — Comunicação Executiva
**Tese:** trabalho técnico que ninguém entende = trabalho que não existe pra quem decide.

---

# 0. Aula passada

a) DISC

b) Problem Journal

c) Definir os 3 KPIs de fim de curso

**Objetivo**:

- Agora é Spike tech lead. 
  - Como se vende, como mostrar o trampo. 
  - Pessoa veem ele como que resolve e dá direção
    - Sente-se mais esquecido

Update:

- Apresentação pro superior/porta voz da parte
- Definir coisas com o chefe
- Objetivo: virar tech lead (gocc, update), agentes

- Romenia x NL
  - Andrei da RO vai ser promovido
  - Na NL: Freek é o Head (RH) (chapter area lead)
  - Chapter area lead antigo (salva) batia mta cabeça
  - Jim é o cara da apresentação
  - Jim quer colocar leandro de tech lead e andre de chapter area lead

20.05
- Conversa com CIO: expectativas e measurements de tech lead
  - começar com expectativas, sem masures
- Diário
  - problemas do antigo lead
  - roadmap que foi postergando
  - intenção
  - não sabia GIT, etc
- diferença entre tech lead e chapter
- porque vc liga?
  - cara senior
  - se sentiu ruim, não visto, injustiçado
  - não sabia o que significava chapter lead
  - 1:1 com a PO não técnica
- Gestor: Matjeus, Jim, Maxim (CIO), Freek (1:1/bila)
  - levar a questão das pessoas
  - poder sair das pessoas
  - 1:1 com o CIO/Jim


## 1. Objetivos da Aula

- Traduzir técnica em linguagem de negócio: custo, risco, prazo, impacto
- Definir e apresentar KPIs técnicos
- Status report, executive summary, roadmap pitch, post-mortem
- Vender technical debt como prioridade de negócio
- Comunicar crise sem perder credibilidade

### 1.1 Semana passada
---

## 2. Conteúdos

### 2.1. Crença-chave a quebrar (10 min)
- "Bom trabalho fala por si" = falso.
- Trabalho técnico invisível = trabalho descartável no orçamento.
- Case do Martin: "Como expliquei pro CEO por que sistema caiu — saí como herói." Comunicação correta vira crise em prova de competência.
- O único ponto que importa: business value
  - Em grandes corporações, tem outros: O quanto o gestor vai aparecer.

![image-20260513131752617](C:\Users\Martin\AppData\Roaming\Typora\typora-user-images\image-20260513131752617.png)



### 2.2. Pirâmide de resposta
- Top-down: conclusão primeiro, evidência depois.
- Estrutura: situação → complicação → pergunta → resposta
  - **Junior**: traz situação e complicação
  - **Pleno**: traz situação, complicação e pergunta e possíveis respostas
  - **Sênior**: traz situação, complicação e pergunta e possíveis respostas, e uma sugestão de resposta
  - **Lead** >: traz situação, complicação e pergunta, a melhor resposta E O IMPACTO na organização
    - LIDERA (DRIVE) A conversa


### 2.3. DORA como linguagem canônica
- 4 métricas: deploy frequency, lead time for changes, Mean Time to Repair, change failure rate.
- Por que diretor entende: liga velocidade × estabilidade × risco.
- Mas isso é fácil e é mais corporate. Melhores métricas:
	- ANR, crash rate (mobile)
	- 40x, 50x (backend) + api response time
	- Número de bugs
	- load testing / performance
- Para o aluno: KPIS/Métricas mais importantes

### 2.4. Tradução técnica → negócio
Frame de tradução:
- Técnico fala: "precisamos refatorar o módulo X"
- Negócio ouve: "Eu sou ruim e perdi seu dinheiro"

Exercício:
- Pitch de refactor.
- traz custo/risco/prazo/impacto
- tenha sempre o "porque" na manga. Mas foque em business value.

### 2.5. Formatos
- **Status report executivo** — 1 página, traffic light (verde/amarelo/vermelho), delta vs. semana anterior, top 3 risks, top 3 wins.
- **Executive summary** — 5 linhas máx, decisão pedida explícita. -> sempre foque no positivo. E se tiver negativo, o que você já fez pra resolver.
- **Post-mortem blameless** — timeline, causal vs. contributing, action items com owner + prazo.
	- mais semana que vem
- **Roadmap pitch** — 5 min, 3 slides: por quê agora, o quê entrega, quanto custa.

### 2.6. Technical debt como conversa de negócio (5 min)
- Debt = juros sobre velocidade futura.
- Frame: "Cada sprint sem pagar X custa Y horas de feature."
- Não pedir refactor. Apresentar trade-off de capacity.




## 3. Perguntas
- Como você se comunica com o chefe e a menina dos processos? diariamente? semanalmente? Tem objetivos?
- Última vez que chefe pediu pra repetir / explicar de novo? Sobre quê?
- Plano x realidade? o plano existe? as pessoas seguem?
- Tem technical debt mapeado? Lista?
---

---

## 4. Tarefas de Casa (até Módulo 3)

**a) Lista de tarefas com KPIs** — Lista de tarefas reais do seu trabalho

**b) Problem Journal continua** — mínimo 3 entradas na semana, foco em problemas de comunicação observados.

## 5. Referências

- *Accelerate* — Forsgren, Humble, Kim (DORA)
- *The Pyramid Principle* — Barbara Minto
- *The Culture Map* — Erin Meyer
- State of DevOps Report (anual, DORA)
- Google SRE Workbook — post-mortem template
- "Technical debt quadrant" — Martin Fowler
