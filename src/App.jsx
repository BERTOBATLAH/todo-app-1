import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      tittle: "Finish Progate React Course",
      completed: false,
    },
  ]);

  console.log(todos);

  //const handleClick = () => {
  //  setCount(count + 1);
  //};

  return (
    <div className="text-center p-12">
      <h1>My Todo List</h1>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
