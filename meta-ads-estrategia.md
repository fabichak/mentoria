# Meta Ads — Estratégia Completa (jul/2026)

Objetivos: (1) vender o workshop R$39 de 11/ago e alimentar a mentoria (R$2k/4k/9k), (2) crescer seguidores dev/tech lead no Instagram. Mercados: Brasil (principal) + Portugal (teste depois). Pesquisa consolidada de 5 frentes (mecânica, targeting, criativo, funil, seguidores) — fontes no fim de cada seção original; números de 2026 salvo indicação.

---

## 0. Decisões-chave (TL;DR)

| Decisão | Escolha | Por quê |
|---|---|---|
| Objetivo campanha workshop | **Vendas (Sales)**, otimizando **InitiateCheckout** | Tráfego otimiza clique, não comprador. Purchase precisa de 50 conv/semana (≈R$214/dia) — inviável; InitiateCheckout do Kiwify tem volume + intenção real |
| Estrutura | **1 campanha, 1 conjunto broad, 4–6 criativos** | Andromeda: criativo É o targeting. Fragmentar mata contas pequenas |
| Advantage+ | Ligado (é o default 2026), MAS **desligar Text Improvements e auto-tradução** | Reescrita de texto destrói sua voz anti-guru; auto-tradução PT-BR→PT-PT sai mangled |
| BR + PT | **Nunca no mesmo conjunto** | Meta despeja verba no país mais barato → Brasil absorve tudo. PT custa 1,5–2x mais (CPM €5–15) |
| Idioma | **Não filtrar idioma no BR** | Muitos devs usam IG em inglês — filtro "Português (Brasil)" os exclui |
| Mentoria em paralelo | **Não rodar campanha própria até 12/ago** | Verba pequena dividida = nada aprende. O workshop É o funil da mentoria |
| Seguidores | Campanha separada **Tráfego → Perfil do Instagram** (R$15–25/dia) + impulsionar Reels vencedores via "usar publicação existente" | Não existe otimização "follows" universal ainda; métrica "Instagram follows" (jul/2025) mede custo/seguidor em qualquer campanha |
| Pitch de R$4k no workshop | **CTA = aplicação + call**, nunca checkout direto | Acima de ~R$2–3k, call-first domina. Form de qualificação dobra/triplica close (15–20% → 40–60%) |
| Modelo pós-11/ago | **Workshop pago mensal (perpétuo de ciclo)** + funil de call sempre aberto | É o meta atual dos mentores BR (Ladeira, etc.) e está SUBEXPLORADO no nicho tech lead — Andy Barbosa não faz |
| Break-even | **1 venda de mentoria paga todo o tráfego** | R$4.500 de spend → cenário-base = 3 vendas (~R$12–14k backend) |

⚠️ **Imposto**: desde 01/01/2026 a Meta repassa +12,15% (PIS/COFINS+ISS) na fatura BR. R$100/dia orçado = ~R$112 real. Todo benchmark abaixo já deve ser lido com essa lente.

---

## 1. Setup técnico (fazer HOJE, ~2h, antes de qualquer anúncio)

1. **Domínio verificado** no Business Manager (martinfabichak.com).
2. **WordPress**: instalar pixel via plugin oficial Meta (ou PixelYourSite) → Events Manager → ativar **"one-click Meta-enabled CAPI"** (botão sem código, lançado abr/2026). Garante PageView/ViewContent na LP → públicos de remarketing + otimização por LP view.
3. **Kiwify** (checkout `pay.kiwify.com.br/HYcapGi`): Produto → Configurações → Pixels do Facebook → colar Pixel ID **+ token CAPI** (Events Manager → dataset → Configurações → "Gerar token de acesso"). Kiwify dispara InitiateCheckout e Purchase (Pix/cartão) com deduplicação automática. **Repetir por produto.**
4. **Testar**: Test Events deve mostrar PageView + InitiateCheckout + Purchase deduplicados. Meta: Event Match Quality ≥7.
5. **Pós-11/ago**: adotar **Calendly** (free) p/ call diagnóstica — integração nativa dispara evento **Schedule**, transformando o buraco-negro do wa.me em sinal otimizável (e habilita o booking nativo dentro de lead ads que a Meta está lançando ~out/2026). Hoje o CTA da mentoria é wa.me — funciona, mas é invisível pro algoritmo.

---

## 2. Campanha do workshop — configuração exata

**Campanha**: Objetivo **Vendas** → fluxo unificado, deixar "Advantage+ On" → Local de conversão: Site → Dataset: seu pixel → Meta de desempenho: "Maximizar número de conversões" → **Evento: InitiateCheckout** → Orçamento no nível da campanha (CBO default) → Lance: Maior Volume (sem cap — cost cap em conta nova só trava entrega).

