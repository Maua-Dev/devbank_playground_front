import React from 'react';
import styles from './cards.module.scss';
import Button from '../../components/button/button';
import Informations from '../../components/informations/informations';
import Header from '../../components/header/header';
import MoneyCard from '../../components/money-card/money_card';

export default function Cards ({action}) {
  return (
    <div className={styles.cards}>
      <Header name={'Victor Soller'} account={'000'} agency={'000'}/>
      <Informations currentBalance={0} depositedAmount={0} finalAmount={0} />
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
