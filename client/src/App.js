import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
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
      <Header />
      <div className="container">
        <AppNavBar />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <Footer />
      </div>
      
    </GlobalProvider>
  );
}

export default App;