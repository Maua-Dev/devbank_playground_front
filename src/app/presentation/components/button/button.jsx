import { Link } from 'react-router-dom'
import styles from './button.module.scss'

export default function Button({title, to}) {
    return(
                <Link to={to} className={styles.button} type='submit'>
                    <p className={styles.button_title}>{title}</p>
                </Link>
    )
}