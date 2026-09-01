# C.5: Monopoly GO: trabalhar num produto gigante
**Estudo de caso**

## Esqueleto (o que falar)
- **Problema: a dimensão do jogo**: contextualize o que é Monopoly GO em números (o que puder falar publicamente: usuários, receita, tamanho dos times).
  - Pergunta: qual era seu papel exatamente e onde você se encaixava na máquina?
  - Qual foi o choque de escala no primeiro mês, o que era diferente de tudo que você já tinha visto?
- **Diagnóstico: pressão num produto que não pode parar**: o que significa qualidade quando milhões de pessoas usam o produto agora.
  - Pergunta: como era a pressão por entrega (live ops, eventos com data marcada, receita por dia)? Um exemplo de deadline que não podia mover.
  - O que acontece quando um bug vai pra produção num jogo desse tamanho? Conte um caso.
  - Como o negócio (monetização, métricas) influenciava decisões técnicas do dia a dia?
- **Plano: como se mantém qualidade em escala**: os sistemas que impedem o caos.
  - Pergunta: como era o processo de release (feature flags, rollout gradual, QA, aprovação de loja)? O que te surpreendeu positivamente?
  - Como decisões técnicas eram tomadas entre dezenas de times? Quem podia dizer "não"?
- **Execução: colaboração em escala**: trabalhar com gente que você nunca viu.
  - Pergunta: como era colaborar entre times/fusos/países? Um exemplo de conflito de prioridade entre times e como se resolveu.
  - O que um dev individual controla num produto gigante, e o que precisa aceitar que não controla?
  - Qual hábito de trabalho você levou de lá pra sempre?
- **Erros e aprendizados**: o que você faria diferente, e o que da cultura de lá você NÃO copiaria.
- **Lição pro mentorado**: produto gigante não é produto pequeno com mais gente, é outra física: processo vira proteção, não burocracia; comunicação escrita vira sobrevivência; e o seu impacto vem de fazer o sistema funcionar, não de ser herói. Feche com: o que trabalhar num top grossing mundial ensina que nenhum curso ensina.

## O que mostrar (complementos visuais)
- Números públicos do Monopoly GO (receita/downloads) pra dimensionar
- Diagrama do fluxo de release: dev → flags → rollout gradual → 100% (genérico, sem NDA)
- Mapa de quantos times/disciplinas tocam uma feature até ela chegar no jogador
- Comparativo: como o mesmo bug é tratado numa startup vs. num produto gigante
- Lista de práticas de lá que o mentorado pode aplicar amanhã no time dele
