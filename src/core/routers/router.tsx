import { createBrowserRouter } from "react-router-dom";
import Navbar from "../../global/components/navbar";
import Template from "../../pages/template";
import Homepage from "../../pages/homepage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [{ path: "", element: <Homepage /> }],
  },
]);
