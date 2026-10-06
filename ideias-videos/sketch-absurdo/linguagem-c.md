# "Criando o C" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do C com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no C. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** C. Uma letra. Economiza tinta.

**String.** Não vai ter string. Vai ter um array de char que termina com um zero. Esqueceu o zero? A string continua lendo a memória até achar um. Pode ser a senha de alguém.

**Tamanho da string.** A string não sabe o próprio tamanho. Pra descobrir, conta letra por letra. Toda vez.

**Copiar string.** `strcpy` copia sem saber se cabe. Tipo porta giratória pra 40 quilos: entra apertado e o resto vaza.

**Ler do teclado.** `gets` lê quanto o usuário quiser digitar. Sem limite. Tiraram do padrão em 2011. Só quarenta anos depois.
`[tela: char nome[10]; gets(nome);]`

**Memória.** `malloc` e `free` na mão. Esqueceu o `free`? Vazou. Deu `free` duas vezes? Pior. Eu confio no programador. É um profissional.

**Array.** Passou pra função, vira ponteiro. `sizeof` lá dentro dá o tamanho do ponteiro, não do array. Surpresa.

**Índice.** `a[3]` é igual a `3[a]`. Os dois funcionam. Porque é tudo soma de ponteiro. Pra que escolher?
`[tela: int a[5]; 3[a] = 42; // compila]`

**Booleano.** Não precisa. Zero é falso, o resto é verdade. Bool só em 1999, por biblioteca. Palavra-chave só em 2023.

**Tamanho do int.** Depende da máquina. Pode ser 16, pode ser 32. Surpresa de novo. Se o `char` tem sinal? Depende também.

**Octal.** Número que começa com zero é octal. `010` é 8. Quem nunca preencheu um CEP com zero na frente e mudou de cidade?

**Switch.** Sem `break`, cai no próximo `case`. E no outro. E no outro. Tipo escada rolante que não para.

**Erro.** Função retorna -1 e o erro de verdade fica numa variável global chamada `errno`. Global. Compartilhada. Tipo a caneta presa na corrente.

**Estouro de inteiro.** Com sinal, é comportamento indefinido. O compilador pode assumir que nunca acontece e apagar o seu `if`. Ele confia em você mais do que você.

**Declaração.** Ponteiro pra função que retorna ponteiro pra array de ponteiro. `int *(*(*fp)(int))[10];` Leitura em espiral. Tipo labirinto do estacionamento.

**Macro.** Macro é substituição de texto. Sem saber o que é código. `#define QUADRADO(x) x*x`. `QUADRADO(1+1)` dá 3. Matemática nova.

**`printf`.** Se o formato não bater com o argumento, comportamento indefinido. Ninguém confere. Nem eu.

**Trígrafo.** `??=` vira `#`. Pra teclado que não tem cerquilha. Tiraram em 2023. Por via das dúvidas, deixei cinquenta anos.

**Namespace.** Não vai ter. Cada biblioteca coloca um prefixo no nome das funções e reza pra ninguém escolher o mesmo.

**`goto`.** Pra tratar erro, `goto cleanup`. Todo mundo fala mal. Todo kernel usa.

**Fechamento.** É uma linguagem perigosa, sem proteção nenhuma, feita em 1972. Por isso o seu sistema operacional, o seu roteador e o seu carro rodam nela.

---

## Cortes

- **Corte principal (~75s):** Nome, String, Copiar string, Ler do teclado, Memória, Índice, Booleano, Octal, Switch, Erro, Estouro de inteiro, Macro, Fechamento.
- **Parte 2 (sobra):** Tamanho da string, Array, Tamanho do int, Declaração, `printf`, Trígrafo, Namespace, `goto`.

**Legenda sugerida:** "Se o C fosse criado hoje, em reunião de planejamento 💀 (e o seu carro roda nele)"
