# LinkedIn Ads — Estratégia Completa (jul/2026)

Mesmos objetivos do doc Meta: vender o workshop R$39 de 11/ago e alimentar a mentoria (R$2k/4k/9k). Pesquisa das mesmas 5 frentes (mecânica, targeting, criativo, funil, orgânico), com verificação adversarial de claims (25 fontes, 18 claims confirmados, 7 refutados). Legenda: **✔ = verificado com fonte primária/múltipla** · **⚠️ = estimativa não-verificada, calibrar ao vivo**. Nota importante: **todos os benchmarks de CPC/CPM em R$ para o Brasil foram REFUTADOS na verificação** — não existe número confiável publicado; o micro-teste da seção 4 é o que gera seu número real.

---

## 0. Decisões-chave (TL;DR)

| Decisão | Escolha | Por quê |
|---|---|---|
| Aquisição fria do workshop R$39 no LinkedIn | **NÃO — nunca** | ✔ CPL B2B roda R$330–1.100 (US$60–200+); 1 lead custa 10–25 ingressos. Cliques/impressões 3–6x mais caros que Meta (CPC €6–12 vs €1,50–3,50). Abaixo de €5k de ticket, "Meta wins convincingly" |
| LinkedIn nesta janela (até 11/ago) | **Só setup + orgânico + micro-teste R$20/dia** | ✔ Audiência de site não popula retroativamente, build 48–72h, piso 300 membros. TLA é slow-build (CTR sobe até semanas 10–12) — inútil em 12 dias |
| Papel do LinkedIn no funil | **Autoridade orgânica no PERFIL PESSOAL + TLA no perpétuo** | ⚠️ Perfil pessoal: 5–8x engajamento e ~561% mais alcance que company page; company pages = 1–2% do feed em 2026, alcance caiu 60–66% desde 2024 |
| Retargeting principal | **Fica no META** | ✔ CPM de retargeting Meta €4–10 vs LinkedIn €25–40 — "not a close call". Retargeting só é barato RELATIVO ao cold dentro do LinkedIn |
| Formato pago nº1 (perpétuo) | **Thought Leader Ads (posts do seu perfil), objetivo Engagement** | ⚠️ CTR mediana 2,68% vs 0,42% single image (6,4x); ~77% mais barato por clique de LP; Engagement ~2x mais eficiente que Brand Awareness. Casa perfeito com anti-guru |
| Mentoria direto no LinkedIn | Não agora; **só o funil de call no perpétuo, e medindo** | ✔ Limiar de consultores BR: ticket >R$5k justifica; R$4k é marginal, R$9k (upsell) alinha. CPL de call R$400–1.100 vs CAC-alvo R$400 = margem apertada |
| Company page | **Criar JÁ, mínima (logo + bio)** | ⚠️ Pré-requisito de billing para QUALQUER ad, inclusive TLA. Orgânico fica no perfil pessoal |
| Insight Tag | **Instalar HOJE no WordPress** | ✔ Sem tag não existe audiência de site; ela só conta visitas a partir da criação. Criar audiências agora = maduras no pós-11/ago |
| Pisos | R$20/dia/campanha, lance mín R$4/clique (conta BRL) | ✔ Mínimo real enforced em R$. Aprendizado estatístico de verdade: ~R$2k/mês (heurística consultor) |
| Lookalikes | Não existem mais | ✔ Depreciados fev/2024. Substituto: Predictive Audiences (não testado nesta pesquisa) |

⚠️ Contraponto honesto: Dreamdata 2026 mediu ROAS B2B LinkedIn 121% vs Meta 51% — o prêmio é QUALIDADE de lead (lead→oportunidade 15–22% vs 5–10% Meta). Isso pode justificar LinkedIn pro funil de call da mentoria no perpétuo. Nunca pro ingresso de R$39.

---

## 1. Setup técnico (fazer HOJE, ~1h — investimento no PÓS-11/ago)

