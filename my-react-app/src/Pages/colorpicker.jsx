import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Choose a Color</h1>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-input"
      />
      <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        <p className="color-text">Selected Color: {color}</p>
      </div>
    </div>
  );
};

export default ColorPicker;