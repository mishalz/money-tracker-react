import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArrays = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log(valueArrays);
  const max = Math.max(...valueArrays);
  console.log(max);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
