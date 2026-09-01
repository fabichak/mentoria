# IDEIAS — Tech Leader Code™

Documento complementar ao `mentoria-estrategico.md`. Três blocos:

1. Integração da **resolução de problemas** como eixo transversal
2. Resumo **high-level** dos 5 módulos core + 1 módulo opcional
3. Bibliografia e bônus sugeridos a partir de pesquisa de mercado

---

## 1. Resolução de Problemas como Eixo Central

### Tese

Diferencial do Martin não é só "ex-CTO com 20 anos". É capacidade comprovada de **entrar em situações ambíguas, decompor, planejar, alinhar pessoas e executar**. Meta-habilidade — aplicável a bug crítico, cliente difícil, time desmotivado, roadmap travado, sales pipeline.

Mentoria trata liderança técnica como **engenharia aplicada a problemas humanos e organizacionais**. Mesma lógica que dev já domina (decompor, medir, iterar), aplicada em camadas sem treino formal.

### 5 movimentos concretos

**1.1. Framework próprio: MAPA — Mapear, Analisar, Planejar, Agir**

Adaptação dos clássicos de engenharia ao contexto de liderança:
- **Mapear** — coletar sinais (métricas, conversas, contexto político). Observability da situação.
- **Analisar** — separar *causal factors* de *contributing factors* (SRE). 5 Whys com evidência.
- **Planejar** — decompor em passos mensuráveis, com KPI e prazo. Sprint planning para mudança organizacional.
- **Agir + Revisar** — executar, medir, ajustar. Post-mortem blameless em decisões de liderança.

Canivete suíço do aluno — aparece em todas as fases.

**1.2. Estudos de caso reais do Martin em cada módulo**

Cada módulo abre com case real anonimizado. Aluno vê problema → tenta resolver → Martin mostra como fez → extrai framework. Formato: *Problem → Diagnosis → Plan → Execution → Lesson*.

**1.3. Hotseat como clínica de problemas**

Encontros em grupo viram sessões de diagnóstico coletivo. Aluno traz problema real → grupo aplica MAPA → Martin facilita. Gera prova social, treina raciocínio, produz biblioteca de casos.

**1.4. Problem Journal como entregável obrigatório**

Registro semanal: *problema, hipótese, ação, resultado*. Template pronto. Força metacognição, alimenta 1:1s, vira artefato de progresso ao final dos 6 meses.

**1.5. Decision-making frameworks explícitos**

Material inclui: matriz de decisão (reversível vs. irreversível, alta vs. baixa estaca), OODA loop, pre-mortem. Líder técnico = decisor sob incerteza, não executor.

---

## 2. High-Level dos Módulos

5 módulos core + 1 opcional. Cada módulo: posicionamento, objetivos, encaixes novos (lacunas de mercado integradas), entregáveis, conexão com problem-solving, referências.

### MÓDULO 1 — Diagnóstico do Líder

**Posicionamento:** *"Antes de liderar os outros, diagnostique a si mesmo como você diagnosticaria um sistema em produção."*

**Objetivos:**
- Mapear perfil técnico-comportamental atual (ponto A)
- Definir destino de carreira (Tech Lead? Head? CTO? Staff IC?)
- Identificar 3 maiores lacunas acionáveis para 6 meses
- Quebrar crença "bom dev = bom líder automaticamente"

**Entregáveis:**
- Mapa pessoal de competências
- Roadmap de carreira 6/12/24 meses com marcos
- Lista priorizada de lacunas com KPI de evolução

**Conexão com problem-solving:** primeiro "problema" que aluno resolve é ele mesmo. Aplica MAPA na própria carreira.

**Referências:** *The Manager's Path* (Fournier), *Staff Engineer* (Larson), *The Staff Engineer's Path* (Reilly).

---

### MÓDULO 2 — Comunicação Executiva

**Posicionamento:** *"Trabalho técnico que ninguém entende é trabalho que não existe para quem decide."*

**Objetivos:**
- Traduzir técnica em linguagem de negócio (custo, risco, prazo, impacto)
- Definir e apresentar KPIs técnicos
- Dominar formatos: status report, executive summary, roadmap pitch, post-mortem
- Comunicar crises sem perder credibilidade

**Encaixes novos:**
- **Aula 2.1** — estudo de caso dedicado: **technical debt como conversa de negócio** (vender refactor para quem não codifica)
- **Aula 2.2** — **DORA metrics** como base canônica de KPIs técnicos

**Entregáveis:**
- Template de status report executivo
- Dashboard de KPIs do time do aluno
- Pitch de 5 min do roadmap técnico para liderança não técnica (gravado e revisado)

**Conexão com problem-solving:** comunicação = diagnóstico e terapia sobre percepção. Aluno enxerga lacuna de contexto como problema resolvível.

**Referências:** *Accelerate* (Forsgren/Humble/Kim), *The Culture Map* (Meyer).

