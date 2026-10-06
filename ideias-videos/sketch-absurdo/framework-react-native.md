# "Criando o React Native" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do React Native com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no React Native. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Versão.** Zero ponto alguma coisa. Dez anos depois, ainda zero. 0.7, 0.8. Nunca 1.0. Pra não assumir compromisso.

**Ponte.** O JavaScript conversa com o nativo por uma ponte. Tudo vira JSON, vai e volta. A arquitetura nova foi anunciada em 2018. Virou padrão em 2024. Seis anos pra trocar uma ponte. Obra pública.

**Flexbox.** Igual na web. Só que o padrão é coluna, e na web é linha. Igual, mas ao contrário.

**Texto.** Todo texto tem que estar dentro de `<Text>`. Texto solto? Tela vermelha.
`[tela: Text strings must be rendered within a <Text> component.]`

**CSS.** Não tem. É objeto JavaScript. `StyleSheet.create`. Parece CSS, mas é camelCase. E não tem hover. Celular não tem mouse, faz sentido.

**Navegação.** Não vem. Instala. React Navigation ou a da Wix. Pra mudar de tela.

**Upgrade.** Tem um site só pra mostrar a diferença entre duas versões. Atualizar uma versão menor mexe em dezenas de arquivos nativos. Menor.

**Cache.** Erro estranho? `--reset-cache`. Não resolveu? Apaga `node_modules`, apaga os pods, limpa o Gradle, reinicia a máquina. Acende uma vela.

**Build.** iOS: `pod install`. Android: o Gradle baixa metade da internet. Dá pra pegar um café. Com açúcar. Dois.

**Expo.** Antes: "Expo é pra iniciante". Agora a documentação oficial recomenda começar com Expo. O iniciante tava certo.

**Lean Core.** AsyncStorage, WebView, um monte de coisa sai do core e vai pra comunidade. Adotado. Cada um numa casa.

**CodePush.** Atualiza o app sem passar pela loja. Aí a Microsoft fecha o App Center em 2025. Atualiza pela loja.

**Airbnb.** Em 2018 o Airbnb publica uma série de posts explicando por que tá saindo do React Native. Uma série. Tinha muito pra falar.

**Lista.** `FlatList`. Lista grande trava. O Shopify faz outra, a `FlashList`. Pra lista rolar.

**Debug.** Debugger do Chrome. Aí Flipper. Aí tira os dois. Agora React Native DevTools. Cada ano uma ferramenta, pra ninguém se apegar.

**Slogan.** "Aprenda uma vez, escreva em qualquer lugar." Não é "escreva uma vez". Letra miúda de contrato.

**Fechamento.** Um código só pra iOS e Android. Mais uma pasta `ios`. E uma `android`. E o Xcode. E o Android Studio. Um código só.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Versão, Ponte, Flexbox, Texto, CSS, Upgrade, Cache, Build, Expo, Slogan, Fechamento.
- **Parte 2 (sobra):** Navegação, Lean Core, CodePush, Airbnb, Lista, Debug.

**Legenda sugerida:** "Se o React Native fosse criado hoje, em reunião de planejamento 🤡 (10 anos e ainda 0.x)"
