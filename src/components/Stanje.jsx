import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Stanje = () => {
 const {transactions} = useContext(GlobalContext);
 const iznosi=transactions.map(transaction => transaction.amount);
 const ukupno=iznosi.reduce((acc,item) => (acc+=item),0).toFixed(2);
  return (
    <>
        <h4>Stanje</h4>
        <h1>{ukupno} RSD</h1>
    </>
  )
}
