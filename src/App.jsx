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
    {
      id: 2,
      tittle: "Second Finish Progate React Course",
      completed: false,
    },
    {
      id: 3,
      tittle: "Third Finish Progate React Course",
      completed: false,
    },
    {
      id: 4,
      tittle: "Third Finish Progate React Course",
      completed: false,
    },
    {
      id: 5,
      tittle: "Third Finish Progate React Course",
      completed: false,
    },
    {
      id: 6,
      tittle: "Third Finish Progate React Course",
      completed: false,
    },
  ]);

  console.log(todos);

  //const handleClick = () => {
  //  setCount(count + 1);
  //};

  return (
    <div>
      <div className="p-20">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs input-bordered"
          />
          <button className="btn btn-outline btn-primary mx-5">Primary</button>
        </div>
      </div>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
