# 📋 Sobre a atividade

Nessa atividade vamos praticar o uso de Callbacks e Spread Operator no React e criando uma lista de afazeres.

# ℹ️ Informações úteis

### Resultado

![](https://i.imgur.com/0tbgoXc.gif)

## 🖐️🍝Mão na massa!

*   Com seu projeto React criado, importe o hook `useState,`crie dois componentes na pasta components: `Form` e `TodoList`.

    O Componente Form, será responsável por receber os dados inseridos no input pelo usuário, vai ter o botão "Enviar" que fará a iteração no nosso state. Por enquanto pode manter os dois componentes criados sem nenhum conteúdo.

    O Componente TodoList será responsável por renderizar a lista de tarefas e terá um botão para concluir as mesmas.

    ![](https://i.imgur.com/dPsInUS.png)

*   Bora criar as nossas funções que serão utilizadas como callbacks! Instancie um state que será a lista de todos e inicie com um array vazio.

*   Crie uma função `addTodo`. Essa função receberá um parâmetro que seria um `newTodo` e deverá adicionar na lista o `newTodo` utilizando o Spread Operator.

*   Crie uma função `handleTodo`. Essa função receberá um item a ser removido da lista, deveremos fazer um filtro no nosso state mostrando todos os itens que são **diferentes** do item que recebemos, após realizar o filtro no array faça o **setTodos()** passando os itens filtrados.

*   Agora iremos criar os componentes que receberão esses **callbacks.**

*   Instancie os dois componentes que você criou anteriormente no seu App.js

*   Passe por props a função `addTodo` para o componente `Form`.

*   Passe por props o state de `todos` para o componente `TodoList` e passe também a função `handleTodo` que fará a conclusão de cada tarefa.

*   Componente **Form:** crie um input e um botão no retorno JSX. Esse input deverá salvar o valor que está sendo digitado, utilize um state no componente para salvar esse valor através do `onChange`.

*   Após isso, no `onClick` do botão, chame a função `addTodo` passando o state que salvou o valor do input.

*   Componente **TodoList**: Retorne um <ul> </ul> e dentro faça o map dos `ToDos` e retorne um <li> contendo o nome de cada `todo` e um botão que chamará a função `handleTodo` passando como parâmetro o `ToDo` atual, o mesmo que está sendo exibido. Dessa forma, quando o usuário clicar no botão, será chamado o callback que fará o filtro na lista e concluirá a tarefa =). Obs: Não esqueça da prop `key` na tag retornada no map.

## 💪Agora é com você

*   Estilize a aplicação
*   Sinta-se a vontade para componentizar mais a aplicação

## 🔗 Links úteis

[Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Sintaxe de Espalhamento - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

# 💡Conhecimentos aplicados:

*   Callbacks
*   Spread operator
*   State
*   Componentes
*   Props
*   Eventos de usuário
