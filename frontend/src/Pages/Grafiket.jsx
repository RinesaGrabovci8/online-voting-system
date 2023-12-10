import React from 'react';
import '../CSS/grafiket.css';
import PieChartQendrorePage from '../Components/PieChartQendrore';
import PieChartPr from '../Components/PieChartPr';
import PieChartPeje from '../Components/PieChartPeje';
import PieChartMtrv from '../Components/PieChartMtrv';
import PieChartGjk from '../Components/PieChartGjk';
import PieChartSkdr from '../Components/PieChartSkdr';
import PieChartFr from '../Components/PieChartFr';
import PieChartGjl from '../Components/PieChartGjl';
import PieChartPd from '../Components/PieChartPd';
import PieChartPrz from '../Components/PieChartPrz';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

function Chart() {
  return (
    <>
    <Header/>
    <Sidebar/>
      <div className="pie-charts-wrapper">
        <div className='central-container'>
          <div className='central-elections-chart'>
            <h1>Zgjedhjet Qendrore</h1>
          </div>
          <div className='central-election-chart-container'>
            <PieChartQendrorePage/>
          </div>
        </div>
        <div className='local-elections'>
          <h1>Zgjedhjet Lokale</h1>
        </div>
        <div className='prishtine-prizren-pej-container'>
          <div className='prishtine-prizren-pej'>
            <div className='chart-container'>
              <h3>Prishtine</h3>
              <PieChartPr/>
            </div>
            <div className='chart-container'>
              <h3>Prizren</h3>
              <PieChartPrz/>
            </div>
            <div className='chart-container'>
              <h3>Peje</h3>
              <PieChartPeje/>
            </div>
          </div>
          <div className='prishtine-prizren-pej'>
            <div className='chart-container'>
              <h3>Mitrovice</h3>
              <PieChartMtrv/>
            </div>
            <div className='chart-container'>
              <h3>Gjakove</h3>
              <PieChartGjk/>
            </div>
            <div className='chart-container'>
              <h3>Skenderaj</h3>
              <PieChartSkdr/>
            </div>
          </div>
          <div className='prishtine-prizren-pej'>
            <div className='chart-container'>
              <h3>Ferizaj</h3>
              <PieChartFr/>
            </div>
            <div className='chart-container'>
              <h3>Gjilan</h3>
              <PieChartGjl/>
            </div>
            <div className='chart-container'>
              <h3>Podujeve</h3>
              <PieChartPd/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Chart;

