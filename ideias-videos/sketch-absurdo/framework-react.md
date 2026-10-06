# "Criando o React" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do React com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no React. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Framework.** Não é framework, é biblioteca. Rota, estado, formulário, busca de dados: o pessoal escolhe. Tem umas quarenta opções pra cada. Aí fica democrático.

**HTML.** Vai dentro do JavaScript. Mas não pode escrever `class`, é `className`. E `for` é `htmlFor`. Parece HTML, mas não é, pra ninguém ficar confortável.
`[tela: <label htmlFor="email" className="campo">]`

**Estilo.** Chave dupla. Uma chave abre o JavaScript, a outra abre o objeto. Duas chaves, zero explicação.
`[tela: <div style={{ color: 'red' }}>]`

**Estado.** Você chama `setCount(count + 1)` e na linha de baixo o `count` ainda tá o valor antigo. Paciência. Ele atualiza quando der vontade.

**useEffect.** Acho que em desenvolvimento ele roda duas vezes. De propósito. Pra ver se você aguenta.

**Array de dependência.** Esqueceu uma variável, pega valor velho. Colocou um objeto, loop infinito. Não colocou array, roda a cada render. Três jeitos de errar, um de acertar.
`[tela: useEffect(() => { ... }, [/* boa sorte */])]`

**Hooks.** Não pode chamar dentro de `if`. Nem dentro de loop. Só no topo, sempre na mesma ordem. Porque o React conta. Literalmente, ele conta.

**Renderização.** Pai renderizou, todo filho renderiza junto. Quer evitar? `useMemo`, `useCallback`, `React.memo`. Em tudo. Aí anos depois a gente lança um compilador pra fazer isso sozinho.

**Lista.** Tem que ter `key`. Usou o índice como key? Funciona. Até não funcionar.

**Zero.** Lista vazia com `&&`, aparece um "0" solto na tela. Um zerinho. Dá charme.
`[tela: {itens.length && <Lista />}  →  0]`

**Nome.** A propriedade pra colocar HTML cru chama `dangerouslySetInnerHTML`. Perigosamente. Se der ruim, o nome já tinha avisado. Eu tô coberto.

**Passar dado.** Do avô pro neto, passa pelo pai. Pelo tio. Pelo primo. Não quer? Usa Context. Aí todo mundo que usa o Context renderiza de novo. Família é assim.

**Gerenciador de estado.** Redux, MobX, Zustand, Jotai, Recoil, Context. Acho que um por ano tá bom. O Recoil a gente até arquivou.

**Classe.** Em 2019 componente de classe virou coisa de velho, agora é hook. O código de 2018 fica lá. Ninguém mexe. Ninguém entende.

**Criar projeto.** `create-react-app`. Todo tutorial usa. Aí em 2025 a gente descontinua. Os tutoriais ficam.

**Server Components.** Agora componente roda no servidor. Pra avisar que é do cliente, escreve uma string solta no topo do arquivo. `"use client"`. Uma string. Que faz coisa.

**Hidratação.** O servidor renderiza, o navegador renderiza de novo e compara. Mostrou a hora na tela? Servidor diz 10h00, navegador diz 10h01. Erro de hidratação.

**Buscar dados.** Todo mundo busca dado no `useEffect`. Aí a documentação oficial lança a página "Você talvez não precise de um Effect". Obrigado, doc.

**Carregando.** Um spinner por componente. Catorze spinners girando juntos. Dá pra pegar um café. Cheio de açúcar.

**Fechamento.** E é só a camada de view, simples. Aprender React: um fim de semana. Aprender o ecossistema: o resto da vida.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Framework, HTML, Estado, useEffect, Array de dependência, Hooks, Renderização, Zero, Nome, Gerenciador de estado, Server Components, Buscar dados, Fechamento.
- **Parte 2 (sobra):** Estilo, Lista, Passar dado, Classe, Criar projeto, Hidratação, Carregando.

**Legenda sugerida:** "Se o React fosse criado hoje, em reunião de planejamento 🤡 (roda duas vezes pra ter certeza)"
