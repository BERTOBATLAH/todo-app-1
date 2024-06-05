import React from "react";

const Card = ({ todo }) => {
  return (
    <div className="py-4 mx-auto grid">
      <div className="card w-96 bg-neutral text-neutral-content mx-auto shadow-lg">
        <div className="card-body items-center text-center">
          <div className="form-control">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent "
              />
            </label>
          </div>
          <h2 className="card-title">{todo.tittle}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nihil repellendus nemo, laborum quae dolorem? Eum ullam beatae
            earum, id velit ipsa aliquid voluptatum necessitatibus, asperiores
            exercitationem nihil deleniti esse.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
