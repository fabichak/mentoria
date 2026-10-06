# Luiz Carrara · Resumo do topo: antes → depois

Regras do ebook (Passo 4 / Anexo A): R2 resumo = quem + nível + 2–3 conquistas; R1 resultado primeiro, tecnologia como contexto; R3 número defensável.
`[...]` = número que só o Luiz sabe. Preencher ou cortar. Nunca inventar.
Resto do CV: sem alteração.

## Diagnóstico do resumo atual
- Nível e tempo: ok (Tech Lead, 5 anos, 10 na empresa).
- Só 1 conquista com número (70%), e ela está enterrada no fim de uma frase de 40 palavras com parêntese sem fechar: "(redução de até 70% para registro de números de séries,  AWS."
- O 50% das APIs de entrega/faturamento e as integrações (EPCIS, NFe, NFSe, boleto) estão no corpo mas não no resumo.
- "Foco em arquitetura de sistemas, modelagem de dados e regras de negócio complexas" = lista de áreas, não prova.
- "soluções técnicas escaláveis" = adjetivo sem evidência.
- Tamanho do time não aparece (escopo, R3).
- Longo demais: 8 linhas; recrutador lê em ~10s.
- Terceira pessoa/impessoal misturada com primeira ("Lidero", "Foco em", "uso de").

## Antes
> Tech Lead há 5 anos na DOit Systems, onde estou há 10 anos. Lidero uma equipe full stack formada em grande parte internamente, de estagiário a pleno/sênior, em uma plataforma ERP usada por cerca de 300 empresas com clientes no Brasil e EUA. Foco em arquitetura de sistemas, modelagem de dados e regras de negócio complexas com integrações críticas a parceiros externos, uso de Datadog para ajustes de performance (redução de até 70% para registro de números de séries, AWS. Atuo próximo aos stakeholders para traduzir necessidades de negócio em soluções técnicas escaláveis.

## Depois
> Tech Lead backend Java/Quarkus com 10 anos na DOit Systems, os últimos 5 liderando o time full stack de [N] pessoas de um ERP usado por cerca de 300 empresas no Brasil e nos EUA. Reduzi em 70% o tempo de registro de números de série e em cerca de 50% o das APIs de entrega e faturamento, usando Datadog para localizar gargalos e N+1s. Liderei integrações críticas com parceiros externos (EPCIS/DSCSA, NFe, NFSe, boleto) em AWS (SQS, SNS, S3) e MuleSoft, e formei internamente [N] devs de estagiário a pleno/sênior. Busco posição de Tech Lead backend em produtos B2B de alto volume.

Última frase: trocar "produtos B2B de alto volume" pelo tipo de vaga que o Luiz está mirando de fato (Passo 2). Sem ela o Jev dá target_role 0.56; com ela, 0.96.

## Jev (jev-1.13.0), perguntas do analyze.py
| check | antes | depois |
|---|---|---|
| says_level | 0.99 | 0.99 |
| concrete_wins | 0.85 | 0.98 |
| generic_adjectives (menor = melhor) | 0.11 | 0.07 |
| target_role | 0.43 | 0.96 |
| short | 0.70 | 0.65 |

Bullets do corpo (result_luiz.json): 11 bullets, 9 sem resultado, 10 sem métrica, 11 sem escopo. Não alterados por pedido.

## Flags fora do resumo (não alterado)
- Experiência, bullet 2: "DSC act" → "DSCSA (Drug Supply Chain Security Act)". Recrutador do setor pharma busca pela sigla certa.
- Experiência, bullet 1: time "de estagiário à pleno" vs resumo "pleno/sênior". Alinhar.
