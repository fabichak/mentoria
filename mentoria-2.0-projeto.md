# MENTORIA 2.0 — Projeto de Lançamento (Clube de Devs)

**Visão:** Mentoria deixa de ser "mentoria com o Martin" e vira comunidade/clube, com Martin como figura central. Lançamento da plataforma: **23/09/2026**.
---

## 1. FRENTES DE TRABALHO

### Frente A — Vídeos

Catálogo em `conteudo_base.md` (atualizado com trilha auto-estima do Alan, podcasts e gravações recorrentes).

- [ ] Definir os ~15 vídeos mínimos pro lançamento (Fase 0 + PREPARAR — ordem de gravação já sugerida no catálogo)
- [ ] Gravar Fase 0 (8 vídeos)
- [ ] Gravar Fase 1 — PREPARAR (7 vídeos)
- [ ] Definir formato/setup de gravação padrão (template de slide, duração 10–20min)
- [ ] Combinar com Alan: escopo e datas da trilha auto-estima (4 vídeos)
- [ ] Gravar 1 case de sucesso como MVP (formato entrevista)
- [ ] Definir onde os vídeos ficam hospedados (Vimeo/Mux/YouTube não listado — decisão junto com a Frente B)

### Frente B — Sistema da Comunidade

Requisitos: 
- Módulos: cada módulo tem N aulas, cada aula tem um vídeo. Alunos podem comentar em cada aula e responder. Ao serem respondidos, respondem uma notificação no sistema e no discord (caso tenham conectado)
- calendário de encontros (datas + temas): Um calendário em forma de lista, com o link de cada google meet para as aulas, informações sobre o encontro e poder adicionar esse encontro no calendário próprio
- feed de gravações: Considerado um módulo separado, todos encontros serão gravados e adicionados neste módulo;
- integração Kiwify (webhook de compra → cria conta)
- Páginas com informação: Páginas estáticas que eu posso editar na administração, contendo: Formulário de indicação (um aluno indicar um novo aluno), formulário de interesse a ser mentor (pra quem quer ser mentor)
- Settings: conexão com discord: para liberar acesso ao discord
- link para afiliado: se alguém se cadastra por esse link, eu sei quem o indicou para eu poder pagar.
- Tiers: existe 3 tiers: só os módulos gravados, módulos gravados + acesso aos encontros e discord, tudo do anterior + mentoria por mim
- Admin: reset de senha, gestão de acessos por tier, autorizar indicações, autorizar os usuarios serem mentores ou influencers ou escritores, gestão dos módulos e aulas (adicionar, editar), gestão dos comentários, gestão de eventos (clube do livro, outros)
- quando começar uma sessão do calendário, avisar em um canal do servidor do discord

- [ ] Criar fork meu de Frappe LMS
- [ ] Configurar webhook Kiwify → criação automática de conta
- [ ] Criação de todas as funcionalidades acima
- [ ] Estruturar curso (fases do conteudo_base.md como módulos)
- [ ] Fluxo de upload de gravações (encontro acontece → gravação no ar em <48h)
- [ ] Área administrativa
- [ ] Teste ponta-a-ponta: compra no Kiwify → conta criada → acesso ao conteúdo
- [ ] link para afiliado 

### Frente C — Atividades de Comunidade

Já no mapa: clube do livro, blog comunitário, pessoas externas pedindo ajuda.

- [ ] Clube do livro — 1 livro/mês da biblioteca TL;DR (Radical Candor primeiro: todo mundo usa). Encontro mensal de discussão + aplicação real
- [ ] Blog comunitário — mentorados escrevem posts (com revisão do Martin); publica no site/LinkedIn; vira portfólio de marca pessoal do mentorado (conecta com vídeo 3.9)
- [ ] Definir ritual de cadência (o que acontece toda semana / todo mês)

**Novas ideias:**
- **Hot seat mensal** — 1 mentorado traz problema real, grupo + Martin destrincham ao vivo (vira gravação)
- **Desafio de 30 dias** — coorte aplica 1 artefato junto (ex: todo mundo roda 1:1 de mapeamento no seu time), compartilha resultado
- **Mock interviews entre membros** — pares treinam entrevista de liderança/system design; Martin assiste 1 por mês e dá feedback
- **Demo day de carreira** — trimestral: mentorados apresentam "antes/depois" (narrativa de impacto do vídeo 3.6 na prática)
- **Peer review de artefatos** — canal onde membros postam status report / CV / roadmap e recebem review dos pares antes do Martin
- **Watch party de post-mortem** — analisar post-mortems públicos famosos (GitLab, Cloudflare) em grupo
- **Accountability duplas** — pares definidos por trimestre, check-in semanal de metas
- **AMA com convidados externos** — head/CTO convidado 1x/mês (já no mapa: "encontros com convidados externos")
- **Ranking de contribuição** — gamificação leve: pontos por post no blog, resposta no Discord, palestra (alimenta quem vira sub-mentor), quem traz gente

