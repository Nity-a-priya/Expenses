import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

//function Expenses(props){
  const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');
    
    const dateSelectionHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
    };

      return (
        <div>
          
        <Card className = "expenses">
        <ExpensesFilter selected = {selectedYear} onDateSelection = {dateSelectionHandler}/>

     
       {/*  <ExpenseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date} />
            <ExpenseItem title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date} />
            <ExpenseItem title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date} />
            <ExpenseItem title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date} /> */}

            {/* can also be written as */}
            {/*{props.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date = {expense.date}/>))} */}

  
            {props.items.filter(filteredExpenses => filteredExpenses.date.getFullYear() == selectedYear).map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date = {expense.date}/>))}
  
        </Card>
        </div>
      );

}

export default Expenses;