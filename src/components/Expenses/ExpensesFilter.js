import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearSelectHandler = (event) => {
    props.onDateSelection(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectHandler}>
          {[...new Set([...props.items.map((e) => e.date.getFullYear()), 2023])]
            .sort((a, b) => a - b)
            .map((filteredExpense) => (
              <option key={filteredExpense} value={`${filteredExpense}`}>
                {filteredExpense}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
