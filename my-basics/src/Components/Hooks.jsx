import { useRef, useState } from "react";

const Hooks = () => {
  console.log("Component render");
  //UseState
  const [counter, setCounter] = useState(0);
  //UseRef
  const ref = useRef(null);

  return (
    <div>
      <div className="usesateHook">
        <p className="bg-cyan-400 text-green-800 text-3xl font-bold text-center">
          Hooks---Here we go Now
        </p>
        <hr className="mt-5" />
        <p className="bg-green-400 text-white text-2xl font-bold text-center">
          UseState Hook
        </p>
        <p className="text-center">
          When the setCounter Is called then the component is rerender
        </p>
        <div className="text-center mt-6">
          <span className="block text-xl">Counter is: {counter}</span>
          <button
            className="m-5 p-2 bg-blue-500 rounded-lg"
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
          <button
            className="m-5 p-2 bg-red-500 rounded-lg"
            onClick={() => setCounter(counter - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="useRefHook">
        <p className="bg-green-400 text-white text-2xl font-bold text-center">
          UseRef Hook
        </p>
        <p className="text-center">
          When on the button then the ref value is increase but show only when
          re-render the component
        </p>
        <div className="text-center mt-6">
          <p>
            counter is:
            <span ref={ref} className="block text-xl">
              0
            </span>
          </p>
          <button
            className="m-5 p-2 bg-blue-500 rounded-lg"
            onClick={() => {
              ref.current.textContent = parseInt(ref.current.textContent) + 1;
              // console.log("UseRef value is: " + ref.current.textContent);
            }}
          >
            Increment
          </button>
          <button
            className="m-5 p-2 bg-red-500 rounded-lg"
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