---

### MÓDULO 3 — Gestão de Equipe e Expectativas

**Posicionamento:** *"Liderança é engenharia de expectativas — para cima, para baixo e para os lados."*

**Objetivos:**
- Expectation Management bidirecional (chefe ↔ aluno ↔ time)
- Delegar sem perder qualidade (task × maturidade × risco)
- 1:1s que geram dado, não chat
- Feedback difícil com Radical Candor
- Lidar com arquétipos: sênior resistente, júnior perdido, performer tóxico

**Encaixes novos:**
- **Aula 3.1** — abrir com **psychological safety** (Amy Edmondson / Projeto Aristóteles). Safety é pré-condição do expectation management.
- **Aula 3.3** — expandir "dev difícil" com bloco de **hiring e entrevista técnica** (15 min): evitar contratar errado é meio caminho.
- **Aula 3.4** — escalação do 1:1 ao **performance review / PIP**: tabu mal executado na maioria das empresas.

**Entregáveis:**
- Template de 1:1 próprio, testado com time real
- Matriz de delegação aplicada ao squad
- Script de conversa difícil (case real, ensaiado em hotseat)

**Conexão com problem-solving:** cada pessoa do time é um "sistema". MAPA aplicado a motivação, bloqueio, desengajamento. Hipótese + evidência, não achismo.

**Referências:** *Radical Candor* (Scott), *Five Dysfunctions of a Team* (Lencioni), *Turn the Ship Around!* (Marquet), *Engineering Management for the Rest of Us* (Drasner), Projeto Aristóteles (Google).

---

### MÓDULO 4 — Navegação Corporativa

**Posicionamento:** *"A empresa é um sistema com regras invisíveis. Leia o código-fonte ou seja leitura externa do sistema."*

**Objetivos:**
- Política organizacional sem virar político (influência sem cargo)
- Mapear stakeholders: quem decide, influencia, bloqueia
- Visibilidade pelos motivos certos — impacto, não auto-promoção
- Rede interna de aliados estratégicos
- Posicionar contribuição técnica para promoção e orçamento

**Encaixes novos:**
- **Aula 4.2** — **negociação (Chris Voss / Never Split the Difference)**: influência sem cargo = negociação. Tactical empathy, mirroring, labels.
- **Aula 4.3** — expandir visibilidade para incluir **career ladders do time**: líder cresce crescendo os liderados.

**Entregáveis:**
- Mapa de stakeholders da empresa (poder/interesse)
- Plano de visibilidade trimestral
- Network map interno com 3 aliados a cultivar

**Conexão com problem-solving:** política corporativa como grafo de influência. Problema = aumentar *blast radius* da contribuição. Análise sistêmica, não força bruta.

**Referências:** *An Elegant Puzzle* (Larson), *The Staff Engineer's Path* (Reilly), *Never Split the Difference* (Voss).

---

### MÓDULO 5 — Liderança sob Pressão

**Posicionamento:** *"Crise não se gerencia improvisando — se gerencia com framework treinado antes da crise."*

**Objetivos:**
- Framework de resolução de problemas críticos (adaptação SRE Incident Command)
- Estilos de liderança situacional (Primal Leadership): visionário, coaching, afiliativo, democrático, marcador-de-ritmo, comandante
- Controle emocional e perspectiva sob pressão
- Post-mortems blameless
- Liderança preventiva: pre-mortem, chaos drills

**Encaixes novos:**
- **Aula 5.3** — expandir controle emocional com **saúde mental e burnout do líder**: sinais, prevenção, recuperação. 60% do trabalho é perspectiva emocional.

**Entregáveis:**
- Playbook de resposta a crise personalizado (papéis, canais, comunicação)
- Primeiro post-mortem blameless real no time do aluno
- Autoavaliação dos 6 estilos + plano de desenvolvimento dos 2 mais fracos

**Conexão com problem-solving:** master class do MAPA sob estresse. Meta-resolução: causa raiz organizacional, não só sintoma.

**Referências:** *Primal Leadership* (Goleman), Google SRE Workbook, *Turn the Ship Around!* (Marquet). Frameworks: 5 Whys com evidência, Kepner-Tregoe, Fault Tree Analysis.

---

### MÓDULO 6 (OPCIONAL) — Liderança Remota e Distribuída

**Status:** módulo bônus. Fora do currículo core da v1. Ativar conforme demanda ou como faixa premium na v2.

**Posicionamento:** *"Liderar time remoto/híbrido não é liderança normal com Zoom. É um sistema operacional diferente."*

**Objetivos:**
- Operar time distribuído entre fusos, culturas e contratos (CLT, PJ, outsourcing, internacional)
- Comunicação assíncrona como default — sync é exceção cara
- Construir confiança e cultura sem corredor de escritório
- Métricas e rituais que funcionam sem presença física
- Gestão de cliente externo / outsourcing (diferencial do Martin, ex-CTO Magic Media)

