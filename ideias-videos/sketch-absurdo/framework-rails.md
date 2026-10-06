# "Criando o Ruby on Rails" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Rails com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Rails. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Convenção.** Tudo por convenção. Model `Person`, tabela `people`. Model `Octopus`, tabela `octopi`. O Rails sabe o plural. Você não precisa saber inglês, o Rails sabe por você.

**Demo.** Um blog em quinze minutos. O resto do sistema: três anos.

**Número.** `3.days.ago`. Número tem método de data. A gente mexeu direto na classe de número do Ruby. Ninguém pediu, mas ficou lindo.
`[tela: 3.days.ago   5.minutes.from_now]`

**Método que não existe.** Funciona. Você chama um método que ninguém escreveu e o Rails inventa na hora. `find_by_email_and_nome`. Mágica. Debugar a mágica é outro curso.

**Callback.** `before_save`, `after_commit`, `before_validation`. Salvar um usuário manda e-mail, cria log e atualiza três tabelas. Quer pular? `update_column`. Porta dos fundos oficial.

**N+1.** `includes`, `preload`, `eager_load`. Três jeitos. O `includes` decide sozinho qual dos outros dois ele vai ser.

**Mass assignment.** Em 2012 um dev usou essa falha pra ganhar acesso de commit no próprio repositório do Rails no GitHub. E commitou. Aí a gente cria strong parameters.

**JavaScript.** Sprockets. Aí Webpacker. Aí no Rails 7 tira o Webpacker. Agora é importmap, sem build. Três mudanças de casa.

**Turbolinks.** Acelera a página. Quebra todo `$(document).ready` do projeto. Depois vira Turbo. Com outro nome, pra quebrar diferente.

**Opinião.** Rails é omakase. O chef escolhe o prato. Não gostou? O chef não perguntou.

**TypeScript.** Em 2023 o Turbo tira o TypeScript do código. Opinião do chef.

**Escala.** "Rails não escala." O Twitter tinha a baleia do erro. O Twitter saiu do Rails. O Shopify e o GitHub ficaram. Escala sim. Com sofrimento.

**Preloader.** O Spring deixava o comando mais rápido. Às vezes rodava código velho. Tiraram do padrão. Rápido e errado não pode.

**Rails 8.** Fila, cache e websocket, tudo no banco. Solid Queue, Solid Cache, Solid Cable. Não precisa mais de Redis. Tudo sólido.

**Nuvem.** A empresa do criador sai da nuvem e volta pro servidor próprio. Nuvem cobra taxa. Servidor próprio você paga uma vez e chora parcelado.

**Scaffold.** `rails generate scaffold`. Cria um monte de arquivo de uma vez. Metade você apaga.

**unless.** `unless` com `else`. Duplo negativo. "A menos que não". Pra treinar lógica de manhã.
`[tela: unless pago? ... else ... end]`

**Fechamento.** Otimizado pra felicidade do programador. Principalmente de um programador específico.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Convenção, Demo, Número, Método que não existe, Callback, Mass assignment, JavaScript, Opinião, Escala, Rails 8, unless, Fechamento.
- **Parte 2 (sobra):** N+1, Turbolinks, TypeScript, Preloader, Nuvem, Scaffold.

**Legenda sugerida:** "Se o Rails fosse criado hoje, em reunião de planejamento 🤡 (octopi é o plural oficial)"
