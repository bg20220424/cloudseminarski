import { useState } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import  {Stanje} from './components/Stanje.jsx'
import { PrihodiTroskovi } from './components/PrihodiTroskovi.jsx'
import { TransakcijeList } from './components/TransakcijeList.jsx'
import { DodajTransakciju } from './components/DodajTransakciju.jsx'

import { GlobalProvider } from './context/GlobalState.jsx'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Stanje/>
        <PrihodiTroskovi/>  
        <TransakcijeList/>
        <DodajTransakciju/>
      </div>
    </GlobalProvider>
  )
}

export default App
