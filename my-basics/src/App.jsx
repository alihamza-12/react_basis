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
import UserProfile from "./Components/UserProfile";
import SaveRoute from "./Components/SaveRoute";
import SignalsStateManag from "./Components/SignalsStateManag";
import ToggleButton from "./Components/ToggleButton";

const appRoute = createBrowserRouter([
  {
    path: "/login",
    // element: <LoginPage />,
    element: (
      <SaveRoute>
        <ZodFormLogin />
      </SaveRoute>
    ),
  },

  {
    path: "/",
    element: (
      <RedirectPage>
        <Applayout />
      </RedirectPage>
    ),
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
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/signals-state-management",
        element: <SignalsStateManag />,
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
