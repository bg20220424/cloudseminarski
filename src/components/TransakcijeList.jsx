import React,{useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransakcijeList = () => {
const {transactions} = useContext(GlobalContext);


  return (
    <>
    <h3>Istorija</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
}
