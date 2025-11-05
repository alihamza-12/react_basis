import { useRef, useState } from "react";

const Hooks = () => {
  // console.log("Component render");
  //UseState
  const [counter, setCounter] = useState(0);
  //UseRef
  const ref = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="usesateHook mb-12">
        <p className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-green-800 text-4xl font-bold text-center rounded-lg shadow-lg p-6 dark:from-cyan-500 dark:to-cyan-700 dark:text-black">
          Hooks---Here we go Now
        </p>
        <hr className="mt-8 border-gray-300 dark:border-gray-600" />
        <p className="bg-gradient-to-r from-green-400 to-green-600 text-white text-3xl font-bold text-center rounded-lg shadow-lg p-4 mt-6 dark:from-green-500 dark:to-green-700">
          UseState Hook
        </p>
        <p className="text-center text-lg mt-4 dark:text-white text-gray-700">
          When the setCounter Is called then the component is rerender
        </p>
        <div className="text-center mt-8">
          <span className="block text-2xl font-semibold dark:text-white text-gray-800 mb-4">
            Counter is: {counter}
          </span>
          <button
            className="m-5 p-3 bg-blue-500 rounded-lg dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-200 hover:scale-105 shadow-md"
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
          <button
            className="m-5 p-3 bg-red-500 rounded-lg dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-800 transition-all duration-200 hover:scale-105 shadow-md"
            onClick={() => setCounter(counter - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="useRefHook">
        <p className="bg-gradient-to-r from-green-400 to-green-600 text-white text-3xl font-bold text-center rounded-lg shadow-lg p-4 dark:from-green-500 dark:to-green-700">
          UseRef Hook
        </p>
        <p className="text-center text-lg mt-4 dark:text-white text-gray-700">
          When on the button then the ref value is increase but show only when
          re-render the component
        </p>
        <div className="text-center mt-8">
          <p className="dark:text-white text-gray-700 text-lg">
            counter is:
            <span
              ref={ref}
              className="block text-2xl font-semibold dark:text-white text-gray-800"
            >
              0
            </span>
          </p>
          <button
            className="m-5 p-3 bg-blue-500 rounded-lg dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-200 hover:scale-105 shadow-md"
            onClick={() => {
              ref.current.textContent = parseInt(ref.current.textContent) + 1;
              // console.log("UseRef value is: " + ref.current.textContent);
            }}
          >
            Increment
          </button>
          <button
            className="m-5 p-3 bg-red-500 rounded-lg dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-800 transition-all duration-200 hover:scale-105 shadow-md"
            onClick={() => {
              ref.current.textContent = parseInt(ref.current.textContent) - 1;
              // console.log("UseRef value is: " + ref.current.textContent);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
