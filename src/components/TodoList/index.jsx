import "./style.css";

export const TodoList = ({ todoList, handleTodo }) => {
  return (
    <div className="mainContainer">
        <p>Tasks:</p>
      <ul className="mainContainer__list">
        {todoList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleTodo(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
