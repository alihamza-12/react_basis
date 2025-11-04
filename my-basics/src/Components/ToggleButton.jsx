import { useState } from "react";
import { toggleBtnVal } from "../SignalsStore/ToggleBtn";
import { computed, useSignalEffect } from "@preact/signals-react";

const ToggleButton = () => {
    const [t,setT]=useState(0);
//   console.log(toggleBtnVal.value);

  useSignalEffect(() => {
    setT(t+1)
    console.log(toggleBtnVal.value);
  });

// const trick=computed(()=>
//     toggleBtnVal.value ? "☀️ Light Mode" : "🌙 Dark Mode"
// )
  
  const togglePic = () => {
    toggleBtnVal.value = !toggleBtnVal.value;
  };
  return (
    <div className="absolute top-18 right-5">
      <button
        onClick={togglePic}
        className="border p-2 ml-12 hover:bg-black hover:text-white rounded-4xl cursor-pointer"
      >
        {/* {trick.value} */}
        {toggleBtnVal.value ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default ToggleButton;



// using contextApi
// const ToggleButton = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="absolute top-18 right-5">
//       <button
//         onClick={toggleTheme}
//         className="border p-2 ml-12 hover:bg-black hover:text-white rounded-4xl cursor-pointer"
//       >
//         {/* {trick.value} */}
//         {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
//       </button>
//     </div>
//   );
// };
