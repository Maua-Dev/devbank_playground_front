import { useContext, useState } from "react";
import logo from "../../assets/logo_devbank.png";
import styles from "./home.module.scss";
import { GlobalContext } from "../../../context/GlobalContext";

export default function Home() {

    const { setApiEndPoint } = useContext(GlobalContext);

    const [error, setError] = useState(false);

    function setInputApiEndPoint(event){
        setApiEndPoint(event.target.value);
        window.localStorage.setItem('apiEndPoint', event.target.value);
    }

    function validateApiEndPoint(event){
        event.preventDefault();
        if(window.localStorage.getItem('apiEndPoint') === ''){
            setError(true);
        } else {
            window.location.href = '/options'
        }
    }

    return(
        <div className={styles.home}>
            <div className={styles.home_div}>
                <img src={logo} alt="Logo DevBank" className={styles.home_logo} />
                <form className={styles.home_form} onSubmit={validateApiEndPoint}>
                    <input placeholder="Coloque aqui o endpoint da sua API" className={styles.home_input} value={window.localStorage.getItem('apiEndPoint')} onChange={setInputApiEndPoint}/>
                    {error ? <label className={styles.home_label} >Endpoint obrigatório</label> : ''}
                    <button className={styles.home_button} type='submit'><p className={styles.home_button__title}>Pinto</p></button>

                </form>
            </div>
        </div>   
    )
}