import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//function ExpenseItem(props) { // we get key value pairs in the props

const ExpenseItem = (props) => {
    /*const expenseDate = new Date(2021,2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 269.00;*/

    const [title, setTitle] = useState(props.title);
    

    const clickHandler = () => {
      setTitle("Updated!");
      console.log(title);
    }
    
  return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
       <h2>{props.title}</h2>  
      {/*  <h2>{title}</h2> */}
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
     {/* <button onClick = {clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