1. **Company page** mínima "Martin Fabichak — Liderança Técnica" (logo, banner, 2 linhas de bio, link martinfabichak.com). É só entidade de billing; não vai receber esforço orgânico.
2. **Campaign Manager**: criar conta de anúncios em BRL vinculada à page.
3. **Insight Tag** no WordPress (plugin de header/footer ou o mesmo gerenciador do pixel Meta): Campaign Manager → Analyze → Insight Tag → instalar no site inteiro. Verificar domínio.
4. **Conversões**: criar conversão "LP workshop view" (URL contém a LP) e "obrigado" se houver página de obrigado no seu domínio. Checkout Kiwify é domínio de terceiro — sem tag lá; medição de compra fica no Meta/Kiwify, LinkedIn mede topo.
5. **Matched Audiences — criar AGORA (elas só populam daqui pra frente)** ✔:
   - Site: visitantes 90d e 30d (precisa Insight Tag; ativa com 300 matched — em site pequeno leva semanas).
   - Engajamento: company page 365d; video views; e futuramente engajamento com TLA (30/90d).
   - Lista: exportar compradores/leads (emails) quando tiver 500–1.000+ — match rate 30–60% ✔, abaixo disso não cruza o piso de 300.
6. **Perfil pessoal**: headline = nicho + prova ("Ex-CTO · 20 anos · Liderança técnica para devs sênior"), banner com CTA do workshop, featured: link da LP + melhor post.

---

## 2. Por que NÃO aquisição fria (a matemática, uma vez)

✔ Verificado: piso prático do canal €1.500–3.000/mês (vs Meta €750–1.500); sua janela inteira (~R$2,6–4,4k ≈ €420–700) fica ABAIXO do piso de teste do LinkedIn. CPL cold B2B US$250–700+ (Impactable); Lead Gen Forms US$75–150; landing page US$100–200+. Sopro 2026: lead pago médio LinkedIn US$408 vs Facebook US$142.

Aritmética do ingresso: mesmo num CPC otimista de R$8–15 ⚠️ e conversão LP 2–5%, CPA = R$160–750 por ingresso de R$39 → 4–19x o preço. No Meta seu alvo é R$40–60. Não há criativo que feche esse gap.

A única exceção documentada de orçamento pequeno no LinkedIn é retargeting (US$500–1.000/mês) — e mesmo retargeting é 3–6x mais caro que no Meta ✔. Logo: dinheiro de performance → Meta; LinkedIn → autoridade + qualidade de lead no perpétuo.

---

## 3. Campanhas — o que rodar e quando

**Nesta janela (até 11/ago): 1 única campanha opcional — "Micro-teste TLA"** (seção 10, a partir de 4/ago):
- Objetivo: **Engagement** (TLA só roda em Brand Awareness/Engagement ✔; Engagement ~2x mais barato ⚠️).
- Criativo: Thought Leader Ad = patrocinar o post orgânico com melhor tração do seu perfil (post precisa ter <6 meses; TLA não aceita document/enquete/multi-image/repost ✔; exige sua aprovação de perfil).
- Audiência: Brasil + idioma português (obrigatório escolher 1 de 35 idiomas ✔) · Job Titles: Software Engineer, Senior Software Engineer, Tech Lead, Engineering Manager, Desenvolvedor(a) · OR Skills: liderança técnica, arquitetura de software · Seniority: Senior/Mid. Checar tamanho no Campaign Manager: piso 300, recomendação oficial 50k+ ✔ (praticantes rodam bem com 20–80k ⚠️). Se <20k, afrouxar (tirar seniority, manter titles+skills).
- Lance: **Manual CPC R$4–6** (mínimo R$4 ✔). Para orçamento <US$100/dia, manual > Maximum Delivery ⚠️. **Só dias úteis** — engajamento B2B cai 60–70% no fim de semana ⚠️. LinkedIn pode estourar o diário em até 50% num dia ⚠️ — orçar R$20 esperando picos de R$30.
- Meta do micro-teste: NÃO é vender. É (a) medir CPC/CPM/CTR reais BR (não existem benchmarks confiáveis), (b) começar a encher a audiência de engajamento rumo aos 300, (c) validar se TLA entrega o CTR de 2%+ prometido no seu nicho.

