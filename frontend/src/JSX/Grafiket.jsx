import React, { useState } from 'react';
import '../CSS/grafiket.css';

function Chart() {
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (e) => {
    const newPercentage = parseFloat(e.target.value);
    setPercentage(newPercentage);
  };

  const calculateBackgroundColor = () => {
    const red = Math.min(255, Math.floor((percentage / 100) * 255));
    const green = Math.min(255, Math.floor(((100 - percentage) / 100) * 255));
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <div className="App">
      <h1>Dynamic Input Color</h1>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        value={percentage}
        onChange={handleInputChange}
        style={{ backgroundColor: calculateBackgroundColor() }}
      />
      <p>Percentage: {percentage}%</p>
    </div>
  );
}

export default Chart;
