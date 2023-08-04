import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import styles from "./docs.module.scss";
import DocCard from "../../components/doc-card/doc_card";

export default function Docs() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.docs}>
      <div className={styles.docs_title} key={""}>
        Documentação
      </div>
      <DocCard
        type={"get"}
        title={"/"}
        description={"descrição"}
        response={`{
        "name": "Vitor Soller",
        "agency": "0000",
        "account": "00000-0",
        "current_balance": 1000.0
}`}
      />
      <DocCard
        type={"post"}

        title={"/deposit"}
        description={"descrição"}
        request={`{
        "2": 1,
        "5": 2,
        "10": 3,
        "20": 4,
        "50": 5 ,
        "100": 6,
        "200": 7
}`}
        response={`{
        "current_balance": 1000.0,
        "timestamp": 1690482853890 
}`}
      />
      <DocCard
        type={"post"}

        title={"/withdraw"}
        description={"descrição"}
        request={`{
        "2": 1,
        "5": 2,
        "10": 3,
        "20": 4,
        "50": 5 ,
        "100": 6,
        "200": 7
}`}
        response={`{
        "current_balance": 1000.0,
        "timestamp": 1690482853890 
}`}
      />
      <DocCard
        type={"get"}
        title={"/history"}
        description={"descrição"}
        response={`{
  [
    {
         "type":"deposit",
         "value": 100.0,
         "current_balance": 1200.00,
         "timestamp": 1690482853890
         },
         {
         "type": "withdraw",
         "value": 200.0,
         "current_balance": 1000.0,
         "timestamp":1690482853890
  ]
}`}
      />
      <div className={styles.docs_button}>
        <Button title={"Voltar"} onClick={handleOnClick} />
      </div>
    </div>
  );
}
