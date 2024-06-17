import { useState } from "react";

const Card = ({ todo, toggleCopleted1, deleteTodo1 }) => {
  const [style, setStyle] = useState(true);

  //console.log(style);
  const handle = () => {
    setStyle(!style);
  };
  console.log(todo.completed);

  return (
    <div className="py-4 mx-auto grid">
      <div className="card w-96 bg-neutral text-neutral-content mx-auto shadow-lg">
        <div className="card-body items-center text-center">
          <div className={"form-control"}>
            <label className=" cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-accent "
                onClick={() => handle()}
                onChange={() => toggleCopleted1(todo.id)}
              />
            </label>
          </div>
          <h2 className="collapse-content card-title">{todo.tittle}</h2>
          <p className={style ? " " : "line-through"}>{todo.tittle}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-error"
              onClick={() => {
                deleteTodo1(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
