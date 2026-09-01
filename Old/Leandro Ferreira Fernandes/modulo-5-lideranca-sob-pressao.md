# MÓDULO 5 — Liderança sob Pressão

**Tese:** crise não se gerencia improvisando. Se gerencia com framework treinado antes da crise. Quem improvisa em incêndio queima junto. 

---

## 1. Objetivos da Aula

- Framework de resposta a crise técnica (adaptação SRE Incident Command)
- Estilos de liderança situacional (Primal Leadership): visionário, coaching, afiliativo, democrático, marcador-de-ritmo, comandante
- Controle emocional e perspectiva sob pressão
- Post-mortem blameless: causa raiz organizacional, não só técnica
- Liderança preventiva: pre-mortem, chaos drills, redução de blast radius
- Saúde mental e burnout do líder — sinais, prevenção, recuperação

### 1.1 Semana passada
**a) Mapa de stakeholders**
**b) 3 grafos da empresa**
**c) Plano de network 90 dias**
**d) Narrativa de impacto**
**e) Negociação ativa com ferramenta Voss**
**f) Career ladder do time**
**g) Problem Journal**

---

## 2. Conteúdos para Tocar na Aula

### 2.1. Crença-chave a quebrar
- "Bom líder é o que mantém a calma improvisando" = falso. Calma vem de framework treinado, não de talento. E há momentos que calma não resolve.
- "Crise é exceção, foco é no dia a dia" = falso. Crise é o teste — onde liderança aparece ou some.
- "Causa raiz é técnica" = quase nunca. Causa raiz quase sempre é organizacional: comunicação, prioridade, processo, gente.
- Case do Martin: outage real / projeto travando. O que ele fez nos primeiros 15 minutos definiu as próximas 48h.

### 2.2. Incident Command — papéis e protocolo

Adaptação do SRE Workbook. Em crise, papéis explícitos > hierarquia.

Papéis:
- **Incident Commander (IC)** — decide. Não codifica. Não debuga. Coordena.
- **Ops / Tech Lead** — executa diagnóstico e fix.
- **Communications** — comunica pra fora (cliente, exec, suporte). Libera IC pra pensar.
- **Scribe** — registra timeline. Vira insumo do post-mortem.

Regras:
- IC nomeia papéis nos primeiros 5 minutos. Se ninguém nomeia, vácuo = caos.
- Canal único de coordenação (Slack dedicado, Zoom dedicado). Sem cross-channel.
- Update de status fixo (a cada 15-30 min) — mesmo se não tem novidade. Silêncio gera pânico.
- IC pode delegar IC. Plantão de 2-4h máx — fadiga mata julgamento.

Anti-padrões:
- Líder técnico assume IC e debuga ao mesmo tempo → perde os dois
- Exec entra no canal e vira IC informal → desautoriza time, atrasa fix
- "War room" sem scribe → post-mortem fica ficção

### 2.3. Estilos de liderança situacional — Primal Leadership

Goleman, 6 estilos. Nenhum é "o certo" — são ferramentas:

- **Visionário** — "vem comigo" — quando time precisa de norte. Default em crise longa.
- **Coaching** — "tenta isso" — desenvolvimento individual. Não funciona em incêndio.
- **Afiliativo** — "pessoas primeiro" — após perda, conflito, mudança difícil.
- **Democrático** — "o que tu acha?" — quando precisa buy-in e tu não tem resposta.
- **Marcador-de-ritmo** — "faz como eu" — só com time alto desempenho, doses pequenas. Queima time se for default.
- **Comandante** — "faz isso" — só em crise aguda ou risco real. Default = destrói cultura.

Anti-padrão comum em líder técnico: marcador-de-ritmo + comandante 100% do tempo. Time desengaja.

Auto-avaliação: quais 2 estilos tu usa mais? Quais 2 quase nunca? Plano de desenvolvimento dos fracos.

### 2.4. Controle emocional e perspectiva

Práticas:
- **Pausa de 90 segundos** — emoção química dura ~90s. Antes de responder em crise, conta. Funciona.
- **Nomear a emoção** — "tô com medo de não dar prazo" desarma melhor que reprimir.
- **Zoom out** — "isso vai importar em 1 ano? 5?" Recalibra estaca.
- **Separar fato de história** — fato: build quebrou. História: "vão me demitir". Só fato é acionável.
- **Sleep is a feature** — decisão importante após 22h ou com <6h sono = decisão pior. Adia se possível.