**Conjunto (broad BR)**: Localização: Brasil. Idade mínima 25. Sem filtro de idioma. Advantage+ audience ON — opcionalmente semear com sugestões: envolvimento IG 365d + interesses (Web Development, Mobile App Development, AI, Machine Learning, Cloud Computing + Formação: Computer Science; são *sugestões*, não cerca). Posicionamentos: Advantage+ ON (dados Meta: ~30% melhor custo/resultado p/ orçamentos <US$1k/mês vs manual). Ser "Instagram-first" pelo criativo 9:16, não por exclusão de placement.

**Conjunto 2 (morno — só se envolvimento IG 90d ≥ 1.000 pessoas)**: a partir do D-6. 10–20% da verba. Criativo de urgência/countdown, formato Stories. Públicos: envolvimento IG 1–14d e 30d, visitantes LP 7/30d, abandono de checkout 7d, viewers 50/75% de vídeo. **Exclusões rigorosas**: comprador fora da captação; mentorado fechado fora de tudo.

**Regras de sobrevivência do aprendizado** (cada violação = 2–3 dias perdidos dos 13):
- Não mudar evento de otimização, lance ou targeting depois de lançar.
- Escalar orçamento ≤20% por vez, esperar 3–4 dias.
- Adicionar criativo NÃO reseta os demais — pode.
- "Aprendizado limitado" vai aparecer. É esperado nesse orçamento. Ignorar e não reestruturar no meio.
- Matar criativo só com dados: CTR <1% ou hook rate <20% após ~3 dias / ~2.000 impressões.

---

## 3. Cronograma dos 13 dias (29/jul → 11/ago)

Divisão de verba (playbook Sobral): captação/venda ~80% · remarketing ~15% · lembrete 2–5%.

| Dia | Ads | WhatsApp/CRM |
|---|---|---|
| **D-13/12 (29–30/jul)** | Subir campanha (seção 2), R$50–80/dia, 4–6 criativos. Checkout com **order bump** (gravação + template de roadmap, R$19–27 — take ~30%) | Página de obrigado → botão "entre no grupo VIP". Grupo criado, admin-only, "Roadmap Tech Lead — 11/08 (Oficial)" |
| **D-11/9 (31/jul–2/ago)** | Não mexer (aprendizado). Só cortar criativo morto em 48–72h | 1ª msg de valor: bastidor + enquete "seu maior desafio como tech lead?" |
| **D-8/6 (3–5/ago)** | 2ª leva de criativos; escalar vencedor ≤20%/dia → R$100/dia | 2 posts de valor/semana; case de mentorado (prova social). Valor antes de pedir |
| **D-5/3 (6–8/ago)** | Pesar remarketing (~15%): abandono checkout, VV 50/75%, envolvimento 1–14d. Urgência legítima. R$120–150/dia | D-5: "faltam X dias + o que você vai sair sabendo". Abandono: 3 msgs em 24h |
| **D-2 (9/ago)** | Manter pico | Logística: data/hora/duração, "link virá AQUI primeiro", bloquear agenda |
| **D-1 (10/ago)** | Lembrete pesado p/ compradores (alcance, frequência alta ok) | Noite: escassez + o que preparar. E-mail 24h antes |
| **D-0 (11/ago)** | Rodar até ~2h antes das 18h30, depois pausar | Manhã "é hoje" · **2h antes: link · 30min antes: última msg** (tríade corta no-show >60%) |
| **D+1/2** | Remarketing p/ presentes e no-shows (oferta mentoria/replay) | Sequência pós-evento (seção 5) |

**Orçamento total da janela**: ~R$1.400–1.600 (R$115/dia médio) → cenário 30–40 vendas. Para mirar 80–100 vagas: R$4–6k (R$300–460/dia) — apertado em 13 dias, exige criativo forte + público morno existente.

---

## 4. Unit economics (planejar com isso)

Inputs BR 2026: CPM feed R$18–35 / Reels R$10–22 · CTR 1,5–2,2% · LP→compra 3–8% (frio) · **CPA por ingresso R$39: planejar R$40–60** · show-up evento pago com grupo WhatsApp: 60–70% · pitch → compra direta 2–4% dos presentes · presentes → aplicação de call 10–20% · call qualificada → fechamento 30–40%.

