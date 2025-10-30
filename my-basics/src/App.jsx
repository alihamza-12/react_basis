import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hooks from "./Components/Hooks";
import Home from "./Components/Home";
import Applayout from "./Components/Applayout";
import ConUnConComp from "./Components/ConUnConComp";
import ControlledComponent from "./Components/ControlledComponent";
import UncontrolledComponent from "./Components/UncontrolledComponent";
import LoginPage from "./Components/LoginPage";
import NotFound from "./Components/NotFound";
import ZodFormLogin from "./Components/ZodFormLogin";
import RedirectPage from "./Components/RedirectPage";

const appRoute = createBrowserRouter([
  {
    path: "/login",
    // element: <LoginPage />,
    element:<ZodFormLogin/>
  },
  {
    path:"/",
    element:<RedirectPage/>
  },
  {
    path: "/home",
    element: <Applayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/hooks",
        element: <Hooks />,
      },
      {
        path: "/home/login",
        element: <LoginPage />,
      },
      {
        path: "/home/contolled-unctrolled",
        element: <ConUnConComp />,
        children: [
          {
            path: "/home/contolled-unctrolled/controlled",
            element: <ControlledComponent />,
          },
          {
            path: "/home/contolled-unctrolled/uncrolled",
            element: <UncontrolledComponent />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
