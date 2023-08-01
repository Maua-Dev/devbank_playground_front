import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import styles from "./options.module.scss";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

export default function Options() {
  const { apiEndpoint, userAccount, datasource, setName, setAgency, setAccount, setCurrentBalance } = useContext(GlobalContext);
  const [inputValid, setInputValid] = useState(true)

  const handleLinkClick = (event) => {
    if (!localStorage.getItem("apiEndpoint")) {
      event.preventDefault();
      setInputValid(false);
    }
  };

  useEffect(() => {
    datasource.getAccount().then((response) => {
      setName(response.name);
      setAgency(response.agency);
      setAccount(response.account);
      setCurrentBalance(response.currentBalance);
    });
  },)

  return (
    <div className={styles.options}>
      <Header name={userAccount.name} account={userAccount.account} agency={userAccount.agency} />
      <div className={styles.options_informations}>
        <p className={styles.options_informations__text}>
          O que você deseja fazer?
        </p>
        <div className={styles.options_informations__balance}>
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
            <FaPencilAlt className={styles.options_input__icon} />
          </Link>
        </div>
      </div>
    </div>
  );
}
