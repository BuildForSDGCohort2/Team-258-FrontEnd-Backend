import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
//import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      < AppNavBar />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      <Footer />
    </GlobalProvider>
  );
}

export default App;