# T.6: Platform Engineering
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: quanto tempo um dev novo no seu time leva pra colocar um serviço novo em produção? Se a resposta é "semanas" e envolve abrir ticket pra três times, você tem um problema de plataforma, mesmo que nunca tenha usado esse nome.
- Platform Engineering em uma frase: tratar a infraestrutura interna como um PRODUTO, cujos clientes são os próprios devs. Objetivo: dev sênior gasta tempo em problema de negócio, não brigando com pipeline.
- De onde veio: o "you build it, you run it" do DevOps, levado ao pé da letra, afogou os times, com cada dev tendo que saber Kubernetes, Terraform, observabilidade, segurança. Plataforma é a resposta: alguém empacota isso numa "golden path" e o resto do time só usa.
- Conceitos que você precisa reconhecer numa conversa:
  - Golden path: o caminho pavimentado. Quer criar um serviço? Roda um comando, sai com repo, CI/CD, monitoramento e deploy configurados. Sair do caminho pode, mas aí o suporte é por sua conta.
  - Self-service: dev provisiona banco, fila, ambiente sem abrir ticket. Ticket é fila; fila é lead time.
  - IDP (Internal Developer Platform/Portal): a vitrine disso tudo (Backstage é o exemplo famoso).
- CI/CD como o mínimo civilizatório: pipeline automatizado de commit até produção, com testes e rollback. Se deploy do seu time depende de passo manual e de UMA pessoa específica, isso é risco operacional seu, e é cobrança sua.

- Provisioning: infraestrutura como código (Terraform e afins). A pergunta de líder: "se essa conta da cloud sumir hoje, a gente reconstrói tudo por código em quanto tempo?" Se a resposta é "tem coisa que foi clicada no console e ninguém sabe", anota o risco.
- QUANDO o time precisa de plataforma: a régua honesta:
  - Menos de ~15-20 devs: você NÃO precisa de time de plataforma. Precisa de bom CI/CD, IaC e convenções. Time de plataforma aqui é over-engineering organizacional.
  - Sinais de que chegou a hora: cada squad resolve o mesmo problema de infra de um jeito, onboarding de dev leva semanas, o "cara da infra" virou gargalo de todos, custo de cloud sem dono.
- Armadilha número 1 pra você vetar: plataforma construída sem ouvir os devs. Plataforma que ninguém pediu vira imposição, e o time cria atalhos por fora. Se é produto, tem que ter cliente feliz: meça adoção e satisfação como mediria NPS.
- Armadilha número 2: começar comprando ferramenta (ou adotando Backstage) antes de entender a dor. Ferramenta é a última etapa, não a primeira.
- Métricas pra cobrar de um investimento em plataforma: tempo de onboarding de dev novo, tempo pra criar serviço novo, lead time de deploy, tickets de infra por semana. Se nada disso melhora, a plataforma é hobby caro.
- Ação prática: meça o "time to first deploy": quanto tempo do zero até um hello world em produção no seu ambiente. Faça o exercício com o dev mais novo do time. Esse número é seu baseline e seu argumento pra (ou contra) investir em plataforma.
- Fechamento: plataforma é alavanca, multiplica a produtividade de todos os times de uma vez. Mas alavanca cara na hora errada é dívida. Seu papel de líder é saber ler a régua do "quando".

## O que mostrar (complementos visuais)
- Diagrama: dev → golden path → (CI/CD, infra, observabilidade prontos) vs dev → tickets pra 3 times
- A régua do "quando": tamanho do time x sinais de dor x recomendação
- Print/screenshot de um portal tipo Backstage pra materializar o conceito de IDP
- Lista das métricas de sucesso de plataforma (onboarding, time to first deploy, tickets/semana)
- Exercício: cronometrar o "time to first deploy" do próprio time
