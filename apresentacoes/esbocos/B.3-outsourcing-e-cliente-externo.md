# B.3: Outsourcing e Cliente Externo
**Bônus (v2 / premium)**

## Esqueleto (o que falar)
- Gancho: em algum momento da trilha pra head, você vai gerir gente que NÃO é do seu time (fornecedor, consultoria, squad terceirizada) ou vai entregar pra alguém que NÃO é seu chefe: o cliente externo. E as ferramentas de liderança direta (1:1, feedback, cultura) simplesmente não funcionam aqui. A alavanca muda: de influência pra contrato + interface.
- Problema clássico: empresa contrata consultoria pra "acelerar", 6 meses depois tem um sistema que ninguém internamente entende, entregue "conforme o combinado" mas inutilizável. Não foi má fé, foi gestão de fornecedor tratada como gestão de time. Terceiro otimiza pro contrato, não pra sua intenção. Se o contrato está mal escrito, a entrega ruim é racional.
- Ideia central: com terceiros, qualidade não se cobra no final, se DESENHA no início (contrato e critérios) e se INSPECIONA no meio (cadência e marcos). O framework da aula: as 4 fases, decidir, contratar, operar, encerrar.
- Fase 1, Decidir O QUE terceirizar: regra de bolso, terceirize o que é periférico e bem especificável; nunca terceirize o core do negócio nem o que você não consegue avaliar. Corolário perigoso: se você não tem NINGUÉM interno capaz de julgar a qualidade da entrega, você não está terceirizando, está apostando. Contrate primeiro o julgamento, depois a execução.
- Fase 2, Contratar: os pontos do contrato que engenharia PRECISA revisar (não deixe só pro jurídico): definição de pronto executável (testes passando, deploy feito, documentação, handover, e não apenas "código entregue"), propriedade intelectual e acesso ao repositório DESDE O DIA 1 (código nasce no seu Git, não chega em .zip no final), critérios de aceite mensuráveis, SLA de correção pós-entrega, e cláusula de saída.
- Modelo de contratação define o comportamento: escopo fechado (fixed bid) empurra o fornecedor a cortar qualidade quando aperta; time & materials empurra a esticar prazo. Não existe modelo perfeito, existe modelo com contrapeso: fixed bid com marcos inspecionáveis, T&M com metas de entrega e revisão mensal de continuidade.
- Fase 3, Operar (parte 1: a interface): defina UM ponto de contato técnico de cada lado e um ritual fixo (weekly de 30 min com demo do que está PRONTO, não slide de status). Demo de código rodando é o único status que não mente.
- Operar, parte 2: inspecione cedo e no artefato real. Primeira entrega parcial em 2-3 semanas, no seu repositório, passando no SEU CI, revisada pelo seu time com a mesma régua de code review interna. O primeiro marco é onde você descobre se a consultoria é boa; descobrir no mês 5 custa o projeto.
- Sinais de alerta com fornecedor: demo que escorrega ("semana que vem mostramos"), rotatividade de gente alocada no projeto, resistência a dar acesso ao repositório, e todo pedido virando change request cobrado. Um desses = conversa dura; dois = plano de saída ativado.
- Metade 2 da aula: quando VOCÊ é o fornecedor, o cliente externo. A inversão: agora o contrato e a expectativa apontam pra você, e o seu chefe de fato é alguém de fora que pode simplesmente ir embora. Muita agência, consultoria e software house vive isso, e muito head de produto B2B também: o cliente enterprise grande se comporta como cliente externo.
- Regra de ouro com cliente externo: gerencie a expectativa, não só a entrega. Cliente não vê seu esforço, vê a diferença entre o que esperava e o que recebeu. Entregar 100% do combinado com surpresa no caminho vale menos que 90% com comunicação impecável. Más notícias envelhecem mal: atraso comunicado com 3 semanas de antecedência é replanejamento; com 2 dias é quebra de confiança.
- Escopo com cliente externo: todo "só mais essa coisinha" é escopo. A resposta profissional não é "não" nem "sim", é "dá sim: custa X e move o prazo pra Y, quer que eu formalize?". Change request por escrito protege a relação, não a burocratiza, porque a briga de memória no final é o que mata contratos.
- Fase 4, Encerrar (os dois lados): handover é entregável de primeira classe, documentação, transferência de conhecimento pro time interno, período de suporte definido. Como cliente: nunca aceite encerramento sem seu time conseguir buildar, deployar e alterar o sistema sozinho. Como fornecedor: um encerramento impecável é seu melhor material de venda.
- Ação prática: se você tem fornecedor ativo, rode o health check hoje: código no nosso repo? CI nosso passando? Última demo de coisa rodando foi quando? Definição de pronto está escrita? Se tem cliente externo: quando foi seu último report proativo de status sem ser cobrado? Corrija o pior item essa semana.
- Transição: gerir gente fora do contrato e fora do prédio prepara o terreno pro próximo desafio, gerir seu PRÓPRIO time quando ele está espalhado em fusos e telas: liderança remota, na B.4.

## O que mostrar (complementos visuais)
- Diagrama das 4 fases: decidir → contratar → operar → encerrar, com o artefato-chave de cada uma.
- Checklist de contrato pra revisão técnica: definição de pronto, IP/repositório, critérios de aceite, SLA, cláusula de saída.
- Tabela comparativa: fixed bid vs time & materials, incentivos, riscos e contrapesos de cada modelo.
- Template de weekly com fornecedor (agenda de 30 min centrada em demo).
- Lista de red flags de fornecedor com a ação correspondente a cada uma.
- Template de change request de 1 página (pedido → impacto em custo/prazo → aprovação).
- Checklist de handover/encerramento pros dois lados da mesa.
