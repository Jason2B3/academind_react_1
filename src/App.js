import LeanExpenses from "./components/Expenses/LeanExpenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import ActivateSight from "./ActivateSight";
import { useState } from "react";
const DUMMY_EXPENSES = [
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
function App() {
  //% Make the expenses object stateful
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //% Function that saves new expense data into its dediccated stateful object
  const onSaveExpenseData = function (savedFormData) {
    setExpenses((prevEntries) => {
      // add the new expense to the start of the array 
      console.log('Brought up to App.js', prevEntries)
      return [savedFormData, ...prevEntries];
    });
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
      <LeanExpenses expenseObj={expenses} />
      <ActivateSight />
    </div>
  );
}
export default App;

