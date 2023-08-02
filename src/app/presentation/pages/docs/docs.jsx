import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import styles from "./docs.module.scss";


    

export default function Docs() {

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(-1);
    }

    return(
        <div className={styles.docs}>
          <div className={styles.docs_title} key={""}>
            Documentação
          </div>
          <div className={styles.docs_button}>
            <Button title={"Voltar"} onClick={handleOnClick} />
          </div>
        </div>
    )
}