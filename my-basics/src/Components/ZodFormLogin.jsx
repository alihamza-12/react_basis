import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import users from "../utiles/authenticationUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, selectUser } from "../store/slices/userSlice";

//Zod schema
const schema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z.string().min(8, { message: "InValid Password" }),
});
//Component

const ZodFormLogin = () => {
  const [logInError, setLogInError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const selectUserState = useSelector(selectUser)
  // console.log(selectUserState)

  //Setup React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log(data.email);
    // console.log(data.password);
    // console.log(users[0].email)
    const userExist = users.find(
      (u) => u.email === data.email && u.password === data.password
    );
    // console.log(userExist);
    userExist
      ? //dispatch action to store the user data
        (dispatch(setUserData(userExist)),
        localStorage.setItem("Authentication", JSON.stringify({ Auth: true })),
        navigate("/"))
      : (setLogInError(true), navigate("/login"));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Login
        </h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>
          <input
            className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
            type="password"
            {...register("password")}
          />
          {errors.password ? (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          ) : (
            logInError && (
              <p className="text-red-500 text-sm mt-1">Invalid Credentials</p>
            )
          )}
        </div>

        <button
          className="p-3 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-lg text-white w-full mt-8 hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-200 hover:scale-105 shadow-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ZodFormLogin;
