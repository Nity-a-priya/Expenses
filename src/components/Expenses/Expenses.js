import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const dateSelectionHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (filteredExpense) => filteredExpense.date.getFullYear() == selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onDateSelection={dateSelectionHandler}
          items={props.items}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList
          deleteExpense={props.deleteExpense}
          editExpense={props.editExpense}
          items={filteredExpenses}
          currentEdit={props.currentEdit}
        />
        {filteredExpenses.length > 0 && (
          <h3>
            Total: {filteredExpenses.reduce((s, e) => s + e.amount, 0)} /-
          </h3>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
