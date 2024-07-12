import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const PrihodiTroskovi = () => {
    const {transactions} = useContext(GlobalContext);
    const iznosi=transactions.map(transaction => transaction.amount);
    const prihodi=iznosi
        .filter(item => item > 0)
        .reduce((acc,item) => (acc+=item),0)
        .toFixed(2);
    const troskovi=(
        iznosi.filter(item => item < 0).reduce((acc,item) => (acc+=item),0) * -1
    ).toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Prihodi</h4>
          <p className="money plus">{prihodi} RSD</p>
        </div>
        <div>
          <h4>Troskovi</h4>
          <p className="money minus">-{troskovi} RSD</p>
        </div>
      </div>
  )
}
