import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  //% Get the max amount spent in any month (need for the visual)
  const dataPointValues= props.dataPoints.map(dataPoint=> dataPoint.value)
  const totalMaximum= Math.max(...dataPointValues)

  //% JSX Code for adding a chart
  // This section was typed pre-emptively (before passing down the dataPoints prop to ChartBar)
  // We want the array of objects to contain a value, maxValue, and label 
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // The labels will be unique, so we can use them like ID's
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
