import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Door from './Door';
import HouseImg from './HouseImg';

const colorList = [
    '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff', '#f80', '#8f0', '#08f', '#f08', '#80f', '#0f8', '#f88', '#8f8', '#88f', '#ff8', '#f8f', '#8ff', '#888', '#fff',
];

export default function House({ onDoorClick, isDoorClicked }) {
    const [position, setPosition] = useState(1); // Start with house off-screen to the right (1 = off right, 0 = on screen, -1 = off left)
    const [renderCount, setRenderCount] = useState(0); // Counter to keep track of renders
    const [houseColor, setHouseColor] = useState(colorList[Math.floor(Math.random() * colorList.length)]);
    const [roofColor, setRoofColor] = useState(colorList[Math.floor(Math.random() * colorList.length)]);

    // Update colors every third render
    useEffect(() => {
        if (renderCount % 1 === 0) {
            setHouseColor(colorList[Math.floor(Math.random() * colorList.length)]);
            setRoofColor(colorList[Math.floor(Math.random() * colorList.length)]);
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
        },
    });

    const handleArrowClick = () => {
        if (position === 1) {
            setPosition(0); // Bring house on-screen
        } else if (position === 0) {
            setPosition(-1); // Move house off-screen to the left
        }
    };

    return (
        <>
            <animated.div className="house" style={springProps}>
                <HouseImg houseColor={houseColor} roofColor={roofColor} />
                <div onClick={onDoorClick} className="door-knocker">
                    <Door isOpen={isDoorClicked} />
                </div>
            </animated.div>
            <div className="next-house-arrow" onClick={handleArrowClick}>
                <p>⮕</p>
            </div>
        </>
    );
}