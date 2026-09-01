# ROTEIRO — Workshop Roadmap Tech Lead

90 minutos · Terça 11/08 · 18h30 · R$39
Espinha dorsal: **PREPARAR → AGIR → OTIMIZAR** (método da mentoria — o workshop é uma degustação dele).

Tipos de slide disponíveis no harness (`slides.js`): `capa`, `logos`, `foto`, `perfil`, `lista` (com `revela`), `cronologia`, `divisor`, `loop`, `checkpoint`, `agenda` (com QR).

---

## Bloco 1 — Abertura + história (5 min)

**Slide 1 · `capa`**
- Selo: `Workshop · Roadmap Tech Lead`
- Título: "Seus primeiros **90 dias**" (destaque em "90 dias")
- Rodapé: Martin Fabichak · Code Leadership

**Slide 2 · `logos` — Meu background**
- Reusar assets: insolita, goodgame, chimera, magicmedia + Code Leadership
- Fala: 20 anos, jogos com milhões de usuários, liderei times na Europa

**Slide 2.5 · - larry
reutilizar slide do larry

**Slide 3 · `perfil` — Prova: Monopoly GO** (reusar `assets/monopolygo.png`)
- Problema de escala/networking
- KPIs e dashboards pra entender onde estávamos
- Plano antes de mexer
- Execução com pessoal externo
- Fala: "esse é exatamente o método que vocês vão levar hoje"

**Slide 4 · `lista` — A promessa da noite**
- Você sai com um roadmap dos próximos 90 dias
- Checklist 90 dias + Mapa de stakeholders (entregáveis)
- Garantia: passos acionáveis ou reembolso

**Slide 11 · `loop` — Enxergar antes de mexer**
- Itens: `Mapear` → `Medir` → `Priorizar` → `Mudar` → `Mostrar`
- Fala: esse loop repete o resto da sua carreira de líder
---

## Bloco 2 — PREPARAR: Mapear o time (15 min)

**Slide 5 · `divisor`** — "PREPARAR"
- Fala: primeira fase do método. Regra de ouro: **não mude nada antes de enxergar**.

**Slide 6 · `lista` revela — O erro clássico do tech lead novo**
- Chegar mudando processo, stack, sprint
- Time se fecha, chefe desconfia
- Você vira "o cara que quebrou o que funcionava"
- Antídoto: expectativa clara

**Slide 7 · `lista` revela — As conversas com a equipe**
- 1:1 com cada pessoa do time (1 hora cada)
- Se conectar, entender de onde cada pessoa vem, criar expectativa positiva e clara
- O que perguntar: o que funciona? o que te irrita? o que você mudaria amanhã?
- O que NÃO fazer: prometer mudanças, criticar o líder anterior
- Sinais pra observar: quem fala, quem se cala, quem resolve de verdade

**Slide 7.5 · `lista` revela — As conversas com os colegas**
- 1:1 com PM, PO, Designer, etc... (1 hora cada)
- Se conectar, entender de onde cada pessoa vem, criar expectativa positiva e clara
- O que perguntar: No que a equipe é bom, no que ela é ruim
- O que NÃO fazer: prometer mudanças, criticar o líder anterior
- Sinais pra observar: quem fala, quem se cala, quem resolve de verdade


**Slide 8 · `lista` revela — O que sair anotando**
- Mapa de forças: quem é bom em quê
- Riscos: pessoa-chave única? alguém já com um pé fora?
- Conflitos e panelinhas
- Expectativas incongruentes da direção
- Entregável: **Roadmap de conversas da 1ª semana** (template)

---

## Bloco 3 — PREPARAR: Mapear o sistema (15 min)

**Slide 9 · `lista` revela — O que analisar antes de mudar qualquer coisa**
- gráfico com 3 camadas: usuário por fora, processo por no meio, código no centro

**Slide 9 · `lista` revela — Usuários**
- Quem são os usuários? 
- Como o sucesso é mensurado?
- Como próximas priodades são definidas

**Slide 9 · `lista` revela — Processos **
- Fluxo de deploy: da branch à produção, onde dói?
- Arquitetura: desenhe o que existe (caixas e setas bastam)
- Dívida técnica: o que o time reclama vs. o que quebra de verdade
- Histórico de incidentes: o que já pegou fogo?
- Observabilidade

**Slide 10 · `lista` revela — Código**
- Processos de código (code review, débito técnico, git flow)
- as branches quebram sempre? O que é dificil de executar aqui?

**Slide 10 · `lista` revela — Observabilidade mínima**
- Você não gerencia o que não enxerga
- Mínimo viável: erros (alertas), latência/uptime do crítico, pipeline de deploy visível
- 1 dashboard simples > 10 ferramentas
- Barato/grátis: o que já existe na empresa antes de comprar ferramenta



---

## Bloco 4 — PREPARAR: Mapear pra cima (10 min)

**Slide 12 · `lista` revela — Alinhar expectativas com seu chefe**
- Pergunta de ouro: "como você vai medir se eu fui bem daqui a 6 meses?"
- Traduza a resposta em 2–3 métricas escritas
- Combine cadência: update quinzenal curto, sem surpresas
- Sem virar refém: expectativa não escrita = dívida emocional

