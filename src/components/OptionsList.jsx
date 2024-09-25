import React, { useState } from 'react';

export default function OptionsList({ options = [], onOptionChange, checkedItems, sliderDefault, sliderMin, sliderMax }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleCheckboxChange = (option) => {
    onOptionChange(option);
  };

  const handleSliderChange = (option, value) => {
    console.log(`Slider changed: ${option} = ${value}`);
    onOptionChange(option, parseFloat(value)); // Convert value to number
  };

  const buttonStyle = { cursor: 'pointer', width: '75px', height: '60px', zIndex: 100, position: 'absolute', bottom: "75px", left: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' };
  const hamburgerStyle = { width: '50px', height: '5px', backgroundColor: 'white', borderRadius: '10px', border: '2px solid black', position: 'relative' };
  const menuStyle = { position: 'absolute', bottom: '150px', left: '0', width: '25%', height: '80%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };
  const optionsStyle = { position: 'relative', zIndex: 110, width: '50%', margin: '50px', padding: '10px' };

  return (
    <div>
      <div onClick={() => setShowOptions(!showOptions)} style={buttonStyle}>
        <div style={hamburgerStyle}></div>
        <div style={hamburgerStyle}></div>
        <div style={hamburgerStyle}></div>
      </div>
      {showOptions && (
        <div style={menuStyle}>
          {options.map((option, index) => (
            <div style={optionsStyle} key={index}>
              {option.type === 'checkbox' ? (
                <>
                  <input
                    type="checkbox"
                    value={option.name}
                    id={option.name}
                    name={option.name}
                    checked={checkedItems.includes(option.name)}
                    onChange={() => handleCheckboxChange(option.name)}
                  />
                  <label htmlFor={option.name} style={{ margin: '10px' }}>
                    {option.name}
                  </label>
                </>
              ) : (
                <>
                  <label htmlFor={option.name} style={{ margin: '10px' }}>
                    {option.name}
                  </label>
                  <input
                    type="range"
                    id={option.name}
                    name={option.name}
                    min={sliderMin || 0}
                    max={sliderMax || 100}
                    value={checkedItems[option.name] || sliderDefault || 0}
                    onChange={(e) => handleSliderChange(option.name, e.target.value)}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}