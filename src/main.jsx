import ReactDOM from "react-dom/client";

import { router } from "./router/index";
import { RouterProvider } from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictM´ode>
  <RouterProvider router={router} />
  // </React.StrictM´ode>
);
