import React, { useState, useRef } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterTracingGame = () => {
	const [lines, setLines] = useState([]);
	const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
	const [isDrawing, setIsDrawing] = useState(false);

	const handleMouseDown = (e) => {
		e.evt.preventDefault(); // Prevent scrolling on touch
		setIsDrawing(true);
		const pos = e.target.getStage().getPointerPosition();
		setLines([...lines, { points: [pos.x, pos.y] }]);
	};

	const handleMouseMove = (e) => {
		if (!isDrawing) return;
		e.evt.preventDefault(); // Prevent scrolling on touch
		const stage = e.target.getStage();
		const point = stage.getPointerPosition();
		let lastLine = lines[lines.length - 1];
		lastLine.points = lastLine.points.concat([point.x, point.y]);
		lines.splice(lines.length - 1, 1, lastLine);
		setLines(lines.concat());
	};

	const handleMouseUp = () => {
		setIsDrawing(false);
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
		setCurrentLetterIndex(
			(prevIndex) => (prevIndex - 1 + alphabet.length) % alphabet.length
		);
		setLines([]);
	};

	return (
		<>
			<div className="trace-letter">			
				<p>Trace the letter:</p>
				<h2>{alphabet[currentLetterIndex]}</h2>
			</div>

			<div className="trace-container">
				<Stage
					width={window.innerWidth}
					height={window.innerHeight}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onTouchStart={handleMouseDown}
					onTouchMove={handleMouseMove}
					onTouchEnd={handleMouseUp}
					style={{ border: '2px solid red', touchAction: 'none' }}
				>
					<Layer>
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
		</>
	);
};

export default LetterTracingGame;
