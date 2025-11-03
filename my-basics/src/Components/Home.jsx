import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <div className="mb-14">
      <div>
        <h1 className="text-center text-lg font-medium bg-red-400 text-white p-5 mb-4">
          Here we learn about the Basics of the React
        </h1>
        <hr className="mb-4" />
        <h1 className="text-center text-lg font-medium bg-blue-400 text-white p-5">
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
