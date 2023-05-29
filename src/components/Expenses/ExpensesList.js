import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} 
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id}
          deleteExpense={() => props.deleteExpense(expense)}
          editExpense={() => props.editExpense(expense)}
          currentEdit={props.currentEdit}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
