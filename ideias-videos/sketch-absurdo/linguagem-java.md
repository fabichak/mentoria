# "Criando o Java" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Java com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Java. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** Java. Nome de café. Cheio de açúcar, claro.

**Hello world.** Acho que pra imprimir "oi" precisa de uma classe, um método público, estático, sem retorno, que recebe um array de string. Cinco palavras antes de começar.
`[tela: public static void main(String[] args)]`

**Nome de classe.** Quanto maior, melhor. `AbstractSingletonProxyFactoryBean`. Existe. No Spring.

**Getter e setter.** Todo campo privado ganha dois métodos pra acessar ele. Aí fica privado, mas com duas portas abertas. Depois alguém faz uma biblioteca só pra gerar isso.

**Exceção.** Tem exceção que você é obrigado a tratar. Aí todo mundo escreve `catch (Exception e) {}` vazio. Pronto, tratado.

**Null.** Qualquer objeto pode ser `null`. Qualquer um. Aí o erro mais famoso da linguagem é o `NullPointerException`. Numa linguagem que diz que não tem ponteiro.

**Comparar string.** `==` compara se é o mesmo objeto, não o mesmo texto. Pra comparar texto, `.equals()`. Pegadinha de entrevista garantida.

**Comparar número.** `Integer` 127 igual a 127: verdadeiro. 128 igual a 128: falso. Tem cache até 127. Número grande não entra na festa.
`[tela: Integer a = 128, b = 128; a == b // false]`

**Genérico.** Vai ter genérico. Mas na hora de rodar, eu apago o tipo. `List<String>` e `List<Integer>` viram a mesma coisa. Economia.

**Data.** Mês começando do zero e ano contado a partir de 1900. Depois de uns quinze anos, a gente faz uma API de data nova. E deixa a velha, claro.

**Sem sinal.** Número sem sinal? Não precisa. Byte vai de -128 a 127. Cor RGB negativa, que chique.

**Lambda.** Função anônima? Só em 2014. Até lá, classe anônima de cinco linhas pra passar um botão.

**`var`.** Inferência de tipo só em 2018. Antes disso, `HashMap<String, List<Integer>> mapa = new HashMap<String, List<Integer>>()`. Duas vezes, pra ter certeza.

**Memória.** A JVM começa comendo 500 mega. Tipo ar-condicionado no 10: é pra conforto.

**Inicialização.** Subir a aplicação leva um minuto. Dá tempo de pegar o café. Java. Café. Tá tudo conectado.

**Slogan.** "Escreva uma vez, rode em qualquer lugar." Debugue em todos também.

**Build.** Configuração do projeto em XML. `pom.xml` de 400 linhas. Pra imprimir "oi".

**Array.** Array de `Object` aceita array de `String`. Aí você coloca um número e explode na hora de rodar. Compilou, tá ótimo.

**Dono.** Aí a Oracle compra a Sun. E processa o Google por causa da API. Dez anos de processo. Advogado também é desenvolvedor, né?

**Versão.** Java 8 saiu em 2014. Tem empresa que ainda tá nele. Estabilidade.

**Fechamento.** Três bilhões de dispositivos rodam Java. E todos pedem pra atualizar agora.

---

## Cortes

- **Corte principal (~75s):** Nome, Hello world, Nome de classe, Getter e setter, Exceção, Null, Comparar número, Genérico, Memória, Slogan, Build, Dono, Fechamento.
- **Parte 2 (sobra):** Comparar string, Data, Sem sinal, Lambda, `var`, Inicialização, Array, Versão.

**Legenda sugerida:** "Se o Java fosse criado hoje, em reunião de planejamento ☕ (e o pior: é tudo verdade)"
