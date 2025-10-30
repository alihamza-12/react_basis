import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import users from "../utiles/authenticationUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Zod schema
const schema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z.string().min(8, { message: "InValid Password" }),
});

const ZodFormLogin = () => {
  const [logInError, setLogInError] = useState(false);
  const navigate = useNavigate();

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
    userExist
      ? (localStorage.setItem("Authentication", JSON.stringify({ Auth: true })),
        navigate("/"))
      : (setLogInError(true), navigate("/login"));
  };
  return (
    <div className="h-screen flex items-center justify-center bg-[#FFE6C9]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 p-9 bg-white rounded-lg"
      >
        <label>Email</label>
        <input
          className="bg-gray-300 p-2 rounded-lg w-full"
          type="text"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label>Password</label>
        <input
          className="bg-gray-300 p-2 rounded-lg w-full"
          type="password"
          {...register("password")}
        />
        {errors.password ? (
          <p className="text-red-500">{errors.password.message}</p>
        ) : (
          logInError && <p className="text-red-500">InValid Caridentials</p>
        )}

        <button
          className="p-2 cursor-pointer bg-[#7F265B] rounded-lg text-white w-full mt-8"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ZodFormLogin;
