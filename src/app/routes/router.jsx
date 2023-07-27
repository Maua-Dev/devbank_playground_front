import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cards from "../presentation/pages/cards/cards";
import Transactions from "../presentation/pages/transactions/transactions";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/cards",
          element: <Cards action={'Depositar'}/>
        },
        {
          path: "/transactions",
          element: <Transactions/>
        }
      ]
    }
  ]);

export default Router