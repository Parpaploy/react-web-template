import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Template from "../global/template";
import Homepage from "../pages/homepage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [
      { path: "", element: <Template /> },
      { path: "homepage", element: <Homepage /> },
    ],
  },
]);
