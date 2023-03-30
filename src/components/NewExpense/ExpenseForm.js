import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); // it is string but not number because, by default, change evnt value of input element, it always stores as a string
  const [enteredDate, setEnteredDate] = useState("");

  //instead of writing 3 useState(), we can also write it using one single useState as below:

  /*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);

    /* setUserInput({
          ...userInput, // if we dont use it, our other elements like enteredAmount and enteredDate values will be lost. so keep a copy of it and change only the enteredTitle value
          enteredTitle: event.target.value
      }); */

    //instead we can get the latest state and change the value of it, since react schedules the change
    //we need to use this when our state update is dependent on prev state

    /*  setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value};
    }); */
  };
  const amountChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredAmount(event.target.value);
    /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });*/

    /*      setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};

        }); */
  };
  const dateChangeHandler = (event) => {
    //  console.log(event.target.value);
    setEnteredDate(event.target.value);
    /*   setUserInput({
            ...userInput,
            enteredDate: event.target.value
        }); */

    /*   setUserInput((prevState) => {
            return {...prevState, enteredDate : event.target.value};
        }); */
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevents the browser from refreshing the page

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
