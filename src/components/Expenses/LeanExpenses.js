import ExpenseItem from "./ExpenseItem";
import "./LeanExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function LeanExpenses(props) {
  // Variables to use and redefine the filter year choice
  const [filteredYear, setFilteredYear] = useState("Any");
  const filterYearHandler = function (yr) {
    setFilteredYear(yr); // set filteredYear variable to the DDM option chosen
  };
  // Filter the expenses object if needed
  const filteredExpenses = props.expenseObj.filter((obj) => {
    // "Any" => no filter
    if (filteredYear === "Any") return obj;
    // Year selected => filter according to it
    return obj.date.getFullYear().toString() === filteredYear;
  });
  // Set the value of your JSX based on whether filteredExpenses is empty or not
  let conditionalJSX = <p style={{ color: 'white' }}>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    conditionalJSX = filteredExpenses.map((obj) => (
      <ExpenseItem
        key={obj.id}
        title={obj.title}
        amount={obj.amount}
        date={obj.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onSelectFilterYear={filterYearHandler}
      />
      {conditionalJSX}
    </Card>
  );
}
export default LeanExpenses;
