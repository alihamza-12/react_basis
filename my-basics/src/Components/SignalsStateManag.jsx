import React from "react";
import { signal, useSignalEffect } from "@preact/signals-react";
import { useTheme } from "../context/ThemeProvider";

const SignalsStateManag = () => {
  // const {theme} = useTheme()

  useSignalEffect(() => {
    console.log(`Counter changed : ${counter}`);
  });
  const counter = signal(0);
  // console.log(counter.value);

  console.log("Component render");

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 dark:from-red-500 dark:to-red-700 text-white p-6 mb-6 rounded-lg shadow-lg">
        Here we learn about preact/Signals state management
      </h1>
      <h1 className="text-center text-xl font-semibold bg-gradient-to-r from-red-400 to-red-600 dark:from-red-500 dark:to-red-700 text-white p-6 mb-8 rounded-lg shadow-lg">
        While increasing or decreasing the component does not render, just
        render that element where the value is used.
      </h1>

      {/* preact/signals */}
      <div className="text-center mt-8">
        <span className="block text-2xl font-semibold dark:text-white text-gray-800 mb-4">
          Counter is: {counter}
        </span>
        <button
          className="m-5 p-3 bg-blue-500 dark:bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-200 hover:scale-105 shadow-md"
          onClick={() => {
            counter.value++;
          }}
        >
          Increment
        </button>
        <button
          className="m-5 p-3 bg-red-500 dark:bg-red-700 rounded-lg cursor-pointer hover:bg-red-600 dark:hover:bg-red-800 transition-all duration-200 hover:scale-105 shadow-md"
          onClick={() => {
            counter.value--;
          }}
        >
          Decrement
        </button>

        {/* {theme} */}
      </div>
    </div>
  );
};

export default SignalsStateManag;
