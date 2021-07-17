import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // PART 1: Set up multiple useState instances by supplying an object arg
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  // PART 2B: Create your onChange event handlers (differently)
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    // Set all KVP's to what they were previously via spread operator (to keep all other KVP's intact)
    // Redefine the KVP for enteredTitle
    // We use an anon arrow function so React changes this state immediately (important)
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  // PART 3: On submit, save our enteredVar data and clear the input forms
  const submitHandler = (e) => {
    e.preventDefault(); //prevent default pg reload
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    // Set all enteredVars to "", which sets the value attributes to "" as well
    setUserInput(() => {
      return { enteredTitle: "", enteredAmount: "", enteredDate: "" };
    });
    console.log("expenseData has been submitted!", expenseData);
  };
  //—————————————————————【】——————————————————————————
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={userInput.enteredTitle}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={userInput.enteredAmount}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={userInput.enteredDate}
            ></input>
          </div>
        </div>
        <div className="new-expense__Actions">
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
