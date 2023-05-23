import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

//function ExpenseItem(props) { // we get key value pairs in the props

const ExpenseItem = (props) => {
  /*const expenseDate = new Date(2021,2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 269.00;*/

  const [title, setTitle] = useState(props.title);
  const [show, setShow] = useState(false);

  const handleMouseOver = (event) => {
    setShow(true);
  };

  const handleMouseOut = (event) => {
    setShow(false);
  };


  return (
    <li>
      <Card
        handleMouseOut={handleMouseOut}
        handleMouseOver={handleMouseOver}
        className={`expense-item ${
          (show || props.currentEdit == props.id) && "onedit"
        }`}
      >
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          {/*  <h2>{title}</h2> */}
          <div className="expense-item__price">Rs. {props.amount}</div>
        </div>
        {(show || props.currentEdit == props.id) && (
          <EditIcon
            onClick={props.editExpense}
            sx={{ fontSize: 35 }}
            className="edit"
          />
        )}
        {show && props.currentEdit != props.id && (
          <DeleteTwoToneIcon
            onClick={props.deleteExpense}
            sx={{ fontSize: 35 }}
            className="delete"
          />
        )}
        {/* <button onClick = {clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
