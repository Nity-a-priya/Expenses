import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({
  onAddExpense,
  newExpense,
  isFormShown,
  hideForm,
  displayForm,
}) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isFormShown == false && (
        <button onClick={displayForm}>Add Expense</button>
      )}
      {isFormShown && (
        <ExpenseForm
          newExpense={newExpense}
          onSaveExpenseData={saveExpenseDataHandler}
          click={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
