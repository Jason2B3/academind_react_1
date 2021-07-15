import ExpenseDate from "./ExpenseDate"; // import your sub-component
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  let titleVar = props.title; // this orig title comes from App.js
  const clickHandler = () => {
    titleVar = "UPDATED";
    console.log("I got clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titleVar}</h2> {/*TITLE GOES HERE*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
