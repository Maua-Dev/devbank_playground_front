import styles from './money_card.module.scss';

export default function MoneyCard ({value}) {   
     return (
    <div className={styles.card}>
        <div className={styles.card_primary}>
            <div className={styles.card_secondary}>
                <p className={styles.card_text__sign}>R$</p><p className={styles.card_text}> {value}</p>
            </div>
        </div>
        <div className={styles.button_counter}>
            <div className={styles.button}>
                <p className={styles.button_text}>Quantidade</p>
            </div>
            <div className={styles.counter}>
            <button className={styles.counter_symbol}>-</button>
                <p className={styles.counter_text}>0</p>
            <button className={styles.counter_symbol}>+</button>
            </div>
        </div>
     </div>
     )
}
