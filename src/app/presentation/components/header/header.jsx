import styles from "./header.module.scss";
import logo from "../../assets/logo_devbank.png";

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
          <div className={styles.header_interrogation}>
            <p className={styles.header_interrogation__symbol}>?</p>
            <div className={styles.header_interrogation_popup}>
                <div className={styles.header_interrogation__header}><p className={styles.header_interrogation__title}>Título</p></div>
                <p className={styles.header_interrogation__text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
