import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Door from './Door';
import HouseImg from './HouseImg';

const colorList = [
    '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff', '#f80', '#8f0', '#08f', '#f08', '#80f', '#0f8', '#f88', '#8f8', '#88f', '#ff8', '#f8f', '#8ff', '#888', '#fff',
];

const pumpkinList = [
	'/assets/img/trickOrTreat/Jack1-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack2-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack3-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack4-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack5-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack6-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack7-Jack-O-Lantern.png',
	'/assets/img/trickOrTreat/Jack8-Jack-O-Lantern.png',
];

export default function House({ onDoorClick, isDoorClicked, isInteracted, onAnimationRest }) {
    const [position, setPosition] = useState(1); // Start with house off-screen to the right (1 = off right, 0 = on screen, -1 = off left)
    const [renderCount, setRenderCount] = useState(0); // Counter to keep track of renders
    const [houseColor, setHouseColor] = useState(colorList[Math.floor(Math.random() * colorList.length)]);
    const [roofColor, setRoofColor] = useState(colorList[Math.floor(Math.random() * colorList.length)]);
	const [pumpkinImage, setPumpkinImage] = useState(pumpkinList[Math.floor(Math.random() * pumpkinList.length)]);

    // Randomize house and roof colors on every render
    useEffect(() => {
        if (renderCount % 1 === 0) {
            setHouseColor(colorList[Math.floor(Math.random() * colorList.length)]);
            setRoofColor(colorList[Math.floor(Math.random() * colorList.length)]);
        }
    }, [renderCount]);

	// Randomize pumpkin image on every render
	useEffect(() => {
		if (renderCount % 1 === 0) {
			setPumpkinImage(pumpkinList[Math.floor(Math.random() * pumpkinList.length)]);
		}
	}, [renderCount]);


    // Create spring animation for sliding the house based on position
    const springProps = useSpring({
        from: { transform: 'translateX(120%)' }, // Start off the screen to the right
        to: {
            transform:
                position === 0
                    ? 'translateX(0%)' // Move on screen
                    : position === 1
                    ? 'translateX(200%)' // Off-screen to the right
                    : 'translateX(-200%)', // Off-screen to the left
        },
        config: { duration: 4000 }, // Duration of the animation
        reset: position === 1, // Reset position only when off-screen to the right
        onRest: () => {
            if (position === -1) {
                // When house is off to the left, reset back to off-screen right without animation
                setPosition(1); // Jump back to the right off-screen
                setRenderCount((prevCount) => prevCount + 1); // Increment render count
            }
			onAnimationRest();
        },
    });

    const handleArrowClick = () => {
        if (position === 1) {
            setPosition(0); // Bring house on-screen
        } else if (position === 0) {
            setPosition(-1); // Move house off-screen to the left
        }
    };

	const handleDoorClick = () => {
		if (!isInteracted) {
			onDoorClick();
		}
	}

    return (
        <>
            <animated.div className="house" style={springProps}>
                <HouseImg houseColor={houseColor} roofColor={roofColor} />
                <div onClick={handleDoorClick} className="door-knocker">
                    <Door isOpen={isDoorClicked} />
                </div>
				<div className="pumpkin">
					<img src={pumpkinImage} alt="pumpkin" />
				</div>
				<div className="candy-master">
					<img src="/assets/img/trickOrTreat/pawn.svg" alt="candy master" />
				</div>
            </animated.div>
            <div className="next-house-arrow" onClick={handleArrowClick}>
                <p>⮕</p>
            </div>
        </>
    );
}