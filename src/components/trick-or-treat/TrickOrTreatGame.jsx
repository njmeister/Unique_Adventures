import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import House from './House.jsx';
import Candy from './Candy.jsx';
import Pawn from './Pawn.jsx';
import WordPop from '../util/WordPop.jsx';

import '../css/trickOrTreatGame.css';


const candyList = [
	{ img: '/assets/img/trickOrTreat/sucker.svg', name: 'Sucker' },
	{ img: '/assets/img/trickOrTreat/hard-candy.svg', name: 'Hard Candy' },
	{ img: '/assets/img/trickOrTreat/candy-bar.svg', name: 'Candy Bar' },
];

export default function TrickOrTreatGame() {
    const [isCandyVisible, setIsCandyVisible] = useState(false);
    const [isDoorClicked, setIsDoorClicked] = useState(false);
    const [isPawnClicked, setIsPawnClicked] = useState(false);

    const candySpringProps = useSpring({
        transform: isCandyVisible ? 'scale(1)' : 'scale(0)',
        config: { mass: 10, tension: 500, friction: 80, clamp: true },
    });

    const handleDoorClick = () => {
        setIsDoorClicked(true);
    };

    const handlePawnClick = () => {
        setIsPawnClicked(true);
    };

    // Trigger candy animation if both door and pawn have been clicked
    useEffect(() => {
        if (isDoorClicked && isPawnClicked) {
            setIsCandyVisible(true);
        }
    }, [isDoorClicked, isPawnClicked]);

    const handleCandyClick = () => {
        setIsCandyVisible(false);
		setIsDoorClicked(false);
		setIsPawnClicked(false);
    };

    return (
        <div className="trick-or-treat-game">
            <House onDoorClick={handleDoorClick} isDoorClicked={isDoorClicked} />
            <animated.div className="candy-container" style={candySpringProps} onClick={handleCandyClick}>
				{candyList.map((candy, index) => (
					<Candy key={index} img={candy.img} name={candy.name} />
				))}
            </animated.div>
            <Pawn onPawnClick={handlePawnClick} isPawnClicked={isPawnClicked} />
        </div>
    );
}