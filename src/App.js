import './App.css';
import React, { useState } from 'react';
import { ResponsiveContainer } from 'recharts';
import ExampleLineChart from "./components/ExampleLineChart"
import ExampleBarChart from "./components/ExampleBarChart"
import ExamplePieChart from "./components/ExamplePieChart"
import ExampleComposedChart from "./components/ExampleComposedChart"

function App() {
  const [chartType, setChartType] = useState("none");
  const max = 400;
  const [data, setData] = useState([
    { name: "Hunde", xAxisKey: '01.04.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
    { name: "Katzen", xAxisKey: '05.06.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
    { name: "Ameisen", xAxisKey: '13.07.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
    { name: "Bären", xAxisKey: '26.11.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
    { name: "Giraffen", xAxisKey: '29.12.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
  ]);

  function changeData() {
    setData(
      [
        { name: "Hunde", xAxisKey: '01.04.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
        { name: "Katzen", xAxisKey: '05.06.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
        { name: "Ameisen", xAxisKey: '13.07.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
        { name: "Bären", xAxisKey: '26.11.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
        { name: "Giraffen", xAxisKey: '29.12.', firstLine: Math.floor(Math.random() * max), secondLine: Math.floor(Math.random() * max) },
      ]
    )
  }

  function showChart() {
    switch (chartType) {
      case "Line":
        return (
          <div className="container">
            <ExampleLineChart dataToShow={data} title="Example of a LineChart with reCharts"></ExampleLineChart>
          </div>
        )
      case "Bar":
        return (
          <div className="container">
            <ExampleBarChart dataToShow={data} title="Example of a BarChart with reCharts"></ExampleBarChart>
          </div>
        )
      case "Composed":
        return (
          <div className="container">
            <ExampleComposedChart dataToShow={data} title="Example of a ComposedChart with reCharts"></ExampleComposedChart>
          </div>
        )
      case "Pie":
        return (
          <div className="container">
            <ExamplePieChart dataToShow={data} title="Example of a PieChart with reCharts"></ExamplePieChart>
          </div>
        )
      default:
        return (
          <div></div>
        )
    }
  }

  return (
    <div className="App">
      <h1>ReCharts Introduction</h1>
      <p>Install: npm i recharts</p>
      <div className="container">
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Line")}>Show LineChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Bar")}>Show BarChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Composed")}>Show ComposedChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Pie")}>Show PieChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => changeData()}>Change Data</button>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        {showChart()}
      </ResponsiveContainer>
    </div>
  );
}

export default App;
