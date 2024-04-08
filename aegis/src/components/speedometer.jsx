import React from 'react';
import '../styles/speedometer.css';

const Speedometer = ({ percentage }) => {
  const getColor = () => {
    if (percentage >= 80) {
      return 'green';
    } else if (percentage >= 40) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const getTransform = () => {
    const rotate = (percentage / 100) * 180 - 45;
    return `rotate(${rotate}deg)`;
  };

  return (
    <div className="speedometer">
      <div className="arrow" style={{ transform: getTransform() }} />
      <div className="circle" style={{ backgroundColor: getColor() }}>
        <div className="percentage">{percentage}%</div>
      </div>
    </div>
  );
};

export default Speedometer;