| | Conservador | Base | Otimista |
|---|---|---|---|
| Spend (c/ imposto) | R$2.000 | R$4.500 | R$8.000 |
| Ingressos | 33 | 90 | 200 |
| Front (ticket+bump −9% taxas) | R$1.3k (67% do spend) | R$3.7k (81%) | R$8.1k (102%) |
| Presentes | 20 | 58 | 140 |
| Calls | 1–2 | 3–4 | 9 |
| **Vendas mentoria** | **1** | **3** | **7** |
| ROAS total | ~2,7x | ~3,5x | ~4,5x |

Front-end cobrindo 70–110% do tráfego = normal e saudável ("liquidar o tráfego"); lucro é o backend. Maiores alavancas, em ordem: (1) show-up (grupo WhatsApp > qualquer otimização de ads), (2) form de qualificação pré-call, (3) order bump, (4) follow-up 48h (~25% das vendas vêm dele).

---

## 5. Pitch e pós-evento

**Dentro dos 90 min**: conteúdo 60–70 min → pitch 15–20 min → Q&A 10 min (quebra objeção ao vivo). Oferta como clímax do conteúdo: o workshop entrega o "o quê" (roadmap), a mentoria vende "como + velocidade + acompanhamento". Espinha: big idea → promessa → prova (cases dos 8 mentorados) → mecanismo (4 pilares + 12 meses) → garantia → **CTA único: aplicação + call** ("quem aplicar até quinta tem condição de participante"). Escassez legítima: vagas reais por capacidade ("abro 4 vagas nesta turma"), bônus só-ao-vivo (ex.: revisão de LinkedIn), prazo 48h. **Downsell R$2k só na call ou na sequência — nunca no palco. Upsell R$9k só na call, para quem tem perfil.**

**Form de aplicação (Typeform/Tally, 5–7 perguntas)**: cargo/senioridade · objetivo 12 meses · principal gargalo · já investiu em mentoria? · faixa de investimento disponível · urgência · por que você. Deixar claro que aplicar ≠ vaga garantida. Dupla confirmação 24h antes da call.

**Pós-evento**: D-0 noite: replay 48h + oferta + prazo a TODOS · D+1 no-shows: "replay até amanhã 23h59" + corte de 60s do melhor momento · D+1 assistiu-não-aplicou: prova social + FAQ objeções + call como degrau menor · D+2: última chamada · D+3–7: CTA vira call diagnóstica gratuita; quem trava no preço → downsell R$2k. Grupo vira nurture do próximo workshop — nunca abandonado em silêncio.

---

## 6. Criativos — formatos, durações, ganchos

### Matriz formato × objetivo

| Objetivo | Formato | Duração | Estilo |
|---|---|---|---|
| Frio → workshop (DR) | Reels 9:16 talking-head + legenda dinâmica | **15–30s** | Gancho em texto no frame 1, corte a cada 2–3s, CTA visual no fim |
| Frio → autoridade | Whiteboard desenhando o roadmap 90 dias / listicle | **45–90s** | Whiteboard = 74% de conclusão média (maior de todos os estilos) |
| Stories (frio/morno) | Selfie cru, 1 ideia | **10–15s** | Urgência/countdown |
| Feed DR + remarketing | **Estático** texto-puro estética terminal/IDE, screenshot-proof (WhatsApp de mentorado) | — | Estáticos ainda geram 60–70% das conversões em muitas contas; CPM ~38% menor |
| Remarketing objeção | Talking-head "não sou coach, é método" | 30–45s | Objection-first |
| BOF mentoria | Depoimento cru de mentorado (celular) | 30–90s | Transformação específica > elogio genérico |

**Specs**: 1080×1920 (9:16) Reels/Stories, 4:5 feed. Zonas seguras: nada crítico no topo 14%, base 20–35%, laterais 6%. Gancho decide em ~0,4s; primeiros 3s = 60%+ do impacto. **Legenda queimada obrigatória** (~85% assiste mudo; com legenda converte 12,5% vs 6,9%). Áudio original (favorece algoritmo E permite impulsionar — música licenciada bloqueia boost). Produção: celular + bom áudio > estúdio. Founder cru direct-to-camera = formato nº1 de 2026; polimento demais É penalizado (Andromeda pesa autenticidade 2–3x).

**Volume**: 8–12 conceitos genuinamente distintos/mês, 1–2 cortes cada. Fadiga em 2–3 semanas — refresh proativo. Criativos por persona (Andromeda agrupa por persona): "sênior travado" · "TL recém-promovido afogado" · "pleno mirando liderança".

### Ganchos PT-BR (primeiros 3s, falado + texto na tela)

