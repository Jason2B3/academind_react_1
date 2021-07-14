import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"; // import your sub-component
function ExpenseItem(props) {
  // gets props from App.js <ExpenseItem attribs=""/>
  return (
    <div className="expense-item">
      <ExpenseDate date= {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
