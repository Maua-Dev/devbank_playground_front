import { Link } from 'react-router-dom'
import styles from './card.module.scss'

export default function Card({action, to}) {
    return (
        <Link to={to} className={styles.card}>
            <div className={styles.card_primary}>
            <div className={styles.card_secondary}>
                <p className={styles.card_title}>{action}</p>
            </div>
        </div>
        </Link>
        
    )
}