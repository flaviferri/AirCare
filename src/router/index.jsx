import { jsxDEV } from "react/jsx-dev-runtime";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
/* import Map from "../pages/Map"; */
import InfoBox from "../components/InfoBox/infoBox"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <InfoBox />,
  },
  
]);
