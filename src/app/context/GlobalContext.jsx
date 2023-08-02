import React, { createContext, useState } from "react";
import Wallet from "../../shared/domain/entities/Wallet";
import GlobalDatasource from "../../shared/datasource/global_datasource";
import Account from "../../shared/domain/entities/Account";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [apiEndpoint, setApiEndpoint] = useState(
    localStorage.getItem("apiEndpoint")
  );
  const datasource = new GlobalDatasource(apiEndpoint);

  const [two, setTwo] = useState(0);
  const [five, setFive] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [oneHundred, setOneHundred] = useState(0);
  const [twoHundred, setTwoHundred] = useState(0);
  const wallet = new Wallet(
    two,
    five,
    ten,
    twenty,
    fifty,
    oneHundred,
    twoHundred
  );

  const [name, setName] = useState(localStorage.getItem("name"));
  const [agency, setAgency] = useState(localStorage.getItem("agency"));
  const [account, setAccount] = useState(localStorage.getItem("account"));
  const [currentBalance, setCurrentBalance] = useState(localStorage.getItem("currentBalance"));
  const userAccount = new Account(name, agency, account, currentBalance);
    
  const [transactions, setTransactions] = useState([]);


  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        two,
        setTwo,
        five,
        setFive,
        ten,
        setTen,
        twenty,
        setTwenty,
        fifty,
        setFifty,
        oneHundred,
        setOneHundred,
        twoHundred,
        setTwoHundred,
        wallet,
        apiEndpoint,
        setApiEndpoint,
        datasource,
        account,
        setAccount,
        name,
        setName,
        agency,
        setAgency,
        currentBalance,
        setCurrentBalance,
        userAccount,
        isLoading,
        setIsLoading,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
