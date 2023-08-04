/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import styles from "./options.module.scss";
import { Link } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";
import axios from "axios";
import ErrorPopup from "../../components/error-popup/error_popup";

export default function Options() {
  const {
    apiEndpoint,
    userAccount,
    isLoading,
    setIsLoading,
    setTwo,
    setFive,
    setTen,
    setTwenty,
    setFifty,
    setOneHundred,
    setTwoHundred,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    datasource,
    setAgency,
    setAccount,
    setCurrentBalance,
    setName,
  } = useContext(GlobalContext);
  const [inputValid, setInputValid] = useState(true);

  const handleLinkClick = (event) => {
    if (!localStorage.getItem("apiEndpoint")) {
      event.preventDefault();
      setInputValid(false);
    } else {
      setTwo(0);
      setFive(0);
      setTen(0);
      setTwenty(0);
      setFifty(0);
      setOneHundred(0);
      setTwoHundred(0);
    }
  };

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      localStorage.setItem("name", "");
      localStorage.setItem("agency", "");
      localStorage.setItem("account", "");
      localStorage.setItem("currentBalance", "");
      setName("");
      setAgency("");
      setAccount("");
      setCurrentBalance("");
      setIsLoading(false);
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(error.message);
      return Promise.reject(error);
    }
  );

  useEffect(() => {
      setIsLoading(true);
      datasource.getAccount().then((response) => {
        try{
          localStorage.setItem("name", response.name);
          localStorage.setItem("agency", response.agency);
          localStorage.setItem("account", response.account);
          localStorage.setItem("currentBalance", response.currentBalance);
          setName(localStorage.getItem("name"));
          setAgency(localStorage.getItem("agency"));
          setAccount(localStorage.getItem("account"));
          setCurrentBalance(localStorage.getItem("currentBalance"));
          setIsLoading(false);
        } catch (e) {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(e.message);
        }
      });
  }, []);

  return (
    <div className={isError ? styles.options_error : styles.options}>
      {isError ? <ErrorPopup message={errorMessage} to={"/"} /> : ""}
      {isLoading ? (
        <div className={styles.options_isloading}>
          <div className={styles.options_customloader}></div>
        </div>
      ) : (
        <>
          <Header
            name={userAccount.name}
            account={userAccount.account}
            agency={userAccount.agency}
          />
          <div className={styles.options_informations}>
            <p className={styles.options_informations__text}>
              O que você deseja fazer?
            </p>
            <div className={userAccount.currentBalance < 0 ? styles.options_informations__red :styles.options_informations__balance}>
              <p>Saldo atual: R$ {userAccount.currentBalance}</p>
            </div>
          </div>
          <div className={styles.options_div}>
            <div className={styles.options_cards}>
              <Card
                action={"Depositar"}
                to={"/deposit"}
                type="submit"
                onClick={handleLinkClick}
              />
              <Card
                action={"Sacar"}
                to={"/withdraw"}
                type="submit"
                onClick={handleLinkClick}
              />
              <Card
                action={"Transações"}
                to={"/transactions"}
                type="submit"
                onClick={handleLinkClick}
              />
            </div>
            {inputValid ? (
              ""
            ) : (
              <label className={styles.options_label}>Endpoint inválido</label>
            )}
            <div className={styles.options_input}>
              <p className={styles.options_input__text}>{apiEndpoint}</p>
              <Link to="/" className={styles.options_input__link}>
                <BiSolidPencil className={styles.options_input__icon} />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
