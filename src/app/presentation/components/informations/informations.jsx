import styles from './informations.module.scss'

export default function Informations({currentBalance, depositedAmount, finalAmount}){
    return(
        <div className={styles.informations}>
            <div className={styles.informations_balance}><p >Saldo atual: R$ {currentBalance}</p></div>
            <div className={styles.informations_deposited}><p >Quantidade depositada: R$ {depositedAmount}</p></div>
            <div className={styles.informations_final}><p>Quantidade final: R$ {finalAmount}</p></div>
        </div>
    )
}