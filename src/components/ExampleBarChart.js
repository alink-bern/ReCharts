import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} --> ${payload[0].value}`}</p>
                <p className="intro">{`so many ${payload[0].payload.name}`}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};

const ExampleBarChart = ({
    title,
    dataToShow
}) => {


    return (
        <div>
            <h2>{title}</h2>
            <BarChart width={800} height={400} data={dataToShow}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="xAxisKey" />
                <YAxis
                // mit dataKey kann die entsprechende Achse automatisch auf einem Wert basierend generiert werden (höchste Zahl oben)
                // dataKey="firstLine" 
                // dataKey="secondLine"
                // mit domain kann man die Werte selbst definieren ([min, max] -> Zwischenwerte werden automatisch erstellt)
                // domain={[100, 400]}
                />
                <Tooltip
                    //customized tooltip
                    content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="firstLine" fill="#8884d8" />
                <Bar dataKey="secondLine" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default ExampleBarChart;