# Live 08/10 (quinta): As habilidades do Tech Lead
**Formato:** live semanal · 25 min (≈20 de conteúdo + 5 de perguntas/CTA)
**Deck:** `lives/decks/2026-10-08.js` → `live.html?a=2026-10-08`
**Base:** esboços 1.1 (mudança de papel), 1.9 (delegação), 10.1 (liderança emergente), 6.3 (tradução técnico-negócio), 4.4 (débito técnico), 7.1 (influência sem cargo), 12.2 (design docs) + pesquisa (fontes no fim)

## Tese em uma frase
Tech lead não é "o melhor dev do time com mais reunião". É uma mudança de profissão: sai de **maker** e vira **multiplicador**. As habilidades que importam são as que fazem o time entregar sem depender de você.

## Roteiro com tempo

### 0:00–2:00 · Gancho
- Abrir com: "A habilidade que te fez virar tech lead é exatamente a que vai te travar como tech lead."
- História típica (1.1): melhor dev vira TL → continua resolvendo tudo sozinho → vira gargalo → time para → conclui "não sirvo pra liderar". Errado: jogou o jogo antigo no tabuleiro novo.
- Interação: "Comenta aí: você já é TL (1), quer ser (2), ou tá vendo pra entender o que seu TL faz (3)?"

### 2:00–5:00 · O que é (e o que não é) um tech lead
- Divisão clássica: **PM = o quê e por quê · EM = quem (pessoas, carreira, contratação) · TL = como (direção técnica, qualidade, execução)**. Pat Kua: o TL é dono do "como" e responde pela qualidade técnica do que o time entrega.
- Will Larson (*Staff Engineer*): Tech Lead é um dos 4 arquétipos de Staff+ (Tech Lead, Arquiteto, Solver, Braço Direito). É o mais comum e geralmente o primeiro a aparecer.
- Realidade Brasil: em muita empresa o TL acumula gestão de pessoas (o "tech lead manager"). Vale perguntar na entrevista/promoção: **"esse TL tem liderados formais ou não?"** Muda o trabalho inteiro.
- Mito: "TL é promoção". Kua: quem faz o workshop dele percebe que TL é mudança de papel, não promoção. Exatamente o que a gente fala no programa.

### 5:00–7:30 · A virada: de maker pra multiplicador
- Como dev: valor = o que EU entrego. Como TL: valor = o que acontece POR CAUSA de mim, mesmo quando não estou na sala.
- Pergunta-filtro: **"Se eu tirar 2 semanas de férias, o que quebra?"** O que quebra é o que você ainda não transformou em sistema.
- Dor da transição: "passei o dia em conversa e não entreguei nada". Reframe: conversa que destrava 3 pessoas vale mais que o seu PR. O impacto individual cai antes do multiplicado subir, e quem desiste na queda nunca vê a curva cruzar.

### 7:30–19:30 · As 6 habilidades (≈2 min cada)

**1. Profundidade técnica com foco** (credibilidade)
- Kua: TL precisa conseguir codar no mesmo sistema que o time, a qualquer momento. Sem isso, perde credibilidade e vira gerente de projeto.
- Mas o código muda de natureza: código que **destrava ou define direção** (spike, esqueleto da arquitetura, ferramenta que acelera o time). Rotina vai pros outros.
- Regra prática: **TL não pega task no caminho crítico da sprint.** Você vai ser interrompido o dia inteiro, e a task atrasa o time inteiro.

**2. Decidir e registrar trade-offs**
- TL fraco decide rápido pra mostrar autoridade. TL forte torna a incerteza legível: define critérios, pede que cada um ataque a própria opção favorita, decide e **registra a decisão com as premissas que a invalidariam**.
- Ferramenta: RFC / ADR de 1 página (contexto, opções, recomendação, trade-offs, decisão). Gancho do 12.2: "por que fizemos assim?" → "pergunta pro Fulano, que já saiu". Esse é o imposto de não registrar.
- TL é dono da qualidade das decisões ao longo do tempo, não de acertar todas.

**3. Multiplicar o time (delegar + desenvolver)**
- "Se você ainda resolve os bugs mais difíceis, você não tem um time, tem uma plateia." (1.9)
- Dial de delegação em 5 níveis: faça assim → me traga opções → decida e me consulte → execute e me informe → é seu. Erro comum: pular do 1 pro 5 e chamar de confiança. Isso é abandono.
- **Delegue o problema, não a solução**: "reduz o tempo de build, você toca" > "põe cache no passo X do CI". Solução pronta gera executor; problema gera dono.
- Aceite a solução 80%. Reescrever o PR inteiro no review é alugar dedos, não delegar.

**4. Traduzir técnico ↔ negócio**
- Gancho do 6.3: "Precisamos refatorar porque o código tá uma bagunça" soa como perfeccionismo de engenheiro pra quem decide.
- Quem decide orçamento opera em **4 moedas: dinheiro, tempo, risco e cliente**. "Código limpo" não é moeda; "cada feature nesse módulo custa 3x mais" é.
- Débito técnico = juros (4.4). Não é pecado, é alavancagem; o erro é não gerenciar o pagamento.

