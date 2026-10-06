# "Criando o Spring" — roteiro (paródia dos vídeos do @guismaniotto)

**Formato:** o mesmo dos originais. Criador do Spring com uma prancheta, falando rápido e tranquilo, como quem está tomando decisões muito sensatas. Item → decisão absurda → justificativa convicta. Sem pausa pra rir.
**Sacada:** quase tudo aqui é verdade no Spring. Quem é dev reconhece e ri; quem não é ri do absurdo.
**Tela:** mostrar o snippet de código em cima quando tiver `[tela]`.

---

**Configuração.** XML. Tudo em XML. Aí anotação. Aí o Spring Boot configura sozinho. Os três funcionam. Juntos, se quiser.

**Nome de classe.** Acho que nome tem que ser descritivo. `AbstractSingletonProxyFactoryBean`. Existe. `SimpleBeanFactoryAwareAspectInstanceFactory`. Também existe.
`[tela: AbstractSingletonProxyFactoryBean.java]`

**Anotação.** `@SpringBootApplication`, `@RestController`, `@Autowired`, `@Transactional`, `@Bean`. Anotação em cima de anotação. O `@SpringBootApplication` são três anotações numa só. Combo.

**@Autowired.** No campo, funciona. A documentação recomenda no construtor. Todo mundo põe no campo.

**@Transactional.** Coloca na função e ela vira transação. Chamou de dentro da mesma classe? Não funciona. Sem erro, sem aviso. Por causa do proxy. Lógico.

**Auto-configuração.** Acho que é mágico. Você não sabe o que tá configurado. Quer saber? Liga o debug e ganha um relatório de centenas de linhas.

**Stack trace.** Duzentas linhas. O seu código aparece em uma. É tipo Onde Está o Wally.

**Subir a aplicação.** Aplicação grande, um minuto pra subir. Dá pra pegar um cafezinho. Cheio de açúcar.

**Build.** `pom.xml`. Centenas de linhas de XML pra dizer "eu quero Spring".

**Lombok.** Java é verboso, então instala um plugin que escreve getter e setter por você. `@Data`. Não precisa escrever o código, só a anotação que finge que escreveu.

**JPA.** Carregou a entidade, fechou a sessão, pediu a lista de pedidos. `LazyInitializationException`. Aí a gente deixa o open-in-view ligado por padrão. Com um aviso no log que ninguém lê.

**N+1.** Buscou cem pedidos. Cento e uma queries. Uma de brinde.

**Security.** Todo tutorial usa `WebSecurityConfigurerAdapter`. Aí depreca. Aí remove. Os tutoriais ficam.

**javax pra jakarta.** No Boot 3 muda o nome do pacote. Mesma classe, outro endereço. Troca o import em todo arquivo do projeto. Mudança de CEP.

**Dependência circular.** A partir do Boot 2.6, proibida por padrão. Quer mesmo assim? Uma propriedade no config e o problema desaparece.
`[tela: spring.main.allow-circular-references=true]`

**Perfil.** `application-dev.yml`, `-local`, `-test`, `-prod`. Qual tá ativo? Descobre em produção.

**Nativo.** Pra subir rápido, compila com GraalVM. O build leva minutos, e reflection precisa de configuração extra. Rápido pra subir, lento pra chegar lá.

**Fechamento.** Tem que ser enterprise. Tudo enterprise. Até o hello world tem Factory.

---

## Cortes

Os originais têm uns 60–90s. Esse roteiro inteiro dá uns 2min. Pra caber:
- **Corte principal (~75s):** Configuração, Nome de classe, Anotação, @Transactional, Auto-configuração, Stack trace, Subir a aplicação, Lombok, N+1, javax pra jakarta, Dependência circular, Fechamento.
- **Parte 2 (sobra):** @Autowired, Build, JPA, Security, Perfil, Nativo.

**Legenda sugerida:** "Se o Spring fosse criado hoje, em reunião de planejamento 🤡 (AbstractSingletonProxyFactoryBean existe mesmo)"
