# A.2 (anexo) — Banco de 10 exercícios contra síndrome do impostor
**Módulo 13: Mentalidade e Auto-estima**

> **O que é este arquivo:** banco de exercícios pesquisado em fontes da própria indústria de tecnologia (dev.to, Stack Overflow Blog, Julia Evans, Pluralsight Developer Success Lab, IEEE Spectrum, engenharia da DoorDash, *Nature*). Serve como matéria-prima pro roteiro do A.2, pra conteúdo contínuo de comunidade (desafio de 30 dias, hot seat) e pra ficha de exercícios baixável.
>
> **Relação com o A.2 atual:** o A.2 traz 5 exercícios na visão clínica do Alan. Estes 10 são a versão nativa de tech — mesma raiz, vocabulário e artefato de dev. Sobreposições marcadas em cada item. Não são 10 vídeos; são um cardápio.
>
> **Distinção que precisa aparecer no vídeo:** baixa auto-estima é avaliação negativa ampla de si. Síndrome do impostor é específica: descolamento entre **evidência objetiva de competência** e **percepção subjetiva**. Por isso responde bem a exercício baseado em evidência — é o que fecha o gap. Temas irmãos, tratamentos diferentes.

---

## 1. Documento de Evidências (brag document)

**Origem:** Julia Evans (jvns.ca); virou padrão em big tech.
*Sobrepõe com Exercício 1 do A.2 (inventário de evidências) — este é a versão com cadência e estrutura.*

**Como fazer**
- **Diário (2 min, fim do dia):** 1–3 linhas do que fez. Sem filtro, sem julgar se "foi grande o bastante". Inclui o invisível: code review que pegou bug, júnior desbloqueado, doc escrito, reunião que destravou decisão.
- **Semanal (5 min):** marca 3 favoritas.
- **Quinzenal / fim de sprint (20 min):** move as marcadas pro doc permanente. Seções: Projetos · Colaboração e Mentoria · Docs/RFCs · O que aprendi · Fora do trabalho (post, talk, OSS).
- **Regra de ouro do Evans:** *"faça soar exatamente tão bom quanto é"* — sem inflar, sem encolher. Impostor encolhe; o doc corrige.
- **Perguntas-guia na consolidação:** do que mais me orgulho? que tema se repete? alguém elogiou meu trabalho recentemente? (copia o elogio literal, entre aspas)

**Por que funciona:** impostor não é falta de conquista, é falta de *memória* de conquista — o cérebro filtra o positivo e atribui sucesso a fator externo. Doc é evidência externa: na crise você lê dado, não sente.

**Reaproveitamento:** avaliação de desempenho · narrativa de impacto (6.4) · evidência de promoção (7.4) · história STAR de entrevista (11.4). Um exercício, quatro usos.

---

## 2. Currículo de Fracassos

**Origem:** Melanie Stefan, *Nature* (2010); versão famosa de Johannes Haushofer (Princeton). Análogo tech: **Anti-Portfolio da Bessemer Venture Partners** — VC que publica no site as empresas que recusou: Apple, Google, eBay, Airbnb.

**Como fazer:** lista corrida, privada, das derrotas. Versão dev:
- vagas que rejeitaram (e em qual fase)
- PRs rebatidos, RFC que ninguém aprovou
- produção que você quebrou
- projeto que virou nada / stack que você escolheu errado
- promoção que não veio
- palestra ou proposta recusada

Só registrar, sem ruminar. Atualiza quando acontecer.

**Por que funciona:** todo mundo publica só a vitória. Você compara seu bastidor com a fachada dos outros e conclui que só você falha. Aviso do Stefan: a lista vai ficar ~6x maior que o CV normal e parecer deprimente no começo — esse é o ponto. Falha em taxa alta é a **norma estatística**, não veredito. Haushofer: *"é uma tentativa de equilibrar o registro"*.

**Por que casa com dev:** a indústria já tem o ritual — post-mortem blameless (4.5). Isso é post-mortem blameless aplicado à própria carreira. Vender assim mata a resistência.

