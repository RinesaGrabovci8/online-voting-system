import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useLocation } from 'react-router-dom';

function PieChartPage() {
    const location = useLocation();
    const { voteData } = location.state || { voteData: {} };

    // Convert voteData object into an array of data objects
    const chartData = Object.keys(voteData).map(party => ({
        id: party,
        value: voteData[party],
        label: party,
    }));

    return (
        <div className="pie-chart-container" style={{ margin: 200, marginLeft: 500 }}>
            <PieChart
                series={[
                    {
                        data: chartData,
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    );
}

export default PieChartPage;
