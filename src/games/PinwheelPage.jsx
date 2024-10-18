import React, { useState, useEffect } from 'react';
import Pinwheel from '../components/pinwheel/Pinwheel';
import Counter from '../components/util/Counter';
import CSS from './css/pinwheelPage.module.css';

export default function PinwheelPage() {
    const [pinwheelCount, setPinwheelCount] = useState(1);
    const [upperLimit, setUpperLimit] = useState(5);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const newUpperLimit = Math.floor(windowWidth / 350);
        setUpperLimit(newUpperLimit);

        if (pinwheelCount > newUpperLimit) {
            setPinwheelCount(newUpperLimit);
        }

        if (pinwheelCount === 0) {
            setPinwheelCount(1);
        }
    }, [windowWidth, pinwheelCount]);

    const blue = {
        main: '#00f',
        outline: '#00a',
        shadow: '#005',
        highlight: '#55f',
    };
    const red = {
        main: '#f00',
        outline: '#a00',
        shadow: '#500',
        highlight: '#f55',
    };
    const green = {
        main: '#0f0',
        outline: '#0a0',
        shadow: '#050',
        highlight: '#5f5',
    };
    const yellow = {
        main: '#ff0',
        outline: '#aa0',
        shadow: '#550',
        highlight: '#ff5',
    };
    const purple = {
        main: '#f0f',
        outline: '#a0a',
        shadow: '#505',
        highlight: '#f5f',
    };

    const colors = [blue, red, green, yellow, purple];

    return (
        <div className={CSS.pinwheelPage}>
            <h1 className={CSS.instructions}>Tap the Pinwheel to see it spin!</h1>
            <div className={CSS.pinwheelAdjustmentContainer}>
                <div className={CSS.pinwheelContainer}>
                    {Array.from({ length: pinwheelCount }).map((_, index) => (
                        <Pinwheel key={index} color={colors[index % colors.length]} />
                    ))}
                </div>
            </div>
            <div className={CSS.counterContainer}>
                {upperLimit > 1 && (
                    <Counter
                        initialCount={1}
                        upperLimit={upperLimit}
                        lowerLimit={1}
                        onCountChange={setPinwheelCount}
                        count={pinwheelCount}
                    />
                )}
            </div>
        </div>
    );
}