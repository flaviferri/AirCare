´´import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictM´ode>
  <Router´Provider router={router} />
  // </React.StrictM´ode>
);
´´´´´´´´´´´