**Regime perpétuo (12/ago+)**: seção 8.

---

## 4. Unit economics (⚠️ TUDO estimativa — o micro-teste calibra)

Modelagem: benchmarks EU/US menos 20–30% (CPCs BR rodam mais baixos ⚠️). LATAM CPM: US$20–38 broad, US$38–65 narrow ⚠️ (thesmarketers).

| Métrica | Estimativa BR | Fonte |
|---|---|---|
| CPM (broad tech) | R$110–210 ⚠️ | LATAM US$20–38 |
| CPC Sponsored Content | R$8–25 ⚠️ | global US$5,58–6,50; BR −20–30% |
| CPC TLA (Engagement) | R$3–8 ⚠️ | mediana US$2,29; caso CISO −45% vs SC |
| CTR TLA | 2,0–4,5% ⚠️ | medianas 2,68% (ZenABM) e 4,65% (Fractional Demand) |
| CPL Lead Gen Form (perpétuo) | R$150–500 ⚠️ | Everflux BR |
| Custo/call agendada (perpétuo) | R$400–1.100 ⚠️ | CPL meeting US$75–200 |

Leitura: com CAC-alvo de R$400/cliente (10% de R$4k), o funil de call no LinkedIn só fecha se call→fechamento ficar ≥40% E o CPL vier no piso da faixa — por isso é teste do perpétuo com verba pequena, não aposta. Para o upsell R$9k, folga real.

O micro-teste de R$140 (7 dias × R$20) compra ~700–4.600 impressões e ~20–45 cliques ⚠️ — suficiente para CPC/CTR direcionais, não para conversão. É o esperado.

---

## 5. Criativos — Thought Leader Ads + texto

**Regras TLA (mecânica ✔, performance ⚠️)**: patrocina post do PERFIL (não da page) · post <6 meses · sem document/enquete/multi-image/repost · sem headline nem botão CTA — não linka direto pro checkout: o link vai NO TEXTO do post · aprovação do dono do perfil (você mesmo).

**Padrões dos TLAs vencedores** ⚠️ (ZenABM, 119 TLAs/US$300k): 1ª pessoa (65%) · 1.000–1.500 caracteres · link no último quarto do texto (75%) · abertura com experiência pessoal que para o scroll. Formato de post orgânico que performa (Stage2, 6.753 posts): listas (top posts usam 4–7x mais itens de lista) + muitas quebras de linha.

**Ganchos PT-BR** — os mesmos 12 do doc Meta (§6) funcionam AINDA MELHOR aqui (contexto profissional, zero fricção de plataforma). Adaptação: primeiro parágrafo do post = o gancho falado do Reel; corpo = war story de CTO em 3–5 bullets; fecho = 1 pergunta OU link (nunca os dois). Exemplos de abertura:
1. "Liderei mais de 160 devs em 20 anos. Nunca promovi ninguém por escrever código melhor." *(tese da marca)*
2. "'Parabéns, agora você é o tech lead.' Ninguém te conta o que vem depois dessa call."
3. "Não sou coach. Fui CTO por 20 anos e entreguei €100M+ em projetos. O que eu tenho é um plano de 90 dias — e ele dá trabalho."

Anti-hype vale dobrado no LinkedIn: nada de emoji-metralhadora, nada de "🚀", nada de promessa de salário. Jargão real (sprint, PR, 1:1, on-call) é o filtro de audiência.

**Formatos a NÃO usar agora**: Document Ads (CPL US$255 ⚠️ — só perpétuo, se tanto), Conversation Ads, video ads de company page (CTR 0,43–0,44% ⚠️ — metade do single image).

---

## 6. Camada orgânica — o papel PRINCIPAL do LinkedIn

⚠️ Frente sem claims verificados nesta rodada — recomendações de fontes com dados originais, marcadas como tal.