Sênior travado:
1. "Você não vira tech lead escrevendo código melhor. Liderei mais de 160 devs — nunca promovi ninguém por isso."
2. "Sênior há 4 anos, salário travado… e o pleno que você treinou acabou de virar seu líder."
3. "O mercado te ensinou a evoluir tecnicamente. Ninguém te ensinou a evoluir profissionalmente." *(tese da marca — gancho mais forte)*
4. "Se você é o mais técnico do time e foi preterido na promoção — o problema não é o seu código."
5. "A habilidade mais escassa em tech não é conhecimento técnico. É maturidade. E ela tem método."

Novo tech lead afogado:
6. "'Parabéns, agora você é o tech lead.' Ninguém te contou o que vem depois dessa call."
7. "Tech lead não é promoção. É outra profissão. E te jogaram nela sem manual."
8. "Seu dia virou reunião, incêndio e código depois das 22h? Não é falta de esforço. É falta de método."
9. "Os primeiros 90 dias como tech lead decidem sua reputação pelos próximos 3 anos."
10. "3 erros que todo tech lead de primeira viagem comete nos primeiros 30 dias — eu cometi os três."

Anti-guru (remarketing):
11. "Não sou coach. Fui CTO por 20 anos, entreguei mais de €100 milhões em projetos. Isso é o que funciona de verdade."
12. "Se alguém te promete dobrar de salário em 3 meses, desconfia. O que eu tenho é um plano de 90 dias — e ele dá trabalho."

Regras: credencial como cena, não como vanto · framing contrário ("não é X") > promessa, p/ público cético · números concretos (90 dias, 160 devs, €100M), nunca promessa de renda · jargão dev real (sprint, PR, 1:1, on-call) — o jargão é o filtro de audiência no broad.

**Evidência dev-audience**: especificidade técnica = +68% engajamento; New Relic +62% só mostrando sintaxe real; JetBrains +47% CTR com visual estilo IDE. O que mata: hype, corporativês, animação chamativa. Público BR dev é explicitamente anti-guru ("quando a esmola é demais…") — seu posicionamento anti-motivacional é o ingresso, não enfeite.

**Ad Library (fazer manualmente, 15 min, quinzenal)**: facebook.com/ads/library → Brasil → buscar por página (DevClub, Rocketseat, Alura, Full Cycle, Andy Barbosa, Escola Forja) + keywords "tech lead", "liderança técnica" → filtrar vídeo → anúncio rodando **60+ dias = vencedor comprovado** → anotar gancho/duração/formato. DevClub = anti-modelo (alta promessa p/ iniciante); Full Cycle = análogo mais próximo (dev empregado buscando senioridade).

**Advantage+ creative enhancements (default ON desde fev/2026 — revisar)**: DESLIGAR Text Improvements, auto-tradução, música no feed, expansão de imagem em talking-head. Manter/testar: brightness, Enhance CTA, Relevant Comments.

---

## 7. Seguidores — camada paga + orgânica

**Mecânica 2026**: não existe (ainda) otimização universal "seguir". Setup consenso: objetivo **Tráfego → local de conversão "Perfil do Instagram"** (mudar manualmente!), meta de desempenho: visitas ao perfil, **placements manuais só Instagram** (única exceção à regra Advantage+ — tirar FB/Messenger/AN rende 2–4x mais visitas de perfil pelo mesmo valor). R$15–25/dia, Brasil apenas, rodar ≥5–7 dias antes de julgar.

**Medir**: coluna **"Instagram follows"** (Ads Manager, desde jul/2025, funciona em QUALQUER campanha — inclusive a de vendas do workshop: seguidores de lá são grátis, meça). Métricas custom: custo/seguidor = gasto ÷ follows · taxa = follows ÷ visitas de perfil. **Benchmark BR nicho B2B hiperqualificado: R$2,00–4,50/seguidor** (planejar R$1,50–4). Evitar fantasmas: nunca países baratos, CTA específico ("Siga para X sobre liderança técnica" corta CPF 20–40% e auto-seleciona), criativo tem que parecer o perfil real.

**Impulsionar Reels vencedores**: só os comprovados (watch time acima da mediana + sends/reach alto). Via **Ads Manager → "usar publicação existente"** (mantém likes/comentários + targeting completo) — melhor que o botão Impulsionar. 1–2 Reels/mês, R$10–20/dia × 5–7 dias, meta "mais visitas ao perfil".

