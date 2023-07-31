import { Link } from 'react-router-dom'
import styles from './button.module.scss'

export default function Button({title, to}) {
    return(
            <button className={styles.button}>
                <Link to={to} className={styles.button_link} type='submit'>
                    <p className={styles.button_title}>{title}</p>
                </Link>
            </button>
    )
}