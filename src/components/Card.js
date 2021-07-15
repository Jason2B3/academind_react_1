import "./Card.css";

// Use for ALL container divs (have 1 CSS file to style them all)
function Card(props) {
  // adds a "card" class, plus all other classes we specify in the locations we use this wrapper on
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
