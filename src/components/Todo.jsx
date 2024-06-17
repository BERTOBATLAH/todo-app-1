import Card from "./Card/card";
const Todo = ({ todos, toggleCopleted, deleteTodo }) => {
  return (
    <div className="flex flex-wrap">
      {todos.map((todo) => {
        // Berikan datanya ke TodoItem
        return (
          <Card
            key={todo.id}
            todo={todo}
            toggleCopleted1={toggleCopleted}
            deleteTodo1={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todo;
