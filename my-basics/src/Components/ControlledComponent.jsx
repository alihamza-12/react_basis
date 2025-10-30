import React, { useState } from "react";

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  console.log("Component Render");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

//   console.log(inputValue);

  const handleClick = () => { 
    alert(`User Name is: ${inputValue}`)
  };
  return (
    <div className="m-10">
      <div>
        <h1 className="text-lg font-medium my-2">
          🧭 1. Controlled Components
        </h1>
        <p className="text-lg">
          A controlled component is one where React controls the form input’s
          value through state.That means the value of the input comes from
          React’s state, not directly from the DOM.
        </p>
        <hr />
        <h1 className="text-lg font-medium my-2">Example</h1>
        <p>
          Form input get the data from the Input field using useState Hook then
          the component wil reload ater update the state variable In that way
          the React do that.
        </p>
        {/* Form input get the data from the Input field using useState Hook then the component wil reload ater update the state variable */}
      </div>

      {/* Example */}
      <form
        className="mt-10 flex justify-center gap-10 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="border p-2 rounded-lg bg-gray-300"
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Enter Your Name"
        />
        <button
          className="bg-rose-400 p-2 rounded-lg text-white cursor-pointer"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledComponent;
