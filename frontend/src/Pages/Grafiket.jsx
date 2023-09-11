import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../CSS/grafiket.css';
import Zgjedhjetqendrore from './zgjedhjetqendrore';
import PieChartPage from '../Components/PieChart';

function Chart({candidate, voteCount}){

  const count = voteCount?.count || 0;
  return (
    <>
      <div className="pie-charts-wrapper">
        <div className='central-container'>
          <div className='central-elections-chart'>
            <h1>Zgjedhjet Qendrore</h1>
          </div>
          <div className='central-election-chart-container'>
          <PieChartPage
            voteCount={candidate.voteCount} // Pass the voteCount from the CandidateCard
            Party={candidate.party} // Pass the party from the CandidateCard
          />
          </div>
        </div>
        <div className='local-elections'>
          <h1>Zgjedhjet Lokale</h1>
        </div>
        <div className='prishtine-prizren-pej'>
          <div className='chart-container'>
            <h3>Prishtine</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Prizren</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Peje</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className='prishtine-prizren-pej'>
          <div className='chart-container'>
            <h3>Mitrovice</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Gjakove</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Skenderaj</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className='prishtine-prizren-pej'>
          <div className='chart-container'>
            <h3>Ferizaj</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Gjilan</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Podujeve</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Chart;
