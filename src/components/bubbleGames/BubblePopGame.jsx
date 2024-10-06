import BubblePopBubble from "./BubblePopBubble";
import { useState } from "react";

export default function BubblePopGame({ bubbles }) {

	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

    return (
		<div className="bubble-background">
			{bubbles.map((bubble, index) => (
				<BubblePopBubble
					key={index}
					color={bubble.color}
					text={bubble.text}
					initialX={Math.random() * windowSize.width}
					initialY={windowSize.height}
					speed={Math.random() * 1 + 10}
					wavelength={Math.random() * 200}
					direction={Math.random() > 0.5 ? 1 : -1}
				/>
			))}
		</div>
    );
}