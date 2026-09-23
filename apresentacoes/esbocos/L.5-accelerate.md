# L.5: TL;DR: Accelerate (Forsgren, Humble, Kim)
**Biblioteca de livros**
*Conteúdo útil pra qualquer trilha (é sobre engenharia e dados, não sobre gerenciar pessoas), mas entra aqui porque quem lidera time ou processo é quem mais usa esses argumentos no dia a dia.*

## Esqueleto (o que falar)
- Por que importa: é o livro que te dá MUNIÇÃO CIENTÍFICA pra brigar por qualidade, CI/CD e autonomia com o diretor que só quer "entregar mais rápido". Pesquisa com milhares de empresas, não opinião de guru.
- A descoberta central: velocidade e estabilidade NÃO são trade-off. Times de elite entregam mais rápido E quebram menos. O "vamos pular os testes pra ir mais rápido" é cientificamente errado.
- Ideia 1, As 4 métricas DORA: lead time (commit → produção), deployment frequency, change failure rate, MTTR (tempo de restauração). Explique cada uma: duas medem velocidade, duas medem estabilidade, e você precisa das quatro juntas, senão vira gaming.
- Ideia 2, Meça o sistema, nunca o indivíduo: DORA mede o fluxo do time. No momento em que vira métrica de dev individual (ou meta com bônus), morre, Goodhart's Law. Isso é o erro nº 1 das empresas BR que "implantam DORA".
- Ideia 3, Trunk-based development e deploys pequenos: lotes pequenos são A prática que puxa todas as métricas. Branch de 3 semanas com merge gigante é a fábrica de change failure.
- Ideia 4, Cultura de Westrum: culturas generativas (foco em missão, informação flui, erro gera aprendizado) performam melhor que burocráticas e patológicas (foco em poder, mensageiro é punido). Cultura é preditor de performance, e cultura é comportamento do líder no dia a dia, não frase na parede.
- Ideia 5, Times escolhem suas ferramentas: autonomia técnica correlaciona com performance. O comitê central que impõe stack de cima é anti-padrão medido.
- Ideia 6, Aprovação de mudança por comitê (CAB) não reduz risco: a pesquisa mostra que aprovação externa pesada não melhora estabilidade, só aumenta lead time. Peer review (code review) sim funciona. Use esse dado contra o processo de "GMUD" travado.
- Ideia 7, Transformação é contínua, não projeto: times de elite nunca "terminam" a melhoria. O plano "projeto DevOps de 6 meses e acabou" contradiz o livro inteiro.
- Onde o livro erra / limites: a pesquisa é survey-based (percepção auto-relatada) e as categorias elite/high/low mudaram ao longo dos anos, não trate os cortes numéricos como tabela sagrada. E o livro diz O QUE correlaciona, não COMO implantar na sua realidade.
- Contexto BR: banco, governo e grande varejo têm compliance real (BACEN, LGPD, auditoria), a resposta não é "ignora o processo", é automatizar a evidência de compliance dentro do pipeline. O livro te dá o argumento; a implementação é sua.
- Como aplicar essa semana: (1) meça na mão suas 4 DORA dos últimos 30 dias, planilha basta, não precisa ferramenta. Só o número já muda a conversa.
- (2) Escolha A métrica pior e uma prática que a ataca (ex.: lead time alto → PRs menores + revisar em <24h). Uma prática, não dez.
- (3) Leve os números pro seu gestor com a frase do livro: "velocidade e estabilidade andam juntas, aqui está nosso ponto de partida."

## O que mostrar (complementos visuais)
- As 4 métricas DORA desenhadas em dois eixos: velocidade × estabilidade, com o quadrante "elite".
- Gráfico do estudo: elite vs low performers (deploys por dia, lead time, MTTR), os números chocam.
- Os 3 tipos de cultura de Westrum em quadro comparativo com exemplos de "como esse time reage a um incidente".
- Antes/depois de lote pequeno: branch de 3 semanas vs trunk-based, com o risco desenhado.
- Template da planilha DORA manual pra começar hoje.
