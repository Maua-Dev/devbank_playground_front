import styles from './informations.module.scss'

export default function Informations({currentBalance, actionAmount, action}){
    return(
        <div className={styles.informations}>
            <div className={styles.informations_balance}><p >Saldo atual: R$ {currentBalance}</p></div>
            <div className={styles.informations_deposited}><p >Quantidade {action}: R$ {actionAmount}</p></div>
        </div>
    )
}