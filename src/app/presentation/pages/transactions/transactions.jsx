/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import styles from "./transactions.module.scss";
import { GlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
import ErrorPopup from "../../components/error-popup/error_popup";
import { useNavigate } from "react-router-dom";

export default function Transactions() {
  const {
    userAccount,
    transactions,
    datasource,
    setIsLoading,
    setTransactions,
    isLoading,
    setIsError,
    setErrorMessage,
    isError,
    errorMessage,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(-1);
    }


  axios.interceptors.response.use(
    function (response) {
      

      
      return response;
    },
    function (error) {
      setIsLoading(false);
      setIsError(true);
      if(error.response !== undefined){
        setErrorMessage(error.response.data.detail);
      } else {
        setErrorMessage(error.message)
      }
      return Promise.reject(error);
    }
  );

  const sortedTransactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);});

  useEffect(() => {
    setIsLoading(true);
    datasource.getAllTransactions().then((response) => {
      if(response == null){
        setIsLoading(false);
        setIsError(true);
        setErrorMessage("Invalid parameters");
        return;
      }
      const transactionsList = response.map((element) => element);
      for(let i = 0; i <= transactionsList.length; i++){
        if(transactionsList[i].type === undefined || transactionsList[i].value  === undefined|| transactionsList[i].currentBalance  === undefined || transactionsList[i].date  === undefined){
          setIsLoading(false);
          setIsError(true);
          setErrorMessage("Invalid parameters");
          return;
        }
      }
      
      try{

        setTransactions(transactionsList);
        localStorage.setItem("transactionsList", response.transactionsList);
      } catch (e){
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(e.message);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={isError ? styles.transactions_error : styles.transactions}>
      {isError ? (
        <div className={styles.transactions_popup}>
          <ErrorPopup
            message={errorMessage}
            className={styles.transactions_popup}
            to={''}
          />
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <div className={styles.transactions_isloading}>
          <div className={styles.transactions_customloader}></div>
        </div>
      ) : (
        <>
          <Header
            name={userAccount.name}
            account={userAccount.account}
            agency={userAccount.agency}
          />
          <div className={styles.transactions_title} >
            Historico de transações
          </div>
          {sortedTransactions.map((element) => {
            let date = new Date(element.date).toString();
            date = date.substring(4, date.length - 38);
            return (
              <>
                {element.type === "deposit" ? (
                  <div
                    key={element.timestamp}
                    className={styles.transactions_historic}
                  >
                    <div className={styles.transactions_historic__green}>
                      Deposito
                    </div>
                    <div className={styles.transactions_div}>
                      <div>
                        <span className={styles.transactions_span}>VALOR:</span>
                        <p className={styles.transactions_value}>
                          R$ {element.value}
                        </p>
                      </div>
                      <div>
                        <span className={styles.transactions_span}>DATA:</span>
                        <p className={styles.transactions_value}>{date}</p>
                      </div>
                      <div>
                        <span className={styles.transactions_span}>SALDO:</span>
                        <p className={element.currentBalance < 0 ? styles.transactions_value__red : styles.transactions_value }>R$ {element.currentBalance}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={element.timestamp}
                    className={styles.transactions_historic}
                  >
                    <div className={styles.transactions_historic__red}>
                      Saque
                    </div>
                    <div className={styles.transactions_div}>
                      <div>
                        <span className={styles.transactions_span}>VALOR:</span>
                        <p className={styles.transactions_value}>
                          R$ {element.value}
                        </p>
                      </div>
                      <div>
                        <span className={styles.transactions_span}>DATA:</span>
                        <p className={styles.transactions_value}>{date}</p>
                      </div>
                      <div>
                        <span className={styles.transactions_span}>SALDO:</span>
                        <p className={element.currentBalance < 0 ? styles.transactions_value__red : styles.transactions_value }>R$ {element.currentBalance}</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}

          <div className={styles.transactions_button}>
            <Button title={"Voltar"} onClick={handleOnClick} />
          </div>
        </>
      )}
    </div>
  );
}
