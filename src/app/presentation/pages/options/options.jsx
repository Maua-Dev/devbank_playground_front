import Card from "../../components/card/card";
import Header from "../../components/header/header";
import styles from "./options.module.scss";

export default function Options({currentBalance}) {
    return(
        <div className={styles.options}>
            <Header name={'Victor Soller'} account={'000'} agency={'000'}/>
            <div className={styles.options_informations}>
                <p className={styles.options_informations__text}>O que você deseja fazer?</p>
                <div className={styles.options_informations__balance}><p >Saldo atual: R$ {currentBalance}</p></div>
            </div>
            <div className={styles.options_cards}>
                <Card action={'Depositar'} to={'/deposit'}/>
                <Card action={'Sacar'} to={'/withdraw'}/>
                <Card action={'Transações'} to={'/transactions'}/>
            </div>
            <input placeholder="Coloque aqui o endpoint da sua API" required className={styles.options_input}/>
        </div>

    )
}