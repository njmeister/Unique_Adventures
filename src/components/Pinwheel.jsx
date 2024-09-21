import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import PinwheelWheel from './PinwheelWheel';

export default function Pinwheel({ color }) {
	const [spinning, setSpinning] = useState(false);
	const [rotation, setRotation] = useState(0);

	const [{ rotate }, api] = useSpring(() => ({
		rotate: 0,
		config: { duration: 1000 },
	}));

	const toggleSpin = () => {
		if (spinning) {
			// Stop spinning, freeze the rotation
			api.stop();
			setRotation(rotation); // Ensure we preserve the last rotation angle
		} else {
			// Start or continue spinning from current rotation
			api.start({
				from: { rotate: rotation }, // Start from the current rotation
				to: { rotate: rotation - 360 }, // Spin counterclockwise
				loop: true, // Spin indefinitely until stopped
				onChange: ({ value }) => setRotation(value.rotate), // Track rotation in real-time
			});
		}
		setSpinning(!spinning); // Toggle spinning state
	};

	return (
		<div className="pinwheel" onClick={toggleSpin}>
			<div className="pin">
				<img src="/assets/img/Pinwheel/pin.svg" alt="pin" />
			</div>
			<animated.div
				className="wheel"
				style={{ transform: rotate.to((r) => `rotate(${r}deg)`) }}
			>
				<PinwheelWheel
					main={color.main}
					outline={color.outline}
					shadow={color.shadow}
					highlight={color.highlight}
				/>
			</animated.div>
			<div className="pole">
				<img src="/assets/img/Pinwheel/pole.svg" alt="pole" />{' '}
			</div>
		</div>
	);
}
