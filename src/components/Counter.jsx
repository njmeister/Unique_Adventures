import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ initialCount = 0, incrementDisplay, decrementDisplay, upperLimit, lowerLimit, onCountChange }) {
	const [count, setCount] = useState(initialCount);

	const increment = () => {
		if (count < upperLimit || upperLimit === undefined){ 
			setCount(count + 1);
			onCountChange(count + 1);
		}
	};

	const decrement = () => {
		if (count > lowerLimit || lowerLimit === undefined) { 
			setCount(count - 1);
			onCountChange(count - 1);
		}
	};

	return (
		<div className="counter">
			<div className="counter-increment" onClick={increment}>
				{incrementDisplay ? incrementDisplay : <span>&and;</span>}
			</div>
			<div className="counter-display">
				<h1>{count}</h1>
			</div>
			<div className="counter-decrement" onClick={decrement}>
				{decrementDisplay ? decrementDisplay : <span>&or;</span>}
			</div>
		</div>
	);
}