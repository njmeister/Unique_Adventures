import { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import ColorPicker from '../components/ColorPicker';
import LineWidthPicker from '../components/LineWidthPicker';
import SaveCreationButton from '../components/SaveCreationButton';
import './css/freeDraw.css';

export default function FreeDraw() {
    const [lines, setLines] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#000');
    const [selectedWidth, setSelectedWidth] = useState(10);
    const [isColorPickerShown, setIsColorPickerShown] = useState(false);
    const [isLineWidthPickerShown, setIsLineWidthPickerShown] = useState(false);

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y], color: selectedColor, width: selectedWidth }]);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;

        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleWidthChange = (width) => {
        setSelectedWidth(width);
    };

    const toggleColorPicker = () => {
        setIsColorPickerShown(!isColorPickerShown);
        if (!isColorPickerShown) setIsLineWidthPickerShown(false);
    };

    const toggleLineWidthPicker = () => {
        setIsLineWidthPickerShown(!isLineWidthPickerShown);
        if (!isLineWidthPickerShown) setIsColorPickerShown(false);
    };

    return (
        <div>
            <ColorPicker
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
                isShown={isColorPickerShown}
                togglePicker={toggleColorPicker}
            />
            <LineWidthPicker
                selectedWidth={selectedWidth}
                handleWidthChange={handleWidthChange}
                selectedColor={selectedColor}
                isShown={isLineWidthPickerShown}
                togglePicker={toggleLineWidthPicker}
            />
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                className="free-draw-canvas"
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.color}
                            strokeWidth={line.width}
                            tension={0.5}
                            lineCap="round"
                            lineJoin="round"
                        />
                    ))}
                </Layer>
            </Stage>
			<SaveCreationButton saveDiv=".free-draw-canvas" gameTitle="Free Draw" />
        </div>
    );
}