**Versão de comunidade (forte pro Discord / encontro):** hot seat de fracasso. Martin abre com os próprios (110 entrevistas na Europa, etc.), depois gira a roda. Vergonha morre quando é coletiva.

---

## 3. Reality Check de Sênior

**Origem:** prática de tech lead citada em Turing / Stack Overflow Blog / profy.dev — pareamento como calibragem de expectativa.

**Como fazer:** 1h de pair programming ou screen-share com alguém mais sênior. A tarefa não é aprender sintaxe — é **contar**:
- quantas vezes googlou ou abriu doc
- quantas vezes perguntou pra outra pessoa
- quantas vezes não compilou de primeira
- quantas vezes falou "não sei"

**Passo crítico:** escreve a estimativa ANTES de começar. Sem isso o cérebro reescreve o resultado depois.

**Por que funciona:** impostor vive de um modelo fantasma do sênior que digita a solução direto. Você vê só o resultado dele, nunca o processo. Ver o processo destrói o modelo com dado observado, não com frase motivacional. E a lógica é honesta: ninguém usa tudo todo dia, então ninguém lembra de tudo — esquecer é comportamento esperado do sistema, não bug seu.

**Sem sênior por perto:** live coding público (debug ao vivo de gente conhecida) e conta a mesma coisa.

---

## 4. Arqueologia do Próprio Código

**Origem:** prática recorrente em dev.to e Hacker News — *"nada bate ler seu código antigo"*.

**Como fazer:** abre um repo teu de 1–3 anos atrás. Lê 30 min. Preenche:

| O que eu faria diferente hoje | Por que eu não sabia então | Quando aprendi |
|---|---|---|

**Regra:** cringe ≠ incompetência. A maioria dos itens vai ser estilo ou preferência, não defeito — separa os dois. O que sobra na coluna "não sabia então" é a **prova datada** do aprendizado.

**Por que funciona:** impostor não tem baseline — compara você-hoje com sênior-hoje. Isso força a comparação certa: você-hoje vs você-antes. Ambos são você, com timestamp de commit.
*Mesma lógica da higiene de comparação (Exercício 5 do A.2), com artefato dev no lugar da intenção.*

**Corolário:** se é garantido que você vai odiar seu código atual daqui 2 anos, perfeccionismo hoje é matemática furada. Mata a paralisia de "só entrego quando estiver perfeito".

---

## 5. Pasta de Kudos

**Origem:** prática de "kudos folder". Diferente do #1, e a diferença é o ponto.

**Como fazer:** pasta ou doc onde entra **só palavra dos outros**, crua e sem edição: print de Slack, trecho de review de desempenho, comentário em PR, email de agradecimento, DM. Você não escreve nada. Só cola e data.

**Cadência:** não é ritual diário. Alimenta quando acontece; **lê só quando a crise bate**.

**Por que é diferente do #1:** brag doc é sua narrativa — o impostor consegue desacreditar ("eu inflei"). Kudos é testemunho de terceiro. Difícil argumentar que 40 pessoas mentiram por 3 anos.

**Efeito de longo prazo (2+ anos de pasta):** aparece padrão. Você se descreve com linguagem aspiracional ("estratégico, colaborativo"); a pasta mostra a palavra que **os outros escolhem sozinhos**, repetida entre empresas e projetos diferentes. Vira headline de LinkedIn (11.2), bio e pacote de promoção — com vocabulário já validado por terceiros.

*Pré-requisito emocional:* Exercício 3 do A.2 (elogio sem defesa). Quem deflete elogio não guarda elogio.

---

## 6. Log de Discrepância (7 dias)

**Origem:** CBT aplicado; formato citado em fontes de carreira tech. Primo do Problem Journal (0.6), outro eixo.
*Sobrepõe com Exercício 2 do A.2 (reestruturação do diálogo interno) — aqui o foco é medir a atribuição, não só reescrever a frase.*

**Como fazer:** 7 dias, 1 linha por dia, 3 campos.

```
Pensamento:  "vão descobrir que eu não sei fazer isso"
Fato:        merged o PR do cache, 3 aprovações, zero comentário de arquitetura
Atribuição:  eu dei crédito a "o problema era fácil"
```

