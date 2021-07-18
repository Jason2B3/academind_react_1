import LeanExpenses from "./components/Expenses/LeanExpenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
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
  //# DataUp STEP 2: Create a handler function to set your new attribute equal to
  const saveExpenseDataHandler = function (savedFormData) {
    const expenseData = {
      ...savedFormData, // save the data already present in the parameter
      id: Math.random().toString(), // add a unique ID
      // the parameter will equal the object of data that's collected in ExpenseForm.js
    };
    console.log("data moved to App.js!", expenseData);
  };
  //# DataUp STEP 1: Create a custom attribute where your CCM tags are used
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <LeanExpenses expenses={expenses} />
    </div>
  );
}
export default App;