- **Perfil pessoal, não company page**: 5–8x engajamento, ~561% mais alcance; page só existe pro billing (Stage2/DigitalApplied/Ordinal).
- **Cadência: 1–2 posts/semana** — acima de ~2/semana o engajamento médio por post CAI (Stage2, 6.753 posts de founders). Não é Instagram: menos e melhor.
- **Mix**: ~50% insight técnico/liderança · 30% história pessoal de carreira · 20% promoção (workshop/mentoria). Over-promoção underperforma.
- **Seguidores importam menos que no IG**: abaixo de 50k followers, qualidade do post > tamanho da base — seu perfil pequeno compete de igual.
- Ciclo com o resto do funil: post orgânico LinkedIn → o que tracionar vira TLA (perpétuo) → engajadores viram matched audience → retargeting barato… no META (o LinkedIn te dá o sinal, o Meta cobra barato pelo remarketing).

---

## 7. Portugal

- **Ainda mais "depois" que no Meta.** Audiência menor + piso de 300 mais arriscado ✔.
- Restrições EEA ✔: Member Groups depreciado (mai/2024), idade/gênero removidos (DSA), matched audiences limitadas a membros opted-in. Targeting em PT fica mais pobre que no BR.
- Se testar no perpétuo: campanha separada, Job Titles + Skills apenas, sem seniority (audiência já é pequena). Idioma: português serve BR e PT — geo separa.

---

## 8. Regime perpétuo (12/ago+) — LinkedIn entra de verdade aqui

1. **Orgânico como base** (grátis): 1–2 posts/semana, mix 50/30/20, ganchos reciclados dos Reels vencedores do Meta. CTA recorrente: workshop mensal + call diagnóstica.
2. **TLA always-on R$20–40/dia** no melhor post do mês, objetivo Engagement, manual CPC, dias úteis. TLA melhora com idade (CTR ~3,9% sem. 1 → 8%+ sem. 10–12 ⚠️) — deixar rodar, não trocar toda semana. Máx 25–40% da verba LinkedIn em TLA ⚠️ (acima disso satura a audiência e o CPC dobra).
3. **Retargeting nativo quando as audiências cruzarem 300** ✔: engajou-com-TLA 90d + visitantes site → oferta = call diagnóstica (Lead Gen Form converte 6–13% vs 2–5% de LP externa ✔; webinar/evento como oferta converte 8–15% vs 2–5% de "agende uma call" ⚠️ — oferecer o workshop do mês, não a call seca).
4. **Funil de call da mentoria**: só depois de (a) micro-teste calibrar CPC e (b) Calendly no ar disparando conversão. Julgar por custo/call ≤R$400 e call→fechamento ≥40%. Se não bater em 4–6 semanas com R$30–50/dia, matar sem dó — o Meta continua pagando as contas.
5. **Lista de compradores** a cada workshop mensal → quando somar 500–1.000 emails, subir como matched audience (match 30–60% ✔) → seed de audiência quente.

---

## 9. Painel de métricas (checar 2x/semana)

| Métrica | Alvo | Alarme |
|---|---|---|
| CTR TLA | ≥2,0% ⚠️ (mediana 2,68%) | <1,0% após ~1.500 imp = trocar post |
| CPC TLA | ≤R$8 ⚠️ | >R$15 sustentado = pausar/lance manual menor |
| CPM efetivo BR | anotar — SEU número vira o benchmark | >R$250 broad = audiência estreita demais |
| Audiência engajamento (rumo a 300) | +crescendo toda semana | estagnada = TLA sem alcance |
| CPL call (perpétuo) | ≤R$400 | >R$600 por 2 semanas = matar funil de call |
| Call→fechamento (leads LinkedIn) | ≥40% (lead deve vir MAIS qualificado que Meta) | <25% = qualidade não compensa o custo |
| Engajamento orgânico/post | tendência ↑, sends+comentários | queda com >2 posts/sem = reduzir cadência |
| Verba LinkedIn / verba total | ≤20% até ticket médio provar | LinkedIn >30% sem venda atribuída = realocar pro Meta |

