# "Criando o Python" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Python com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Python. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Nome.** Python. Por causa da cobra? Não, por causa do Monty Python. Aí o logo é uma cobra, pra ninguém entender.

**Chaves.** Não vai ter chave. O bloco vai ser definido pelo espaço em branco. Espaço que você não vê. Se misturar tab com espaço, erro. Aí o pessoal briga em reunião.
`[tela: TabError: inconsistent use of tabs and spaces in indentation]`

**Jeito de fazer as coisas.** Acho que tem que ter um jeito óbvio de fazer cada coisa. Tá até escrito no Zen do Python. Formatar string, por exemplo: `%`, `.format()`, f-string e `Template`. Quatro jeitos óbvios.

**Juntar lista.** `lista.join(",")`? Não. `",".join(lista)`. A vírgula que junta a lista. Faz sentido, a vírgula é que tá com vontade.

**Tamanho.** Tamanho da lista não é método, é `len(lista)`. Mas `lista.append` é método. Pra manter o pessoal atento.

**Argumento padrão.** Se o padrão for uma lista vazia, é a mesma lista pra sempre. Todas as chamadas compartilham. Tipo a caneta presa na corrente: é uma só, todo mundo usa.
`[tela: def add(x, lista=[]): lista.append(x); return lista]`

**`self`.** Todo método recebe `self` no primeiro parâmetro. Você escreve toda vez. Esqueceu? Erro dizendo que passou argumento demais. Mas você passou de menos.

**Privado.** Não vai ter privado. Bota um underline na frente e confia. Somos todos adultos aqui.

**Constante.** Também não vai ter. Escreve em maiúscula que o pessoal respeita. Eles vão confiar o sistema deles em mim, eu confio neles pra não mudar o `PI`.

**Tipos.** Vai ter anotação de tipo. Mas o Python ignora na hora de rodar. É mais uma sugestão. Tipo placa de "não pise na grama".

**Tupla.** Uma vírgula sobrando no final vira tupla. `x = 1,` Parabéns, é uma tupla.

**`round`.** `round(2.5)` dá 2. `round(3.5)` dá 4. Arredondamento de banqueiro. O banqueiro sempre ganha.

**`is`.** `256 is 256` é verdade. Com 257, depende. No REPL, em linhas separadas, pode dar falso. Número pequeno é VIP.

**`True`.** No Python 2, dava pra fazer `True = False`. Liberdade.

**Threads.** Vai ter thread. Mas só uma roda de cada vez, por causa do GIL. Pra tirar, a gente vê lá em 2024, opcional, experimental.

**Versão nova.** Python 3 sai em 2008 e não roda código do Python 2. Aí o 2 morre em 2020. Doze anos de transição. Cafezinho cheio de açúcar enquanto espera.

**Pacote.** Gerenciador de pacote? Acho que uns dez. `pip`, `venv`, `virtualenv`, `pipenv`, `poetry`, `conda`, `pdm`, `uv`. E o `requirements.txt` que ninguém atualiza.

**`for ... else`.** O `for` vai ter `else`. Roda quando o loop *não* deu `break`. Óbvio, né?

**Lambda.** Lambda com uma linha só. Precisou de duas? Faz uma função, preguiçoso.

**Operador morsa.** Vou colocar o `:=`. Deu tanta briga que o criador largou o cargo de ditador benevolente em 2018. Mas o operador ficou.

**Velocidade.** Lento? Não. É que a parte rápida é em C. O Python é só o garçom.

**Fechamento.** A linguagem mais fácil do mundo. Até você precisar instalar ela.

---

## Cortes

- **Corte principal (~75s):** Nome, Chaves, Jeito de fazer as coisas, Juntar lista, Argumento padrão, Privado, Tipos, `round`, Threads, Versão nova, Pacote, Operador morsa, Fechamento.
- **Parte 2 (sobra):** Tamanho, `self`, Constante, Tupla, `is`, `True`, `for ... else`, Lambda, Velocidade.

**Legenda sugerida:** "Se o Python fosse criado hoje, em reunião de planejamento 🐍 (e o pior: é tudo verdade)"