Cooldown obrigatório pós-crise: 24-48h antes de decisão grande. Adrenalina mente.

### 2.5. Post-mortem blameless

Estrutura:
1. **Timeline** — fato a fato, hora certa, sem narrativa
2. **Impacto** — quanto, em quê, em quem (negócio, não só técnico)
3. **Causal vs. contributing factors** — o que causou vs. o que contribuiu (5 Whys com evidência)
4. **O que funcionou bem** — não só erro. Reforça padrão bom.
5. **Action items** — owner + prazo + critério de pronto. Sem isso = teatro.

Blameless = foco em sistema, não em pessoa. "Por que era possível esse erro acontecer?" não "quem errou?".
Usar KPIs.

Causa raiz quase nunca é técnica:
- Bug em produção → review fraco → time sobrecarregado → headcount não aprovado → priorização errada do diretor.
- Líder técnico maduro: sobe a cadeia de "por quês" sem medo, com diplomacia.

Anti-padrões:
- Post-mortem vira culpa / PIP disfarçado → ninguém mais traz problema cedo
- Action items sem owner → some
- Não compartilha aprendizado fora do time → outros times repetem o mesmo erro

### 2.6. Liderança preventiva — pre-mortem e chaos drills

**Pre-mortem (Gary Klein):** antes do projeto começar, time finge que falhou. Cada um escreve por que falhou. Risco aparece antes, sem ego.

**Chaos drills:** simular falha de propósito. Game day, derrubar serviço de homologação, ensaiar incident command. Time treina o protocolo antes da crise real.

Lead precisa garantir tempo para isso.

**Reduzir blast radius:**
- Feature flag em mudança grande
- Rollout gradual (1% → 10% → 100%)
- Rollback fácil = decisão fácil
- Backup testado (restore, não só backup)

Ou seja: Devops garante que mudanças sejam menos estressantes.

Princípio: melhor crise é a que não acontece. Segunda melhor é a que dura 10 min porque protocolo existia.

### 2.7. Saúde mental e burnout do líder

Líder queimado = time queimado. Cuidar de ti = ato de liderança, não fraqueza.

IMO, o principal é ter um objetivo claro de longo prazo e um de curto prazo.
Tanto faz se pessoal ou de trabalho. Mas algo que faça você ligar pelo menos um pouco.


Sinais precoces:
- Acorda cansado mesmo dormindo
- Cinismo crescente ("ninguém liga", "não vai mudar")
- Procrastina decisão fácil
- Irritabilidade desproporcional
- Perda de prazer em coisas que dava prazer
- Pensa em trabalho no banho, no sono, no jantar

Prevenção:
- Limite de horas real (define e protege)
- Férias de verdade — sem Slack, mínimo 1x ano 2 semanas seguidas
- Hobby fora do trabalho (físico melhor — corre, levanta, luta, qualquer coisa)
- Terapia / coach — não tabu, é ferramenta
- Rede de pares fora da empresa (mentores, grupo de líderes técnicos)

Recuperação se já queimado:
- Reconhecer, não esconder
- Conversa honesta com chefe: o que precisa mudar? Carga, escopo, ritmo?
- Se empresa não comporta recuperação → planejar saída com cabeça fria
- Pior decisão: "aguentar mais um trimestre". Burnout composto, não some sozinho.
---

## 3. Perguntas para Fazer ao Aluno

### 3.1. Crise e incidente
- Última crise técnica grave no time. O que aconteceu nos primeiros 15 min?
- Tu virou IC, tech lead ou comms? Foi escolha ou vácuo?
- Time tem protocolo de incident command escrito? Treinado?
- Última vez que executivo entrou no canal e atrapalhou. Como tu lidou?
- Pós-crise: quanto tempo até primeira decisão importante? Tu dormiu antes?

### 3.2. Estilos de liderança
- Dos 6 estilos de Goleman, quais 2 tu usa mais? Quais 2 quase nunca?
- Em qual estilo teu chefe opera? Funciona contigo?
- Última vez que mudou estilo de propósito (ex.: comandante em crise → coaching depois)?

### 3.3. Controle emocional
- Última vez que respondeu antes de pensar e se arrependeu? Contexto?
- Tu reconhece sinais físicos de estresse no próprio corpo? Quais?
- Decisão grande que tu tomou cansado / irritado — como saiu?
- Tem prática de pausa? Qual?

