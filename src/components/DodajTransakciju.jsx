import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const DodajTransakciju = () => {
    const[text,setText]=useState('');
    const[iznos,setIznos]=useState(0);

    const {addTransaction}=useContext(GlobalContext);
    
    const onSubmit=e =>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +iznos
        }

        addTransaction(newTransaction);
    }
  return (
    <>
    <h3>Dodaj transakciju</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Unesite transakciju..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Iznos <br/>
            (negativan - trosak, pozitivan - prihod)</label>
          <input type="number" value={iznos} onChange={(e)=> setIznos(e.target.value)} placeholder="Unesite iznos..." />
        </div>
        <button className="btn">Dodaj transakciju</button>
      </form>
    </>
  )
}
