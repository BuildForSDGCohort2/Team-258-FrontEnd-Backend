import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import Footer from "./components/Footer";

import './App.css';
//import { Router } from 'express';

function App() {
  return (
  <>
  <Router>
    <GlobalProvider>
      <Navbar />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <Footer />
      </div>
      
    </GlobalProvider>
  </Router>
</>
  );
}

export default App;