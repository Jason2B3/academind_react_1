import ExpenseDate from "./ExpenseDate"; // import your sub-component
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("UPDATED");
    console.log("inside of handler scope:", title);
    // after first press, "title" still keeps its orig value
  };
  console.log("in function's root scope:", title); // after first press, it equals UPDATED
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2> {/*TITLE GOES HERE*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
