import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function ExampleLineChart() {
    const data = [
        { xAxisKey: 'first', uv: 310, pv: 2400, amt: 2400 },
        { xAxisKey: 'second', uv: 180, pv: 2400, amt: 1800 },
        { xAxisKey: 'third', uv: 260, pv: 2400, amt: 1400 },
        { xAxisKey: 'fourth', uv: 133, pv: 2400, amt: 400 },
        { xAxisKey: 'fifth', uv: 369, pv: 2400, amt: 2200 },
    ];

    return (
        <LineChart width={800} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="xAxisKey" />
            <YAxis dataKey="amt" />
        </LineChart>
    );
}

export default ExampleLineChart;