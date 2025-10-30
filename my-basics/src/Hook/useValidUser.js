import React, { useState } from "react";
import { EMAIL_VALID, PASS_WORD_VALID } from "../utiles/constants";
import users from "../utiles/authenticationUser";
import { useNavigate } from "react-router-dom";


export const useValidUser=()=>{
    
const [uEmail, setUEmail] = useState("");
  const [uPass, setUPass] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  // const [isUserE,setIsUserE]=useState(false)

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

    const findUser = users.find(
      (u) => u.email === uEmail && u.password === uPass
    );
    console.log(findUser);
    // setIsUserE(findUser)
    // console.log(isUserE)

    if (emialCheck && passCheck) {
      if (findUser) {
        localStorage.setItem("Authentication", JSON.stringify({ Auth: true }));
        navigate("/");
      }else{
        setIsEmailValid(false);
        setIsPassValid(false);
      }
    } else {
      navigate("/login");
    }
  };
  return{
    uEmail,
    uPass,
    isEmailValid,
    isPassValid,
    handleEmail,
    handlePass,
    handleSubmit,
  }
}