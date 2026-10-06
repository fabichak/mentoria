# "Criando o Flutter" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Flutter com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Flutter. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Linguagem.** Dart. Ninguém usava. Agora usa. Porque precisa.

**Widget.** Tudo é widget. Botão é widget. Texto é widget. Espaçamento é widget. Centralizar é widget. Se sobrar tempo, o dev vira widget.

**Aninhamento.** Widget dentro de widget dentro de widget. No final, fecha assim: parêntese, parêntese, parêntese, colchete, parêntese. E um comentário `// Column` pra saber quem é quem.
`[tela: ),),],),); // Column]`

**Estado.** Widget com estado são duas classes. Uma pro widget, outra pro estado. Um carro, dois documentos.

**Gerenciar estado.** `setState`. Aí Provider. Aí Riverpod, que é anagrama de Provider, feito pelo mesmo autor, pra substituir o Provider. Aí BLoC, GetX, MobX, Redux. Escolhe um e briga no grupo.

**const.** O lint pede `const` em tudo. Esqueceu? Linha azul embaixo. Em tudo. Tapete azul.

**Overflow.** Passou um pixel da tela? Aparece uma faixa amarela e preta escrito "RIGHT OVERFLOWED BY 42 PIXELS". Sinalização de obra. Tipo fita de TNT.

**Nativo.** Não usa o botão do celular. Desenha cada pixel. O botão de iPhone é uma imitação do botão de iPhone. Quando a Apple muda o visual, a imitação fica velha. Tipo cover de banda.

**JSON.** Dart no Flutter não tem reflexão. Pra ler um JSON, gera código. `build_runner build --delete-conflicting-outputs`. Cria arquivo `.g.dart`, `.freezed.dart`. Pra ler um JSON.
`[tela: dart run build_runner build --delete-conflicting-outputs]`

**Web.** Roda no navegador. Desenhando num canvas. SEO? O Google tem dificuldade de ler. Framework do Google.

**iOS.** Precisa de um Mac. E de `pod install`. Que dá erro no Podfile. Que você não escreveu.

**Null safety.** Chega em 2021. Migra o projeto inteiro. Tem pacote que não migrou? Fica esperando o autor. O autor sumiu.

**Context.** Usou o `context` depois de um `await`? Aviso: "não use BuildContext entre lacunas assíncronas". O context tem medo de lacuna.

**Hot reload.** Salva, atualiza em um segundo. Lindo. Mudou o estado inicial? Hot restart. Mudou código nativo? Build do zero. Dá pra pegar um café. Com açúcar.

**pubspec.yaml.** Indentação com espaço. Um espaço a mais e nada funciona. O erro não diz qual espaço.

**Confiança.** Framework do Google. A empresa que tem um site inteiro, feito por fãs, só com os produtos que ela matou. Acho que passa confiança.

**Fechamento.** Um código só pra todas as plataformas. E um widget pra cada pixel.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Linguagem, Widget, Aninhamento, Estado, Gerenciar estado, Overflow, Nativo, JSON, Web, Hot reload, Confiança, Fechamento.
- **Parte 2 (sobra):** const, iOS, Null safety, Context, pubspec.yaml.

**Legenda sugerida:** "Se o Flutter fosse criado hoje, em reunião de planejamento 🤡 (),),],),); // Column)"
