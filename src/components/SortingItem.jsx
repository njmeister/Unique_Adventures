import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function SortingItem({ identity, img, style }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `draggable-${identity}`,
    });

    const dragStyle = {
        transform: CSS.Translate.toString(transform),
    };

    const combinedStyle = {
        ...style,
        ...dragStyle,
    };

    return (
        <div className="sorting-item" ref={setNodeRef} {...attributes} {...listeners} style={combinedStyle}>	
            {img ? <img src={img} alt={identity} /> : <h1>{identity}</h1>}
        </div>
    );
}