Dia 7: lê os 7 e responde uma pergunta só — **quantas vezes a atribuição foi externa (sorte, ajuda, era fácil) e quantas foi interna?**

**Por que funciona:** o mecanismo do impostor é assimetria de atribuição — sucesso é externo, falha é interna. Não se conserta com pensamento positivo, se conserta com **pensamento preciso**. O log expõe o viés no seu próprio texto.
Enquadramento pra vender pro dev: é `git blame` no seu raciocínio.

**Encaixe:** 7.5 (fato vs história) — mesma ferramenta, outro alvo.

---

## 7. Cota de "Não Sei"

**Origem:** contra-medida direta ao sintoma catalogado em pesquisa (Pluralsight, DoorDash, em-tools): quem sofre de impostor **fica quieto, evita trabalho que estica, não compartilha ideia**. Exposição deliberada.
*É a escada de exposição do A.2 (Exercício 4) com meta numérica e coluna de resultado.*

**Como fazer:** meta semanal de **3 "não sei" em público** — canal do time, reunião, review, standup. Não em DM. Em público.
- "Não conheço esse serviço, alguém me explica o fluxo?"
- "Não entendi essa decisão, qual era a alternativa?"
- "Vou precisar estudar isso, me dá 2 dias."

Anota quantas fez e **o que aconteceu depois** — essa segunda coluna é a que gera o dado.

**Por que funciona:** impostor é um contrato de silêncio — você não pergunta pra não ser descoberto, aí não aprende, aí tem mais o que esconder. Loop fechado. A cota quebra o loop e produz evidência: a catástrofe prevista não acontece. Quase sempre a resposta é ajuda, não desprezo. E paradoxo conhecido: dizer "não sei" com naturalidade é comportamento **lido como sênior**.

**Nível hard:** fazer na frente do chefe. Custo emocional maior, dado mais forte.

---

## 8. TIL Público (aprender em público)

**Origem:** movimento "learning in public" (swyx). Base de pesquisa: **Dra. Cat Hicks**, Developer Success Lab / Pluralsight — devs ganham confiança quando adquirem habilidade **incrementalmente**, e engenharia de software raramente permite ou recompensa incremento visível. O TIL fabrica esse incremento na mão.

**Como fazer:** 1 post curto por semana (3–10 linhas). Repo TIL no GitHub, LinkedIn ou blog da comunidade. Formato: **problema → o que tentei → o que era → link**. Não precisa ser descoberta; precisa ser datado e público.

**Bloqueio previsível:** "é básico demais pra publicar." Resposta: básico pra você **hoje** era impossível 6 meses atrás — é exatamente essa a métrica. E o óbvio pra você é a busca de alguém agora.

**Por que funciona:** cria trilha de evidência **externa e datada**, que o impostor não reescreve de memória.

**Encaixe no clube:** alimenta o blog comunitário (Frente C) e o GitHub contratável (11.3). Custo marginal zero — o exercício de auto-estima e o ativo de marketing são o mesmo objeto.

---

## 9. Auditoria de Nível a 4 Mãos

**Origem:** composição de duas práticas documentadas — auto-avaliação contra career ladder + **calibragem por terceiro** (a literatura é explícita: você é enviesado *contra* si mesmo, então peça leitura independente a mentor ou gestor).

**Como fazer**
1. Pega a career ladder da empresa. Se não existe, usa uma pública (Rent the Runway, Dropbox, CircleCI) ou a JD da vaga do teu nível.
2. Nota você mesmo linha por linha: 0 / parcial / sim. Sem negociar consigo.
3. Teu gestor ou mentor sênior nota **as mesmas linhas, sem ver a tua**.
4. Compara.

**Por que funciona:** dá número ao gap entre percepção e realidade — que é a definição do impostor. Dois resultados, ambos úteis:
- **Ele te nota mais alto:** eis o tamanho exato da distorção. Não é opinião, é delta.
- **Ele te nota mais baixo em algo:** você achou a lacuna real e ela virou plano de estudo. **Informação, não sentença.**

