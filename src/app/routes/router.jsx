import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cards from "../presentation/pages/home/cards";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/cards",
          element: <Cards action={'Depositar'}/>
        }
      ]
    }
  ]);

export default Router