import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); // it is string but not number because, by default, change evnt value of input element, it always stores as a string
  const [enteredDate, setEnteredDate] = useState("");
  const [isAdd, setAdd] = useState(true);

  useEffect(() => {
    if (Object.keys(props.newExpense).length) {
      setEnteredTitle(props.newExpense.title);
      setEnteredAmount(props.newExpense.amount);
      setEnteredDate(
        `${props.newExpense.date.getFullYear()}-${String(
          props.newExpense.date.getMonth() + 1
        ).padStart(2, "0")}-${String(props.newExpense.date.getDate()).padStart(
          2,
          "0"
        )}`
      );
      setAdd(false);
    }
  }, [props.newExpense]);

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
    // console.log(event);
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
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setAdd(true);
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
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1999-01-01"
            max={`${new Date().getFullYear()}-${String(
              new Date().getMonth() + 1
            ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
              2,
              "0"
            )}`}
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={props.click}>Cancel</button>
          <button type="submit">
            {isAdd ? "Add Expense" : "Update Expense"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
