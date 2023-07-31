import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../presentation/pages/cards/cards";
import Transactions from "../presentation/pages/transactions/transactions";
import Home from "../presentation/pages/home/home";
import Options from "../presentation/pages/options/options";

const Router = () => ([
    <BrowserRouter>
      <Routes>
        <Route path="/deposit" element={<Cards action={'Depositar'}/>} />
        {window.localStorage.getItem('apiEndPoint') === '' ? 
        <Route path="/" element={ <Home /> }/>
        : <Route path="/" element={<Options currentBalance={0} />} />
      }
        <Route path="/withdraw" element={<Cards action={'Sacar'}/>} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/options" element={<Options currentBalance={0} />} />	
      </Routes>
    </BrowserRouter>
  ]);

export default Router