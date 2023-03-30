import React from 'react';

import './ExpenseDate.css';

//function ExpenseDate(props) {
    const ExpenseDate = (props) => {
    /*const expenseDate = new Date(2021,2,28);*/
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.getDate(); /* props.date.toLocaleString('en-US', {day: '2-digit'})*/

    return (
        // <div>{expenseDate.toISOString()}</div>  
      // <div>{props.date.toISOString()}</div> 
      <div className = "expense-date">
         <div className = "expense-date__month">{month}</div>
         <div className = "expense-date__year">{year}</div>
         <div className = "expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;