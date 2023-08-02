import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Button from "../button/button";
import styles from "./error_popup.module.scss";
import { FiAlertTriangle } from "react-icons/fi";

export default function ErrorPopup({ message }) {

  const { setIsError, setErrorMessage } = useContext(GlobalContext);

  const handleOnClick = () => {
    setErrorMessage("");
    setIsError(false);
  }

  return (
    <div className={styles.popup}>
      <FiAlertTriangle className={styles.popup_icon} />
      <p className={styles.popup_title}>Erro!</p>
      <p className={styles.popup_text}>{message}</p>
      <Button title={"Ok"} to={"/options"} onClick={handleOnClick}/>
    </div>
  );
}
