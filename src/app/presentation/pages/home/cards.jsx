import React from 'react';
import MoneyCard from '../../components/money_card/money_card';
import styles from './cards.module.scss';
import Button from '../../components/button/button';

export default function Cards ({action}) {
  return (
    <div className={styles.cards}>
      <div className={styles.values}>

      </div>
      <div className={styles.main}>
        <span className={styles.main_title}>Selecione as cédulas e a quantidade que você deseja.</span>
        <MoneyCard value={2} />
        <MoneyCard value={5} />
        <MoneyCard value={10} />
        <MoneyCard value={20} />
        <MoneyCard value={50} />
        <MoneyCard value={100} />
        <MoneyCard value={200} />
      </div>
      <div className={styles.buttons}>
        <Button title={'Voltar'}/>
        <Button title={action}/>
      </div>
    </div>
    
  );
}
