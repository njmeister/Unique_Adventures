import { useState } from 'react';

export default function ColorPicker({ customColors, selectedColor, handleColorChange, isShown, togglePicker }) {
    const [expandedColors, setExpandedColors] = useState(0);

    const standardColors = ["#000", "#fff", "#f00", "#f90", "#ff0", "#0f0", "#00f", "#5d3fd3"];
    const expandedColors1 = ["#888", "#7b3f00", "#ff10f0", "#9f0", "#0ff", "#ff5349", "#5d76cb", "#8A2BE2"];
    const expandedColors2 = ["#f0f", "#7fffd4", "#87CEEB", "#000080", "#008000", "#808000", "#008080", "#40E0D0"];
    const expandedColors3 = ["#6495ED", "#D2B48C", "#FFF8DC", "#FF7F50", "#8B0000", "#DCDCDC", "#FFD700", "#FFC0CB"];

    const handleExpandClick = () => {
        setExpandedColors((prev) => (prev < 3 ? prev + 1 : 0));
    };

    return (
        <div className="color-picker-full-container">
            {isShown && (
                <>
                    <div className="color-picker-expand" onClick={handleExpandClick}>
                        {expandedColors != 3 ? "More Colors" : "Less Colors"}
                    </div>
                    <div className="color-picker-container">
                        {customColors && (
                            <div className="color-picker-custom-colors">
                                {customColors.map((color) => (
                                    <div
                                        key={color.main}
                                        className="color-picker-custom-color"
                                        style={{ backgroundColor: color.main }}
                                        onClick={() => handleColorChange(color.main)}
                                    ></div>
                                ))}
                            </div>
                        )}
                        <div className="color-picker-standard-colors">
                            {standardColors.map((color) => (
                                <div
                                    key={color}
                                    className="color-picker-color"
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange(color)}
                                ></div>
                            ))}
                        </div>
                        {expandedColors >= 1 && (
                            <div className="color-picker-expanded-colors">
                                {expandedColors1.map((color) => (
                                    <div
                                        key={color}
                                        className="color-picker-color"
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorChange(color)}
                                    ></div>
                                ))}
                            </div>
                        )}
                        {expandedColors >= 2 && (
                            <div className="color-picker-expanded-colors">
                                {expandedColors2.map((color) => (
                                    <div
                                        key={color}
                                        className="color-picker-color"
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorChange(color)}
                                    ></div>
                                ))}
                            </div>
                        )}
                        {expandedColors >= 3 && (
                            <div className="color-picker-expanded-colors">
                                {expandedColors3.map((color) => (
                                    <div
                                        key={color}
                                        className="color-picker-color"
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorChange(color)}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
            <div className="color-picker-selected-color" style={{ backgroundColor: selectedColor }} onClick={togglePicker}></div>
        </div>
    );
}