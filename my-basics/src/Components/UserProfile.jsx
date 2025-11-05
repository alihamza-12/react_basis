import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";

const UserProfile = () => {
  const userData = useSelector(selectUser);

  const { id, name, email, age, phone, role } = userData?.user;
  const { city, profilePicture, street } = userData?.user?.address;

  return (
    <div className="flex">
      <ul className="rounded-xl shadow-2xl mx-auto mt-1 hover:bg-amber-100 dark:hover:bg-gray-600 cursor-pointer dark:bg-gray-700">
        {profilePicture && (
          <img
            className="m-6 rounded-2xl "
            src={profilePicture}
            alt="User-Profile"
          />
        )}
        {/* <li className=''>User Id : <span>{id}</span></li> */}
        <li className="text-lg font-medium text-left ml-5 -mt-5 dark:text-white">
          {name}{" "}
          <img
            className="inline-block h-6 mb-2 rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUwonUxntNZ4H-IJ8lyhZq9pSiWJKx-tdFw&s"
          />
        </li>
        <li className="font- text-left ml-5 -mt-2 dark:text-white">{email}</li>

        <hr className="mt-2 mx-2" />
        <div className="font-medium mt-2 ml-5 dark:text-white">
          Info About : {role}
        </div>
        <li className="font- text-left ml-5 dark:text-white">
          Age : <span>{age}</span>
        </li>
        <li className="font- text-left ml-5 dark:text-white">
          Phone number : <span>{phone}</span>
        </li>
        <li className="font- text-left ml-5 mb-1 dark:text-white">
          City : <span>{city}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
