import React, { useContext } from "react";
import styles from "./cards.module.scss";
import Button from "../../components/button/button";
import Informations from "../../components/informations/informations";
import Header from "../../components/header/header";
import MoneyCard from "../../components/money-card/money_card";
import { GlobalContext } from "../../../context/GlobalContext";
import ErrorPopup from "../../components/error-popup/error_popup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cards({ action }) {
  const {
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
    userAccount,
    datasource,
    setCurrentBalance,
    setIsLoading,
    isLoading,
    isError,
    errorMessage,
    setIsError,
    setErrorMessage

  } = useContext(GlobalContext);

  const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(-1);
    }

  const handleDeposit = () => {
    setIsLoading(true);

    datasource.deposit(wallet).then((response) => {
      localStorage.setItem("currentBalance", response.current_balance);
      setCurrentBalance(response.current_balance);
      setIsLoading(false);
    });
  };

  const handleWithdraw = () => {
    setIsLoading(true);
    datasource.withdraw(wallet).then((response) => {
      localStorage.setItem("currentBalance", response.current_balance);
      setCurrentBalance(response.current_balance);
      setIsLoading(false);
    });
  };

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(error.message);
      return Promise.reject(error);
    }
  );

  return (
    <div className={styles.cards}>
      {isError ? (
          <ErrorPopup
            message={errorMessage}
            className={styles.transactions_popup}
            to={''}
          />
      ) : (
        ""
      )}
      {isLoading ? (
        <div className={styles.cards_isloading}>
          <div className={styles.cards_customloader}></div>
        </div>
      ) : <><Header
      name={userAccount.name}
      account={userAccount.account}
      agency={userAccount.agency}
    />
    <Informations
      currentBalance={userAccount.currentBalance}
      actionAmount={wallet.getTotal()}
      action={action === "Depositar" ? "depositada" : "sacada"}
    />
    <div className={styles.main}>
      <span className={styles.main_title}>
        Selecione as cédulas e a quantidade que você deseja.
      </span>
      <MoneyCard value={2} wallet={two} setWallet={setTwo} />
      <MoneyCard value={5} wallet={five} setWallet={setFive} />
      <MoneyCard value={10} wallet={ten} setWallet={setTen} />
      <MoneyCard value={20} wallet={twenty} setWallet={setTwenty} />
      <MoneyCard value={50} wallet={fifty} setWallet={setFifty} />
      <MoneyCard value={100} wallet={oneHundred} setWallet={setOneHundred} />
      <MoneyCard value={200} wallet={twoHundred} setWallet={setTwoHundred} />
    </div>
    <div className={styles.buttons}>
      <Button title={"Voltar"} onClick={handleOnClick} />
      <Button
        title={action}
        onClick={action === "Depositar" ? handleDeposit : handleWithdraw}
      />
    </div></> }
      
    </div>
  );
}
