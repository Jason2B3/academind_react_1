import "./ChartBar.css";

function ChartBar(props) {
  //% Determine how high to show the thermometer-like chart bar with math
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  const barStylings = {
    height: barFillHeight,
    backgroundColor: "red",
  };
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={barStylings}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
export default ChartBar;
