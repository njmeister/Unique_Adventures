import React, { useState, useRef } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LetterTracingGame = () => {
  const [lines, setLines] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    checkTraceAccuracy();
  };

  const checkTraceAccuracy = () => {
    console.log("User's trace:", lines);
  };

  const handleNextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
    setLines([]);
  };

  const handlePreviousLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex - 1 + alphabet.length) % alphabet.length);
    setLines([]);
  };

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ border: "2px solid black" }}
      >
        <Layer>
          <Text
            text={alphabet[currentLetterIndex]}
            fontSize={700}
            x={window.innerWidth / 2 - 200}
            y={100}
            fill="lightgray"
          />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="blue"
              strokeWidth={10}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>
	  <div className="trace-letter-change-buttons">
		<button onClick={handlePreviousLetter}>Previous</button>
		<button onClick={handleNextLetter}>Next</button>
		<button onClick={() => setLines([])}>Reset</button>
	  </div>
    </div>
  );
};

export default LetterTracingGame;