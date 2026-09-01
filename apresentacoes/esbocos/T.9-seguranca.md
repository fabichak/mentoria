# T.9: Segurança
**Side Track: Técnico**

## Esqueleto (o que falar)
- Gancho: quando o vazamento acontece, o jornal não publica o nome do dev que escreveu a query, publica o da empresa, e quem senta na sala pra explicar é o líder. Segurança é das poucas áreas em que a responsabilidade sobe, não desce.
- Mentalidade primeiro: segurança não é uma feature nem um gate no final, é propriedade do processo. "Passar o pentest antes do go-live" é o equivalente a estudar na véspera: às vezes passa, nunca aprende.
- OWASP Top 10: o vocabulário mínimo pra você não ser enrolado. Não decore os dez; entenda os quatro que causam a maioria dos estragos:
  - Broken Access Control (nº 1 por anos): o sistema deixa o usuário A ver dados do usuário B trocando um ID na URL. Pergunta de líder: "quem testa autorização, e onde?"
  - Injection (SQL e afins): input do usuário virando comando. Resolvido há 20 anos (queries parametrizadas) e ainda o campeão de vazamento.
  - Falhas criptográficas: dado sensível trafegando ou guardado sem proteção. Pergunta: "senha está com hash forte? Dado pessoal está cifrado em repouso?"
  - Componentes vulneráveis: a dependência de 2019 que ninguém atualiza. A maioria dos ataques reais entra por biblioteca velha, não por hacker genial.
- O que o líder cobra no processo (não no código):
  - Scanner de dependências e de código no pipeline (SCA + SAST): barato, automático, e resolve a classe mais comum de vulnerabilidade. Se não tem, é sua primeira cobrança.
  - Segurança na definição de pronto: mudança que toca autenticação, autorização ou dado pessoal exige revisão com olhar de segurança.
  - Threat modeling leve em feature sensível: 30 minutos perguntando "o que um usuário malicioso faria com isso?" antes de codar. Não precisa de framework pomposo pra começar.
  - Gestão de segredos: senha e API key em variável de ambiente/cofre, NUNCA no repositório. Vale auditar hoje: procure "password" e "key" no histórico do git do seu time e respire fundo.
- Segurança em apps enterprise: as camadas além do código:
  - Princípio do menor privilégio: cada pessoa e cada sistema só acessa o que precisa. Pergunta de auditoria: "quem tem acesso de escrita em produção? Por quê?"
  - Trilha de auditoria: quem fez o quê, quando. Compliance vai pedir, incidente vai precisar.
  - LGPD como requisito de engenharia: inventário de dados pessoais, capacidade de deletar usuário sob demanda, minimização (não colete o que não usa).
  - Offboarding: dev saiu, acessos morrem no mesmo dia. O furo mais comum e mais bobo das empresas.
- Como reagir quando acharem uma vulnerabilidade (e vão achar): sem culpado, com prazo. Severidade define SLA de correção (crítica: dias, não sprints). Punir quem reporta é garantir que a próxima ninguém reporta.
- O trade-off honesto: segurança infinita não existe e paranoia trava entrega. Seu papel é calibrar pelo risco real do negócio: fintech e healthtech num nível, blog institucional em outro. Risco aceito é ok, desde que documentado e aceito por quem pode aceitar (às vezes é decisão de diretoria, não sua).
- Ação prática: esta semana, três verificações de 15 minutos cada: (1) tem scanner de dependência no pipeline? (2) tem segredo commitado no repo? (3) quem tem acesso a produção? Os achados viram seu plano de segurança do trimestre.
- Fechamento: você não precisa virar hacker. Precisa garantir que segurança tem processo, que as perguntas certas são feitas em toda feature sensível, e que o barato (scanner, cofre de segredos, menor privilégio) está feito antes de discutir o caro.

## O que mostrar (complementos visuais)
- OWASP Top 10 em uma tela, com os 4 destacados e tradução em uma frase cada
- Demo rápida (ou print) de Broken Access Control: trocar ID na URL e ver dado alheio
- Pipeline desenhado com os gates de segurança (SCA, SAST, revisão em mudança sensível)
- Checklist de auditoria de 15 minutos x 3 (scanner, segredos, acessos)
- Tabela severidade x SLA de correção
- Exemplo real de vazamento por dependência desatualizada (caso público) e o custo
