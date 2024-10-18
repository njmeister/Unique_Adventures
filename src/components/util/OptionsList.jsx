import React, { useState, useEffect, useRef } from 'react';
import './optionsList.css';

export default function OptionsList({
    options = [],
    onOptionChange,
    checkedItems,
    sliderDefault,
    sliderMin,
    sliderMax,
}) {
    const [showOptions, setShowOptions] = useState(false);
    const optionsRef = useRef(null);

    const handleCheckboxChange = (option) => {
        onOptionChange(option);
    };

    const handleSliderChange = (option, value) => {
        console.log(`Slider changed: ${option} = ${value}`);
        onOptionChange(option, parseFloat(value)); // Convert value to number
    };

    const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={optionsRef}>
            <div onClick={() => setShowOptions(!showOptions)} className="button-style">
                <div className="hamburger-style"></div>
                <div className="hamburger-style"></div>
                <div className="hamburger-style"></div>
            </div>
            {showOptions && (
                <div className="menu-style">
                    {options.map((option, index) => (
                        <div className="option-style" key={index}>
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
                                        onChange={(e) =>
                                            handleSliderChange(option.name, e.target.value)
                                        }
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