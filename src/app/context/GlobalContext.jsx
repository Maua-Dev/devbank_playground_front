import React, { createContext, useState } from "react";
import Wallet from "../../shared/domain/entities/Wallet";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
    const [two, setTwo] = useState(0);
    const [five, setFive] = useState(0);
    const [ten, setTen] = useState(0);
    const [twenty, setTwenty] = useState(0);
    const [fifty, setFifty] = useState(0);
    const [oneHundred, setOneHundred] = useState(0);
    const [twoHundred, setTwoHundred] = useState(0);

    const wallet = new Wallet(two, five, ten, twenty, fifty, oneHundred, twoHundred);

    const [apiEndPoint, setApiEndPoint] = useState('');

  return (
    <GlobalContext.Provider value={{ two, setTwo, five, setFive, ten, setTen, twenty, setTwenty, fifty, setFifty, oneHundred, setOneHundred, twoHundred, setTwoHundred, wallet, apiEndPoint, setApiEndPoint}}>
      {children}
    </GlobalContext.Provider>
  );
}
