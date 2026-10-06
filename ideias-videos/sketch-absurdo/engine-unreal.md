# "Criando a Unreal Engine" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. O criador da Unreal segura uma prancheta e fala rápido e tranquilo, como quem toma decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade na Unreal. Quem faz jogo reconhece e ri, e quem não faz ri do absurdo.
**Tela:** quando tiver `[tela]`, mostrar o snippet ou print por cima.

---

**Instalação.** A engine tem que ter uns 50, 60 GB. Compilando do código-fonte passa de 100. SSD pequeno é pra quem não leva jogo a sério.

**Download.** Pra baixar, instala o launcher da Epic antes. Quer o código-fonte no GitHub? Vincula a conta da Epic primeiro. Pra entrar na loja, passa pela outra loja.

**Shader.** Abriu o projeto? Compila shader. Doze mil shaders. Dá pra pegar um cafezinho. Cheio de açúcar. Pega dois.
`[tela: Compiling Shaders (12,483)]`

**Stutter.** E se o jogador tiver o PC mais forte do mundo, o jogo engasga do mesmo jeito, compilando shader na hora que ele vira a câmera. É pra ele sentir o nosso sofrimento.

**Blueprint.** Programar com texto é difícil. Acho que vamos programar com caixinha e fio. Aí o projeto cresce e vira um prato de macarrão, que é mais visual.
`[tela: print de Blueprint espaguete]`

**Diff.** Blueprint é arquivo binário. Não dá pra ver o que mudou no Git, nem fazer merge. Aí quem quer mexer trava o arquivo pra ninguém mais pegar. Tipo a caneta na corrente, só que o banco é você.

**Versionamento.** Por isso a gente recomenda o Perforce. Git até dá, com LFS. Mas aí é por sua conta.

**Prefixo.** Todo nome de classe tem prefixo. `A` pra Actor, `U` pra UObject, `F` pra struct, `E` pra enum, `I` pra interface, `T` pra template. Boolean começa com `b`. Esqueceu o prefixo? O Unreal Header Tool não compila.
`[tela: AMyCharacter  UHealthComponent  FDamageInfo  bIsDead]`

**Macro.** C++ é pouco. Vamos colocar macro em cima de tudo. `UCLASS`, `UPROPERTY`, `UFUNCTION`, `GENERATED_BODY`. E um programa só pra ler as macros antes do compilador.

**Garbage collector.** C++ com garbage collector. Mas só se o ponteiro tiver `UPROPERTY` em cima. Esqueceu? O objeto some no meio da partida. Sem aviso.
`[tela: UPROPERTY() UObject* Coisa; // sem isso, tchau]`

**String.** Acho que uma string só é pouco. `FString`, `FName` e `FText`. E nada de `std::string`, que isso é coisa de amador.

**Container.** `std::vector`? Não, `TArray`. `std::map`? `TMap`. A gente refaz a biblioteca padrão inteira, que é mais seguro.

**Coordenada.** Eixo Z pra cima. Unidade em centímetro. Porque metro é muito comum.

**Hot Reload.** Dá pra recompilar o C++ com o editor aberto. Às vezes corrompe os Blueprints. Aí a gente faz o Live Coding pra consertar. Mudou o header? Fecha o editor, que é mais seguro.

**Compilar.** Compilação do projeto em C++, acho que uns 20 minutos tá bom. E o IntelliSense do Visual Studio fica sublinhando tudo de vermelho, mas compila. É pra dar emoção.

**Crash.** Crashou o editor? Aparece uma janela pra mandar o relatório. Enviou, perdeu o que não salvou. Esqueceu de salvar? Tem o autosave, que trava o editor bem na hora da ação.

**Nanite e Lumen.** Gráfico de cinema, ligou por padrão. Placa de vídeo de cinco anos atrás? Cinema mudo.

**Versão.** UE4 durou de 2014 até a 4.27. Aí veio a 5. Todo tutorial do YouTube é da 4, com o botão em outro lugar.

**Royalty.** A engine é de graça. Até o jogo faturar 1 milhão de dólares. Aí são 5% da receita bruta. Bruta. Se lançar na loja da Epic, a taxa some.

**Template.** Projeto novo vem com um bonequinho em terceira pessoa correndo num cenário cinza. Seu jogo vai começar assim e, lá no fundo, vai continuar assim.

**Fechamento.** A gente te dá o código-fonte inteiro da engine. Milhões de linhas. Achou um bug? Conserta aí, é seu agora.

---

## Cortes

Os originais têm uns 60 a 90s, e esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Instalação, Shader, Stutter, Blueprint, Diff, Prefixo, Macro, Garbage collector, String, Coordenada, Hot Reload, Royalty, Fechamento.
- **Parte 2 (sobra):** Download, Versionamento, Container, Compilar, Crash, Nanite e Lumen, Versão, Template.

**Legenda sugerida:** "Se a Unreal fosse criada hoje, em reunião de planejamento 🎮🤡 (e o pior: é tudo verdade)"
