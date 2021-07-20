import ExpenseItem from "./ExpenseItem";
import "./LeanExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function LeanExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterYearHandler = function (yr) {
    console.log("The year hath arrived up to LeanExpenses.js!", yr);
    setFilteredYear(yr);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onSelectFilterYear={filterYearHandler}
      />
      {props.expenses.map((obj) => (
        <ExpenseItem title={obj.title} amount={obj.amount} date={obj.date} />
      ))}
    </Card>
  );
}
export default LeanExpenses;
