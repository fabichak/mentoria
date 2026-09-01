/**
 * Diagnóstico Técnico — gerador de Google Form
 *
 * COMO USAR:
 * 1. Abra https://script.google.com  →  Novo projeto
 * 2. Apague o conteúdo e cole TUDO isso
 * 3. Salve (Ctrl+S), clique em ▶ Run (função criarFormDiagnostico)
 * 4. Autorize o acesso na 1ª vez
 * 5. Veja os links (edição + resposta) em View → Logs (Ctrl+Enter)
 */

function criarFormDiagnostico() {
  var form = FormApp.create('Diagnóstico Técnico — Form Inicial');
  form.setDescription(
    'Enviado antes da visita. ~15min.\n' +
    'Objetivo: entender como a empresa funciona — Processo · Pessoas · Tecnologia.\n' +
    'Quanto mais honesto, melhor o diagnóstico.'
  );
  form.setCollectEmail(true);
  form.setProgressBar(true);

  // ---------- Bloco 0 — Identificação ----------
  form.addSectionHeaderItem().setTitle('Bloco 0 — Identificação');
  form.addTextItem().setTitle('Nome da empresa');
  form.addTextItem().setTitle('Site / redes');
  form.addTextItem().setTitle('Setor / o que faz');
  form.addParagraphTextItem().setTitle('Modelo de negócio');
  form.addTextItem().setTitle('Nº de funcionários (total)')
    .setValidation(FormApp.createTextValidation().requireNumber().build());
  form.addTextItem().setTitle('Nº de pessoas em TI / tecnologia')
    .setValidation(FormApp.createTextValidation().requireNumber().build());
  form.addTextItem().setTitle('Faturamento aproximado (faixa)');
  form.addTextItem().setTitle('Seu nome');
  form.addTextItem().setTitle('Seu cargo');
  form.addTextItem().setTitle('Quem decide investimento em tecnologia e processos?');
  form.addMultipleChoiceItem().setTitle('A empresa é remota, totalmente física ou híbrida?')
    .setChoiceValues(['Remota', 'Física', 'Híbrida']);

  // ---------- Bloco 1 — Negócio e Dor ----------
  form.addPageBreakItem().setTitle('Bloco 1 — Negócio e Dor')
    .setHelpText('Acha o gatilho e o critério de sucesso.');
  form.addParagraphTextItem().setTitle('Em 1 frase: o que a empresa faz / como ganha dinheiro');
  form.addParagraphTextItem().setTitle('Você está feliz com a velocidade da empresa agora?');
  form.addParagraphTextItem().setTitle('3 maiores dores operacionais hoje');
  form.addParagraphTextItem().setTitle('O que já tentaram resolver e não funcionou');
  form.addParagraphTextItem().setTitle('Se nada mudar nos próximos 12 meses, qual o risco?');
  form.addParagraphTextItem().setTitle('Quanto gastam por mês em ferramentas / sistemas?');
  form.addParagraphTextItem().setTitle('Como mediriam o sucesso de uma melhoria? (tempo / custo / receita / qualidade)');

  // ---------- Bloco 2 — Processos ----------
  form.addPageBreakItem().setTitle('Bloco 2 — Processos')
    .setHelpText('Acha gargalo e trabalho manual.');
  form.addParagraphTextItem().setTitle('Quais são os 3–5 processos centrais do dia a dia (do pedido à entrega)?');
  form.addParagraphTextItem().setTitle('Onde trava mais / gera mais retrabalho?');
  form.addParagraphTextItem().setTitle('O que ainda é feito no papel / planilha / "na cabeça de alguém"?');
  form.addParagraphTextItem().setTitle('Algo que depende 100% de uma só pessoa?');
  form.addTextItem().setTitle('Quanto tempo por semana é gasto em tarefa repetitiva manual? (estimativa)');
  form.addTextItem().setTitle('Qual o departamento que mais tem problemas de tarefas manuais?');
  form.addParagraphTextItem().setTitle('Os processos são documentados? Como novos colaboradores aprendem o que fazer?');

  // ---------- Bloco 2.5 — Pessoas ----------
  form.addPageBreakItem().setTitle('Bloco 2.5 — Pessoas');
  form.addParagraphTextItem().setTitle('Quais as principais reclamações dos funcionários?');
  form.addParagraphTextItem().setTitle('Existe um processo formal de período de experiência?');
  form.addParagraphTextItem().setTitle('Existe um processo formal de feedback ou de ser promovido?');
  form.addParagraphTextItem().setTitle('Existe RH? Quais as atribuições?');
  form.addParagraphTextItem().setTitle('Existem líderes? Eles têm treinamento?');
  form.addParagraphTextItem().setTitle('Neste exato momento existe alguém que gostaria de demitir mas não pode? Por quê?');
  form.addParagraphTextItem().setTitle('Alguma reclamação em relação à "cultura" dos funcionários?');

  // ---------- Bloco 3 — Tecnologia / Software ----------
  form.addPageBreakItem().setTitle('Bloco 3 — Tecnologia / Software')
    .setHelpText('Acha software antigo, dado preso, integração faltando.');
  form.addParagraphTextItem().setTitle('Liste softwares/sistemas usados (ERP, CRM, financeiro, planilhas, internos)');
  form.addParagraphTextItem().setTitle('Qual o sistema mais antigo/crítico e quem o mantém?');
  form.addMultipleChoiceItem().setTitle('Sistemas conversam entre si ou re-digita dado de um pro outro?')
    .setChoiceValues(['Conversam', 'Re-digita', 'Misto']);
  form.addCheckboxItem().setTitle('Onde os dados vivem?')
    .setChoiceValues(['Planilha', 'Nuvem', 'Servidor local', 'Papel', 'Sistema próprio']);
  form.addParagraphTextItem().setTitle('Algum sistema que ninguém entende mais / fornecedor sumiu?');
  form.addMultipleChoiceItem().setTitle('Já tem nuvem?')
    .setChoiceValues(['Sim', 'Não', 'Parcial']);
  form.addMultipleChoiceItem().setTitle('Tem backup? Acontece sozinho?')
    .setChoiceValues(['Automático', 'Manual', 'Não tem', 'Não sei']);
  form.addScaleItem().setTitle('Maturidade tecnológica geral')
    .setBounds(0, 5).setLabels('Muito baixa', 'Muito alta');
  form.addTextItem().setTitle('Algo que você já identifica que pode ser implementado ou alterado?');

  // ---------- Bloco 4 — TI ----------
  form.addPageBreakItem().setTitle('Bloco 4 — TI');
  form.addMultipleChoiceItem().setTitle('Tem equipe de TI interna?')
    .setChoiceValues(['Interna', 'Terceirizada', 'Mista', 'Não tem']);
  form.addTextItem().setTitle('Quantas pessoas em TI?')
    .setValidation(FormApp.createTextValidation().requireNumber().build());
  form.addScaleItem().setTitle('TI hoje é proativa (melhora) ou reativa (apaga incêndio)?')
    .setBounds(0, 5).setLabels('Só apaga incêndio', 'Totalmente proativa');
  form.addTextItem().setTitle('Quem mexe quando um sistema cai?');
  form.addScaleItem().setTitle('Time tem abertura pra mudança ou resistência?')
    .setBounds(0, 5).setLabels('Muita resistência', 'Abraça mudança');

  // ---------- Bloco 5 — IA e Modernização ----------
  form.addPageBreakItem().setTitle('Bloco 5 — IA e Modernização')
    .setHelpText('O cenário dos sonhos.');
  form.addParagraphTextItem().setTitle('O que você gostaria que fosse automático e hoje não é?');
  form.addParagraphTextItem().setTitle('Onde você acha que perde mais dinheiro/tempo?');
  form.addMultipleChoiceItem().setTitle('Alguém já usa IA no trabalho? (mesmo ChatGPT informal)')
    .setChoiceValues(['Sim, oficial', 'Sim, informal', 'Não', 'Não sei']);
  form.addParagraphTextItem().setTitle('Já tentou IA? O que rolou?');
  form.addParagraphTextItem().setTitle('Qual seria o cenário dos sonhos em 6 meses?');

  // ---------- Bloco 6 — Logística ----------
  form.addPageBreakItem().setTitle('Bloco 6 — Logística do Diagnóstico')
    .setHelpText('Garante acesso. Sem acesso, diagnóstico é chute.');
  form.addParagraphTextItem().setTitle('Podem me dar um dia de acesso à empresa e conversar com colaboradores, sem barreiras de perguntas?');
  form.addParagraphTextItem().setTitle('Quem posso entrevistar? Principais pessoas que tomam conta de processos (operação, financeiro, TI)');
  form.addMultipleChoiceItem().setTitle('Pode dar acesso a sistemas/dados pra olhar, ou tem problemas de dados/LGPD?')
    .setChoiceValues(['Sim', 'Parcial', 'Não']);

  // ---------- Links ----------
  Logger.log('FORM CRIADO');
  Logger.log('Editar:    ' + form.getEditUrl());
  Logger.log('Responder: ' + form.getPublishedUrl());
}
