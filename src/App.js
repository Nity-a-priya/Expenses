import React, { useState, useEffect } from "react"; 

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Troubleshoot } from "@mui/icons-material";

const dummy_expenses = [
  {
    id: "I1",
    title: "House Rent",
    date: new Date(2021, 2, 28),
    amount: 26800.0,
  },
  {
    id: "I2",
    title: "Car Insurance",
    date: new Date(2021, 3, 14),
    amount: 2000.0,
  },
  {
    id: "I3",
    title: "Electricity",
    date: new Date(2021, 3, 15),
    amount: 1565.0,
  },
  {
    id: "I4",
    title: "DTH",
    date: new Date(2021, 2, 25),
    amount: 268.0,
  },
];

const App = () => {
  const [expenses, setExpense] = useState([]);
  const [newExpense, setNewExpense] = useState({});
  const [isFormShown, setFormDisplay] = useState(false);
  const [currentEdit, setCurrentEdit] = useState();

  useEffect(() => {
    if (expenses.length) {
      localStorage.setItem("expenseData", JSON.stringify(expenses));
    }
  }, [expenses]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("expenseData") || "[]");
    setExpense(data.map((e) => ({ ...e, date: new Date(e.date) })));
  }, []);

  const addExpenseHandler = (expense) => {

    setExpense((previousExpenses) => {
      const previousExpensesUpdate = [...previousExpenses];
      if (Object.keys(newExpense).length) {
        const updateExpense = previousExpensesUpdate.find(
          (e) => e.id == newExpense.id
        );
        updateExpense.amount = expense.amount;
        updateExpense.title = expense.title;
        updateExpense.date = expense.date;
        setNewExpense({});
        setCurrentEdit();
        return previousExpensesUpdate;
      }
      return [expense, ...previousExpensesUpdate];
    });
  };

  const deleteExpense = (data) => {
    setExpense(expenses.filter((deleteExpense) => deleteExpense.id != data.id));
  };

  const editExpense = (data) => {
    setNewExpense(data);
    setFormDisplay(true);
    setCurrentEdit(data.id);
  };

  function displayForm() {
    setFormDisplay(true);
  }
  function hideForm() {
    setFormDisplay(false);
    setNewExpense({});
    setCurrentEdit("");
  }

  return (
    <div>
      <NewExpense
        isFormShown={isFormShown}
        newExpense={newExpense}
        onAddExpense={addExpenseHandler}
        displayForm={displayForm}
        hideForm={hideForm}
      />

      <Expenses
        editExpense={editExpense}
        deleteExpense={deleteExpense}
        items={expenses}
        currentEdit={currentEdit}
      />
    </div>
  );
};

export default App;
