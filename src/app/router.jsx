import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cards from "./presentation/pages/cards/cards";
import Transactions from "./presentation/pages/transactions/transactions";
import Home from "./presentation/pages/home/home";
import Options from "./presentation/pages/options/options";

const apiEndPoint = localStorage.getItem('apiEndPoint');

const Router = () => {
  return(<BrowserRouter>
    <Routes>
      <Route exact path="/deposit" element={apiEndPoint ? <Cards action={'Depositar'}/> : <Navigate to="/"/>}  />
      <Route path="/" element={<Home />} />
      <Route path="/withdraw" element={apiEndPoint ? <Cards action={'Sacar'}/> : <Navigate to="/"/>} />
      <Route path="/transactions" element={apiEndPoint ? <Transactions /> : <Navigate to="/"/>} />	
      <Route path="/options" element={<Options currentBalance={0} />} />	
    </Routes>
  </BrowserRouter>);
}

export default Router