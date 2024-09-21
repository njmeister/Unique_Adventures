import { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import popSound from '/assets/audio/petFoodMatch/fishHappy.mp3';

export default function BubblePopBubble({ color, initialX, initialY, wavelength, direction, text }) {
    const [pop, setPop] = useState(false);
    const [speed, setSpeed] = useState(Math.random() * 2 + 1);
    const audioPlayedRef = useRef(false);
    const audioRef = useRef(new Audio(popSound));

    const [bubblePosition, setBubblePosition] = useState({ x: initialX, y: window.innerHeight });
    const [waveFrequency, setWaveFrequency] = useState(Math.random() * 0.01 + 0.01);
    const [waveAmplitude, setWaveAmplitude] = useState(Math.random() * 200 + 100);

    const [textPositionX, setTextPositionX] = useState(0);
    const [textPositionY, setTextPositionY] = useState(0);

    useEffect(() => {
        audioRef.current.load();
        audioRef.current.volume = 1;
        audioRef.current.muted = false;
    }, []);

    useEffect(() => {
        // Update wave parameters periodically
        const interval = setInterval(() => {
            setWaveFrequency(Math.random() * 0.01 + 0.01);
            setWaveAmplitude(Math.random() * 200 + 100);
        }, speed * 10000);

        return () => clearInterval(interval);
    }, [speed]);

    const handleClick = () => {
        if (!audioPlayedRef.current) {
            setPop(true);
            audioPlayedRef.current = true;
            audioRef.current.play().then(() => {
                console.log('Bubble Audio is playing');
            }).catch((error) => {
                console.error('Error playing audio:', error);
            });
        }

        console.log('Bubble X:', bubblePosition.x);
        console.log('Bubble Y:', bubblePosition.y);
        setTextPositionX(bubblePosition.x);
        setTextPositionY(bubblePosition.y);
        console.log('Text X:', textPositionX);
        console.log('Text Y:', textPositionY);
    };

    const springProps = useSpring({
        from: { y: bubblePosition.y, x: bubblePosition.x },
        to: {
            y: 0,
            x: bubblePosition.x + Math.sin(Date.now() * waveFrequency) * waveAmplitude * direction
        },
        config: { duration: speed * 4000 },
        reset: true,
        onRest: () => {
            setBubblePosition({ x: Math.random() * window.innerWidth, y: window.innerHeight });
            setPop(false);
            audioPlayedRef.current = false;
            setSpeed(Math.random() * 2 + 1);
        }
    });

    return (
        <div>
            {!pop ? (
                <animated.div
                    style={{
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: color,
                        transform: springProps.x.to((x) => `translateX(${x}px)`),
                        top: springProps.y.to((y) => `${y}px`),
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                />
            ) : (
                <animated.div
                    style={{
                        position: 'absolute',
                        top: {textPositionY},
                        left: textPositionX,
                        color,
                        fontSize: '30px',
                        cursor: 'pointer',
						zIndex: 10,
                    }}
                >
					{text}
                </animated.div>
            )}
        </div>
    );
}