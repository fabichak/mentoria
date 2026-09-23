---
name: contrato
description: Gera contrato do Programa ADVANCE (docx + pdf) preenchido com os dados de um aluno em contratos/, cria a cópia do doc de Onboarding no Google Drive compartilhada com o aluno, envia o PDF pro Autentique com campos de assinatura (aluno + Martin), cria a cobrança no Asaas (anual = pagamento único, mensal = assinatura) e manda o link de assinatura pro aluno por WhatsApp (Evolution API). Use quando o usuário pedir "contrato", "/contrato" ou passar nome/cpf/endereço/telefone/email de um novo aluno.
---

# /contrato

Entrada: nome, CPF, endereço, telefone, e-mail do aluno, **valor e plano** (`197 mensal` ou `1970 anual`), opcionalmente a **data da 1ª cobrança** (ex.: `vencimento 05/10` ou `primeira cobrança 05/10/2026`; sem ano = próximo futuro) e, opcionalmente, a palavra `sandbox` (texto livre ou `/contrato <dados>`). Se faltar algum campo, pergunte antes de rodar.

`sandbox` vale pra **tudo**: Autentique com `sandbox=true`, Asaas com `--sandbox`. Sem a palavra, é produção e consome crédito/gera cobrança real.

## Passos

1. **Cidade**: extraia a cidade do endereço (sem UF). Ex.: "Rua X, 10, Centro, Matão - SP" → `Matão`. Se não der pra inferir, pergunte.

2. **Gerar docx + pdf** (roda da raiz do projeto; o script usa LibreOffice do Windows via WSL):
   ```bash
   python3 contratos/gerar_contrato.py --nome "<nome>" --cpf "<cpf>" --endereco "<endereço>" --telefone "<telefone>" --email "<email>" --cidade "<cidade>"
   ```
   Saída: `contratos/Contrato_Programa_ADVANCE_<nome>.docx` e `.pdf`. Template: `contratos/Contrato_Programa_ADVANCE_Turma_Fundadora.docx` (placeholders `[NOME COMPLETO]`, `[CPF]`, `[ENDEREÇO COMPLETO]`, `[TELEFONE]`, `[E-MAIL]`, `[CIDADE]`, `[DATA]`).
   O script também imprime `SIZE <bytes>` e `POSICOES {"CONTRATANTE": {z,x,y}, "CONTRATADA": {z,x,y}}` (página e % da posição do campo de assinatura, já acima da linha de cada parte). Guarde os dois pro passo 5.

3. **Onboarding no Google Drive** (tools `mcp__claude_ai_Google_Drive__*`, carregar via ToolSearch `select:mcp__claude_ai_Google_Drive__copy_file,mcp__claude_ai_Google_Drive__share_file`):
   - `copy_file(fileId="1zJRfM7mo7DLgKCuGtiSPAUSQlELbA4MEJT7GEOWmRfk", title="Onboarding - <nome>")`
   - `share_file(fileId=<id da cópia>, emailAddress="<email>", role="writer")`

4. **Autentique** (tools `mcp__autentique__*`, carregar via ToolSearch `select:mcp__autentique__prepare-document-upload-tool,mcp__autentique__create-document-tool,mcp__autentique__list-document-signatures-tool`). `sandbox=true` só se o usuário pediu sandbox; senão `false` (consome crédito de documento). Não repetir `create-document` após erro: preparar upload novo.
   a. `prepare-document-upload-tool(filename="Contrato_Programa_ADVANCE_<nome>.pdf", content_type="application/pdf", size=<SIZE>)`.
   b. Upload com curl **a partir de `contratos/`** (caminho tem espaço, usar aspas), headers exatamente como retornados:
      ```bash
      cd contratos && curl -s --fail-with-body -X PUT --upload-file "Contrato_Programa_ADVANCE_<nome>.pdf" -H 'Content-Type: application/pdf' -H 'Content-Length: <SIZE>' -H 'x-goog-if-generation-match: 0' '<upload.url>' -w "HTTP %{http_code}\n"
      ```
      Esperado `HTTP 200`.
   c. `create-document-tool` com `folder_id="98b2e6b94dc54c3ece2dbd8f0edc775d95cfde9e"` (pasta MFA/Mentoria no Autentique) e:
      - `document`: `{"name": "Contrato Programa ADVANCE - <nome>", "locale": {"country":"BR","language":"pt-BR","timezone":"America/Sao_Paulo","date_format":"DD_MM_YYYY"}}`
      - `signers` (ambos `delivery_method: "link"`, ninguém recebe e-mail automático):
        1. aluno: `{"action":"SIGN","delivery_method":"link","name":"<nome>","email":"<email>","configs":{"cpf":"<cpf só dígitos>"},"positions":[{"element":"signature","x":POSICOES.CONTRATANTE.x,"y":POSICOES.CONTRATANTE.y,"z":POSICOES.CONTRATANTE.z}]}`
        2. Martin (CONTRATADA): `{"action":"SIGN_AS_PART","delivery_method":"link","name":"Martin Fabichak","email":"mfabichak@gmail.com","configs":{"cpf":"34925894803"},"positions":[{"element":"signature","x":POSICOES.CONTRATADA.x,"y":POSICOES.CONTRATADA.y,"z":POSICOES.CONTRATADA.z}]}`
   d. `list-document-signatures-tool(document_id=<id>)` → cada assinatura traz `link.short_link`. O de `action: SIGN` é do aluno; o de `SIGN_AS_PART` é do Martin.