### Frente D — Renda para Mentorados

Já no mapa: influencer (ganha quando alguém entra), sub-mentor (mentora alguém), indicação, blog/escritor.

- [ ] Definir % de comissão de indicação (Kiwify tem afiliação nativa — usar em vez de construir)
- [ ] Definir modelo sub-mentor: critérios pra virar, remuneração (fixo por mentorado ou % da mensalidade), supervisão do Martin
- [ ] Definir pagamento de onboarding: mentorado experiente conduz onboarding de novato (checklist do artefatos.md), R$ fixo por onboarding
- [ ] Palestras pagas: mentorado dá workshop interno no clube (R$ fixo) — e os melhores palestram nos eventos físicos mensais

**Novas ideias:**
- **Criador de conteúdo pago** — mentorado grava TL;DR de livro ou vídeo do side-track técnico (revisado pelo Martin), R$ por vídeo aceito
- **Case remunerado** — gravar case de sucesso vira permuta: desconto na renovação ou R$ fixo (o case é ativo de marketing)
- **Moderador de Discord** — mentorados sêniores moderam canais, desconto na mensalidade
- **Banco de vagas com bounty** — membro que indica vaga onde outro membro é contratado ganha bônus (conecta com nó "Vagas" do mapa)
- **Revisor de CV/LinkedIn** — mentorados de recolocação bem-sucedida revisam CV de novatos, pago por revisão
- **Co-produção de podcast** — mentorado agenda/produz episódios do podcast por área, remunerado

**Princípio:** todo papel pago exige qualidade auditada pelo Martin no início — a marca é do Martin, o clube escala a entrega.

### Frente E — Discord

- [ ] Criar servidor com estrutura abaixo
- [ ] Bot de integração: compra Kiwify → convite + cargo automático (verificar se plataforma da Frente B tem sync de cargo)
- [ ] Definir moderação (regras + moderadores mentorados)
- [ ] Migrar grupo do WhatsApp gradualmente (ou manter WhatsApp só para avisos + 1:1 com Martin, comunidade no Discord)

**Estrutura sugerida de canais:**

```
📌 COMEÇE AQUI
├ #boas-vindas         (bot dá cargo, apresenta regras)
├ #apresente-se        (template: quem sou, cargo, meta 90 dias)
├ #avisos              (só admin — datas de encontros, lançamentos)
└ #calendário          (eventos do Discord sincronizados)

🎯 CARREIRA
├ #wins                (promoções, aprovações, ofertas — prova social interna)
├ #hot-seat            (problemas reais pra destrinchar)
├ #metas-da-semana     ("movimentação ou objetivos semanais" do mapa)
└ #peer-review         (CV, status report, roadmap — review entre pares)

🧠 CONTEÚDO
├ #clube-do-livro
├ #blog-comunitário    (drafts + publicados)
├ #dúvidas-liderança
├ #side-track-técnico
└ #ia-no-trabalho

💼 OPORTUNIDADES
├ #vagas               (curadas — "vagas arrombadas" vs comuns)
├ #indicações          (programa de afiliados, como funciona)
└ #exterior            (recolocação internacional)

🎙️ ENCONTROS (voz/stage)
├ Stage: Encontro semanal
├ Voz: Mock interview
└ Voz: Coworking (câmera aberta, trabalho silencioso)

🔒 POR TURMA/TIER (se aplicável)
└ canais restritos por cargo (Mentoria full vs Gravada)

🛠️ STAFF
├ #mod-chat
└ #sugestões
```

**Atividades nativas do Discord:**
- Eventos agendados (calendário nativo) pros encontros semanais
- Stage channels pra palestras/AMA
- Fórum channel pra #dúvidas (threads pesquisáveis > chat corrido)
- Coworking room: sala de voz aberta em horário fixo (senso de comunidade barato e eficaz)
- Onboarding nativo do Discord (perguntas de entrada → cargos por interesse: recolocação / liderança / técnico)
