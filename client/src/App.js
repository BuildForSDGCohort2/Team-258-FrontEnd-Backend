import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Footer from "./components/Footer";

import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import ExpenseScreen from './components/Pages/ExpenseScreen';
import Team from './components/Pages/Team';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';

import './App.css';

function App() {
  return (
  <>
  <Router>
    <GlobalProvider>
      <Navbar />
      <Header />
    <div>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/abouttheapp' component={AboutUs} />
          <Route path='/expensescreen' component={ExpenseScreen} />
          <Route path='/team' component={Team} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
    </Switch>

    </div>
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