import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthPorviders from "./providers/AuthPorviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthPorviders>
  </React.StrictMode>
);
