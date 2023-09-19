import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { useState, useEffect } from 'react';
function PieChartQendrorePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Create an Axios GET request to your API endpoint
    axios.get('http://localhost:5000/vote/centralVotes') // Replace with the actual endpoint
      .then((response) => {
        setData(response.data); // Assuming the API returns an array of data objects
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  }, []);
    return (
      <div className="pie-chart-container" style={{ marginLeft:600, marginBottom:200 }}>
        <PieChart
          series={[
            {
              data: data.map((item) => ({
                id: item.party, 
                value: item.votes, 
                label: item.party, 
              })),
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    );
  }
  
  export default PieChartQendrorePage;
  