import "./ExpenseForm.css";
import ExpenseFormOpen from "./ExpenseFormOpen";
import React, { useState } from "react";

//# This function controls what the UI looks like before the form is opened
function ExpenseForm(props) {
  // Set up state for whether the form is opened or not
  const [formOpen, setFormOpen] = useState(false);
  //% If the form button is pressed, render the form content
  if (formOpen === true) {
    return (
      <div className='openF'>
        <ExpenseFormOpen
          setFormOpen={setFormOpen}
          onSaveExpenseData={props.onSaveExpenseData}
        />
      </div>
    );
  }
  //% If the form button has not been pressed yet
  const openFormHandler = function () {
    setFormOpen(true);
  };

  //% If the form button is not pressed, render the following:
  return (
    <div className="form-opener">
      <button onClick={openFormHandler} className="formOpenBtn">Add new Expense</button>
    </div>
  );
}

export default ExpenseForm;
