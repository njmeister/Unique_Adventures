import { useState, useEffect } from 'react';
import './counter.css';

export default function Counter({
	initialCount = 0,
	incrementDisplay,
	decrementDisplay,
	upperLimit,
	lowerLimit,
	onCountChange,
	count,
}) {
	const [internalCount, setInternalCount] = useState(initialCount);

	useEffect(() => {
		setInternalCount(count);
	}, [count]);

	const increment = () => {
		if (internalCount < upperLimit || upperLimit === undefined) {
			const newCount = internalCount + 1;
			setInternalCount(newCount);
			onCountChange(newCount);
		}
	};

	const decrement = () => {
		if (internalCount > lowerLimit || lowerLimit === undefined) {
			const newCount = internalCount - 1;
			setInternalCount(newCount);
			onCountChange(newCount);
		}
	};

	return (
		<div className="counter">
			<div className="counter-increment" onClick={increment}>
				{incrementDisplay ? incrementDisplay : <span>&and;</span>}
			</div>
			<div className="counter-display">
				<h1>{internalCount}</h1>
			</div>
			<div className="counter-decrement" onClick={decrement}>
				{decrementDisplay ? decrementDisplay : <span>&or;</span>}
			</div>
		</div>
	);
}
