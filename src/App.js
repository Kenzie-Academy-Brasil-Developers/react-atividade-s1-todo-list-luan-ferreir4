import { useState } from "react";

import "./App.css";

import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newOne) => {
    setTodoList([...todoList, newOne]);
  };

  const HandleTodo = (removedTask) => {
    console.log(removedTask)

    const newlist = todoList.filter((task) => todoList.indexOf(task,0) !== removedTask);
    setTodoList(newlist);
    console.log(newlist)
  };

  return (
    <div className="App">
      <main className="App-main">
        <Form addTodo={addTodo} />

        <TodoList todoList={todoList} handleTodo={HandleTodo} />
      </main>
    </div>
  );
};

export default App;
