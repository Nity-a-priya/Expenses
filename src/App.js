import React, { useState } from 'react'; // done by default


import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const dummy_expenses = [
  {
    id: "I1",
    title: "House Rent",
    date: new Date(2021,2,28),
    amount: 26800.00,
  },
  {
    id: "I2",
    title: "Car Insurance",
    date: new Date(2021,3,14),
    amount: 2000.00,
  },
  {
    id: "I3",
    title: "Electricity",
    date: new Date(2021,3,15),
    amount: 1565.00,
  },
  {
    id: "I4",
    title: "DTH",
    date: new Date(2021,2,25),
    amount: 268.00,
  },
];

//function App() {
  const App = () => {

  const [expenses, setExpense] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    /*const additionalExpense = [...newExpense];
    additionalExpense.push(expense);
    setExpense(additionalExpense);
    console.log(additionalExpense);*/

    //setExpense([expense, ...previousExpenses]);

    setExpense(previousExpenses => {
      return [expense, ...previousExpenses];
    });
  
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      
      <Expenses items = {expenses}/>
      
    </div>
  );

  // The return jsx is internally written in React as:

/*  return (React.createElement('div',{}, 
    React.createElement('h2',{},'lets get started'), 
    React.createElement(Expenses, {items: expenses})
    ); */
}

export default App;