**Entregáveis:**
- Playbook de operação async do time do aluno
- Matriz sync vs. async (o que merece reunião, o que não)
- Rituais de cultura remota (onboarding, offsite, 1:1)

**Conexão com problem-solving:** MAPA aplicado a sinal fraco — remoto amplifica ambiguidade. Líder remoto precisa diagnosticar sem ver.

**Referências:** *The Culture Map* (Meyer), GitLab Remote Manifesto, experiência direta Martin (Alemanha + Brasil + outsourcing global).

---

## 3. Bibliografia e Bônus

### 3.1. Bibliografia curada

**Obrigatória (3 livros):**
- *The Manager's Path* — Camille Fournier
- *An Elegant Puzzle* — Will Larson
- *Radical Candor* — Kim Scott

**Avançada:**
- *Staff Engineer* — Will Larson (trilha IC)
- *The Staff Engineer's Path* — Tanya Reilly
- *Accelerate* — Forsgren, Humble, Kim (DORA)
- *Turn the Ship Around!* — L. David Marquet
- *Five Dysfunctions of a Team* — Patrick Lencioni
- *Primal Leadership* — Daniel Goleman
- *The Culture Map* — Erin Meyer
- *Never Split the Difference* — Chris Voss
- *Thinking in Systems* — Donella Meadows

**Frameworks:**
- Google SRE Workbook (incident command, blameless post-mortem)
- ITIL Problem Management (8 passos)
- DORA / State of DevOps Report
- Projeto Aristóteles (Google) — psychological safety
- Cynefin Framework (Snowden) — classificação de problemas

### 3.2. Bônus e produtos adjacentes

**Módulos bônus gravados** (área de membros, v2 como faixas premium):
- Hiring Masterclass
- Orçamento e headcount planning (pré-CTO)
- IA e líder técnico em 2026 (Copilot/Claude no time, produtividade com IA)
- Outsourcing e cliente externo (nicho — agência/consultoria)

**Hotseats temáticos** (1x/mês, tema rotativo):
- PIP e conversa de desligamento
- Negociação salarial
- Post-mortem real do aluno

**Ativos reutilizáveis:**
- Biblioteca de templates: status report, 1:1, post-mortem, career ladder, matriz de delegação
- Simulador de entrevista de tech lead (role-play com Martin)

**Conteúdo orgânico / topo de funil:**
- Análise mensal de outage público (GitHub, Cloudflare, AWS) aplicando MAPA
- CTO Office Hours — 1x/mês aberto (Instagram/YouTube)
- Posts recorrentes: IA 2026, DORA, blameless post-mortem

### 3.3. Roadmap de versões

**v1 — primeiros 5 alunos (validação):**
- 5 módulos core com encaixes da Estratégia A integrados
- Módulo 6 desativado
- Preço: R$ 3k / 6 meses

**v2 — após 5 vendas (aumento de ticket):**
- Módulo 6 ativado
- Bônus como "faixas" opcionais: Hiring Track, International Career Track, CTO Track
- Preço: R$ 3k → R$ 6k

**Risco a evitar:** inflar programa de 20 para 35 aulas. Sênior odeia curso gigante. Prefere denso + biblioteca sob demanda.

---

## Próximos Passos

1. Validar nome MAPA (ou alternativo) com 2-3 devs-alvo antes de cristalizar
2. Gravar 1 case real (Problem → Diagnosis → Plan) como MVP de conteúdo
3. Montar template do Problem Journal antes do onboarding de 05/03/2026
4. Decidir gatilho de ativação do Módulo 6 (nº de alunos? demanda explícita?)

---

## Fontes Consultadas

- [Top Engineering Leadership Books (MentorCruise, 2025)](https://mentorcruise.com/books/engineeringleadership/)
- [12 Best Books for Software Engineering Managers (X-Team)](https://x-team.com/magazine/essential-books-for-engineering-managers)
- [Staff Engineer — Will Larson](https://staffeng.com/book/)
- [Engineering Leadership Reading List — Dustin Goodman](https://dustingoodman.dev/blog/20241207-engineering-leadership-reading-list/)
- [Google SRE Workbook — Incident Response](https://sre.google/workbook/incident-response/)
- [Root Cause Analysis (IBM)](https://www.ibm.com/think/topics/root-cause-analysis)
- [5 Whys Framework (Miro)](https://miro.com/root-cause-analysis/what-is-5-whys-framework/)
- [Problem Management 8 Steps (Asana)](https://asana.com/resources/problem-management-basics)
- [Technical Problem Solving — Engineering Excellence Framework](https://resources.rework.com/libraries/organizational-competencies/technical-problem-solving)
- [Blameless Incident Response Culture (Rootly)](https://rootly.com/sre/how-rootly-builds-a-blameless-incident-response-culture)
