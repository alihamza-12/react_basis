import React, {  useState } from "react";
import { EMAIL_VALID, PASS_WORD_VALID } from "../utiles/constants";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [uEmail, setUEmail] = useState("");
  const [uPass, setUPass] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);

  const navigate = useNavigate();


  const handleEmail = (e) => {
    setUEmail(e.target.value);
  };

  const handlePass = (e) => {
    setUPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(uEmail);
    // console.log(uPass);

    // !PASS_WORD_VALID.test(uPass)
    //   ? alert(
    //       "Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
    //     )
    //   : alert("Ok");
    const emialCheck = EMAIL_VALID.test(uEmail);
    const passCheck = PASS_WORD_VALID.test(uPass);

    setIsEmailValid(emialCheck);
    setIsPassValid(passCheck);

    

    emialCheck && passCheck ? (localStorage.setItem('Authentication', JSON.stringify({ Auth: true })),navigate("/")) : navigate("/login");
  };
  return (
    <div className="h-screen flex items-center justify-center bg-[#FFE6C9]">
      <form className="w-1/3 p-9 bg-white rounded-lg">
        <label htmlFor="email" className="flex flex-col justify-center mb-4">
          Email
          <input
            onChange={handleEmail}
            className="bg-gray-300 p-2 rounded-lg w-full"
            type="email"
            placeholder="Enter your email"
          />
        </label>
        {!isEmailValid && (
          <div className="text-red-500">Email is Not Valid</div>
        )}
        <label htmlFor="password" className="flex flex-col justify-center mb-4">
          Password
          <input
            onChange={handlePass}
            className="bg-gray-300 p-2 rounded-lg w-full"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        {!isPassValid && (
          <div className="text-red-500">
            Password is Not Valid Chote,Wada,Special char,No.
          </div>
        )}
        <button
          onClick={handleSubmit}
          className="p-2 cursor-pointer bg-[#7F265B] rounded-lg text-white w-full mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
