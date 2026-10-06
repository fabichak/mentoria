# "Criando a Unity" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. O criador da Unity segura uma prancheta e fala rápido e tranquilo, como quem toma decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade na Unity. Quem faz jogo reconhece e ri, e quem não faz ri do absurdo.
**Tela:** quando tiver `[tela]`, mostrar o snippet ou print por cima.

---

**Update.** Pra rodar código todo frame, o dev escreve um método chamado `Update`. Não precisa de interface nem de override, a gente acha pelo nome. Se escrever `update` com minúsculo, não roda e ninguém avisa. Fica de surpresa.
`[tela: void update() { // nunca vai rodar }]`

**Achar objeto.** Pra achar um objeto na cena, `GameObject.Find("Player")`, por string. Acho legal chamar isso dentro do `Update`, 60 vezes por segundo, que aí o jogo fica sempre atualizado.

**Null.** Objeto destruído é igual a null. Mas só com `==`. Se usar `?.` do C#, ele não é null. É null de um jeito e não é do outro, tipo relacionamento enrolado.
`[tela: if (enemy == null) // true   |   enemy?.Attack(); // MissingReferenceException]`

**Arquivo .meta.** Cada arquivo do projeto vai ter um irmão `.meta`. Se esquecer de commitar o `.meta`, todas as referências quebram. Sem erro, só ficam rosa... digo, vazias.

**Cena.** A cena é salva num YAML de 40 mil linhas. Dois devs mexeram na mesma cena? Conflito de merge. Aí um dos dois perde o dia, e a gente sorteia qual.

**Material rosa.** Material quebrado fica rosa-choque, que é pra ninguém dizer que não viu.

**Render pipeline.** Acho que um pipeline de renderização é pouco. Vamos fazer três: Built-in, URP e HDRP. Um shader de um não funciona no outro. Asset que você comprou na loja? Funciona no que você não escolheu.

**Input.** O sistema de input antigo funciona. Aí a gente faz um novo. E deixa os dois. Tem até uma opção nas configurações: "Both".
`[tela: Active Input Handling: Both]`

**Play Mode.** Dá pra ajustar tudo com o jogo rodando. Ficou perfeito? Apertou o Stop, perdeu tudo. Isso ensina a anotar no papel.

**Inspector.** Mudou o valor da variável no código? Não muda nada, vale o que tá salvo no Inspector. O código é mais uma sugestão.
`[tela: public float speed = 10f;  →  Inspector: Speed 3]`

**Compilar script.** Salvou o script, espera o domain reload. Salvou de novo, espera de novo. Dá pra pegar um cafezinho. Cheio de açúcar.

**Física.** Física vai no `FixedUpdate`, input vai no `Update`. Se misturar os dois, o pulo funciona às vezes. Às vezes é bom pro jogador, cria suspense.

**Coroutine.** Pra esperar dois segundos, você faz um `IEnumerator` com `yield return`. Um iterador. Pra esperar. Faz sentido.
`[tela: yield return new WaitForSeconds(2f);]`

**Mundo grande.** Posição é `float`. Se o jogador andar muito longe do centro do mapa, o personagem começa a tremer. É imersão, ele tá cansado.

**DOTS.** Vamos anunciar um jeito novo e muito mais rápido de fazer tudo. Anuncia em 2018, 1.0 sai em 2023, e aí cada tutorial que você acha é de uma versão diferente da API.

**Versão.** Unity 2019, 2020, 2021, 2022, 2023... e depois? Unity 6. Pulou tudo, e ninguém explica.

**Splash screen.** No plano gratuito, o jogo abre com "Made with Unity" e não dá pra tirar. Pra tirar, paga a taxa, aí a logo desaparece. Isso até a Unity 6, que liberou.

**Taxa.** E acho que a gente cobra por instalação do jogo. Não por venda, por instalação. No primeiro anúncio, reinstalar contava de novo. Se usar os serviços de anúncio da própria Unity, tem desconto. A taxa diminui.
`[tela: manchete setembro 2023 — "Runtime Fee"]`

**Voltar atrás.** Aí todo mundo reclamou, a gente mudou a regra, depois mudou de novo, e um ano depois cancelou tudo. O importante é que ninguém migrou pra Godot. Né?

**Unity Hub.** Cada projeto usa uma versão diferente do editor. Cada editor tem uns 10 GB. Você vai ter umas seis instaladas. É colecionável.

**Asset Store.** Acho que a loja de assets é importante. Você compra o plugin, o dono abandona, e ele para de funcionar na próxima versão. Mas ele continua lá pra vender, bonitinho.

**Fechamento.** Eu confio no dev pra fazer o jogo inteiro sozinho, arte, código, som, tudo. Mas o `.meta` eu não confio, então ele fica preso no arquivo, igual a caneta na corrente.

---

## Cortes

Os originais têm uns 60 a 90s, e esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Update, Achar objeto, Null, Arquivo .meta, Cena, Render pipeline, Input, Play Mode, Inspector, Compilar script, Versão, Taxa, Voltar atrás, Fechamento.
- **Parte 2 (sobra):** Material rosa, Física, Coroutine, Mundo grande, DOTS, Splash screen, Unity Hub, Asset Store.

**Legenda sugerida:** "Se a Unity fosse criada hoje, em reunião de planejamento 🎮🤡 (e o pior: é tudo verdade)"
