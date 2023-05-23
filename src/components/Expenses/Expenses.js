import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

//function Expenses(props){
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(
    "2023"
  );

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

        {/*  <ExpenseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date} />
            <ExpenseItem title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date} />
            <ExpenseItem title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date} />
            <ExpenseItem title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date} /> */}

        {/* can also be written as */}
        {/*{props.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date = {expense.date}/>))} */}

        {/*  {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
            {filteredExpenses.length > 0 &&
              filteredExpenses.map((expense) => (
                <ExpenseItem 
                  key = {expense.id} //Identifies divs with the unique ids and adds a div at the top without updating all the items.
                  title={expense.title} 
                  amount={expense.amount} 
                  date = {expense.date}/>
                ))
            } */}

        {/*  {expensesContent} */}

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList
          deleteExpense={props.deleteExpense}
          editExpense={props.editExpense}
          items={filteredExpenses}
          currentEdit={props.currentEdit}
        />
      </Card>
    </div>
  );
};

export default Expenses;
