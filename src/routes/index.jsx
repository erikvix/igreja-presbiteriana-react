import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Igreja from "../pages/Igreja";
import Home from "../pages/Home";
import QuemSomos from "../pages/QuemSomos";
import Contato from "../pages/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "igreja",
        element: <Igreja />,
      },
      {
        path: "quem-somos",
        element: <QuemSomos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

export { router };
