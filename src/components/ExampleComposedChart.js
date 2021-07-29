import { ComposedChart, Line, Bar,Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ExampleComposedChart = ({
    title,
    dataToShow
}) => {

    return (
        <div >
            <h2>{title}</h2>
            <ComposedChart width={800} height={400} data={dataToShow}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="xAxisKey" />
                <YAxis 
                // mit dataKey kann die YAxis automatisch generiert werden (höchste Zahl oben)
                dataKey="firstLine" 
                // dataKey kann mehrmals gesetzt werden, wenn von mehreren Datenwerten beide berücksichtigt werden sollen
                // dataKey="secondLine"
                // mit domain kann man die Werte selbst definieren ([min, max] -> Zwischenwerte werden automatisch erstellt)
                // domain={[100, 400]}
                />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="firstLine" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="secondLine" barSize={20} fill="#82ca9d" />
                <Line type="monotone" dataKey="secondLine" stroke="#8884d8" />
            </ComposedChart>
        </div>
    );
}

export default ExampleComposedChart;