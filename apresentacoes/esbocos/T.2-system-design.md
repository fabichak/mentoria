# T.2: System Design
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: system design não é só entrevista do Vale do Silício. É a conversa que acontece (ou deveria acontecer) toda vez que seu time começa algo novo, e é onde o líder mais aparece ou mais some.
- Dois chapéus que você vai usar: conduzir sessões de design com o time, e avaliar candidatos em entrevista. A boa notícia: o método é o mesmo.
- O framework de condução (mesmo roteiro pros dois casos):
  - 1. Requisitos: funcionais e não-funcionais. Quantos usuários? Qual latência aceitável? O que pode falhar?
  - 2. Estimativas de ordem de grandeza: não precisa ser preciso, precisa saber se é 100 req/s ou 100 mil.
  - 3. Desenho de alto nível: caixas e setas antes de qualquer tecnologia.
  - 4. Aprofundamento nos pontos críticos: onde quebra primeiro?
  - 5. Trade-offs e evolução: o que fazemos hoje vs o que deixamos pra quando doer.
- O que o líder cobra numa sessão de design do time: que comecem pelos requisitos, não pela tecnologia. Se a primeira frase é "vamos usar Redis", pare a reunião e pergunte "pra resolver o quê?".
- Sinais de que estão te enrolando: complexidade sem número que a justifique ("e se escalar?", mas escalar pra quanto?), tecnologia da moda sem alternativa considerada, ausência de plano de falha.
- Do outro lado da mesa, entrevistando: você não avalia se a pessoa sabe a arquitetura do WhatsApp de cor. Avalia:
  - Faz perguntas antes de desenhar? (júnior desenha, sênior pergunta)
  - Nomeia trade-offs espontaneamente ou só quando cutucado?
  - Adapta o design quando você muda um requisito?
  - Sabe dizer "não sei, mas investigaria assim"?
- Como candidato (você também vai ser entrevistado pra posições de liderança): o erro número 1 é pular pra solução. Gaste 25% do tempo em requisitos: é isso que diferencia lead de sênior aos olhos do entrevistador.
- Armadilha do líder: dominar a sessão de design. Se você desenha tudo, o time não cresce e você não avalia ninguém. Conduza com perguntas, não com respostas.
- Ação prática: agende uma sessão de system design de 45 min com seu time esta semana sobre um problema real, use o roteiro de 5 passos e só faça perguntas. Anote quem pergunta requisitos e quem pula pra tecnologia: você acabou de mapear a senioridade real do time.
- Fechamento: system design é o raio-X da senioridade. Quem conduz bem essa conversa lidera tecnicamente sem precisar ser o melhor programador da sala.

## O que mostrar (complementos visuais)
- O roteiro de 5 passos desenhado como fluxo (requisitos → estimativa → alto nível → deep dive → trade-offs)
- Exemplo ao vivo: desenhar um encurtador de URL ou sistema de notificações em caixas e setas, narrando as perguntas
- Rubrica de avaliação de entrevista: tabela júnior / sênior / lead por dimensão (requisitos, trade-offs, comunicação, adaptação)
- Lista de "frases de alerta" numa sessão de design ("vamos de Kafka", "isso não escala" sem número)
- Cheat sheet de estimativas: ordens de grandeza úteis (req/s, storage, latência de rede vs disco)
