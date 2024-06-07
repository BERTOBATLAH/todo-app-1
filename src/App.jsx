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

  const newContent = (event) => {
    event.preventDefault();
    //setTodos(event.target.elements.ferdi.value);
    console.log(event.target.elements.tittle.value);
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        tittle: event.target.elements.tittle.value,
        completed: false,
      },
    ]);
  };

  //console.log(todos);

  //const handleClick = () => {
  //  setCount(count + 1);
  //};

  const toggleCopleted = (todoId) => {
    //const updateTodos = todos.map((todo) => {
    //  if ((todo.id = !todoId)) {
    //    todo.completed = !todo.completed;
    //  }
    //  return todo;
    //});
    //setTodos(updateTodos);
    console.log(todoId);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((data) => data.id !== id));
  };

  return (
    <div>
      <form onSubmit={newContent}>
        <div className="p-20">
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered"
              name="tittle"
            />
            <button className="btn btn-outline btn-primary mx-5" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Todo
        todos={todos}
        toggleCopleted={toggleCopleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
