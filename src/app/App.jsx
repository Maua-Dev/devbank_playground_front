import "../shared/styles/index.scss";
import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/home/home";
import Cards from "./presentation/pages/cards/cards";
import Transactions from "./presentation/pages/transactions/transactions";
import Options from "./presentation/pages/options/options";
import { GlobalContext } from "./context/GlobalContext";
import Docs from "./presentation/pages/docs/docs";

function App() {

  const { apiEndpoint } = useContext(GlobalContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/deposit"
            element={
              apiEndpoint && apiEndpoint.includes('.') ? (
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
              apiEndpoint && apiEndpoint.includes('.') ? (
                <Cards action={"Sacar"} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/transactions"
            element={
              apiEndpoint && apiEndpoint.includes('.')  ? (
                <Transactions />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/options" element={ apiEndpoint && apiEndpoint.includes('.') ? (
                <Options currentBalance={0} />
              ) : (
                <Navigate to="/" />
              )} />
          <Route path='/docs' element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
