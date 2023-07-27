import styles from './button.module.scss'

export default function Button({title}) {
    return(
        <div className={styles.button}>
            <p className={styles.button_title}>{title}</p>
        </div>
    )
}