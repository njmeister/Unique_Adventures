import BubbleFallBubble from "./BubbleFallBubble";
import { useMemo, useState, useEffect } from "react";

export default function BubblePopGame({ bubbles }) {

	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

    return (
		<div className="bubble-background">
			{bubbles.map((bubble, index) => (
				<BubbleFallBubble
					key={index}
					img={bubble.img}
					text={bubble.text}
					initialX={Math.random() * windowSize.width}
					speed={-(Math.random() * 2 + 1)}
					wavelength={Math.random() * 200}
					direction={Math.random() > 0.5 ? 1 : -1}
				/>
			))}
		</div>
    );
}