### 3.4. Post-mortem
- Time faz post-mortem real após bug grande? Documentado?
- Último post-mortem — virou ação concreta ou ficou no Confluence?
- Já subiu causa raiz pra nível organizacional (priorização, headcount, processo)? Como foi recebido?
- Já participou de post-mortem que virou culpa? O que aconteceu com a confiança depois?

### 3.5. Prevenção
- Time faz pre-mortem antes de projeto grande?
- Tem chaos drill / game day? Frequência?
- Última mudança grande em produção — feature flag? Rollout gradual? Rollback testado?
- Backup do produto restaurado nos últimos 90 dias (não só feito — restaurado)?

### 3.6. Saúde do líder
- Quantas horas reais por semana? Inclui pensar em trabalho fora do horário?
- Última férias sem Slack — quando, quantos dias?
- Acorda cansado? Frequência?
- Tem hobby ativo fora do trabalho? Faz mesmo ou só fala que tem?
- Tem com quem desabafar fora da empresa (não cônjuge, não chefe)?
- De 0 a 10, energia hoje? Faz 6 meses?

### 3.7. Balanço dos 6 meses
- Compara mapa de competências hoje vs. módulo 1 — onde moveu mais?
- Lacuna que mais evoluiu — por que essa?
- Lacuna que ficou parada — por quê?
- Promoção, aumento, mudança de cargo, novo projeto — algo concreto?
- Decisão IC vs. gestão — clareou?
- Empresa atual ainda comporta destino? Ou troca virou opção?

---

## 4. Tarefas de Casa

### 4.1. Obrigatórias

**a) Playbook de resposta a crise** — 1 página pro time:
- Papéis (IC, ops, comms, scribe) — nomes potenciais
- Canais oficiais (Slack, Zoom)
- Cadência de update (15 ou 30 min)
- Critério de severidade (P0, P1, P2)
- Quem escala pra exec, quando
- Template de comunicação externa

**b) Primeiro post-mortem blameless real** — escolher incidente recente do time, aplicar estrutura completa (timeline, impacto, causal vs. contributing, o que funcionou, action items com owner). Compartilhar com chefe.

**c) Auto-avaliação dos 6 estilos** — escala 1-5 em cada (visionário, coaching, afiliativo, democrático, marcador-de-ritmo, comandante). Identificar 2 mais fracos. Plano de desenvolvimento pra cada (1 prática semanal por estilo).

**d) Pre-mortem do próximo projeto grande** — antes de começar, time inteiro responde "imagina que falhou em 6 meses, por quê?". Consolidar riscos, ações de mitigação.

**e) Plano de saúde / energia** — escrito:
- Limite de horas semanais
- Próximas férias agendadas (data, duração)
- Hobby ativo (qual, frequência)
- Apoio externo (mentor, terapeuta, grupo de pares)
- Sinal de alerta pessoal — qual sinal vou observar pra agir cedo?

**f) Refazer mapa de competências do módulo 1** — comparar hoje vs. 6 meses atrás. Identificar:
- 3 maiores avanços
- 1 lacuna que ficou parada (por quê?)
- 3 novas lacunas pros próximos 6 meses
- 1 marco grande pros próximos 6 meses (promoção, projeto, certificação, saída)

**g) Carta pra ti mesmo daqui a 12 meses** — fechada. Onde quer estar, em quê, ganhando quanto, liderando quem. Abre em maio de 2027.

**h) Problem Journal — revisão final** — ler tudo. Identificar 3 padrões recorrentes nos teus problemas. Esses padrões são os teus eixos de evolução pro próximo ciclo.

### 4.2. Leitura

- *Primal Leadership* — Goleman, capítulo dos 6 estilos
- Google SRE Workbook — Incident Response e Postmortem Culture
- *Turn the Ship Around!* — Marquet, capítulo de "I intend to" (delegação sob pressão)
- Artigo Gary Klein — "Performing a Project Premortem" (HBR)

---

## 5. Referências

- *Primal Leadership* — Daniel Goleman
- Google SRE Workbook — Incident Response, Postmortem Culture
- *Turn the Ship Around!* — L. David Marquet
- *Thinking, Fast and Slow* — Kahneman (decisão sob estresse)
- Gary Klein — "Performing a Project Premortem" (HBR, 2007)
- *The Burnout Society* — Byung-Chul Han
- Maslach Burnout Inventory — instrumento de diagnóstico
- Frameworks: 5 Whys com evidência, Kepner-Tregoe, Fault Tree Analysis, Cynefin (Snowden)
