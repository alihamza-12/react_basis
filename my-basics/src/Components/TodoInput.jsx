import React, { useState } from "react";
import useTodoStore from "../ZustandStore/TodoStore";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");

  //From Zustand Store
  const { addTodo } = useTodoStore();

  const handleInput = (e) => {
    setNewTodo(e.target.value);
    // console.log(newTodo);
  };
  const handleSubmit = () => {
    //set Todo in Zustand Store
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <div className="flex justify-center mt-10 gap-2 w-full">
      <input
        value={newTodo}
        onChange={handleInput}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="p-3 bg-gray-200 rounded-lg w-1/3 outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter your Todo Item"
      />
      <button
        onClick={handleSubmit}
        className="p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};

export default TodoInput;
