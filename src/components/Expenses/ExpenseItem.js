import ExpenseDate from "./ExpenseDate"; // import your sub-component
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // gets props from App.js <ExpenseItem attribs=""/>
  const clickHandler = () => {
    console.log("I got clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
