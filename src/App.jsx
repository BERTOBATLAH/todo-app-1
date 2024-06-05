import { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
  ]);

  console.log(todos);

  //const handleClick = () => {
  //  setCount(count + 1);
  //};

  return (
    <div>
      <h1>Kocak</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};

export default App;
