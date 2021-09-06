import {useState} from 'react'

import './App.css';

import {Form} from "./components/Form"
import {TodoList} from "./components/TodoList"

export const App = () => {

  const [newTask, setNewTask] = useState();    
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([newTodo]);
  }

  const HandleTodo = (removedTask) => {
    const newlist = todoList.filter(task => task !== removedTask);
    setTodoList(newlist);
  }

  return (
    <div className="App">
      <main className="App-main">
      <p>Adicionar nova tarefa:</p>

      <form className="mainContainer__form">
          <input 
              type="text"
              value={newTask}
              onChange={evt => setNewTask(evt.target.value)}
          />

          <button onClick={() => addTodo(newTask)}>Add todo</button>
          
      </form>

            
                {todoList.map(((task,index)=><p key={index}>
                    {task}
                    <button onClick={()=> HandleTodo(task)}>Done</button>
                    </p>))}
            

        <Form addTodo={addTodo}/>

        <TodoList todoList={todoList} handleTodo={HandleTodo}/>

      </main>
    </div>
  );
}