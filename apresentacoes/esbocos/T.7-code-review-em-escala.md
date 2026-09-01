# T.7: Code Review em Escala
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: PR parado 4 dias esperando review, aprovado com "LGTM" em 30 segundos sem ninguém ler. Os dois extremos existem no mesmo time, e os dois são problema seu, não do time.
- Mudança de mentalidade: como dev, code review era sobre achar bug. Como líder, code review é a ferramenta de cultura mais barata que você tem: é onde o time ensina, aprende, alinha padrão e demonstra (ou destrói) respeito. Todos os dias, por escrito, com histórico.
- O que code review realmente entrega (em ordem de valor real): disseminação de conhecimento > alinhamento de padrões > mentoria implícita > detecção de bug. Bug se pega mais com teste do que com olho.
- Os números que você deve auditar (não os comentários um a um):
  - Tempo até primeira revisão (a métrica que mais importa: PR parado é dinheiro parado)
  - Tamanho médio dos PRs (PR de 1000 linhas não é revisado, é abençoado)
  - Concentração: todo mundo revisa ou só duas pessoas? Reviewer único é gargalo e bus factor.
  - Taxa de "aprovado sem comentário": muito alta significa review teatro.
- Padrões pra instaurar (regras combinadas, não heroísmo):
  - PR pequeno por norma: limite combinado (ex: ~400 linhas). Acima disso, quebra.
  - SLA de review: primeira resposta em até X horas úteis. Review é trabalho, não favor, entra no planejamento.
  - Autor prepara o PR: descrição do porquê, self-review antes de pedir. Respeito com o tempo do revisor.
  - Automatize o que máquina faz melhor: lint, formatação, cobertura. Humano discutindo vírgula é desperdício de sênior.
- Tom dos comentários: aqui é cultura pura. Comente o código, não a pessoa ("esse método" e não "você"); pergunta antes de ordem ("qual foi a intenção aqui?"); elogio explícito quando merecido. O líder modela isso nos próprios reviews, o time copia o seu tom, não o seu discurso.
- Sinal de alerta cultural: dev sênior que destrói juniores no review, ou par de amigos que só se aprovam mutuamente. Os dois casos são conversa individual sua, e rápido.
- Discussão infinita no PR (15 comentários de ida e volta): regra dos 3, depois de 3 trocas, vira chamada de 10 minutos. PR não é fórum.
- Em escala (vários times): guia de estilo por linguagem decidido UMA vez e automatizado, definição de "o que bloqueia PR vs o que é sugestão" (nit vs blocker), e rodízio de revisores pra espalhar conhecimento.
- E os seus PRs? Líder que não aceita review nos próprios códigos acabou de ensinar que hierarquia vence qualidade. Seu PR é revisado como o de todos.
- Ação prática: puxe os últimos 20 PRs do time e responda: tempo médio até primeira review, tamanho médio, quem revisou. 30 minutos de análise que te dão um diagnóstico completo de cultura. Escolha UM padrão pra instaurar este mês (sugestão: SLA de primeira resposta).
- Fechamento: mostra-me teus code reviews e te direi tua cultura de engenharia. É o artefato mais honesto do time, e o líder que audita o processo (não cada PR) escala qualidade sem virar gargalo.

## O que mostrar (complementos visuais)
- Dashboard exemplo: tempo até 1ª review, tamanho de PR, distribuição de revisores (dá pra montar com dados reais do GitHub/GitLab)
- Antes/depois de comentário de review: tom agressivo vs tom de mentoria, mesmo conteúdo técnico
- A "regra dos 3": fluxo comentário → comentário → comentário → call de 10 min
- Tabela nit vs blocker: o que trava PR e o que é sugestão
- Checklist de PR bem preparado (descrição, contexto, self-review, tamanho)
- Exemplo real: gráfico de lead time caindo depois de instaurar SLA de review
