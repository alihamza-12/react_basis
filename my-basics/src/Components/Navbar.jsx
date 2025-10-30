import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()

  const handleLogOut=()=>{
    localStorage.setItem("Authentication",JSON.stringify({Auth:false}));
    navigate('/login');
  }
  return (
    <div className="flex justify-between border p-2 bg-amber-100">
        <Link to="/">
      <img
        className="h-14 hover:bg-amber-50 hover:p-1 rounded-lg cursor-pointer"
        src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
        alt="React"
      />
      </Link>
      <ul className="flex items-center gap-9 text-lg font-medium">
        <li className="hover:bg-amber-50 hover:p-2 hover:text-red-400 rounded-lg hover:underline cursor-pointer"> <Link to="/home">Home</Link></li>
        <li className="hover:bg-amber-50 hover:p-2 hover:text-red-400 rounded-lg hover:underline cursor-pointer"> <Link to="/home/hooks">UseState & UseRef Hook</Link></li>
        <li className="hover:bg-amber-50 hover:p-2 hover:text-red-400 rounded-lg hover:underline cursor-pointer"> <Link to="/home/contolled-unctrolled">Controlled & unControlled Component</Link></li>
        <button onClick={handleLogOut} className="bg-green-500 p-2 font-normal text-white rounded-lg hover:bg-red-700 cursor-pointer">Logout</button>
      </ul>
    </div>
  );
};

export default Navbar;
