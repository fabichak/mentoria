# L.9: TL;DR: Team Topologies (Skelton & Pais)
**Biblioteca de livros**
*Conteúdo útil tanto pra quem lidera quanto pra staff/arquiteto técnico. Se você não mexe com desenho de times ainda, pode deixar pra depois.*

## Esqueleto (o que falar)
- Por que importa: é o livro pra quando o problema não é o código nem as pessoas, é o DESENHO dos times. Se sua entrega trava em dependência entre squads, reunião de alinhamento infinita e "isso é com o outro time", o bug é topológico.
- A base, Lei de Conway: a arquitetura do sistema copia a estrutura de comunicação da organização. Explique: se 3 times mexem no mesmo monólito, seu "microsserviço" vai nascer acoplado igual aos times. O livro propõe o "reverse Conway maneuver": desenhe os times PRIMEIRO, na forma da arquitetura que você quer.
- Ideia 1: Carga cognitiva é o limite real do time: cada time aguenta uma quantidade finita de domínio, tecnologia e contexto. Time sobrecarregado cognitivamente entrega devagar não por preguiça, por excesso de superfície. Pergunta de diagnóstico: "quantos sistemas diferentes esse time precisa entender pra trabalhar?"
- Ideia 2: Os 4 tipos de time (e SÓ 4): stream-aligned (alinhado a um fluxo de valor, o tipo padrão, ~80% dos times), platform (serve os stream-aligned com autosserviço), enabling (ensina capacidade nova e SAI), complicated-subsystem (guarda o pedaço que exige especialização profunda). Explique cada um em uma frase, e que qualquer outro "tipo" de time é sintoma de desenho ruim.
- Ideia 3: Os 3 modos de interação: collaboration (trabalhar junto, caro, use pra descoberta, por tempo limitado), X-as-a-Service (consumir sem reunião, o alvo pra dependências estáveis), facilitating (ajudar a aprender). O insight: interação entre times deve ser PROJETADA, não deixada acontecer.
- Ideia 4: Plataforma é produto, não império: a métrica de uma plataforma interna é "o time de produto se serve sozinho sem abrir ticket". Plataforma que vira gargalo de tickets é só um time de infra com nome novo. "Thinnest viable platform": a menor plataforma que resolve, às vezes é uma wiki boa, não um Kubernetes interno.
- Ideia 5: Time é a unidade de entrega, não o indivíduo: times estáveis e duradouros, trabalho flui PARA os times, não "montar squad por projeto" e desmontar depois, que é jogar fora todo o entrosamento pago tão caro.
- Ideia 6: Fracture planes: onde cortar o monólito? Pelas linhas naturais, domínio de negócio, ritmo de mudança, compliance, nunca por camada técnica (time de front, time de back, time de banco = receita de handoff infinito).
- Onde o livro erra / não se aplica ao BR: o modelo assume escala, empresa com 30 devs não tem gente pra platform team dedicado, e está tudo bem: as FUNÇÕES existem sem times dedicados (plataforma pode ser um repo de templates bem cuidado). Cuidado com a "team topologies cosplay": renomear os times atuais com os nomes do livro sem mudar interação nenhuma.
- Outro limite: reorganizar tem custo alto (o Larson do L.2 avisa), use o livro primeiro como LENTE de diagnóstico das interações atuais, e só depois como planta de reorg.
- Como aplicar essa semana: (1) desenhe o mapa real: seus times, e cada dependência marcada com o modo de interação ATUAL. Todo lugar onde tem "collaboration" permanente ou ticket recorrente é um cheiro.
- (2) Liste a carga cognitiva do seu time: sistemas, domínios, tecnologias que ele precisa dominar. Se a lista assusta, o problema de velocidade está explicado.
- (3) Escolha UMA dependência dolorosa e proponha mover pra X-as-a-Service: o que precisaria ser automatizado/documentado pra ninguém mais precisar de reunião?

## O que mostrar (complementos visuais)
- Os 4 tipos de time no diagrama oficial (formas e cores do livro) com um exemplo BR de cada.
- Lei de Conway ilustrada: org chart de um lado, arquitetura espelhada do outro, o mesmo desenho.
- Os 3 modos de interação com custo relativo (collaboration caro e temporário → X-as-a-Service barato e estável).
- Mapa "antes/depois" de um caso: dependências por ticket viram plataforma self-service.
- Quadro de fracture planes: cortes bons (domínio, compliance) vs corte ruim (front/back/banco).
