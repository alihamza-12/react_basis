import React, { useRef } from "react";

const UncontrolledComponent = () => {
  console.log("Componet Render");

  const inPutName=useRef(null);

  const handleClick=()=>{
    alert(`Name is : ${inPutName.current.value}`)
  }
  return (
    <div className="m-10">
      <div>
        <h1 className="text-lg font-medium my-2">
          ⚙️ 2. Uncontrolled Components
        </h1>
        <p className="text-lg">
          An uncontrolled component is one where the DOM itself handles the
          input’s state.You use a ref to access the input value when needed.
        </p>
        <h1 className="text-lg font-medium my-2">Example</h1>
        <p>
          Form input get the data from the Input field using useRef Hook then
          the component wil Not reload. In that way we see that value when every
          we need that value.
        </p>
        {/* Form input get the data from the Input field using useRef Hook then the component wil Not reload. In that way we see that value when every we need that value*/}

        <hr />
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
          ref={inPutName}
          // onChange={handleInput}
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

export default UncontrolledComponent;