**Perfil como conversor** (média visita→follow: 13,5%; <5% = perfil quebrado): bio linha 1 = nicho + keywords buscáveis ("Ex-CTO · Liderança técnica para devs sênior"), linha 2 = promessa concreta, linha 3 = 1 CTA (workshop). 3 fixados: melhor Reel · post posicionamento · prova social/workshop. Destaques como mini-funil. Link da bio DIRETO pra página do workshop (não Linktree — cada hop vaza conversão).

**Orgânico (algoritmo 2025-26)**: sinais rankeados: watch time > **sends/reach** (DM share vale 3–5x like p/ alcance não-conectado; >2% = viral) > likes/reach. Reels ≤90s p/ crescimento (45–60s = maior engajamento; >3min não é recomendado a não-seguidores). Cadência: **3–4 Reels/sem + 2–3 carrosséis/sem** (carrossel = 3–4x save rate — sinal de autoridade; Reel = 2x alcance). **Trial Reels** (grátis, só não-seguidores, precisa 1k+ followers): A/B de ganchos antes de gastar boost — é o teste pago de graça. Conteúdo original 40–60% mais distribuição. Hashtags mortas (~5 máx); SEO na caption/bio. **Gap de mercado**: edutainment dev BR mira júnior/memes; sênior/tech-lead edutainment (war stories de CTO, decisões ruins de arquitetura) está VAZIO — mesma conclusão do NEW-PHASE.md.

**Comment-to-DM (ManyChat)**: funciona e é sancionado em 2026, MAS: prompts específicos de conteúdo ("Comenta ROADMAP que te mando o guia") ok; bait genérico ("comenta SIM") é suprimido pelo algoritmo (~metade do alcance). Rotacionar 3–5 variantes de resposta, 1ª DM sem link. Follow-gate só em isca gratuita, nunca no link do checkout. ManyChat free virou 25 contatos (mar/2026) — orçar Pro.

**Canal de transmissão**: criadores pequenos têm ~8,7% engajamento (vs 1,6% grandes) — usar como camada morna: early-bird do workshop, abertura de vagas.

---

## 8. Portugal

- **Só depois de validar BR** (2–4 semanas de dados). Campanha SEPARADA (CPM €5–15 ≈ 1,5–2x BR; junto, a Meta joga tudo no BR).
- Fricção PT-BR→PT-PT é real e mensurável (CTR/conversão caem), mas público dev consome muito conteúdo BR — fricção menor que consumidor geral. Tratar como teste pequeno: criativo com texto neutro (sem "você" escancarado, sem gíria BR) ou revisado por nativo; nunca auto-tradução da Meta.
- Bônus: filtro de idioma "Português (Brasil)" + behavior "Expats – Brazil" EM Portugal = brasileiros expatriados (subaudiência quente para o preço em R$).

---

## 9. Depois de 11/ago — máquina perpétua

1. **Workshop vira evento mensal** (mesma estrutura, nova data, tráfego contínuo ~R$50–100/dia): cada edição recicla criativos vencedores + públicos aquecidos. Formato subexplorado no nicho tech lead BR = vantagem.
2. **Funil de call sempre aberto**: campanha Leads (com Calendly/Schedule) ou CTWA qualificado, R$30–50/dia. Custo/call esperado R$80–250 (modelagem — sem benchmark BR público). Regra: cliente R$4k → até ~R$400/cliente de CAC ainda é 10%.
3. **Camada de seguidores** sempre ligada (R$15–25/dia) + boost mensal de vencedores.
4. Verba regime perpétuo: **60/30/10** (frio/morno/quente).
5. Ciclo de criativo: Trial Reels testa gancho grátis → orgânico valida → vencedor vira ad ("usar publicação existente") → Ad Library quinzenal p/ vigiar concorrência.

## 10. Painel de métricas (checar 2x/semana)

| Métrica | Alvo | Alarme |
|---|---|---|
| CPM (BR, IG) | R$18–35 | >R$50 investigar |
| CTR frio | 0,6–1,0% (prospecção) | <0,6% = criativo fraco |
| Hook rate (3s/impressões) | ≥25–30% | <20% matar criativo |
| CPA ingresso R$39 | R$40–60 | >R$70 sustentado |
| Custo/seguidor | R$1,50–4,50 | >R$6 |
| Visita perfil → follow | >13,5% | <5% = arrumar perfil |
| Show-up | 60–70% | <50% = reforçar grupo |
| Call → fechamento | 30–60% (qualificada) | <20% = form/qualificação |
| Frequência (remarketing) | ≤3,0 | >3 + CTR caindo = fadiga |

---

**LinkedIn**: análise espelho + calendário combinado Meta+LinkedIn (30/jul→11/ago, R$200/dia com gates de escala) em `linkedin-ads-estrategia.md` §10.