**Slide 13 · `lista` revela — Mapa de stakeholders**
- Quem pode te promover, quem pode te travar
- Produto, QA, infra, outros leads: o que cada um espera do seu time
- Entregável: **Mapa de Stakeholders & Expectativas** (template)

---

## Bloco 5 — RECAP + respiro (3 min)

**Slide 14 · `cronologia` revela — RECAP**
- Mapeou o time (conversas da 1ª semana)
- Mapeou o sistema (análise técnica + observabilidade mínima)
- Mapeou pra cima (chefe + stakeholders)
- Agora sim: mudar

---

## Bloco 6 — AGIR: Primeiras mudanças (15 min)

**Slide 15 · `divisor`** — "AGIR"

**Slide 16 · `lista` revela — Como escolher a primeira mudança**
- Critério: quick win — visível, baixo risco, dor real do time
- Exemplos: automatizar deploy manual, matar reunião inútil, alerta no erro que mais repete
- O que evitar: reescrever sistema, trocar stack, reorganizar time
- 1 mudança por vez, medida antes/depois

**Slide · `lista` revela — Observabilidade mínima**
- Você não gerencia o que não enxerga
- Mínimo viável: erros (alertas), latência/uptime do crítico, pipeline de deploy visível
- 1 dashboard simples > 10 ferramentas
- Barato/grátis: o que já existe na empresa antes de comprar ferramenta

**Slide 17 · `lista` revela — Como comunicar a mudança**
- Antes: avisar o time e o chefe (ninguém gosta de surpresa)
- Durante: dar crédito a quem executou
- Depois: mostrar o número (antes/depois) — é aqui que a observabilidade paga
- Resultado invisível = resultado que não existe

**Slide  `lista` revela — chefe **
- check-in novamente com o plano. Fazer pelo menos 1 vez por mes
- Trazer tudo, mas focar nas coisas boas
- update semanal no slack/teams

**Slide 18 · `loop` — Exemplo real (Martin)**
- Reusar formato dos loops do deck auto-liderança com caso seu de liderança
- Sugestão: `Assumi time` → `Mapeei 2 semanas` → `1 quick win` → `Mostrei número` → `Ganhei espaço`

---

## Bloco 7 — OTIMIZAR: Networking interno & visibilidade (10 min)

**Slide 19 · `divisor`** — "OTIMIZAR"

**Slide 20 · `lista` revela — Networking interno**
- Aliados antes de precisar deles: 1 café/mês com pares e outros leads
- Ajude outros times de graça — volta em dobro
- Seu chefe deve ouvir seu nome de outras bocas
- Tome a frente: não espere ser reconhecido — roube o reconhecimento (mentalidade)

**Slide 21 · `lista` revela — time**
- expectativa clara, reconhecimento e plano de carreira


**Slide 21 · `lista` revela — Visibilidade do time**
- Demo curta por sprint/mês pra quem importa
- Update escrito quinzenal: 3 bullets, sem jargão
- Celebre o time em público, corrija em privado
- Time visível = líder promovível

---

## Bloco 8 — Dicas de 20 anos (7 min)

**Slide 22 · `lista` revela — Rapid-fire: 20 anos em 7 minutos**
- Faça entrevistas mesmo sem querer sair
- Todo problema é uma oportunidade de ocupar espaço
- Inglês e falar em público pagam mais que framework novo
- IA no dia a dia do líder (code review, docs, relatórios)
- Escreva tudo: memória é política
- Pessoas reagem conforme elas são mensuradas

**Slide 23 · `foto` — Dunning-Kruger** (reusar `assets/dunning-kruger.png`)
- Fala: humildade no vale, coragem no platô

---

## Bloco 9 — Checklist 90 dias + próximos passos (5 min)

**Slide 24 · `cronologia` revela — Seu roadmap de 90 dias**
- Semana 1–2: conversas + mapeamento técnico
- Semana 3–4: expectativas com chefe + observabilidade mínima
- Mês 2: primeiro quick win + comunicação
- Mês 3: otimizar, visibilidade, próximo win
- Entregáveis: **Checklist 90 dias** + e-book da sessão

**Slide 27 · `agenda` com QR — Dúvidas e PRÓXIMOS PASSOS**
- ENTREGÁVEIS: checklist 90 dias + mapa de stakeholders + e-book (link)
- MENTORIA: DM ou WhatsApp
- QR: link de contato/aplicação

**Slide 25 · `lista` — Ponte pra mentoria**
- Diagnóstico pessoal, monto o plano com você
- Método completo: Preparar → Agir → Otimizar → Próximos passos de carreira
- Formatos: R$2k / R$4k / R$9k (acompanhamento 6–12 meses, WhatsApp, encontros quinzenais)
- Chamada: DM ou WhatsApp


---

## Assets

Já na pasta (copiados do deck auto-liderança): logos (insolita, goodgame, chimera, magicmedia), monopolygo.png, dunning-kruger.png, larry.jpeg, camarao.jpg, QR.

Faltam criar/decidir:
- QR novo (destino: WhatsApp ou página da mentoria — o atual pode apontar pro workshop)
- Templates dos entregáveis (checklist 90 dias, mapa de stakeholders, roadmap de conversas) — podem ser PDF simples à parte
- Caso real do slide 18 (loop Martin liderança) — escolher história
