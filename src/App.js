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
  const saveExpenseDataHandler = function (savedFormData) {
    //# Use arrow ƒ() syntax to update the DUMMY_EXPENSES object
    //# useState() && updating state based on previous state

    setExpenses((prevEntries) => {
      // Add the new expense to the start of the array (glitch bait)
      return [savedFormData, ...prevEntries];
    });
  };
  const changeFilterHandler = function (selectedYear) {
    // If "any" is chosen => skip the filtering and just render as is
    if(selectedYear==="Any") {
      setExpenses(() => {
        return [...DUMMY_EXPENSES];
      });
      return
    }
    // If a year is chosen => apply filter then render array
    let filteredExp = DUMMY_EXPENSES.filter((obj) => {
      let entryYear = obj.date.getFullYear(); 
      return entryYear === Number(selectedYear);
    });
    setExpenses(() => {
      return [...filteredExp];
    });
  };

  // Set up state
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <LeanExpenses
        onChangeFilter={changeFilterHandler}
        expenseObj={expenses}
      />
      <ActivateSight />
    </div>
  );
}
export default App;
