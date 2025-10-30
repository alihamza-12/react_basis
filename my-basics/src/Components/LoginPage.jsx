import { useValidUser } from "../Hook/useValidUser";

const LoginPage = () => {
  const {
    uEmail,
    uPass,
    isEmailValid,
    isPassValid,
    handleEmail,
    handlePass,
    handleSubmit,
  } =useValidUser();

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
          <div className="text-red-500">Password is Not Valid</div>
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
