import TodoItem from "./TodoItem.jsx";

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todo;
