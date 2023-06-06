import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); 
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

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
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
          <label>Add Title1</label>
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
