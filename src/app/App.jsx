import "../shared/styles/index.scss";
import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/home/home";
import Cards from "./presentation/pages/cards/cards";
import Transactions from "./presentation/pages/transactions/transactions";
import Options from "./presentation/pages/options/options";
import { GlobalContext } from "./context/GlobalContext";

function App() {

  const { apiEndpoint } = useContext(GlobalContext);

  console.log(apiEndpoint)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/deposit"
            element={
              apiEndpoint ? (
                <Cards action={"Depositar"} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/withdraw"
            element={
              apiEndpoint ? (
                <Cards action={"Sacar"} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/transactions"
            element={
              apiEndpoint ? (
                <Transactions />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/options" element={<Options currentBalance={0} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
