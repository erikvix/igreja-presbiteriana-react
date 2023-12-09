import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Igreja from "../pages/Igreja";
import Home from "../pages/Home";
import QuemSomos1 from "../pages/QuemSomos1";

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
        element: <QuemSomos1 />,
      },
      // {
      //   path: "Contato",
      //   element: <ContatoPage />,
      // },
    ],
  },
]);

export { router };
