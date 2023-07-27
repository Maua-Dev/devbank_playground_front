import { createBrowserRouter } from "react-router-dom";
import Cards from "../presentation/pages/home/cards";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Cards action={'Depositar'}/>,
      children: [
        {
          path: "/cards",
          element: <Cards action={'Depositar'}/>
        }
      ]
    }
  ]);

export default Router