**Aviso honesto (alinhado com o Alan):** nem toda dúvida é impostor. Às vezes o cargo não cabe mesmo e a resposta é mudar de papel, não se convencer de que está tudo bem. Gente perde anos em função errada dizendo "é só síndrome do impostor". Este exercício é justamente o que distingue os dois casos.

**Variante de mercado:** 1 entrevista por trimestre mesmo empregado (doutrina do 0.5). Mercado é o avaliador que não tem motivo pra te poupar nem pra te bajular.

---

## 10. Baseline Medido (CIPS) + reteste em 90 dias

**Origem:** **Clance Impostor Phenomenon Scale** — 20 itens, instrumento de Pauline Clance (1985), que cunhou o termo em 1978 com Suzanne Imes.

**Como fazer:** responde o CIPS no dia 1 do módulo. Guarda o número. Refaz no dia 90, depois dos outros exercícios. Compara.

**Por que funciona — e por que com dev especificamente:** a profissão inteira roda em "sem métrica, sem melhoria". Sentimento não se mede, então o dev trata como imutável. Dar um número transforma "eu sou assim" em **linha de base com tendência**. Você mede latência de API sem drama; mede isso igual.

**Dado que precisa aparecer junto:** ~70% das pessoas passam por isso ao menos uma vez na vida (pesquisa citada no *International Journal of Behavioral Science*). Não é diagnóstico clínico, não é doença, não é raro. É estatística.

**Encaixe:** entra no onboarding (0.9), junto do DISC e do autodiagnóstico (0.7). Mesmo ritual, mesmo lugar.

---

## Panorama

| # | Exercício | Cadência | Tipo | Fonte-âncora |
|---|---|---|---|---|
| 1 | Documento de Evidências | diário + quinzenal | registro próprio | Julia Evans |
| 2 | Currículo de Fracassos | one-shot + updates | reenquadramento | Stefan (*Nature*), Haushofer, Bessemer |
| 3 | Reality Check de Sênior | evento agendado | observação | Turing / profy.dev |
| 4 | Arqueologia do Código | trimestral, 30 min | retrospectivo | dev.to / HN |
| 5 | Pasta de Kudos | oportunista, lê na crise | testemunho externo | kudos folder |
| 6 | Log de Discrepância | sprint de 7 dias | cognitivo (CBT) | CBT aplicado a tech |
| 7 | Cota de "Não Sei" | semanal, 3x | comportamental / exposição | Pluralsight, DoorDash |
| 8 | TIL Público | semanal | produção pública | swyx + Cat Hicks |
| 9 | Auditoria de Nível | semestral | calibragem organizacional | ladder + calibragem por terceiro |
| 10 | Baseline CIPS | dia 1 + dia 90 | instrumento / medição | Clance & Imes |

**Sequência sugerida de entrega** (não solta os 10 de uma vez — impostor + 10 tarefas = mais uma prova de que não dá conta):

`10 (mede) → 1 + 7 (hábito diário/semanal) → 2 ou 6 (sprint de 7 dias) → 4, 5, 8 (acumulam sozinhos) → 3 e 9 (precisam de outra pessoa, exigem agenda)`

Regra que o A.2 já defende e vale aqui: **melhor 2 exercícios feitos que 5 planejados.**

---

## Ganchos pro clube (Frente C)

