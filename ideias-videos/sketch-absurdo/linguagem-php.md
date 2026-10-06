# "Criando o PHP" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do PHP com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no PHP. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** Personal Home Page. Minha página pessoal. Depois vira "PHP: Hypertext Preprocessor". Uma sigla que tem ela mesma dentro.

**Variável.** Toda variável começa com cifrão. `$nome`. Pra lembrar que é de pagar.

**HTML.** Código no meio do HTML. HTML no meio do código. Tudo junto, no mesmo arquivo. Tipo praça de alimentação.

**Nome de função.** `strpos`, `str_replace`, `strtolower`, `nl2br`. Um com underline, outro sem. Sorteio.

**Ordem dos argumentos.** `strpos` é palheiro, agulha. `in_array` é agulha, palheiro. Pra decorar, só com o manual aberto. Sempre.
`[tela: strpos($palheiro, $agulha); in_array($agulha, $palheiro);]`

**Maiúscula.** Nome de função não liga pra maiúscula. Nome de variável liga. Cada um com sua regra.

**Escapar texto.** `mysql_escape_string`. Não funcionou direito. Aí vem o `mysql_real_escape_string`. O real. O de verdade agora.

**Comparar.** `"abc" == 0` era verdadeiro até o PHP 8. E `"1e3" == "1000"` é verdadeiro até hoje. Mil é mil, né?

**Array.** Array é lista. E dicionário. E pilha. E fila. Tudo a mesma coisa. Um banheiro a cada dois andares, serve pra todo mundo.

**Erro.** Coloca um `@` na frente e o erro some. Não o problema. O erro.
`[tela: $dados = @file_get_contents($url);]`

**Mensagem de erro.** Erro de dois pontos duplos se chama `T_PAAMAYIM_NEKUDOTAYIM`. É hebraico. Vai que alguém fala.

**Ternário.** Ternário aninhado sem parêntese vai pro lado contrário de todas as outras linguagens. Depois de uns vinte anos, a gente transforma em erro.

**Variável global.** Parâmetro da URL vira variável sozinho. `?admin=1` e pronto, `$admin` é 1. Segurança é importante. Tiraram em 2012.

**Aspas mágicas.** O PHP coloca barra invertida sozinho nos dados, pra proteger. Aí você tira. Aí aparece barra no nome do cliente. D\'Ávila.

**Versão.** Do 5 pula pro 7. O 6 não existe. Ninguém fala dele.

**`explode`.** Pra quebrar texto, `explode`. Pra juntar, `implode`. Explodir e implodir. Estrutura civil.

**Deploy.** Deploy por FTP, direto em produção. Editando o arquivo no servidor. Com o site no ar. Adrenalina.

**Segurança.** SQL injection? É só concatenar a variável direto na query que eu protejo depois. Tipo acrílico afiado na porta: pega a digital.

**Web.** Aí o WordPress roda em mais de 40% dos sites do mundo. Em PHP. Ninguém esperava. Nem eu.

**Fechamento.** Todo ano alguém diz que o PHP morreu. Ele tá rodando o site onde a pessoa escreveu isso.

---

## Cortes

- **Corte principal (~75s):** Nome, Variável, HTML, Nome de função, Ordem dos argumentos, Escapar texto, Comparar, Erro, Mensagem de erro, Versão, Deploy, Web, Fechamento.
- **Parte 2 (sobra):** Maiúscula, Array, Ternário, Variável global, Aspas mágicas, `explode`, Segurança.

**Legenda sugerida:** "Se o PHP fosse criado hoje, em reunião de planejamento 🐘 (T_PAAMAYIM_NEKUDOTAYIM é real)"
