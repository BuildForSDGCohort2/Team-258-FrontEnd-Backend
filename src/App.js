import React from 'react';
import {Header} from './Component/Header';
import {Balance} from './Component/Balance';
import {IncomeExpenses} from './Component/IncomeExpenses';
import {TranscationList} from './Component/TranscationList';
import {AddTransactions} from './Component/AddTransactions';

import './App.css';

function App() {
  return (
    <div>
      <Header/>

      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TranscationList/>
        <AddTransactions/>
      </div>
    </div>
  );
}

export default App;
