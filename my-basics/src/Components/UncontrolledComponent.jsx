import React, { useRef } from "react";

const UncontrolledComponent = () => {
  console.log("Componet Render");

  const inPutName = useRef(null);

  const handleClick = () => {
    alert(`Name is : ${inPutName.current.value}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold my-4 dark:text-white text-gray-800 text-center">
          ⚙️ 2. Uncontrolled Components
        </h1>
        <p className="text-xl dark:text-white text-gray-700 leading-relaxed mb-6">
          An uncontrolled component is one where the DOM itself handles the
          input’s state.You use a ref to access the input value when needed.
        </p>
        <h1 className="text-2xl font-bold my-4 dark:text-white text-gray-800 text-center">
          Example
        </h1>
        <p className="dark:text-white text-gray-700 leading-relaxed mb-8">
          Form input get the data from the Input field using useRef Hook then
          the component wil Not reload. In that way we see that value when every
          we need that value.
        </p>
        {/* Form input get the data from the Input field using useRef Hook then the component wil Not reload. In that way we see that value when every we need that value*/}

        <hr className="border-gray-300 dark:border-gray-600 mb-6" />
      </div>

      {/* Example */}
      <form
        className="mt-10 flex justify-center gap-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="border-2 p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white shadow-md focus:ring-2 focus:ring-indigo-400 outline-none transition-all duration-200"
          type="text"
          ref={inPutName}
          // onChange={handleInput}
          placeholder="Enter Your Name"
        />
        <button
          className="bg-gradient-to-r from-rose-400 to-rose-600 p-3 rounded-lg text-white cursor-pointer dark:from-rose-500 dark:to-rose-700 hover:from-rose-500 hover:to-rose-700 dark:hover:from-rose-600 dark:hover:to-rose-800 transition-all duration-200 hover:scale-105 shadow-md"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