5. **Cobrança no Asaas** (roda da raiz; lê a chave do `.env`):
   ```bash
   python3 contratos/cobranca_asaas.py [--sandbox] --nome "<nome>" --cpf "<cpf>" --email "<email>" --telefone "<telefone>" --endereco "<endereço>" --valor <valor> --plano mensal|anual [--vencimento YYYY-MM-DD]
   ```
   - `--vencimento` só se o usuário passou data da 1ª cobrança; converter pra `YYYY-MM-DD`. Sem ele, próximo dia útil.
   - Cliente é reusado por CPF ou criado com os dados do contrato.
   - Encargos por atraso fixos no script, no teto legal: multa 2% (CDC art. 52 §1º) + juros 1% ao mês (CC art. 406). Sem desconto.
   - `anual`: 1 cobrança (boleto, com Pix na página) vencendo na data da 1ª cobrança.
   - `mensal`: assinatura `MONTHLY`, 1ª parcela vence na data da 1ª cobrança, as seguintes todo mês no mesmo dia.
   - Saída JSON: `customer`, `subscription`, `payment`, `dueDate`, `invoiceUrl` (página de pagamento, boleto + Pix), `bankSlipUrl` (PDF do boleto).

6. **WhatsApp pro aluno** (Evolution API local, instância `MF Mentoria`). Precisa do short_link do aluno (passo 4), do `invoiceUrl` (passo 5) e do link do Onboarding sem query string (passo 3, `https://docs.google.com/document/d/<id>/edit`). Telefone: só dígitos, DDI 55 na frente (ex.: `(12) 96271-9203` → `5512962719203`). Se o número não existir no WhatsApp a API devolve 400 com `"exists":false`: avise e não tente variações.
   ```bash
   curl -s -X POST 'http://localhost:8081/message/sendText/MF%20Mentoria' -H 'apikey: 545DFBE4F08E-4981-856B-076C01DD25F2' -H 'Content-Type: application/json' -d '{"number":"55<ddd><numero>","text":"Oi <primeiro nome>!\nMuito obrigado por acreditar na devAdvance.club.\nSegue o contrato para assinatura: <short_link do aluno>\nO link para o primeiro pagamento pelo Asaas: <invoiceUrl>\nE o link para preencher as perguntas do onboarding: <link do Onboarding>\n\nQualquer dúvida, só falar!"}'
   ```
   Sucesso: resposta com `"status":"PENDING"` ou `"key"`. Texto da mensagem é fixo; não mude.

7. Responder com:
   - caminhos do docx/pdf
   - link do doc de Onboarding **sem query string** (`https://docs.google.com/document/d/<id>/edit`). O `viewUrl` retornado traz `ouid=` da conta dona; esse parâmetro força o aluno a verificar a conta errada.
   - **Link pro aluno assinar** (short_link do SIGN), pronto pra copiar e mandar
   - **Link pro Martin assinar** (short_link do SIGN_AS_PART)
   - `dashboard_url` do documento no Autentique
   - **Cobrança Asaas:** `invoiceUrl` (link do boleto/Pix pro aluno), `bankSlipUrl`, vencimento, valor, plano, id da assinatura se mensal
   - confirmação do WhatsApp enviado (ou aviso de número inexistente)
   - se foi sandbox, dizer explicitamente que nada é real
   Não commitar.

Asaas: chaves em `.env` na raiz (`ASAAS_SANDBOX_API_KEY`, `ASAAS_PROD_API_KEY`), lidas pelo `cobranca_asaas.py`. Começam com `$`, por isso entre aspas simples. Se `ASAAS_PROD_API_KEY` estiver vazia e não for sandbox, o script aborta: pedir a chave. Não usar o MCP `asaas` pra executar chamadas com a chave; ele serve só pra consultar a doc (`search-endpoints`, `get-endpoint`).

Pré-requisitos: conector Google Drive logado em `m@martinfabichak.com` (dona do doc de Onboarding); MCP `autentique` autenticado como `mfabichak@gmail.com`; Evolution API no Docker em `localhost:8081`, instância `MF Mentoria` em estado `open` (checar: `curl -s http://localhost:8081/instance/connectionState/MF%20Mentoria -H 'apikey: 545DFBE4F08E-4981-856B-076C01DD25F2'`).
