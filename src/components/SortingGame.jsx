import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import SortingItem from "./SortingItem";
import SortingContainer from "./SortingContainer";
import SortingGameInitialContainer from "./SortingGameInitialContainer";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function SortingGame({ containers, initialContainers, items, instructions, successMessage, background }) {
    const [containerValue, setContainerValue] = useState({});

    return (
        <DndContext>
            {instructions && <p>{instructions}</p>}
            <div className="initial-container-container">
                {initialContainers.map((container, index) => (
                    <SortingGameInitialContainer key={index} img={container.img} />
                ))}
            </div>
            <div className="sorting-items-container">
                {items.map((item, index) => (
                    <SortingItem
                        key={index}
                        identity={item.identity}
                        img={item.img}
                        style={{ top: `${item.y}px`, left: `${item.x}px`, position: 'absolute' }}
                    />
                ))}
            </div>
            <div className="sorting-container-container">
                {containers.map((container, index) => (
                    <SortingContainer
                        key={index}
                        identity={container.identity}
                        img={container.img}
                        text={container.text}
                        goal={container.goal}
                        value={containerValue}
                    />
                ))}
            </div>
        </DndContext>
    );
}