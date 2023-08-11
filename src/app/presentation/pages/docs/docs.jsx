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
        description={`
É uma request GET, qualquer parâmetro de envio será ignorado. Traz as 
informações iniciais da API: 

  name [str] - nome do usuário, 
  agency [str] - 4 dígitos,
  account [str] - 6 dígitos no esquema XXXXX-X
  current_balance [float]
        `}
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
        description={`
Trata-se de um POST, são passados a quantidade de células, se não possuir 
a CHAVE daquele valor, a quantidade é 0. O valor deve ser depositado 
na conta do usuário. Caso o valor depositado seja o dobro da quantidade em conta
deve retornar o status code "403" (Forbidden) e uma string "Depósito suspeito".
Em casos convencionais retorna os seguintes valores: 

  current_balance [float] - valor atual na conta (após o depósito), 
  timestamp[float] - instante da operação em milissegundos
  
`}
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
        description={`
Trata-se de um POST, são passados a quantidade de células, se não possuir 
a CHAVE daquele valor, a quantidade é 0. O valor deve ser deduzido 
da conta do usuário. Caso o saldo seja insuficiente deve retornar um status code
"403" e a string "Saldo insuficiente para transação". Em casos convencionais
retorna os seguintes valores: 
  
  current_balance [float] - valor atual na conta (após o saque), 
  timestamp[float] - instante da operação em milissegundos
  
  `}
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
        description={`
É uma request GET, qualquer parâmetro de envio será ignorado. 
Traz as últimas transações da conta em forma de lista. São elas: 
        
  type [str] - tipo da transação realizada, 
  value [float] - valor envolvido na operação, 
  current_balance [float] - valor atual na conta (após o depósito), 
  timestamp[float] - instante da operação em milissegundos
        `}
        response={`{
  "all_transactions": [
    {
      "type": "deposit",
      "value": 100.0,
      "current_balance": "1000.0",
      "timestamp": 1690482853890
    },
    {
      "type": "withdraw",
      "timestamp": 1691707985704.6152,
      "current_balance": 700.0,
      "value": 300
    },
    {
      "type": "deposit",
      "current_balance": 710.0,
      "timestamp": 1691707990727.101,
      "value": 10
    },
    {
      "type": "withdraw",
      "timestamp": 1691707994750.5022,
      "current_balance": 680.0,
      "value": 30
    }
  ]
}`}
      />
      <div className={styles.docs_button}>
        <Button title={"Voltar"} onClick={handleOnClick} />
      </div>
    </div>
  );
}
