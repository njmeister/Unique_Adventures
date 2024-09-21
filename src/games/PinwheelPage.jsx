import React from 'react';
import Pinwheel from '../components/Pinwheel';
import Counter from '../components/Counter';
import './css/pinwheelPage.css';

export default function PinwheelPage() {

	const [pinwheelCount, setPinwheelCount] = React.useState(1);


	const blue = {
		main: '#00f',
		outline: '#00a',
		shadow: '#005',
		highlight: '#55f',
	};
	const red = {
		main: '#f00',
		outline: '#a00',
		shadow: '#500',
		highlight: '#f55',
	};
	const green = {
		main: '#0f0',
		outline: '#0a0',
		shadow: '#050',
		highlight: '#5f5',
	};
	const yellow = {
		main: '#ff0',
		outline: '#aa0',
		shadow: '#550',
		highlight: '#ff5',
	};
	const purple = {
		main: '#f0f',
		outline: '#a0a',
		shadow: '#505',
		highlight: '#f5f',
	};

	const colors = [blue, red, green, yellow, purple];

	return (
		<div className="pinwheel-page">
			<div className="pinwheel-adjustment-container">
				<div className="pinwheel-container">
					{Array.from({ length: pinwheelCount }).map((_, index) => (
						<Pinwheel key={index} color={colors[index % colors.length]} />
					))}
				</div>
			</div>
			<div className="counter-container">
				<Counter initialCount={1} upperLimit={5} lowerLimit={1} onCountChange={setPinwheelCount} />
			</div>
		</div>
	);
}