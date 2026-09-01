# T.3: Design Docs
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: "por que fizemos assim?" Se a resposta na sua empresa é "pergunta pro Fulano, que já saiu", você está pagando o imposto da falta de design docs todos os dias.
- Design doc não é burocracia, é a forma mais barata de errar: errar num documento custa uma tarde; errar em produção custa um trimestre.
- O que é um design doc na prática: um texto curto que responde qual o problema, quais as opções, o que decidimos, por quê, e o que aceitamos perder.
- RFC (Request for Comments): o formato mais usado. A mágica não está no documento, está no PROCESSO: alguém propõe por escrito, o time comenta de forma assíncrona, a decisão fica registrada.
  - Como líder, RFC te dá três coisas: decisões auditáveis, participação de quem é introvertido (comenta por escrito quem não fala em reunião), e onboarding grátis pros próximos.
- C4 Model: o padrão pra desenhar arquitetura sem virar bagunça. Quatro níveis de zoom: Contexto, Containers, Componentes, Código.
  - Verdade de líder: você vai viver nos níveis 1 e 2. Contexto (quem usa, com o que integra) e Containers (quais peças rodam) são o suficiente pra 90% das suas conversas, inclusive com diretoria.
  - Cobre do time: todo sistema crítico com pelo menos um diagrama de contexto e um de containers atualizados.
- ADR (Architecture Decision Record): o primo pequeno do RFC. Meia página por decisão: contexto, decisão, consequências. Perfeito pra começar quando o time resiste a documentos longos.
- Como instaurar a cultura (a parte que é seu trabalho, não do time):
  - Comece pequeno: exija design doc só pra mudanças que cruzam times ou são caras de reverter. Doc pra tudo mata a cultura antes de nascer.
  - Dê o exemplo: escreva você o primeiro RFC. Liderança técnica se instala por imitação, não por decreto.
  - Crie o template e o lugar (repositório, wiki), atrito zero pra escrever.
  - Celebre docs que evitaram problema, publicamente. O que é reconhecido se repete.
  - Defina SLA de revisão (ex: 3 dias úteis pra comentários): RFC sem prazo vira documento morto esperando aprovação eterna.
- Anti-padrões pra vetar: doc escrito DEPOIS da implementação (teatro), doc de 30 páginas que ninguém lê, doc sem seção de alternativas descartadas (se não teve alternativa, não teve decisão).
- Ação prática: esta semana, escolha uma decisão técnica que está sendo tomada no corredor/Slack e peça: "escreve meia página sobre isso antes de a gente decidir". Use o template de ADR. É o primeiro tijolo da cultura.
- Fechamento: times sem design docs repetem os mesmos erros com pessoas diferentes. Instaurar essa cultura é das poucas coisas que só o líder pode fazer, e é herança que fica depois de você.

## O que mostrar (complementos visuais)
- Template de RFC de 1-2 páginas (problema, alternativas, decisão, consequências, aberto para comentários até DD/MM)
- Template de ADR de meia página
- C4 desenhado ao vivo: níveis 1 e 2 de um sistema exemplo, mostrando que 2 diagramas bastam
- Linha do tempo: como uma decisão sem doc vira "arqueologia de código" 18 meses depois (exemplo real)
- Checklist de implantação da cultura: template → primeiro doc seu → critério de quando exigir → SLA de revisão → celebração
