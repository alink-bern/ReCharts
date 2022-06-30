import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const ExampleLineChart = ({
    title,
    dataToShow
}) => {

    return (
        <div >
            <h2>{title}</h2>
            <LineChart width={800} height={400} data={dataToShow}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="xAxisKey" />
                <YAxis 
                // mit dataKey kann die entsprechende Achse automatisch auf einem Wert basierend generiert werden (höchste Zahl oben)
                // dataKey="firstLine" 
                // dataKey="secondLine"
                // mit domain kann man die Werte selbst definieren ([min, max] -> Zwischenwerte werden automatisch erstellt)
                domain={[0, 400]}
                />
                <Tooltip />
                <Line type="monotone" dataKey="firstLine" stroke="#8884d8" />
                <Line type="monotone" dataKey="secondLine" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}

export default ExampleLineChart;