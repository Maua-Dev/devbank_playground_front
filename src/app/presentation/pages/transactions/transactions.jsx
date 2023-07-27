import Button from "../../components/button/button";
import Header from "../../components/header/header";
import styles from "./transactions.module.scss";	

export default function Transactions(){
        return (
            <div className={styles.transactions}>
                <Header name={'Victor Soller'} account={'000'} agency={'000'}/>
                <div className={styles.transactions_title}>Historico de transações</div>
                <div className={styles.transactions_historic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur numquam omnis quasi fugiat quos animi. Tempore accusantium at molestiae maxime nostrum. Numquam eligendi atque delectus obcaecati eveniet voluptatum sint voluptatibus, provident, deleniti dignissimos, ipsa a temporibus voluptatem nihil blanditiis magnam quidem nam rerum vel laboriosam illum inventore error praesentium!</div>
                <div className={styles.transactions_historic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur numquam omnis quasi fugiat quos animi. Tempore accusantium at molestiae maxime nostrum. Numquam eligendi atque delectus obcaecati eveniet voluptatum sint voluptatibus, provident, deleniti dignissimos, ipsa a temporibus voluptatem nihil blanditiis magnam quidem nam rerum vel laboriosam illum inventore error praesentium!</div>
                <div className={styles.transactions_historic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur numquam omnis quasi fugiat quos animi. Tempore accusantium at molestiae maxime nostrum. Numquam eligendi atque delectus obcaecati eveniet voluptatum sint voluptatibus, provident, deleniti dignissimos, ipsa a temporibus voluptatem nihil blanditiis magnam quidem nam rerum vel laboriosam illum inventore error praesentium!</div>
                <div className={styles.transactions_historic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur numquam omnis quasi fugiat quos animi. Tempore accusantium at molestiae maxime nostrum. Numquam eligendi atque delectus obcaecati eveniet voluptatum sint voluptatibus, provident, deleniti dignissimos, ipsa a temporibus voluptatem nihil blanditiis magnam quidem nam rerum vel laboriosam illum inventore error praesentium!</div>
                <div className={styles.transactions_historic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur numquam omnis quasi fugiat quos animi. Tempore accusantium at molestiae maxime nostrum. Numquam eligendi atque delectus obcaecati eveniet voluptatum sint voluptatibus, provident, deleniti dignissimos, ipsa a temporibus voluptatem nihil blanditiis magnam quidem nam rerum vel laboriosam illum inventore error praesentium!</div>
                <div className={styles.transactions_historic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur numquam omnis quasi fugiat quos animi. Tempore accusantium at molestiae maxime nostrum. Numquam eligendi atque delectus obcaecati eveniet voluptatum sint voluptatibus, provident, deleniti dignissimos, ipsa a temporibus voluptatem nihil blanditiis magnam quidem nam rerum vel laboriosam illum inventore error praesentium!</div>
                <div className={styles.transactions_button}>
                    <Button title={'Voltar'}/>
                </div>
            </div>
        )
}