**5. Influência sem autoridade**
- Muitas vezes o TL não tem liderados formais, então lidera por credibilidade, clareza e consistência.
- Faz parte do trabalho: resolver conflito técnico dentro do time e costurar acordos com outros times (contratos de API, dependências, prazos).
- Frase-limite pra conflito: **"Discorde comigo o quanto quiser antes. Depois de decidido, ou embarca ou a gente conversa de novo."**
- 7.1: "Se você precisa do cargo pra ser ouvido, você não tem influência, tem crachá."

**6. A habilidade nova: liderar um time que usa IA**
- Dado: LeadDev 2026: 70% dos times já adotaram ferramentas de IA, só 26% relatam ganho grande, e só 31% medem. Harness 2026: 81% dos líderes dizem que o tempo economizado virou tempo **auditando código gerado por IA**.
- Ou seja, o gargalo foi pro review e pro critério. TL define: onde a IA entra, o que precisa de review humano, como medir se ajudou de verdade.
- Risco que o TL tem que segurar: 62% esperam contratar menos júnior. Quem vai virar sênior daqui a 5 anos? Desenvolver gente continua sendo trabalho do TL.
- Bônus (LeadDev 2026): 37% dos líderes voltaram a fazer mais trabalho técnico hands-on. A habilidade 1 ficou mais importante, não menos.

### 19:30–21:30 · Autodiagnóstico ao vivo
- "Dá uma nota de 1 a 5 pra você em cada uma das 6. Comenta qual foi a MENOR." (engaja o chat e dá dado pra próximas lives)
- Comentar 2–3 respostas ao vivo.

### 21:30–23:30 · Ação da semana
- **Se já é TL:** lista tudo que só você faz hoje (seu "bus factor 1"). Escolhe 1 item e transforma em sistema essa semana: doc, runbook, par ou delegação com nível do dial + checkpoint.
- **Se quer ser TL:** age como TL antes do cargo (10.1). Escolhe UMA das 3 alavancas por 30 dias: mentorar um júnior, assumir uma fricção que é de todo mundo e de ninguém (CI lento, flaky test, onboarding), ou escrever uma RFC.
- Frase de fechamento: **"Cargo é consequência, não pré-requisito."**

### 23:30–25:00 · CTA + perguntas
- CTA: Programa ADVANCE (Turma Fundadora) · link na bio. *(confirmar oferta/preço vigente antes da live)*
- Anunciar tema da próxima live.

## Estrutura de slides sugerida (tipos do `deck.js`)
| # | tipo | conteúdo |
|---|---|---|
| 1 | `capa` | selo "Live · Quinta", titulo "As habilidades do", destaque "Tech Lead" |
| 2 | `divisor` | "A habilidade que te fez virar TL é a que vai te travar" |
| 3 | `tabela` ou `agenda` | PM = o quê/por quê · EM = quem · TL = como |
| 4 | `lista` | Mito: "TL é promoção" → é mudança de profissão |
| 5 | `confronto` | Maker × Multiplicador |
| 6 | `checkpoint` | "Se eu tirar 2 semanas de férias, o que quebra?" |
| 7 | `agenda` | as 6 habilidades (visão geral) |
| 8–13 | `pilar` | 1 slide por habilidade (título + 2–3 bullets) |
| 9b | `cronologia` | dial de 5 níveis de delegação (dentro da habilidade 3) |
| 13b | `lista` | dados de IA 2026 (70% / 26% / 81%) |
| 14 | `checkpoint` | "Nota de 1 a 5. Qual a sua menor?" |
| 15 | `duplo` | Ação da semana: já é TL × quer ser TL |
| 16 | `checkpoint` | "Cargo é consequência, não pré-requisito." |
| 17 | `fim` | CTA + próxima live |

~17 slides em 25 min ≈ 1,5 min/slide. Ritmo de live: ok.

## Fontes
- Pat Kua, [The Definition of a Tech Lead](https://www.patkua.com/blog/the-definition-of-a-tech-lead/) e [Talking with Tech Leads](https://www.thoughtworks.com/en-us/insights/books/talking-with-tech-leads)
- Will Larson, *Staff Engineer* (arquétipos): [resumo LeadDev](https://leaddev.com/career-development/how-master-four-staff-archetypes-and-elevate-your-impact)
- Crítica aos arquétipos: [Alex Ewerlöf](https://blog.alexewerlof.com/p/staff-archetypes-are-anti-patterns)
- [LeadDev Engineering Leadership Report 2026](https://leaddev.com/the-engineering-leadership-report-2026) e [AI Impact Report 2026](https://leaddev.com/the-ai-impact-report-2026)
- [Deloitte 2026 Global Technology Leadership Study](https://www.deloitte.com/us/en/about/press-room/2026-global-technology-leadership-study-release.html)
- [Tech Leadership in 2026 (DEV)](https://dev.to/austinwdigital/tech-leadership-in-2026-technical-depth-trust-and-responsibility-45aj) (decisão, incerteza legível)
- Harness State of Engineering Excellence 2026 (dado dos 81%, citado via [CIO Dive](https://www.ciodive.com/news/engineering-roles-shift-managing-AI/820297/)). Conferir o número na fonte original antes de mostrar.
