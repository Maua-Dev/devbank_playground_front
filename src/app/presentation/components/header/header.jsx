import styles from "./header.module.scss";
import logo from "../../assets/logo_devbank.png";
import { Link } from "react-router-dom";

export default function Header({ name, agency, account }) {
  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="Logo DevBank" className={styles.header_logo} />
        <div className={styles.header_right}>
          <div className={styles.header_account}>
            <p className={styles.header_account__text}>Nome: {name}</p>
            <p className={styles.header_account__text}>Agência: {agency}</p>
            <p className={styles.header_account__text}>Conta: {account}</p>
          </div>
          <Link to={'/docs'} className={styles.header_link}>
            <div className={styles.header_interrogation}>
              <p className={styles.header_interrogation__symbol}>?</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
