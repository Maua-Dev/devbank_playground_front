import styles from "./money_card.module.scss";

export default function MoneyCard({ value, wallet, setWallet }) {

  function onPlusClick(){
    setWallet(wallet + 1);
  }

  function onMinusClick(){
    if(wallet > 0){
      setWallet(wallet - 1);
    }
  }
    
  return (
    <div className={styles.card}>
      <div className={styles.card_primary}>
        <div className={styles.card_secondary}>
          <p className={styles.card_text__sign}>R$</p>
          <p className={styles.card_text}> {value}</p>
        </div>
      </div>
      <div className={styles.button_counter}>
        <div className={styles.button}>
          <p className={styles.button_text}>Quantidade</p>
        </div>
        <div className={styles.counter}>
          <button className={styles.counter_symbol} onClick={onMinusClick}>-</button>
          <p className={styles.counter_text}>{wallet}</p>
          <button className={styles.counter_symbol} onClick={onPlusClick}>+</button>
        </div>
      </div>
    </div>
  );
}
