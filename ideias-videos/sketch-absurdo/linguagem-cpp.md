# "Criando o C++" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do C++ com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no C++. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Arquivo.** Cada arquivo vai ser dois arquivos. Um diz o que o código faz, o outro faz. Se os dois discordarem, o linker avisa. Na hora do deploy.
`[tela: foo.h  +  foo.cpp]`

**Import.** Import não. Acho que o `#include` copia e cola o arquivo inteiro dentro do seu. Ctrl+C, Ctrl+V. Se colar duas vezes, o programador escreve um `#ifndef` na mão pra se proteger. Cada um inventa o nome da macro.

**`#pragma once`.** Todo mundo vai usar. Mas não vai ser oficial, né?

**Tempo de compilação.** Acho que uns 40 minutos tá bom. Dá pra pegar um cafezinho. Cheio de açúcar.

**Variável sem inicializar.** Vem com lixo. Valor aleatório. Surpresa, tipo Kinder Ovo.

**Jeitos de inicializar uma variável.** Um só é pouco. Acho que umas dezoito. Cada uma com uma regra diferente.
`[tela: int x = 0;  int x(0);  int x{0};  int x = {0};  auto x = 0;]`

**Objeto.** `Widget w;` é um objeto. `Widget w();`, com parêntese, é uma função. Lógico. Quem botou parêntese queria declarar uma função, né?

**Imprimir na tela.** Vou usar o operador de deslocamento de bits. A frase vai deslizando pra esquerda até chegar na tela.
`[tela: std::cout << "oi" << std::endl;]`

**Vector.** Vector de int guarda int. Vector de string guarda string. Vector de bool... não guarda bool. Guarda uns bits e um proxy. Surpresa de novo.

**String.** Um tipo de string é pouco. `char*`, `const char*`, `std::string`, `string_view`, `wchar_t*`, `u8string`. E nenhuma sabe o que é UTF-8. Brasileiro escreve "acao" e pronto.

**Palavra-chave.** Pra economizar, vou reaproveitar. `static` vai significar quatro coisas diferentes, dependendo de onde você coloca. Aí o pessoal decora.

**Ponto e vírgula.** Classe termina com ponto e vírgula. Função não. Esqueceu na classe? O erro aparece na linha de baixo. De outro arquivo.

**Mensagem de erro.** Acho que umas 4 mil linhas por erro. A informação útil fica na linha 3.812, que é pra valorizar quem lê até o final.
`[tela: std::basic_string<char, std::char_traits<char>, std::allocator<char>> ... rolando infinito]`

**Undefined behavior.** Se o programador errar, o compilador pode fazer qualquer coisa. Qualquer coisa mesmo. Apagar o `if`, pular o loop, mandar mensagem pra ex. Tá no padrão.

**Memória.** Eu confio no programador pra fazer `new`, `delete`, conta com ponteiro, tudo na mão. Mas `delete` e `delete[]` são diferentes e, se trocar, undefined behavior. Confio nele, mas não muito.

**Índice.** `v[10]` não checa nada. `v.at(10)` checa. Aí a gente ensina todo mundo a usar o colchete, que é mais bonito.

**Gerenciador de pacote.** Acho que não precisa. O pessoal baixa o zip, copia a pasta pro projeto e reza.

**Build.** E pra compilar, vou criar outra linguagem só pra isso. Pior que a primeira, daí o C++ parece bonito do lado.
`[tela: CMakeLists.txt]`

**Herança múltipla.** Acho legal. Se virar um losango, resolve com herança virtual. Losango virtual. Todo mundo entende.

**Compatibilidade com C.** Tem que ser compatível com C. Aí todo bug do C já vem de brinde, sem custo adicional.

**Errou?** Errou uma vez, não conserta mais. Por compatibilidade de ABI. O `std::regex` é mais lento que abrir o Python e rodar lá? Fica assim. Pra sempre.

**Versão nova.** Uma a cada três anos. O compilador implementa uns cinco anos depois. Módulos saíram em 2020. Usar mesmo, a gente vê lá pra 2030.

**Fechamento.** E tudo tem que ser *zero-cost*. Custo zero pra máquina. Pro programador a gente cobra depois. Na terapia.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Arquivo, Import, Tempo de compilação, Jeitos de inicializar, Objeto, Imprimir na tela, Vector, String, Mensagem de erro, Undefined behavior, Memória, Build, Errou?, Fechamento.
- **Parte 2 (sobra):** `#pragma once`, Variável sem inicializar, Palavra-chave, Ponto e vírgula, Índice, Gerenciador de pacote, Herança múltipla, Compatibilidade com C, Versão nova.

**Legenda sugerida:** "Se o C++ fosse criado hoje, em reunião de planejamento 🤡 (e o pior: é tudo verdade)"
