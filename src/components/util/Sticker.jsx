import React from 'react';
import Draggable from 'react-draggable';

export default function Sticker({ img, alt, text, position, isDraggable, onDoubleClick }) {
    return (
        <Draggable defaultPosition={position || { x: 0, y: 0 }} disabled={!isDraggable}>
            <div
                style={{ position: 'absolute', top: position?.y, left: position?.x }}
                onDoubleClick={onDoubleClick}  // Add double-click event
            >
                <img src={img} alt={alt} className="sticker-image" draggable="false" />
                {text && <p>{text}</p>}
            </div>
        </Draggable>
    );
}