- **Desafio de 30 dias:** coorte inteira roda #1 + #7 juntos, compartilha contagem no `#metas-da-semana`.
- **Hot seat de fracasso:** #2 em formato ao vivo, Martin abre com os próprios. Vira gravação.
- **`#wins` do Discord:** é a Pasta de Kudos (#5) coletiva — o canal já existe, só falta nomear a função.
- **Blog comunitário:** é o #8 com revisão. Mesmo ativo, dois propósitos.

---

## Ressalva (mantém no roteiro, é a mesma linha do A.1 e do A.2)

Impostor persistente vira burnout, ansiedade e afeta saúde física. Se os exercícios não movem o número do #10 em 90 dias, o próximo passo é profissional de saúde mental — não mais um exercício. Contratar especialista pro problema difícil é o mesmo movimento de chamar alguém mais experiente pra revisar código complicado.

Segunda ressalva, da própria literatura tech: parte do problema **não é individual**. Se colegas não te tratam como dev "de verdade", ou a empresa não valoriza teu trabalho, ajustar sua cabeça não resolve — o ambiente é a variável. Confiança de dev é responsabilidade coletiva (framework LABS da Cat Hicks: *learning, agency, belonging, self-efficacy*). Não vender exercício individual como conserto de ambiente tóxico.

---

## Fontes

- Julia Evans — *Get your work recognized: write a brag document*: https://jvns.ca/blog/brag-documents/
- freeCodeCamp — *How to Overcome Impostor Syndrome as a Developer*: https://www.freecodecamp.org/news/overcome-impostor-syndrome-as-a-developer/
- Stack Overflow Blog — *What we talk about when we talk about impostor syndrome*: https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/
- Pluralsight (Dra. Cat Hicks, Developer Success Lab) — *Imposter syndrome in tech*: https://www.pluralsight.com/resources/blog/software-development/imposter-syndrome-software-engineer
- dev.to — *Old Code and Growth as a Developer*: https://dev.to/lutterlohdev/old-code-and-growth-as-a-developer-53kf
- dev.to — *How to beat impostor syndrome in coding*: https://dev.to/nandinishinduja/how-to-beat-impostor-syndrome-in-coding-3enl
- DoorDash Engineering — *Overcoming Imposter Syndrome When Starting a Career in Tech*: https://careersatdoordash.com/blog/overcoming-imposter-syndrome-when-starting-a-career-in-tech-2/
- Engineering Manager Tools — *Imposter Syndrome in Engineers: How Managers Can Help*: https://www.em-tools.io/managing-teams/imposter-syndrome-in-team
- IEEE Spectrum — *Three ways to dispel imposter syndrome*: https://spectrum.ieee.org/three-ways-to-dispel-imposter-syndrome
- Turing — *What Is Programmer Imposter Syndrome and How Can You Deal With It?*: https://www.turing.com/blog/programmer-imposter-syndrome-tips
- profy.dev — *Ease Your Imposter Syndrome As A Junior*: https://profy.dev/article/programmer-imposter-syndrome
- Qodo — *Understanding and Overcoming Programmer Imposter Syndrome*: https://www.qodo.ai/blog/understanding-and-overcoming-programmer-imposter-syndrome-in-software-developers/
- Exaltitude — *Why engineers suffer from imposter syndrome*: https://www.exaltitude.io/blogs/youre-not-an-imposter-why-engineers-suffer-from-imposter-syndrome-and-how-to-overcome-it
- New HQ — *Why You Should Start a "Kudos Folder"*: https://jointhenewhq.substack.com/p/why-you-should-start-a-kudos-folder
- Melanie Richards — *Coping with impostor syndrome*: https://melanie-richards.com/blog/impostor-syndrome/
- leportella — *How I deal with my impostor syndrome*: https://leportella.com/impostor-syndrome.html/
- Forbes — *Are You Brave Enough For A Failure Resume?*: https://www.forbes.com/sites/jeffstibel/2016/11/03/are-you-brave-enough-for-a-failure-resume/
- Mental Floss — *The Surprising Benefits of Creating a 'Failure Resume'*: https://www.mentalfloss.com/article/573154/failure-resume-benefits
- Wake Forest SPS — *Overcoming Imposter Syndrome: Practical Steps*: https://sps.wfu.edu/articles/overcoming-imposter-syndrome/

## O que mostrar (complementos visuais)

- Tabela panorama dos 10 (nome, cadência, tipo) como ficha baixável de 1 página.
- Template do Documento de Evidências e do Log de Discrepância prontos pra copiar.
- Anti-Portfolio da Bessemer em tela cheia (Apple, Google, eBay, Airbnb) — o slide vende o exercício #2 sozinho.
- Placar do Reality Check: estimativa vs contagem real, lado a lado.
- Fluxo da sequência de entrega (10 → 1+7 → 2/6 → 4,5,8 → 3,9).
