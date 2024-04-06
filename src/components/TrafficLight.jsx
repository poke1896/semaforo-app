import React, { useState } from 'react';

const LightColor = {
  Red: 'red',
  Yellow: 'yellow',
  Green: 'green',
};

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState(LightColor.Red);

  const handleClick = (color) => {
    setCurrentColor(color === currentColor ? LightColor.Red : color);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="light"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px',
          backgroundColor: currentColor === LightColor.Red ? LightColor.Red : 'gray',
          cursor: 'pointer',
          boxShadow: currentColor === LightColor.Red ? '0 0 20px 5px #fff' : 'none',
        }}
        onClick={() => handleClick(LightColor.Red)}
      ></div>
      <div
        className="light"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px',
          backgroundColor: currentColor === LightColor.Yellow ? LightColor.Yellow : 'gray',
          cursor: 'pointer',
          boxShadow: currentColor === LightColor.Yellow ? '0 0 20px 5px #fff' : 'none',
        }}
        onClick={() => handleClick(LightColor.Yellow)}
      ></div>
      <div
        className="light"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px',
          backgroundColor: currentColor === LightColor.Green ? LightColor.Green : 'gray',
          cursor: 'pointer',
          boxShadow: currentColor === LightColor.Green ? '0 0 20px 5px #fff' : 'none',
        }}
        onClick={() => handleClick(LightColor.Green)}
      ></div>
    </div>
  );
};

export default TrafficLight;