---

## 10. Calendário combinado Meta + LinkedIn — 30/jul → 11/ago (R$200/dia, escala por gate)

Premissas: **R$200/dia total** no arranque. Meta = motor de vendas (~90% da verba); LinkedIn = setup + orgânico + micro-teste R$20/dia (de 4/ago em diante). Imposto Meta: +12,15% na fatura (R$200 orçado ≈ R$224 real). WhatsApp/CRM: seguir cronograma do `meta-ads-estrategia.md` §3 — aqui só criativos, tráfego e análise. Regra de ouro do Meta durante tudo: **não mudar evento/lance/targeting depois de lançar; escalar só ≤20–25% por gate; matar criativo só com ~2.000 impressões ou 72h.**

### Gates de escala (a resposta ao "quando aumento?")

| Gate | Quando | Critério (Meta) | Ação se SIM | Ação se NÃO |
|---|---|---|---|---|
| **G1** | 2/ago (72h de dados) | ≥1 criativo com hook ≥25% E CTR ≥1%; CPA parcial tendendo ≤R$60 | Meta R$200→**R$250/dia** | Mantém R$200; troca criativos fracos (trocar criativo NÃO reseta aprendizado) |
| **G2** | 5/ago | CPA ≤R$60 com ≥10 ingressos acumulados | Meta →**R$300/dia** | CPA R$60–70: mantém. CPA >R$70 sustentado: corta p/ R$150 e conserta criativo/LP antes de reescalar |
| **G3** | 8/ago | CPA segue ≤R$65 no volume novo | Meta →**R$400/dia** até 11/ago (remarketing vira 15–20% disso) | Mantém nível do G2; excedente → remarketing apenas |

Total da janela: tudo passa ≈ **R$3.950** (~R$4.400 c/ imposto) → cenário base-otimista do doc Meta (75–110 ingressos). Nada escala ≈ R$2.600. LinkedIn: R$140 fixos (micro-teste).

### Dia a dia

