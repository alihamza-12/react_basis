import { Link, Outlet } from "react-router-dom";

const ConUnConComp = () => {
  return (
    <div>
      <ul className="flex my-7 gap-15 justify-center">
        <li className=" p-2 bg-green-400 text-lg rounded-lg hover:bg-amber-200 hover:underline hover:text-blue-600">
          <Link to="/contolled-unctrolled/controlled">
            {" "}
            Controlled component
          </Link>
        </li>
        <li className="p-2 bg-green-400 text-lg rounded-lg hover:bg-amber-200 hover:underline hover:text-blue-600">
          <Link to="/contolled-unctrolled/uncrolled">
            {" "}
            UnControlled component
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ConUnConComp;
