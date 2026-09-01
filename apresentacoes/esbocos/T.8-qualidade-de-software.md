# T.8: Qualidade de Software
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: "a gente precisa de mais tempo pra fazer com qualidade" vs "o negócio precisa disso pra ontem". Você vai arbitrar essa briga toda semana pelo resto da carreira, e sem números, você sempre decide no escuro.
- Primeira verdade: qualidade não é sentimento, é atributo mensurável. Segunda verdade: qualidade não é ir devagar. Os dados (DORA de novo) mostram que times com mais qualidade entregam MAIS rápido, porque não pisam no próprio rabo.
- Qualidade tem duas faces e você gerencia as duas:
  - Externa: o que o usuário sente: bugs em produção, crashes, lentidão.
  - Interna: o que o time sente: código difícil de mudar, medo de mexer, onboarding lento. Invisível pro negócio até virar lentidão crônica de entrega.
- Como MEDIR (sua régua de líder, 5 números que bastam pra começar):
  - Bugs em produção por release (tendência, não valor absoluto)
  - Taxa de retrabalho: % do tempo do time consertando vs construindo
  - Change failure rate: % de deploys que quebram algo
  - Cobertura de testes, com a ressalva: é termômetro, não meta. 80% de cobertura de teste ruim é pior que 50% de teste bom. Meta de cobertura vira teste teatro.
  - Idade dos bugs abertos: bug que envelhece é bug que virou paisagem.
- Testes como ESTRATÉGIA, não como tarefa: a pirâmide, com muitos testes unitários (rápidos, baratos), alguns de integração, poucos end-to-end (lentos, frágeis).
  - O que o líder cobra: pirâmide invertida (tudo E2E, suite de 2 horas, teste flaky) é sinal de estratégia errada, e conserto disso é investimento que você defende pro negócio.
  - Teste flaky é câncer: quando o time começa a re-rodar pipeline "porque às vezes passa", a suite inteira perdeu credibilidade. Tolerância zero: flaky se conserta ou se deleta.
- Onde a qualidade é decidida (spoiler: não é no QA): qualidade se decide no design e no processo, com definição de pronto, review, teste automatizado no pipeline. QA no fim da esteira é rede de segurança, não estratégia. "Joga pro QA testar" é o sintoma número 1 de cultura de qualidade fraca.
- Dívida técnica, como tratar como adulto: dívida é empréstimo consciente, não desleixo. O problema é dívida sem registro. Regra prática: dívida assumida vira item rastreado com dono, e o time tem um orçamento fixo (ex: 20% da capacidade) pra pagamento contínuo, em vez de esperar a "sprint de refatoração" que nunca vem.
- Como defender qualidade pro negócio (a habilidade que separa lead de sênior): nunca fale "código limpo", fale dinheiro e risco: "esse módulo causou 40% dos incidentes do trimestre; 2 semanas de investimento reduzem isso pela metade". Número contra número.
- Revisões periódicas de qualidade: uma vez por trimestre, sente com o time e olhe os 5 números + os módulos que mais doem. Saia com no máximo 2 ações. Ritual leve, recorrente, vence auditoria pesada anual.
- Ação prática: monte seu painel mínimo esta semana, os 5 números acima, mesmo que coletados na mão. Na próxima discussão "qualidade vs prazo", traga o painel. A conversa muda de opinião pra dados na primeira reunião.
- Fechamento: o líder não garante qualidade revisando cada linha, garante construindo o sistema (métricas, pirâmide, definição de pronto, orçamento de dívida) em que qualidade é o caminho de menor resistência.

## O que mostrar (complementos visuais)
- O painel mínimo: os 5 números com exemplo preenchido
- Pirâmide de testes vs pirâmide invertida ("casquinha de sorvete"), com custo/velocidade anotados
- Gráfico: velocidade de entrega ao longo do tempo com e sem investimento em qualidade interna (a curva que se cruza)
- Template de registro de dívida técnica (o quê, por quê, custo de manter, dono)
- Exemplo de tradução técnica → negócio: mesma dívida descrita em "code smell" vs em reais e incidentes
- Definição de pronto exemplo (testes, review, monitoramento, doc)
