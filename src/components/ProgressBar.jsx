import { useSpring, animated } from 'react-spring';
import { Tooltip } from 'react-tippy';

export default function ProgressBar({ label, progress, tooltip }) {


	const [textSpring, setTextSpring] = useSpring(() => ({
		opacity: 0,
		config: { duration: 1 },
	}));

	const barSpring = useSpring({
		from: { width: '0%' },
		to: { width: `${progress}%` },
		config: { duration: progress * 25, mass: 1, tension: 120, friction: 14, clamp: true },
		onRest: () => {
			setTextSpring({ opacity: 1})
			},
	});

	return (
		<div className="progress-bar">
			<h4>{label}</h4>
			<Tooltip
				className='tooltip-container'
				// trigger='click'
				title={label}
				followCursor='true'
				// size='big'
				distance={0}
				offset={150}
				delay={100}
				theme='transparent'
				html={
					<div className='tooltip'>
						<span>{label}</span>
						<p>{tooltip}</p>
					</div>
				}
			>
				<animated.div className="progress" style={barSpring}>
					{/* <animated.span className="progress-text" style={textSpring}>{progress}</animated.span> */}
				</animated.div>
			</Tooltip>
		</div>
	);
}