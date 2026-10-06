# "Criando o Next.js" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Next.js com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Next.js. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Roteador.** Um é pouco. Acho que dois: o `pages` e o `app`. Os dois ao mesmo tempo, no mesmo projeto. Aí o dev escolhe qual tutorial vai ler errado.

**Rota.** Rota é pasta. Quer id? Pasta com colchete. Quer pegar tudo? Colchete com três pontinhos. Opcional? Colchete duplo. Pasta que não vira rota? Parênteses. Tem pasta com arroba também. Pasta com parêntese e ponto.
`[tela: app/(loja)/[...slug]/@modal/(.)foto/[[...id]]/page.tsx]`

**Nome de arquivo.** Todo arquivo chama `page.tsx`. O editor fica com doze abas escrito `page.tsx`. Acho que ajuda na concentração.

**Arquivo mágico.** `layout`, `loading`, `error`, `not-found`, `global-error`, `template`, `default`, `route`. Cada nome faz uma coisa diferente. Errou uma letra, vira arquivo normal e não avisa.

**Layout e template.** `layout` não renderiza de novo quando navega. Quer que renderize? `template`. Igual o layout. Só que não.

**Cache.** Acho que tudo em cache, por padrão. Aí ninguém entende por que o dado tá velho. Na versão 15 a gente muda: nada em cache por padrão. Aí ninguém entende por que tá lento.

**Buscar dados.** No `pages`: `getServerSideProps`, `getStaticProps`, `getStaticPaths`, `getInitialProps`. No `app`: nenhum deles. Faz `fetch` direto no componente. Que é async. No servidor.

**"use client".** String no topo do arquivo. Esqueceu? Erro dizendo que `useState` só funciona em Client Component. Mas o erro não coloca a string pra você.

**Params.** Na versão 15 o `params` vira Promise. Pra pegar o id da URL, você dá `await`. Espera a URL chegar.
`[tela: const { id } = await params]`

**Variável de ambiente.** Começou com `NEXT_PUBLIC_`, vai pro navegador. Colocou a chave secreta com `NEXT_PUBLIC_` pra funcionar? Funciona. Agora é pública. Tava no nome.

**Middleware.** Autenticação no middleware, acho seguro. Em 2025 descobriram que mandando um header específico o middleware era pulado. Na versão 16 a gente muda o nome pra `proxy`. Ficou mais bonito.

**Server Actions.** Função do servidor chamada direto do botão. Acho prático. Cada uma vira um endpoint público. Se você não checar quem chamou, qualquer um chama.

**Imagem.** `next/image`. Tem que dizer largura e altura. E liberar o domínio da imagem no config. Imagem de fora sem config? Erro. Otimizado.

**Hidratação.** Mostrou a hora na tela? Servidor diz 10h00, navegador diz 10h01. Tela vermelha. Relógio é perigoso.

**Hospedagem.** Roda em qualquer lugar. Mas roda melhor na Vercel. Quer ISR, otimização de imagem e edge no seu servidor? Dá. Ou paga a Vercel, daí o problema desaparece.

**Build.** Webpack tá lento, a gente cria o Turbopack. Em Rust. Na dúvida, reescreve em Rust.

**Tutorial.** Cada versão grande tem um jeito novo de fazer tudo. Tutorial de um ano atrás é arqueologia.

**Fechamento.** É React. Com opinião. Muitas. Todas mudam no próximo release.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Roteador, Rota, Nome de arquivo, Cache, "use client", Params, Variável de ambiente, Middleware, Server Actions, Hospedagem, Tutorial, Fechamento.
- **Parte 2 (sobra):** Arquivo mágico, Layout e template, Buscar dados, Imagem, Hidratação, Build.

**Legenda sugerida:** "Se o Next.js fosse criado hoje, em reunião de planejamento 🤡 (esse vídeo já está desatualizado)"
