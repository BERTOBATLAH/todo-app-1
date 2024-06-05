import Card from "./Card/card";
const Todo = ({ todos }) => {
  return (
    <div className="flex flex-wrap">
      {todos.map((todo) => {
        // Berikan datanya ke TodoItem
        return <Card key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todo;
