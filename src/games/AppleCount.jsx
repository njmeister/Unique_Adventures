import SortingGame from "../components/SortingGame";

const items = [
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg", x: 0, y: 0 },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg", x: 10, y: 10 },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" },
	{ identity: "Apple", img: "/assets/img/appleCount/apple1.svg" }
];

const initialContainers = [
	{ img: "/assets/img/appleCount/apple-tree.svg"},
	{ img: "/assets/img/appleCount/apple-tree.svg"},
	{ img: "/assets/img/appleCount/apple-tree.svg"},
	{ img: "/assets/img/appleCount/apple-tree.svg"}
];

const containers = [
	{ identity: "Apple", img: "/assets/img/appleCount/apple-basket.svg", text: "3", goal: 3 },
	{ identity: "Apple", img: "/assets/img/appleCount/apple-basket.svg", text: "5", goal: 5 },
	{ identity: "Apple", img: "/assets/img/appleCount/apple-basket.svg", text: "10", goal: 10 },
	{ identity: "Apple", img: "/assets/img/appleCount/apple-basket.svg", text: "6", goal: 6 }
];

export default function AppleCount() {
  return (
	<div className="page">
	  <SortingGame items={items} initialContainers={initialContainers} containers={containers} />
	</div>
  );
}