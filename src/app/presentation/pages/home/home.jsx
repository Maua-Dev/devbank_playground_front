import { useContext, useState } from "react";
import logo from "../../assets/logo_devbank.png";
import styles from "./home.module.scss";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorPopup from "../../components/error-popup/error_popup";

export default function Home() {
  const {
    apiEndpoint,
    setApiEndpoint,
    datasource,
    setName,
    setAgency,
    setAccount,
    setCurrentBalance,
    errorMessage,
    isError,
    setIsLoading,
    setIsError,
    setErrorMessage,
    isLoading,
  } = useContext(GlobalContext);
  const [inputValid, setInputValid] = useState(true);

  function handleChange(event) {
    let inputValue = event.target.value;
    if (inputValue[inputValue.length - 1] === "/") {
      inputValue = inputValue.substring(0, inputValue.length - 1);
    }
    setApiEndpoint(inputValue);
    localStorage.setItem("apiEndpoint", inputValue);
    setInputValid(true);
  }

  const navigate = useNavigate();

  const handleLinkClick = (event) => {
    if (
      !localStorage.getItem("apiEndpoint") ||
      !localStorage.getItem("apiEndpoint").includes(".")
    ) {
      event.preventDefault();
      setInputValid(false);
    } else {
      setIsLoading(true);
      if(localStorage.getItem('apiEndpoint').substring(0, 7) !== 'http://'){
        localStorage.setItem('apiEndpoint', 'http://' + localStorage.getItem('apiEndpoint'));
      }
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
          navigate("/options");
        } catch (e) {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(e.message);
        }
      });
    }
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
    <div className={isError ? styles.home_error : styles.home}>
      {isError ? <ErrorPopup message={errorMessage} to={""} /> : ""}
      {isLoading ? (
        <div className={styles.home_isloading}>
          <div className={styles.home_customloader}></div>
        </div>
      ) : (
        <>
          <div className={styles.home_div}>
            <img src={logo} alt="Logo DevBank" className={styles.home_logo} />
            <div className={styles.home_form}>
              <input
                placeholder="Coloque aqui o endpoint da sua API"
                className={styles.home_input}
                value={apiEndpoint}
                onChange={handleChange}
              />
              {inputValid ? (
                ""
              ) : (
                <label className={styles.home_label}>Endpoint inválido</label>
              )}
            </div>

            <Link onClick={handleLinkClick} className={styles.home_button}>
              <p className={styles.home_button__title}>Entrar</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
