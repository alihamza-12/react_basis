import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";

const UserProfile = () => {
  const userData = useSelector(selectUser);

  const { id, name, email, age, phone, role } = userData?.user;
  const { city, profilePicture, street } = userData?.user?.address;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6 pb-20">
      <ul className="rounded-2xl shadow-2xl mx-auto mt-1 hover:bg-gradient-to-r hover:from-amber-100 hover:to-amber-200 dark:hover:bg-gradient-to-r dark:hover:from-gray-600 dark:hover:to-gray-700 cursor-pointer dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 p-6 transition-all duration-300">
        {profilePicture && (
          <img
            className="m-6 rounded-2xl shadow-lg border-4 border-white dark:border-gray-600"
            src={profilePicture}
            alt="User-Profile"
          />
        )}
        {/* <li className=''>User Id : <span>{id}</span></li> */}
        <li className="text-2xl font-bold text-left ml-5 -mt-5 dark:text-white text-gray-800">
          {name}{" "}
          <img
            className="inline-block h-8 mb-2 rounded-2xl shadow-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUwonUxntNZ4H-IJ8lyhZq9pSiWJKx-tdFw&s"
          />
        </li>
        <li className="font-medium text-left ml-5 -mt-2 dark:text-gray-300 text-gray-600">
          {email}
        </li>

        <hr className="mt-4 mx-2 border-gray-300 dark:border-gray-600" />
        <div className="font-bold mt-4 ml-5 dark:text-white text-gray-800 text-lg">
          Info About : {role}
        </div>
        <li className="font-medium text-left ml-5 dark:text-gray-300 text-gray-600 mt-2">
          Age : <span className="font-semibold">{age}</span>
        </li>
        <li className="font-medium text-left ml-5 dark:text-gray-300 text-gray-600">
          Phone number : <span className="font-semibold">{phone}</span>
        </li>
        <li className="font-medium text-left ml-5 mb-4 dark:text-gray-300 text-gray-600">
          City : <span className="font-semibold">{city}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
