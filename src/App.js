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

  function readCSVFile(e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      // console.log(text)
      convertText(text)
    };
    reader.readAsText(e.target.files[0])
  }
  
  function convertText(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(';');
    var lines = [];
    
    for (var i = 1; i < allTextLines.length; i++) {
      var data = allTextLines[i].split(';');
      if (data.length == headers.length) {
        var singleEntry = {};
        for (var j = 0; j < headers.length; j++) {
          if (headers[j] == "firstLine" || headers[j] == "secondLine"){
            singleEntry[headers[j]] = parseInt(data[j])
          }
          else{
            singleEntry[headers[j]] = data[j]
          }
        }
        lines.push(singleEntry);
      }
    }
    // console.log(lines)
    setData(lines)
  }

  return (
    <div className="App">
      <h1>ReCharts Introduction</h1>
      <p>Install: npm i recharts</p>
      <a href="https://recharts.org">https://recharts.org</a>
      <div className="container">
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Line")}>Show LineChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Bar")}>Show BarChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Composed")}>Show ComposedChart</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => setChartType("Pie")}>Show PieChart</button>
      </div>
      <div className="container">
        <ResponsiveContainer width="100%" height="100%">
          {showChart()}
        </ResponsiveContainer>
      </div>
      <div className="container">
        <button type="button" className="btn btn-primary ms-2" onClick={() => changeData()}>Change Data randomly</button>
        <input type="file" className="ms-2" onChange={(e) => readCSVFile(e)} />
      </div>
    </div>
  );
}

export default App;
