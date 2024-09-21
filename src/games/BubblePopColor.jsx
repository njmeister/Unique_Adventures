import BubblePopGame from "../components/BubblePopGame"
import "./css/bubblePopColor.css";

const bubbles = [
	{ color: "#ff0000", text: 'Red' },
	{ color: "#00ff00", text: 'Green' },
	{ color: "#0000ff", text: 'Blue' },
	{ color: "#ffff00", text: 'Yellow' },
	{ color: "#800080", text: 'Purple' },
	{ color: "#ff8c00", text: 'Orange' },
	{ color: "#ff0000", text: 'Red' },
	{ color: "#00ff00", text: 'Green' },
	{ color: "#0000ff", text: 'Blue' },
	{ color: "#ffff00", text: 'Yellow' },
	{ color: "#800080", text: 'Purple' },
	{ color: "#ff8c00", text: 'Orange' },
];

export default function BubblePopColor() {
	return (
		<div className="page">
			<BubblePopGame bubbles={bubbles} />
		</div>
	);
}