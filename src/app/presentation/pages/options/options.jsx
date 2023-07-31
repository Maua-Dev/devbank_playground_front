import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import styles from "./options.module.scss";

export default function Options({currentBalance}) {

    const { setApiEndPoint } = useContext(GlobalContext);

    const [error, setError] = useState(false);

    function setInputApiEndPoint(event){
        setApiEndPoint(event.target.value);
        window.localStorage.setItem('apiEndPoint', event.target.value);
    }  

    function validateApiEndPointDeposit(event){
        event.preventDefault();
        console.log('entrou')
        if(window.localStorage.getItem('apiEndPoint') === ''){
            setError(true);
        } else {
            window.location.href = '/deposit'
        }
    }

    function validateApiEndPointWithdraw(event){
        event.preventDefault();
        if(window.localStorage.getItem('apiEndPoint') === ''){
            setError(true);
        } else {
            window.location.href = '/withdraw'
        }
    }

    function validateApiEndPointTransactions(event){
        event.preventDefault();
        if(window.localStorage.getItem('apiEndPoint') === ''){
            setError(true);
        } else {
            window.location.href = '/transactions'
        }
    }
    

    return(
        <div className={styles.options}>
            <Header name={'Victor Soller'} account={'000'} agency={'000'}/>
            <div className={styles.options_informations}>
                <p className={styles.options_informations__text}>O que você deseja fazer?</p>
                <div className={styles.options_informations__balance}><p >Saldo atual: R$ {currentBalance}</p></div>
            </div>
            <form className={styles.options_form}>
                <div className={styles.options_cards}>
                    <Card action={'Depositar'} type='submit' onClick={validateApiEndPointDeposit}/>
                    <Card action={'Sacar'} to={'/withdraw'} type='submit' onClick={validateApiEndPointWithdraw}/>
                    <Card action={'Transações'} to={'/transactions'} type='submit' onClick={validateApiEndPointTransactions}/>
                </div>
                {error ? <label className={styles.options_label} >Endpoint obrigatório</label> : ''}
                <input placeholder="Coloque aqui o endpoint da sua API" required className={styles.options_input} value={window.localStorage.getItem('apiEndPoint')} onChange={setInputApiEndPoint}/>
            </form>
            
        </div>

    )
}