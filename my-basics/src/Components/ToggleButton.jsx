import { useEffect, useState } from "react";
import { toggleBtnVal } from "../SignalsStore/ToggleBtn";
import { computed, useSignalEffect } from "@preact/signals-react";

// Using Signals
const ToggleButton = () => {
  const [, setT] = useState({});
  //   console.log(toggleBtnVal.value);

  useEffect(() => {
    const setTheme = JSON.parse(localStorage.getItem("theme"));
    // console.log(setTheme);
    toggleBtnVal.value = setTheme;
  }, []);

  useSignalEffect(() => {
    // console.log(toggleBtnVal.value);
    document.documentElement.classList.toggle("dark", !toggleBtnVal.value);
    localStorage.setItem("theme", JSON.stringify(toggleBtnVal.value));
    // if (toggleBtnVal.value) {
    //   document.documentElement.classList.remove("dark");
    // } else {
    //   document.documentElement.classList.add("dark");
    // }
    setT({});
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
        className="border p-2 ml-12 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white dark:text-white rounded-4xl cursor-pointer transition-all duration-300 hover:scale-105"
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
