import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Element, scroller } from 'react-scroll';

export default function Project({
	title,
	description,
	link,
	img,
	github,
	expandedDescription,
	index,
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const [isInteracted, setIsInteracted] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const projectRef = useRef(null); // Ref to the project div

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const enterSpring = useSpring({
		from: { transform: 'translateY(100vh)' },
		to: { transform: 'translateY(0%)' },
		delay: 100 + 100 * index,
		config: { mass: 0.6, tension: 120, friction: 14 },
	});

	const spring = useSpring({
		from: {
			transform: 'scale(1) translate(0%, 0%)',
			boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
			width: '100%',
			height: '15vh',
			gridTemplateColumns: !isMobile ? '1fr 5fr 1fr' : '1fr',
			gridTemplateRows: '1fr',
		},
		to: {
			transform:
				isHovered && !isClicked
					? 'scale(1.1) translate(0%, 0%)'
					: isClicked && !isMobile
					? 'scale(1) translate(-5%, 0%)'
					: 'scale(1) translate(0%, 0%)',
			boxShadow:
				isHovered && !isClicked
					? '0px 5px 5px rgba(0, 0, 0, 0.2)'
					: isClicked
					? '0 0 0 rgba(0, 0, 0, 0)'
					: '0 0 0 rgba(0, 0, 0, 0)',
			width: isClicked && !isMobile ? '110%' : isMobile ? '80vw' : '100%',
			height: isClicked ? '70vh' : '15vh',
			gridTemplateColumns:
				isClicked && !isMobile
					? '1fr 6fr 1fr'
					: isMobile
					? '1fr'
					: '1fr 5fr 1fr',
			gridTemplateRows: isClicked && isMobile ? '1fr 6fr 1fr' : '1fr',
		},
		config: isClicked
			? { mass: 1, tension: 120, friction: 14 }
			: { mass: 0.6, tension: 120, friction: 14 },
	});

	// Update handleHover and handleClick to toggle states
	const handleHoverOn = () => {
		setIsHovered(true);
		setIsInteracted(true);
	};
	const handleHoverOff = () => {
		setIsHovered(false);
	};
	const handleClick = () => {
		setIsClicked(!isClicked);

		if (!isClicked) {
			scroller.scrollTo(title, {
				duration: 500,
				delay: 0,
				smooth: 'easeInOutQuart',
				offset: -100,
			});
		}
	};

	// Effect to add global click listener
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (projectRef.current && !projectRef.current.contains(event.target)) {
				setIsClicked(false); // Reset click state if clicked outside
			}
		};

		// Add event listener
		document.addEventListener('mousedown', handleClickOutside);
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<Element name={title}>
			<animated.div
				ref={projectRef} // Attach ref to the div
				className="project"
				style={isInteracted ? spring : enterSpring}
				onMouseEnter={handleHoverOn}
				onMouseLeave={handleHoverOff}
				onTouchStart={handleHoverOn}
				onTouchEnd={handleHoverOff}
				onClick={handleClick}
			>
				<h3>{title}</h3>
				{!isClicked ? (
						!isMobile ? (
							<div className="project-desc">
								<h4>{description}</h4>
								{isHovered && !isClicked && (
									<>
										{' '}
										<p>
											Click for Details <br /> &#8595;
										</p>
									</>
								)}
							</div>
						) : (
							''
						)
				) : (
					<div className="expanded-desc">
						<img src={img} alt={title} />
						<div className="desc-container">
							<h4>{expandedDescription}</h4>
						</div>
					</div>
				)}
				<div className="project-links">
					{link && 
						<button><a href={link}>View Project</a></button>
					}
					{github &&
						<button><a href={github}>View GitHub</a></button>
					}
				</div>
			</animated.div>
		</Element>
	);
}
