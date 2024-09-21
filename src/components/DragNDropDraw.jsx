import React, { useState } from 'react';
import Sticker from './Sticker.jsx';
import { v4 as uuidv4 } from 'uuid'; // Use UUID for unique keys
import SaveCreationButton from './SaveCreationButton.jsx';
import RefreshButton from './RefreshButton.jsx';

export default function DragNDropDraw({
    droppableBackground,
    stickerList,
    gameTitle,
}) {
    const [placedStickers, setPlacedStickers] = useState([]);
    const [creationName, setCreationName] = useState(''); // State for the input value

    const handleStickerClick = (sticker) => {
        // Add the clicked sticker to the droppable area with a unique id
        setPlacedStickers([
            ...placedStickers,
            { ...sticker, id: uuidv4(), position: { x: 0, y: 0 } },
        ]);
    };

    const handleStickerDoubleClick = (id) => {
        // Remove sticker from the droppable area using the unique id
        const updatedStickers = placedStickers.filter(
            (sticker) => sticker.id !== id
        );
        setPlacedStickers(updatedStickers);
    };

    return (
        <div className="drag-n-drop-draw-container">
            {/* Droppable area (background image) */}
            <div className="drag-n-drop-draw-droppable-container">
				<img
                    src={droppableBackground}
                    alt="background"
                    className="drag-n-drop-draw-background-element"
                />
                {/* Render placed stickers */}
                {placedStickers.map((sticker) => (
                    <Sticker
                        key={sticker.id} // Use unique ID as the key
                        id={sticker.id}
                        img={sticker.src}
                        alt={sticker.alt}
                        text={sticker.text}
                        position={sticker.position}
                        isDraggable={true}
                        onDoubleClick={() => handleStickerDoubleClick(sticker.id)}
                    />
                ))}
            </div>

            {/* Sticker container as buttons */}
            <div className="sticker-container">
                {stickerList.map((sticker) => (
                    <div
                        key={sticker.id}
                        onClick={() => handleStickerClick(sticker)}
                        className="sticker-button"
                    >
                        <img
                            src={sticker.src}
                            alt={sticker.alt}
                            className="sticker-image"
                            draggable="false"
                        />
                        {sticker.text && <p>{sticker.text}</p>}
                    </div>
                ))}
            </div>
			<SaveCreationButton saveDiv=".drag-n-drop-draw-droppable-container" gameTitle={gameTitle} />
        </div>
    );
}