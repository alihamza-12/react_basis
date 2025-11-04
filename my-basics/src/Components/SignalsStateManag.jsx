import React from "react";
import { signal, useSignalEffect } from "@preact/signals-react";
import { useTheme } from "../context/ThemeProvider";

const SignalsStateManag = () => {

  // const {theme} = useTheme()

  useSignalEffect(()=>{
    console.log(`Counter changed : ${counter}`)
  })
  const counter = signal(0);
  // console.log(counter.value);

  console.log("Component render");

  return (
    <div>
      <h1 className="text-center text-lg font-medium bg-red-400 text-white p-5 mb-4">
        Here we learn about preact/Signals state management
      </h1>
      <h1 className="text-center text-lg font-medium bg-red-400 text-white p-5 mb-4">
       While increasing or decrecing the component donot render just render that element where the value is used.
      </h1>

      {/* preact/signals */}
      <div className="text-center mt-6">
        <span className="block text-xl">Counter is: {counter}</span>
        <button
          className="m-5 p-2 bg-blue-500 rounded-lg cursor-pointer"
          onClick={() => {
            counter.value++;
          }}
        >
          Increment
        </button>
        <button
          className="m-5 p-2 bg-red-500 rounded-lg cursor-pointer"
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
