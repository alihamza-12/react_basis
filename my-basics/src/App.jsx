import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hooks from "./Components/Hooks";
import Home from "./Components/Home";
import Applayout from "./Components/Applayout";
import ConUnConComp from "./Components/ConUnConComp";
import ControlledComponent from "./Components/ControlledComponent";
import UncontrolledComponent from "./Components/UncontrolledComponent";
import LoginPage from "./Components/LoginPage";
import NotFound from "./Components/NotFound";

const appRoute = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hooks",
        element: <Hooks />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/contolled-unctrolled",
        element: <ConUnConComp />,
        children: [
          {
            path: "/contolled-unctrolled/controlled",
            element: <ControlledComponent />,
          },
          {
            path: "/contolled-unctrolled/uncrolled",
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
