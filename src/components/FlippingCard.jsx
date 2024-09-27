import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './css/flippingCard.css';

export default function FlippingCard({ backImg, frontImg, backText, frontText, flipped: controlledFlipped, onFlip }) {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const flipped = controlledFlipped !== undefined ? controlledFlipped : internalFlipped;

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleClick = () => {
    if (onFlip) {
      onFlip(!flipped);
    } else {
      setInternalFlipped(!flipped);
    }
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <animated.div
        className="card back"
        style={{
          opacity: opacity.to(o => 1 - o),
          transform
        }}
      >
        {backImg ? <img src={backImg} alt="back" draggable="false" /> : <p>{backText}</p>}
      </animated.div>
      <animated.div
        className="card front"
        style={{
          opacity,
          transform: transform.to(t => `${t} rotateY(180deg)`)
        }}
      >
        {frontImg ? <img src={frontImg} alt="front" draggable="false" /> : <p>{frontText}</p>}
      </animated.div>
    </div>
  );
}