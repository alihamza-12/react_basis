import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUser, selectUser } from "../store/slices/userSlice";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  //User Profile from the store
  const userDp = userData?.user?.address?.profilePicture;
  // console.log(userDp)

  //localStorage
  // const user=JSON.parse(localStorage.getItem("user"))
  // const userDp=user?.user?.address?.profilePicture

  const handleLogOut = () => {
    dispatch(clearUser());
    localStorage.setItem("Authentication", JSON.stringify({ Auth: false }));
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-lg border-b border-gray-200 dark:border-gray-700">
      <Link to="/">
        <img
          className="h-16 hover:bg-amber-50 dark:hover:bg-slate-700 hover:p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 shadow-md"
          src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
          alt="React"
        />
      </Link>
      <ul className="flex items-center gap-6 text-lg font-medium text-black dark:text-white">
        <li className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 dark:hover:bg-gradient-to-r dark:hover:from-slate-700 dark:hover:to-slate-600 hover:text-red-400 dark:hover:text-red-300 rounded-lg hover:underline cursor-pointer p-2 transition-all duration-200 hover:scale-105">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 dark:hover:bg-gradient-to-r dark:hover:from-slate-700 dark:hover:to-slate-600 hover:text-red-400 dark:hover:text-red-300 rounded-lg hover:underline cursor-pointer p-2 transition-all duration-200 hover:scale-105">
          {" "}
          <Link to="/hooks">UseState & UseRef Hook</Link>
        </li>
        <li className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 dark:hover:bg-gradient-to-r dark:hover:from-slate-700 dark:hover:to-slate-600 hover:text-red-400 dark:hover:text-red-300 rounded-lg hover:underline cursor-pointer p-2 transition-all duration-200 hover:scale-105">
          {" "}
          <Link to="/signals-state-management">Signals State Management</Link>
        </li>
        <li className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 dark:hover:bg-gradient-to-r dark:hover:from-slate-700 dark:hover:to-slate-600 hover:text-red-400 dark:hover:text-red-300 rounded-lg hover:underline cursor-pointer p-2 transition-all duration-200 hover:scale-105">
          {" "}
          <Link to="/contolled-unctrolled">
            Controlled & unControlled Component
          </Link>
        </li>
        <button
          onClick={handleLogOut}
          className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 p-3 font-normal text-white rounded-lg hover:from-red-500 hover:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 cursor-pointer transition-all duration-200 hover:scale-105 shadow-md"
        >
          Logout
        </button>
        <Link to="/user-profile">
          <img
            className="h-14 rounded-full cursor-pointer hover:border-2 border-red-600 dark:border-red-400 shadow-md transition-all duration-200 hover:scale-105"
            src={
              userDp ||
              "https://img.favpng.com/1/9/15/3d-male-avatar-cartoon-man-with-glasses-Bnq3PC7J_t.jpg"
            }
            alt="User-Pic"
          />
        </Link>
      </ul>
      <ToggleButton />
    </div>
  );
};

export default Navbar;
