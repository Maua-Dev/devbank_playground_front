import '../shared/styles/index.scss'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./presentation/pages/cards/cards";
import Transactions from "./presentation/pages/transactions/transactions";
import Home from "./presentation/pages/home/home";
import Options from "./presentation/pages/options/options";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deposit" element={<Cards action={'Depositar'}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/withdraw" element={<Cards action={'Sacar'}/>} />
        <Route path="/transactions" element={<Transactions />} />	
        <Route path="/options" element={<Options currentBalance={0} />} />	
      </Routes>
  </BrowserRouter>
  );
}

export default App;
