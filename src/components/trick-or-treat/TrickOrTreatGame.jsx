import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import House from './House.jsx';
import Candy from './Candy.jsx';
import Pawn from './Pawn.jsx';
import WordPop from '../util/WordPop.jsx';

import './trickOrTreatGame.css';

const candyList = [
	{ img: '/assets/img/trickOrTreat/sucker.svg', name: 'Sucker', shape: 'round' },
	{ img: '/assets/img/trickOrTreat/hard-candy.svg', name: 'Hard Candy', shape: 'round' },
	{ img: '/assets/img/trickOrTreat/candy-bar.svg', name: 'Candy Bar', shape: 'rectangle' },
	// { img: '/assets/img/appleCount/apple1.svg', name: 'Apple' },
	{ img: '/assets/img/trickOrTreat/gummy-bear.svg', name: 'Gummy Bear', shape: 'bear' },
	{ img: '/assets/img/trickOrTreat/peanut-butter-candy.svg', name: 'Peanut Butter Candy', shape: 'rectangle' },
	{ img: '/assets/img/trickOrTreat/candy-corn.svg', name: 'Candy Corn', shape: 'triangle' },
	{ img: '/assets/img/trickOrTreat/chocolate-drops.svg', name: 'Chocolate Drops', shape: 'round' },
	{ img: '/assets/img/trickOrTreat/gumdrops.svg', name: 'Gumdrops', shape: 'round' },
];

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}



export default function TrickOrTreatGame() {
	const [isCandyVisible, setIsCandyVisible] = useState(false);
	const [isDoorClicked, setIsDoorClicked] = useState(false);
	const [isPawnClicked, setIsPawnClicked] = useState(false);
	const [isDoorInteracted, setIsDoorInteracted] = useState(false);
	const [isPawnInteracted, setIsPawnInteracted] = useState(false);
	const [candyBag, setCandyBag] = useState([]);
	const [isBagFull, setIsBagFull] = useState(false);
	const [isHomeClicked, setIsHomeClicked] = useState(false);
	const [isUniqueList, setIsUniqueList] = useState(false);
	const [isSameShapeList, setIsSameShapeList] = useState(false);
	
	const shuffledCandyList = shuffleArray(candyList);

	// Create spring animation for candy
	const candySpringProps = useSpring({
		transform: isCandyVisible ? 'scale(1)' : 'scale(0)',
		config: { mass: 10, tension: 500, friction: 80, clamp: true },
	});

	// Pass the door animation to the house component
	const handleDoorClick = () => {
		if (!isDoorInteracted) {
			setIsDoorClicked(true);
			setIsDoorInteracted(true);
		}
	};

	// Pass the dialogue animation to the pawn component
	const handlePawnClick = () => {
		if (!isPawnInteracted) {
			setIsPawnClicked(true);
			setIsPawnInteracted(true);
		}
	};

	// Ensure each house can only be trick-or-treated once
	const resetInteractions = () => {
		setIsDoorInteracted(false);
		setIsPawnInteracted(false);
	}

	// Trigger candy animation if both door and pawn have been clicked
	useEffect(() => {
		if (isDoorClicked && isPawnClicked) {
			setIsCandyVisible(true);
		}
	}, [isDoorClicked, isPawnClicked]);

	const handleCandyClick = (candy) => {
		if (candyBag.length <= 7) {
			setCandyBag((prevCandyBag) => [...prevCandyBag, candy]); // Update candyBag state with the entire candy object
		} else {
			setIsBagFull(true);
		}
		setIsCandyVisible(false);
		setIsDoorClicked(false);
		setIsPawnClicked(false);
		console.log(candyBag);
	};

	// Bring user to the final screen with candy bag contents and check for accomplishments
	const handleHomeClick = () => {
		setIsHomeClicked(true);
		setIsUniqueList(isUnique());
		setIsSameShapeList(isSameShape());
	}

	function isUnique() {
		for (let i = 0; i < candyBag.length; i++) {
			for (let j = i + 1; j < candyBag.length; j++) {
				if (candyBag[i].name === candyBag[j].name) {
					return false;
				}
			}
		}
		return true;
	}

	function isSameShape() {
		for (let i = 0; i < candyBag.length; i++) {
			for (let j = i + 1; j < candyBag.length; j++) {
				if (candyBag[i].shape !== candyBag[j].shape) {
					return false;
				}
			}
		}
		return true;
	}

	return (
		<div className="trick-or-treat-game">
			<House onDoorClick={handleDoorClick} isDoorClicked={isDoorClicked} isInteracted={isDoorInteracted} onAnimationRest={resetInteractions} />
			<animated.div className="candy-container" style={candySpringProps}>
				{shuffledCandyList.map((candy, index) => (
					<Candy
						key={index}
						img={candy.img}
						name={candy.name}
						onClick={() => handleCandyClick(candy)}
					/>
				))}
			</animated.div>
			<Pawn onPawnClick={handlePawnClick} isPawnClicked={isPawnClicked} isInteracted={isPawnInteracted} />
			<div className="candy-bag">
				{candyBag.map((candy, index) => (
					<div key={index} className="candy-icon">
						<img src={candy.img} alt={candy.name} />
					</div>
				))}
				{isBagFull && (
					<div className="bag-alert">
						<WordPop text="Uh-Oh! Your Candy Bag is Full!" delay={2000} />
						<div onClick={handleHomeClick} className='go-home-msg'>
							<WordPop text="Go Back Home?" delay={4000} />
						</div>
					</div>
				)}
			</div>
			{isHomeClicked && (
				<div className="home">
					<WordPop text="Sweet Stash!" delay={0} />
					<div className="home-candy-bag">
						{candyBag.map((candy, index) => (
							<div key={index}>
								<img src={candy.img} alt={candy.name} className={candy.name} />
							</div>
						))}
					</div>
					{isUniqueList && (
						<div className='unique-msg'>
							<WordPop text="You Got a Unique Candy Collection!" delay={1000} />
						</div>
					)}
					{isSameShapeList && (
						<div className='same-shape-msg'>
							<WordPop text={`You got all ${candyBag[0].shape} candies!`} delay={2000} />
						</div>
					)}
					<div className='play-again-msg' onClick={() => window.location.reload()}>
						<WordPop text="Play Again?" delay={2000} />
					</div>
				</div>
			)}
		</div>
	);
}
