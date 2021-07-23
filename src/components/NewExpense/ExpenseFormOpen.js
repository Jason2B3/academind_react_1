import React, { useState } from "react";
import './ExpenseFormOpen.css'

const ExpenseFormOpen = (props) => {
  // Event-L PART 1: Set up useState()
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Event-L PART 2A: Create your onChange event handlers
  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
  const dateChangeHandler = (e) => setEnteredDate(e.target.value);
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);

  // Event-L PART 3: Clear input fields after submit
  const submitHandler = (e) => {
    e.preventDefault(); //prevent pg reload
    const expenseData = {
      id: Math.random().toString(), // add a unique ID
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // Set all enteredVars to "", which sets the value attributes to "" as well
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    //# DataUp STEP 3: Use your custom attribute's handler function
    props.onSaveExpenseData(expenseData); //# supply the object we just created
    closeFormHandler(); // close the form after expense submission
  };
  // Sets the formOpen state to false in ExpeseForm.js (drill high)
  const closeFormHandler = function () {
    props.setFormOpen(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__Actions">
        <button type="submit">Add Expense</button>
        <button onClick={closeFormHandler}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseFormOpen;
