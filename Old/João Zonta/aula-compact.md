### 2.5. Formatos canônicos (10 min)
- **Status report executivo** — 1 página, traffic light (verde/amarelo/vermelho), delta vs. semana anterior, top 3 risks, top 3 wins.
- **Executive summary** — 5 linhas máx, decisão pedida explícita. -> sempre foque no positivo. E se tiver negativo, o que você já fez pra resolver.
- **Post-mortem blameless** — timeline, causal vs. contributing, action items com owner + prazo.
	- mais semana que vem
- **Roadmap pitch** — 5 min, 3 slides: por quê agora, o quê entrega, quanto custa.
	- Yang: Focaria em kanban, reuniões semanais

### 2.6. Technical debt como conversa de negócio (5 min)
- Debt = juros sobre velocidade futura.
- Frame: "Cada sprint sem pagar X custa Y horas de feature."
- Não pedir refactor. Apresentar trade-off de capacity.


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

### 2.7. Arquétipos difíceis

- **Sênior resistente** — geralmente medo de obsolescência ou frustração com decisão antiga. Diagnostica antes de confrontar. Dá ownership de algo que ele domina.
- **Júnior perdido** — falta clareza, não capacidade. Quebra task menor, pair programming, check-in mais frequente.
- **Performer tóxico** — entrega resultado, destrói cultura. Custo > benefício. Feedback explícito 1x. Se não muda, sai. Tolerar = perde resto do time.
- **Quiet quitter** — desengajado mas presente. 1:1 honesto: "Te vejo desengajado. O que tá acontecendo?" Pode ser burnout, problema pessoal, ou já saiu mentalmente.

De vez em quando, se pergunte: meu time está melhorando ou piorando? Se estiver piorando ou estiver igual, porque?

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
