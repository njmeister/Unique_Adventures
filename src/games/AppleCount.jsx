import SortingGame from "../components/SortingGame";
import OptionsList from "../components/OptionsList";
// import './css/appleCount.css';
import { useState } from 'react';

const items = [
    { identity: "Apple0", img: "/assets/img/appleCount/apple1.svg", x: 10, y: 30 },
    { identity: "Apple1", img: "/assets/img/appleCount/apple1.svg", x: 70, y: 10 },
    { identity: "Apple2", img: "/assets/img/appleCount/apple1.svg", x:15, y: 20 },
    { identity: "Apple3", img: "/assets/img/appleCount/apple1.svg", x: 75, y: 20 },
    { identity: "Apple4", img: "/assets/img/appleCount/apple1.svg", x: 50, y: 10 },
    { identity: "Apple5", img: "/assets/img/appleCount/apple1.svg", x: 45, y: 19 },
    { identity: "Apple6", img: "/assets/img/appleCount/apple1.svg", x: 20, y: 10 },
    { identity: "Apple7", img: "/assets/img/appleCount/apple1.svg", x: 30, y: 40 },
    { identity: "Apple8", img: "/assets/img/appleCount/apple1.svg", x: 65, y: 10 },
    { identity: "Apple9", img: "/assets/img/appleCount/apple1.svg", x: 70, y: 20 },
    { identity: "Apple10", img: "/assets/img/appleCount/apple1.svg", x: 50, y: 40 },
    { identity: "Apple11", img: "/assets/img/appleCount/apple1.svg", x: 15, y: 30 },
    { identity: "Apple12", img: "/assets/img/appleCount/apple1.svg", x: 10, y: 15 },
    { identity: "Apple13", img: "/assets/img/appleCount/apple1.svg", x: 20, y: 30 },
    { identity: "Apple14", img: "/assets/img/appleCount/apple1.svg", x: 50, y: 15 },
    { identity: "Apple15", img: "/assets/img/appleCount/apple1.svg", x: 75, y: 30 },
    { identity: "Apple16", img: "/assets/img/appleCount/apple1.svg", x: 30, y: 40 },
    { identity: "Apple17", img: "/assets/img/appleCount/apple1.svg", x: 50, y: 0 },
    { identity: "Apple18", img: "/assets/img/appleCount/apple1.svg", x: 20, y: 35 },
    { identity: "Apple19", img: "/assets/img/appleCount/apple1.svg", x: 10, y: 20 },
    { identity: "Apple20", img: "/assets/img/appleCount/apple1.svg", x: 50, y: 10 },
    { identity: "Apple21", img: "/assets/img/appleCount/apple1.svg", x: 400, y: 30 },
    { identity: "Apple22", img: "/assets/img/appleCount/apple1.svg", x: 70, y: 12 },
    { identity: "Apple23", img: "/assets/img/appleCount/apple1.svg", x: 60, y: 30 }
];

const initialContainers = [
    { img: "/assets/img/appleCount/apple-tree.svg", items: [items[0], items[1], items[2], items[3], items[4]] },
    { img: "/assets/img/appleCount/apple-tree.svg", items: [items[5], items[6], items[7], items[8], items[9], items[10], items[11]] },
    { img: "/assets/img/appleCount/apple-tree.svg", items: [items[12], items[13], items[14], items[15], items[16], items[17]] },
    { img: "/assets/img/appleCount/apple-tree.svg", items: [items[18], items[19], items[20], items[21], items[22], items[23]] }
];

const containers = [
    { identity: "Apple-3", img: "/assets/img/appleCount/apple-basket.svg", text: "3", goal: 3 },
    { identity: "Apple-5", img: "/assets/img/appleCount/apple-basket.svg", text: "5", goal: 5 },
    { identity: "Apple-10", img: "/assets/img/appleCount/apple-basket.svg", text: "10", goal: 10 },
    { identity: "Apple-6", img: "/assets/img/appleCount/apple-basket.svg", text: "6", goal: 6 }
];

const instructions = "Each basket can only hold a certain number of apples. Can you pick the right apples for each basket?";

const successMessage = "You did it!";

const background = "/assets/img/appleCount/apple-count-background.svg";

const options = [
	{ name: 'Background', type: 'checkbox' }
];



export default function AppleCount() {
	const [checkedItems, setCheckedItems] = useState(['Background']);

	const handleOptionChange = (option) => {
		setCheckedItems((prev) => 
			prev.includes(option)
				? prev.filter((item) => item !== option)  // Remove if unchecked
				: [...prev, option]  // Add if checked
		);
	};

	return (
		<div className="page">
			<SortingGame
				items={items}
				initialContainers={initialContainers}
				containers={containers}
				instructions={instructions}
				successMessage={successMessage}
				background={background}
				checkedItems={checkedItems}
			/>
			<OptionsList
				options={options}
				checkedItems={checkedItems}
				onOptionChange={handleOptionChange}
			/>
		</div>
	);
}
