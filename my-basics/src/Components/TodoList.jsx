import React from "react";
import useTodoStore from "../ZustandStore/TodoStore";

const TodoList = () => {
  //From Zustand Store
  const { todos, removeTodo, toggleTodo } = useTodoStore();

  return (
    <div>
      {todos.map((todo) => (
        <ul
          key={todo.id}
          className="flex flex-col items-center mt-5 w-1/3 mx-auto"
        >
          <li className="p-3 w-full bg-blue-100 rounded flex justify-between items-center hover:bg-blue-200 ">
            {todo.completed ? (
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-1 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer mr-2"
              >
                ✅
              </button>
            ) : (
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-1 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer mr-2"
              >
                ⭕
              </button>
            )}
            <span className="w-full">{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="p-1 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer"
            >
              ❌
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
