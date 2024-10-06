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
    const [candyBag, setCandyBag] = useState([]); // Initialize candyBag state
	const [isBagFull, setIsBagFull] = useState(false);

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

    return (
        <div className="trick-or-treat-game">
            <House onDoorClick={handleDoorClick} isDoorClicked={isDoorClicked} />
            <animated.div className="candy-container" style={candySpringProps}>
                {candyList.map((candy, index) => (
                    <Candy key={index} img={candy.img} name={candy.name} onClick={() => handleCandyClick(candy)} />
                ))}
            </animated.div>
            <Pawn onPawnClick={handlePawnClick} isPawnClicked={isPawnClicked} />
            <div className="candy-bag">
                    {candyBag.map((candy, index) => (
                        <div key={index} className="candy-icon">
                            <img src={candy.img} alt={candy.name} />
                        </div>
                    ))}
					{isBagFull && <div className="bag-alert" ><WordPop text="Uh-Oh! Your Candy Bag is Full!" delay={2000} /></div>}
            </div>
        </div>
    );
}