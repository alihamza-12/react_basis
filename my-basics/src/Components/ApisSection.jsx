import React from "react";
import { Link, Outlet } from "react-router-dom";

const ApisSection = () => {

fetch
  return (
    <div>
      <ul className="flex my-7 gap-15 justify-center">
        <li className=" p-2 bg-green-400 text-lg rounded-lg hover:bg-amber-200 hover:underline hover:text-blue-600">
          <Link to="/apis/fetch-method"> Fetch(GET) Method</Link>
        </li>{" "}
        <li className=" p-2 bg-green-400 text-lg rounded-lg hover:bg-amber-200 hover:underline hover:text-blue-600">
          <Link to="/apis/post-method"> POST Method</Link>
        </li>
         <li className=" p-2 bg-green-400 text-lg rounded-lg hover:bg-amber-200 hover:underline hover:text-blue-600">
          <Link to="/apis/put-method"> PUT Method</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ApisSection;
