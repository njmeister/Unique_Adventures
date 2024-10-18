import { useState, useEffect } from 'react';
import MatchingModelA from './MatchingModelA';
import MatchingModelB from './MatchingModelB';
import { DndContext } from '@dnd-kit/core';
import Confetti from '../util/Confetti';
import MobileWarning from '../util/MobileWarning';
import matchGameStyles from './matchGame.module.css';
import classNames from 'classnames';

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
    customStyles = {},
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
            <div className={classNames(matchGameStyles.matchGameContainer, customStyles.matchGameContainer)}>
                <MobileWarning />
                {/* <div className="landscape-overlay">
                    Please rotate your device to landscape mode.
                </div> */}
                {showInstructions && (
                    <div className={classNames(matchGameStyles.matchGameInstructions, customStyles.matchGameInstructions)}>
                        <h1>{instructions}</h1>
                    </div>
                )}
                <div className={classNames(matchGameStyles.matchGameBackground, customStyles.matchGameBackground)}>
                    {checkedItems.includes('Background') && <img src={background} />}
                </div>
                {allMatched && (
                    <>
                        <Confetti />
                        <div className={classNames(matchGameStyles.successMessage, customStyles.successMessage)}>
                            <h1>{successMessage}</h1>
                        </div>
                        {showPlayAgain && (
                            <button
                                className={classNames(matchGameStyles.playAgain, customStyles.playAgain)}
                                onClick={() => window.location.reload()}
                            >
                                Play Again
                            </button>
                        )}
                    </>
                )}
                <div className={classNames(matchGameStyles.modelAList, customStyles.modelAList)}>
                    {filteredModelAList.map((modelA, index) => (
                        <div key={index} className={classNames(matchGameStyles.droppableContainer, customStyles.droppableContainer)}>
                            <MatchingModelA
                                identity={modelA.identity}
                                img={modelA.img}
                                className={
                                    correctMatch[`droppable-${modelA.identity}`]
                                        ? classNames(matchGameStyles.matchedModelA, customStyles.matchedModelA)
                                        : classNames(matchGameStyles.modelA, customStyles.modelA)
                                }
                            />
                            {droppedItems[`droppable-${modelA.identity}`] && (
                                <MatchingModelB
                                    identity={droppedItems[
                                        `droppable-${modelA.identity}`
                                    ].replace('draggable-', '')}
                                    disabled={true}
                                    className={classNames(matchGameStyles.matchedModelB, customStyles.matchedModelB)}
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
                    <div className={classNames(matchGameStyles.modelBList, customStyles.modelBList)}>
                        {filteredModelBList.map(
                            (modelB, index) =>
                                !Object.values(droppedItems).includes(
                                    `draggable-${modelB.identity}`
                                ) && (
                                    <MatchingModelB
                                        key={index}
                                        identity={modelB.identity}
                                        className={classNames(matchGameStyles.modelBContainer, customStyles.modelBContainer)}
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