import logo from "../../assets/logo_devbank.png";
import Button from "../../components/button/button";
import styles from "./home.module.scss";

export default function Home() {
    return(
        <div className={styles.home}>
            <div className={styles.home_div}>
                <img src={logo} alt="Logo DevBank" className={styles.home_logo} />
                <form className={styles.home_form}>
                    <input placeholder="Coloque aqui o endpoint da sua API" required className={styles.home_input}/>
                    <Button to={'/options'} title="Entrar" type="submit" className={styles.home_button}/>
                </form>
            </div>
        </div>   
    )
}