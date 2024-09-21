import { useState } from 'react';

export default function LineWidthPicker({ selectedWidth, handleWidthChange, selectedColor, isShown, togglePicker }) {
    const widths = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    return (
        <div className="line-width-picker-full-container">
            <div className="line-width-show-container">
                <div 
                    className="line-width-show" 
                    onClick={togglePicker} 
                    style={{ backgroundColor: selectedColor ? selectedColor : 'red', width: `${selectedWidth}px`, height: `${selectedWidth}px` }}
                ></div>
            </div>
            {isShown && (
                <div className="line-width-picker-container">
                    {widths.map((width) => (
                        <div
                            key={width}
                            className="line-width-picker-width"
                            style={{ width: `${width}px`, height: `${width}px`, backgroundColor: selectedColor }}
                            onClick={() => handleWidthChange(width)}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
}