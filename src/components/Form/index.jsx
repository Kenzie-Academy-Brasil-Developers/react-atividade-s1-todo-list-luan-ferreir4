import { useState } from "react";
import "./style.css";

export const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="mainContainer">
      <p>Adicionar nova tarefa:</p>
      <section className="mainContainer__form">
        <input
          type="text"
          value={newTodo}
          onChange={(evt) => setNewTodo(evt.target.value)}
        />

        <button onClick={() => addTodo(newTodo)}>Add todo</button>
      </section>
    </div>
  );
};
