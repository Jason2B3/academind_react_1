import LeanExpenses from "./components/Expenses/LeanExpenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import React, { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // Set up state for the data brought from ExpenseForm.js -> LeanExpenses.js
  const [movedExpenseData, setMovedExpenseData] = useState("");
  // DataUp STEP 2: Create a handler function to set your new attribute equal to
  const saveExpenseDataHandler = function (savedFormData) {
    const expenseData = {
      ...savedFormData, // save the data already present in the parameter
      id: Math.random().toString(), // add a unique ID
      // the parameter will equal the object of data that's collected in ExpenseForm.js
    };
    console.log("data moved to App.js!", expenseData);
    setMovedExpenseData(expenseData); //# REDEFINE EXPENSE DATA FROM NOTHING TO SOMETHING
  };
  // DataUp STEP 1: Create a custom attribute where your CCM tags are used
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <LeanExpenses expenses={expenses} passedFormData={movedExpenseData} />
    </div>
  );
}
export default App;

//~ EXPLANATION
// ExpenseForm.js gathers data about the info in the form fields, after we hit submit
// props.onSaveExpenseData(expenseData)

// We pass it up to App.js
// onSaveExpenseData={saveExpenseDataHandler}

// We pass it down to LeanExpense.js
// passedFormData={movedExpenseData}