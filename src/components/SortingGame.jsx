import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import SortingItem from './SortingItem';
import SortingContainer from './SortingContainer';
import SortingGameInitialContainer from './SortingGameInitialContainer';
import Confetti from './Confetti';
import './css/sortingGame.css';

export default function SortingGame({
    containers,
    initialContainers,
    items,
    instructions,
    successMessage,
    background,
}) {
    const [containerValue, setContainerValue] = useState({});
    const [goal, setGoal] = useState({});
    const [allMatched, setAllMatched] = useState(false);
    const [showPlayAgain, setShowPlayAgain] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);
    const [matchedItems, setMatchedItems] = useState({});
    const [initialContainerItems, setInitialContainerItems] = useState(initialContainers);
    const [droppedItems, setDroppedItems] = useState({}); // Track dropped apples

    useEffect(() => {
        const initialGoal = {};
        containers.forEach((container) => {
            initialGoal[container.identity] = container.goal;
        });
        setGoal(initialGoal);
    }, [containers]);

    useEffect(() => {
        if (allMatched) {
            const timer = setTimeout(() => {
                setShowPlayAgain(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [allMatched]);

    useEffect(() => {
        if (showInstructions) {
            const timer = setTimeout(() => {
                setShowInstructions(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [showInstructions]);

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (over) {
			const activeId = active.id.replace('draggable-', '');
			const overId = over.id.replace('droppable-', '');
	
			// Ensure the apple can be added to the new container
			if (goal[overId] > (containerValue[overId] || 0)) {
				// Update the new container's value
				setContainerValue((prev) => ({
					...prev,
					[overId]: (prev[overId] || 0) + 1,
				}));
	
				// Add the apple to the matched items
				setMatchedItems((prev) => ({
					...prev,
					[overId]: [...(prev[overId] || []), activeId],
				}));
	
				// Track which apples have been moved
				setDroppedItems((prev) => ({
					...prev,
					[activeId]: overId,  // Record which apple is in which container
				}));
	
				// Remove the apple from the initial container items
				setInitialContainerItems((prev) =>
					prev.map((container) => ({
						...container,
						items: container.items.filter((item) => `${item.identity}` !== activeId),
					}))
				);
	
				// Check if all containers have met their goals
				const allGoalsMet = Object.keys(goal).every(
					(key) => (containerValue[key] || 0) + 1 >= goal[key]
				);
	
				if (allGoalsMet) {
					setAllMatched(true);
				}
			}
		}
	};

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {showInstructions && <div className="instructions"><h1>{instructions}</h1></div>}
			{allMatched && (
                    <>
                        <Confetti />
                        <div className="success-message">
                            <h1>{successMessage}</h1>
                        </div>
                        {showPlayAgain && (
                            <button className="play-again" onClick={() => window.location.reload()}>Play Again</button>
                        )}
                    </>
                )}
			{background && <img src={background} alt="background" className="background"/>}
            <div className="initial-container-container">
                {initialContainerItems.map((container, index) => (
                    <SortingGameInitialContainer
                        key={index}
                        img={container.img}
                        items={container.items.filter(item => !droppedItems[item.identity])}  // Filter out moved apples
                    />
                ))}
            </div>

            <div className="sorting-container-container">
                {containers.map((container, index) => (
                    <div key={index} className="container-wrapper">
                        <SortingContainer
                            identity={container.identity}
                            img={container.img}
                            text={container.text}
                            goal={container.goal}
                            value={containerValue[container.identity] || 0}
                            index={index}
                        >
							<div className="contained-items">
								{matchedItems[container.identity] &&
									matchedItems[container.identity].map((itemId, idx) => (

											<SortingItem
												key={itemId}
												identity={itemId}
												img={
													items.find(
														(item) => item.identity === itemId.split('-')[0]
													).img
												}
												style={{ position: 'relative', width: '50px' }}
											/>
										
									))}
							</div>
                        </SortingContainer>
                        <h1 style={{ zIndex: 200 }}>
                            {containerValue[container.identity] || 0}/{container.goal}
                        </h1>
                    </div>
                ))}
            </div>
        </DndContext>
    );
}