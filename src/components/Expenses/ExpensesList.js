import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  //% Filter the expenses object based on the filter choice
  const filteredExpenses = props.expenseObj.filter((obj) => {
    // "Any" => no filter
    if (props.filteredYear === "Any") return obj;
    // Year selected => filter according to it
    return obj.date.getFullYear().toString() === props.filteredYear;
  });

  //% Return this JSX if filteredExpenses is empty:
  if (filteredExpenses.length === 0) return <h2>Found no expenses</h2>;
  //% Return this JSX if filteredExpenses is NOT empty:
  return (
    <ul>
      {filteredExpenses.map((obj) => (
        <ExpenseItem
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
