import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cashier from "./pages/Cashier";
import Home from "./pages/Home";
import Example from "./components/Example";
import PrintComponent from "./components/PrintComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Cashier",
    element: <Cashier />,
  },
  {
    path: "Coba",
    // element: <Example />,
    element: <PrintComponent/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
