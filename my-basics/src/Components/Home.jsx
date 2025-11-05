import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <div className="mb-14">
      <div>
        <h1 className="text-center text-lg font-medium bg-red-400 dark:bg-red-600 text-white p-5 mb-4 dark:text-white">
          Here we learn about the Basics of the React
        </h1>
        <hr className="mb-4 dark:border-gray-600" />
        <h1 className="text-center text-lg font-medium bg-blue-400 dark:bg-blue-600 text-white p-5 dark:text-white">
          Todo List Using Zustand Store And persist
        </h1>
      </div>

      {/* Todo Input */}
      <TodoInput />

      {/* Todo List */}
      <TodoList />
    </div>
  );
};

export default Home;
