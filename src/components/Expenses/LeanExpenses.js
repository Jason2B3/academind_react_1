import "./LeanExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import React, { useState } from "react";

function LeanExpenses(props) {
  //% Make the filtered year selection stateful
  const [filteredYear, setFilteredYear] = useState("Any");
  const filterYearHandler = function (yr) {
    setFilteredYear(yr); // sets filteredYear variable to the DDM option chosen
  };
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onSelectFilterYear={filterYearHandler}
      />
      
      <ExpensesList filteredYear={filteredYear} expenseObj= {props.expenseObj}/>
    </Card>
  );
}
export default LeanExpenses;
