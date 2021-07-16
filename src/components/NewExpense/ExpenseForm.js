import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm() {
  // PART 1: Set up useState()
  // useState(""): Initialize your first destructure variables as an empty string 
  // It starts your input fields cleared on startup b/c value={enteredTitle} for ex.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // PART 2A: Create your onChange event handlers
  // Update the "entered" variable values to whats currently typed or selected
  // Should update after every key press or option select in the input field
  // enteredVariables' values changing will be reflected in <input value={} in JSX
  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
  const dateChangeHandler = (e) => setEnteredDate(e.target.value);
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
    
  // PART 3: Clear input fields after submit
  // Once submitted, save all the entered values into an object literal
  // Clear out all the input field values with 2 way binding
  const submitHandler = (e) => {
    e.preventDefault(); //prevent pg reload
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Set all enteredVars to "", which sets the value attributes to "" as well
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
    console.log("expenseData has been submitted!", expenseData);
  };
  // ---------------------------------------------------
  // MOST OF JSX IS NOT RELEVANT TO THIS EX.
  // PAY ATTENTION TO THE <form> and <input> tags with all the event handlers
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
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
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
