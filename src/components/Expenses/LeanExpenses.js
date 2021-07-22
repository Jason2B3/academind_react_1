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
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onSelectFilterYear={filterYearHandler}
      />
      {filteredExpenses.map((obj) => (
        <ExpenseItem
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
        />
      ))}
    </Card>
  );
}
export default LeanExpenses;
