import BubbleFall from "../components/BubbleFall"
import "./css/bubblePopColor.css";

const bubbles = [
	{ img:"/assets/img/leafFall/leaf-orange.png" },
	{ img:"/assets/img/leafFall/leaf-red.png" },
	{ img:"/assets/img/leafFall/leaf-yellow.png" },
	{ img:"/assets/img/leafFall/leaf-brown-maple.png" },
	{ img:"/assets/img/leafFall/leaf-red-maple.png" },
	{ img:"/assets/img/leafFall/leaf-orange-maple.png" },
	{ img:"/assets/img/leafFall/leaf-orange.png" },
	{ img:"/assets/img/leafFall/leaf-red.png" },
	{ img:"/assets/img/leafFall/leaf-yellow.png" },
	{ img:"/assets/img/leafFall/leaf-brown-maple.png" },
	{ img:"/assets/img/leafFall/leaf-red-maple.png" },
	{ img:"/assets/img/leafFall/leaf-orange-maple.png" },
];

export default function BubblePopLeaves() {
	return (
		<div className="page">
			<BubbleFall bubbles={bubbles} />
		</div>
	);
}