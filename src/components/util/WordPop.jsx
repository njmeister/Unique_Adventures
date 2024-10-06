import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function WordPop({ text, delay }) {
	  const [isVisible, setIsVisible] = useState(false);

  const springProps = useSpring({
	transform: isVisible ? "scale(1)" : "scale(0)",
	config: { mass: 10, tension: 500, friction: 80 },
	delay,
  });

  // Trigger the animation on mount
  useEffect(() => {
	setIsVisible(true);
  }, []);

  return (
	<animated.div className="word-pop" style={springProps}>
	  <p>{text}</p>
	</animated.div>
  );
}