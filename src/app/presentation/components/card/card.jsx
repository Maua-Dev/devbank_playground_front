import styles from './card.module.scss'

export default function Card({action, onClick}) {
    return (
            <button className={styles.card_button} type='submit' onClick={onClick}>
                <div className={styles.card_primary}>
                <div className={styles.card_secondary}>
                    <p className={styles.card_title}>{action}</p>
                    </div>
                </div>
            </button>
        
        
    )
}