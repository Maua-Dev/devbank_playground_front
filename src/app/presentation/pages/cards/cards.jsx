import React, { useContext } from 'react';
import styles from './cards.module.scss';
import Button from '../../components/button/button';
import Informations from '../../components/informations/informations';
import Header from '../../components/header/header';
import MoneyCard from '../../components/money-card/money_card';
import { GlobalContext } from '../../../context/GlobalContext';

export default function Cards ({action}) {
  
  const { two, setTwo, five, setFive, ten, setTen, twenty, setTwenty, fifty, setFifty, oneHundred, setOneHundred, twoHundred, setTwoHundred, wallet, userAccount } = useContext(GlobalContext);


  return (
    <div className={styles.cards}>
      <Header name={userAccount.name} account={userAccount.account} agency={userAccount.agency}/>
      <Informations currentBalance={0} actionAmount={wallet.getTotal()} action={action === 'Depositar' ? 'depositada' : 'sacada'} />
      <div className={styles.main}>
        <span className={styles.main_title}>Selecione as cédulas e a quantidade que você deseja.</span>
        <MoneyCard value={2} wallet={two} setWallet={setTwo}/>
        <MoneyCard value={5} wallet={five} setWallet={setFive}/>
        <MoneyCard value={10} wallet={ten} setWallet={setTen}/>
        <MoneyCard value={20} wallet={twenty} setWallet={setTwenty}/>
        <MoneyCard value={50} wallet={fifty} setWallet={setFifty}/>
        <MoneyCard value={100} wallet={oneHundred} setWallet={setOneHundred}/>
        <MoneyCard value={200} wallet={twoHundred} setWallet={setTwoHundred}/>
      </div>
      <div className={styles.buttons}>
        <Button title={'Voltar'} to={'/options'}/>
        <Button title={action} to={'/options'}/>
      </div>
    </div>
    
  );
}
