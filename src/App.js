import './App.css';
import ExampleLineChart from "./components/ExampleLineChart"

function App() {
  return (
    <div className="App">
      <h1>ReCharts Introduction</h1>
      <p>Install: npm i recharts</p>
      <div class="container">
        <ExampleLineChart titel="Example of a LineChart with reCharts"></ExampleLineChart>
      </div>
    </div>
  );
}

export default App;
