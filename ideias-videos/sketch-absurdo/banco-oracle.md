# "Criando o Oracle" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Oracle com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir. Pode ter terno e relógio caro.
**Sacada:** quase tudo aqui é verdade no Oracle. Quem trabalhou em banco, governo ou telecom reconhece e ri; quem não trabalhou ri do absurdo.
**Tela:** mostrar o snippet em cima quando tiver `[tela]`.

---

**Nome.** Vou pegar o nome de um projeto da CIA. Oracle. Passa confiança.

**Texto vazio.** String vazia é NULL. `''` é NULL. Sem nome não é nome vazio, é ausência de nome. Filosófico.
`[tela: SELECT * FROM clientes WHERE apelido = '';  -- 0 linhas, sempre]`

**`SELECT` sem tabela.** Não pode. Precisa de uma tabela. Então vou criar uma tabela com uma linha e uma coluna, chamada `DUAL`. Dual, de dois. Com um. Lógico.
`[tela: SELECT SYSDATE FROM DUAL;]`

**VARCHAR.** Não usa o `VARCHAR`. Usa o `VARCHAR2`. O `VARCHAR` a gente pode mudar um dia. O 2 é o seguro.

**Booleano.** Não precisa. Usa `CHAR(1)` com 'S' e 'N'. Ou 'Y' e 'N'. Ou 1 e 0. Cada tabela de um jeito. Aí em 2023 eu lanço booleano. Coisa moderna.

**Nome de tabela.** No máximo 30 caracteres. `TB_CLI_END_COBR_HIST_ALT_VW`. Tudo legível. Liberado pra 128 em 2017.

**Paginação.** Usa o `ROWNUM`. E `WHERE ROWNUM > 1` não volta nada. Nunca. A primeira linha não pode ser a segunda. Se quiser página 2, faz subquery dentro de subquery.

**Data.** O tipo `DATE` guarda hora também. Aí compara com data sem hora e some metade do dia.

**Erro.** "ORA-00942: tabela ou view não existe". Às vezes existe, você só não tem permissão. Aí eu digo que não existe. Pra proteger. Tipo porta giratória que não abre.

**Erro interno.** O ORA-00600. Significa: deu algo errado, abre chamado. Paga o suporte. Espera.

**Usuário de exemplo.** Login `scott`, senha `tiger`. Tiger era o nome do gato. Senha segura, ninguém conhece o gato.

**Preço.** Enterprise, uns 47 mil dólares por processador. Com fator de núcleo. Mais opção de particionamento, mais opção de compressão, mais suporte anual. Nada por mês. Tudo por núcleo.

**Máquina virtual.** Rodou numa VM? Aí tem que licenciar todos os servidores que a VM poderia, em teoria, ir um dia. Por segurança. Pagando, o risco desaparece.

**Auditoria.** De vez em quando mando uma auditoria de licença. Surpresa. Tipo Receita Federal, só que com gravata vermelha.

**Benchmark.** A licença proíbe publicar benchmark sem autorização. Aí ninguém consegue provar que o concorrente é mais rápido. Nem que é mais lento. Paz.

**Slogan.** "Unbreakable". Inquebrável. E o patch de segurança sai de três em três meses. Pra manter inquebrável.

**Fechamento.** E aí, quando alguém quiser migrar pra outro banco, vai descobrir que tem 40 mil linhas de PL/SQL na procedure. Aí fica. Todo mundo fica.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Nome, Texto vazio, `SELECT` sem tabela, VARCHAR, Booleano, Paginação, Erro, Usuário de exemplo, Preço, Máquina virtual, Auditoria, Fechamento.
- **Parte 2 (sobra):** Nome de tabela, Data, Erro interno, Benchmark, Slogan.

**Legenda sugerida:** "Se o Oracle fosse criado hoje, em reunião de planejamento 🤡 (orçamento: sim)"
