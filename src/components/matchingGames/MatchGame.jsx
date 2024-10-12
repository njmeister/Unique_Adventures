import { useState, useEffect } from 'react';
import MatchingModelA from './MatchingModelA';
import MatchingModelB from './MatchingModelB';
import { DndContext } from '@dnd-kit/core';
import Confetti from '../util/Confetti';
import './matchGame.css';

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export default function MatchGame({
	modelAList,
	modelBList,
	successMessage,
	background,
	instructions,
	checkedItems,
}) {
	const [droppedItems, setDroppedItems] = useState({});
	const [correctMatch, setCorrectMatch] = useState({});
	const [incorrectMatch, setIncorrectMatch] = useState({});
	const [allMatched, setAllMatched] = useState(false);
	const [showPlayAgain, setShowPlayAgain] = useState(false);
	const [showInstructions, setShowInstructions] = useState(true);
	const filteredModelBList = shuffleArray(
		modelBList.filter((modelB) => checkedItems.includes(modelB.identity))
	);

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
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [showInstructions]);

	useEffect(() => {
		if (Object.keys(correctMatch).length === modelAList.length) {
			setAllMatched(true);
		}
	}, [correctMatch, modelAList.length]);

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (over) {
			const activeId = active.id.replace('draggable-', '');
			const overId = over.id.replace('droppable-', '');
			if (activeId === overId) {
				setDroppedItems((prev) => ({
					...prev,
					[over.id]: active.id,
				}));
				setCorrectMatch((prev) => ({
					...prev,
					[over.id]: active.id,
				}));

				const successSound = new Audio(
					modelAList.find((modelA) => modelA.identity === overId).successSound
				);
				successSound.play();
			} else {
				setIncorrectMatch((prev) => ({
					...prev,
					[over.id]: active.id,
				}));

				const failureSound = new Audio(
					modelAList.find((modelA) => modelA.identity === overId).failureSound
				);
				failureSound.play();

				setTimeout(() => {
					setIncorrectMatch((prev) => {
						const newIncorrectMatch = { ...prev };
						delete newIncorrectMatch[over.id];
						return newIncorrectMatch;
					});
				}, 1000);
			}
		}
	};

	const filteredModelAList = modelAList.filter((modelA) =>
		checkedItems.includes(modelA.identity)
	);

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{showInstructions && (
				<div className="match-game-instructions">
					<h1>{instructions}</h1>
				</div>
			)}
			<div className={'match-game-background'}>
				{checkedItems.includes('Background') && <img src={background} />}
			</div>
			<div className="match-game-container">
				{allMatched && (
					<>
						<Confetti />
						<div className="success-message">
							<h1>{successMessage}</h1>
						</div>
						{showPlayAgain && (
							<button
								className="play-again"
								onClick={() => window.location.reload()}
							>
								Play Again
							</button>
						)}
					</>
				)}
				<div className="modelA-list">
					{filteredModelAList.map((modelA, index) => (
						<div key={index} className="droppable-container">
							<MatchingModelA
								identity={modelA.identity}
								img={modelA.img}
								className={
									correctMatch[`droppable-${modelA.identity}`]
										? 'matched-modelA'
										: 'modelA'
								}
							/>
							{droppedItems[`droppable-${modelA.identity}`] && (
								<MatchingModelB
									identity={droppedItems[
										`droppable-${modelA.identity}`
									].replace('draggable-', '')}
									disabled={true}
									className="matched-modelB"
									img={
										modelBList.find(
											(modelB) =>
												modelB.identity ===
												droppedItems[`droppable-${modelA.identity}`].replace(
													'draggable-',
													''
												)
										).img
									}
								/>
							)}
						</div>
					))}
				</div>
				{!allMatched && modelBList && (
					<div className="modelB-list">
						{filteredModelBList.map(
							(modelB, index) =>
								!Object.values(droppedItems).includes(
									`draggable-${modelB.identity}`
								) && (
									<MatchingModelB
										key={index}
										identity={modelB.identity}
										className="modelB-container"
										img={modelB.img}
									/>
								)
						)}
					</div>
				)}
			</div>
		</DndContext>
	);
}
