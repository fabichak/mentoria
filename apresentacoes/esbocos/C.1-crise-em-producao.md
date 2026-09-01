# C.1: Crise em produção
**Estudo de caso**

## Esqueleto (o que falar)
- **Problema: abra no meio do caos**: descreva o momento exato em que soube do incidente. Onde você estava? Que horas eram? Como chegou o alerta (monitoramento, cliente, CEO)?
  - Pergunta pra responder: qual era o impacto real, usuários afetados, dinheiro sendo perdido por hora, reputação em jogo?
  - Quem estava em pânico e quem estava calmo?
- **Diagnóstico: o que estava em jogo de verdade**: separe o problema técnico do problema de liderança.
  - Pergunta: qual foi a primeira hipótese e ela estava certa ou errada? Quanto tempo perderam numa pista falsa?
  - Como você decidiu quem investigava o quê? Havia um incident commander formal ou você improvisou os papéis?
- **Plano: a estrutura da resposta**: descreva os papéis que definiu (comandante do incidente, comunicador, quem mexe no código, quem NÃO mexe em nada).
  - Pergunta: o que você comunicou pra cima (diretoria/cliente) e com que frequência? Qual era a mensagem exata?
  - Como impediu que 15 pessoas "ajudando" piorassem tudo?
- **Execução: decisões sob pressão**: conte a decisão mais difícil (rollback vs. fix forward, acordar alguém de madrugada, aceitar perda de dados parcial).
  - Pergunta: qual erro VOCÊ cometeu durante o incidente? Seja específico.
  - O momento da virada: como souberam que estava resolvido de verdade e não só aparentemente?
- **Post-mortem: sem caça às bruxas**: como conduziu a reunião depois. Blameless na prática, não na teoria.
  - Pergunta: o que mudou de processo/arquitetura depois? Alguma dessas mudanças foi abandonada meses depois?
  - O que você faria diferente hoje, com a experiência que tem?
- **Lição pro mentorado**: em crise, seu trabalho como líder não é debugar, é criar as condições pra quem debuga. Papéis claros, comunicação em intervalo fixo, e proteger o time do ruído externo. Feche com: "a crise revela a cultura que você construiu antes dela".

## O que mostrar (complementos visuais)
- Diagrama simples dos papéis num incidente (commander / comms / operadores / observadores)
- Timeline do incidente real (anonimizada): detecção → diagnóstico → mitigação → resolução
- Template de mensagem de status pra stakeholders (a que você usava, ou reconstruída)
- Estrutura de um post-mortem blameless (seções do documento)
- Checklist "primeiros 15 minutos de um incidente" pro mentorado levar
