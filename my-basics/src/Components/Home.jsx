import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <div className="mb-14">
      <div>
        <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 dark:from-purple-600 dark:to-pink-600 text-white p-6 mb-6 rounded-lg shadow-lg dark:text-white">
          Here we learn about the Basics of the React
        </h1>
        <hr className="mb-6 dark:border-gray-600" />
        <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 dark:from-cyan-600 dark:to-blue-600 text-white p-6 mb-8 rounded-lg shadow-lg dark:text-white">
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
