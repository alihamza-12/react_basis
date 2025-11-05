import React from "react";
import useTodoStore from "../ZustandStore/TodoStore";

const TodoList = () => {
  //From Zustand Store
  const { todos, removeTodo, toggleTodo } = useTodoStore();

  return (
    <div className="pb-20">
      {todos.map((todo) => (
        <ul
          key={todo.id}
          className="flex flex-col items-center mt-5 w-1/3 mx-auto"
        >
          <li className="p-3 w-full bg-blue-100 dark:bg-indigo-800 dark:text-white rounded flex justify-between items-center hover:bg-blue-200 dark:hover:bg-indigo-700">
            {todo.completed ? (
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-1 hover:bg-blue-500 dark:hover:bg-blue-700 hover:text-white rounded-lg cursor-pointer mr-2"
              >
                ✅
              </button>
            ) : (
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-1 hover:bg-blue-500 dark:hover:bg-blue-700 hover:text-white rounded-lg cursor-pointer mr-2"
              >
                ⭕
              </button>
            )}
            <span className="w-full">{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="p-1 bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 hover:text-white rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 shadow-md"
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
