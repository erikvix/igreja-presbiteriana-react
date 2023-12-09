import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Igreja from "../pages/Igreja";
import Home from "../pages/Home";

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
    ],
  },
]);

export { router };
