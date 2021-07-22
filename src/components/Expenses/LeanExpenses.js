import ExpenseItem from "./ExpenseItem";
import "./LeanExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function LeanExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("Any");
  const filterYearHandler = function (yr) {
    console.log("The year hath arrived up to LeanExpenses.js!", yr);
    setFilteredYear(yr); // change filteredYear value
    // Filter: Get back up to app.js part 2
    props.onChangeFilter(yr)
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onSelectFilterYear={filterYearHandler}
      />
      {props.expenseObj.map((obj) => (
        <ExpenseItem key={obj.id} title={obj.title} amount={obj.amount} date={obj.date} />
      ))}
    </Card>
  );
}
export default LeanExpenses;