| Dia | Criativos | Tráfego | Análise → decisão |
|---|---|---|---|
| **Qui 30/jul** | [M] Finalizar 4–6 peças: 2 Reels "sênior travado" (ganchos 1 e 3), 2 Reels "TL afogado" (ganchos 6/8), 1 estático terminal, 1 whiteboard 60s. Legenda queimada em tudo | [M] Subir campanha Vendas/InitiateCheckout, broad BR, **R$200/dia**. [L] Setup completo §1: page + Insight Tag + matched audiences criadas HOJE | [M] Test Events: PageView + InitiateCheckout + Purchase deduplicados, EMQ ≥7. Nada de métrica de performance ainda |
| **Sex 31/jul** | [L] Post orgânico #1 (tese da marca, gancho 1, formato lista, sem link) | [M] Rodar sem mexer (aprendizado) | [M] Só conferir entrega/gasto ativo. NÃO julgar criativo com <24h |
| **Sáb 1/ago** | — (gravar b-roll/2ª leva se sobrar tempo) | [M] Rodar | [M] Olhar CPM inicial (informativo). Anotar hook rate parcial por criativo |
| **Dom 2/ago** | [M] Definir 2ª leva com base nos hooks vencedores | [M] **GATE G1**: matar criativo hook <20% ou CTR <1% (≥2k imp); se passou → R$250/dia | Decisão registrada: quais criativos morrem, qual escala. LinkedIn post #1: anotar imp/reações (benchmark orgânico) |
| **Seg 3/ago** | [M] Gravar/editar 2ª leva (2–3 peças: melhor gancho em variação + anti-guru 11) | [M] Rodar no nível pós-G1. [L] Montar campanha TLA (audiência §3, manual CPC R$4–6, dias úteis) — deixar pronta, sem ativar | [L] Checar tamanho de audiência no Campaign Manager: <20k? afrouxar targeting. [M] CPA parcial |
| **Ter 4/ago** | [L] Post orgânico #2 (war story CTO, gancho 6). [M] Subir 2ª leva (adicionar não reseta) | [M] Rodar. [L] **Ativar TLA R$20/dia** patrocinando post #1 (o que tem tração) | [M] Ranking de criativos por hook/CTR/CPA. [L] TLA entregando? (aprovação de perfil ok, gasto andando) |
| **Qua 5/ago** | — | [M] **GATE G2**: CPA ≤R$60 e ≥10 vendas → R$300/dia (escala no vencedor) | [M] Decisão de escala com número na mão. Coluna "Instagram follows" da campanha: seguidores grátis, anotar |
| **Qui 6/ago** | [M] Criativo de urgência/countdown (Stories) p/ remarketing | [M] Montar conjunto morno (~15% da verba): abandono checkout 7d, VV 50/75%, envolvimento 1–14d — só se públicos ≥ mínimos | [L] TLA 48h: CPC e CTR parciais. CTR <1% com ~1.000 imp = trocar post patrocinado (#2 entra) |
| **Sex 7/ago** | [L] Post orgânico #3 (prova social: case de mentorado, screenshot) | [M] Rodar; remarketing ativo | [M] 2ª leva com 72h/2k imp: matar fracos. Projeção: ingressos atuais ÷ dias × restantes ≥ meta 30–40? |
| **Sáb 8/ago** | — | [M] **GATE G3**: CPA ≤R$65 → **R$400/dia** até o evento (remarketing 15–20%) | [M] Se CPA excelente (<R$45): considerar verba extra além do plano — cada ingresso marginal é lucro no backend |
| **Dom 9/ago** | [M] Ajustar copy do remarketing p/ "é terça!" | [M] Manter pico; frequência do remarketing ≤3 | [L] Audiência de engajamento TLA: crescendo rumo aos 300? (é o ativo do perpétuo) |
| **Seg 10/ago (D-1)** | [L] Post orgânico #4: "amanhã 18h30" (orgânico; TLA não serve urgência). [M] Peça de lembrete simples | [M] Campanha alcance p/ compradores (lembrete, frequência alta ok) + remarketing pesado | [M] Conferir links/UTMs da LP e grupo. Saldo de verba vs plano |
| **Ter 11/ago (D-0)** | — | [M] Rodar até ~16h30, depois pausar tudo de captação. [L] Pausar TLA (fim do micro-teste, ~R$140) | **Fechamento**: [M] CPA final, ingressos, ROAS front. [L] CPC/CPM/CTR reais BR = SEU benchmark (preenche §4 e o painel §9). Vira input do perpétuo |
| **Qua 12/ago+** | Sequência pós-evento (doc Meta §5) | [M] Remarketing presentes/no-shows. [L] Transição pro regime perpétuo (§8) | Decidir verba perpétua com os DOIS CPAs medidos, não com benchmark de blog |

---

## Fontes principais

Verificadas (fetch ao vivo 30/jul/2026): LinkedIn Help a424655 (targeting/matched audiences), a423690 + a420864 (pisos de audiência), a420433 + a420552 (site retargeting/Insight Tag) · searchlab.nl/en/compare/linkedin-ads-vs-meta-ads-b2b (custos vs Meta, retargeting, limiar de ticket) · gabrielpreuss.com.br/quanto-custa-linkedin-ads (pisos R$). Não-verificadas (direcionais): zenabm.com (TLA benchmarks 2.828 ads) · fractionaldemand.com (TLA 17,4M imp) · impactable.com (mecânica TLA) · stage2.capital (6.753 posts de founders) · digitalapplied.com + tryordinal.com (perfil vs page) · thesmarketers.com (CPM LATAM) · everflux.com.br, meet-lea.com, traxy.ai, leverdigital.co.uk (CPL/funil). Refutados (NÃO usar): tabelas de preço Verticis (CPC R$4,50–15/CPM R$40–90 — artigo de 2023 requentado), CPC R$15–50/CPM R$100–300 do Preuss (contestado), mínimos em USD da Stackmatix (conta BRL usa mínimo local).
