import { PieChart, Pie, Tooltip } from 'recharts';

const ExamplePieChart = ({
    title,
    dataToShow
}) => {

    return (
        <div >
            <h2>{title}</h2>
            <PieChart width={800} height={400}>
                <Pie dataKey="firstLine" data={dataToShow} cx="30%" outerRadius={90} fill="#8884d8" label />
                <Pie dataKey="secondLine" data={dataToShow} cx="70%" outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
        </div>
    );
}

export default ExamplePieChart;