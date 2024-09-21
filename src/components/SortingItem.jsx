import React from "react";
import { useDraggable } from "@dnd-kit/core";

export default function SortingItem({ identity, img, style }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: `draggable-${identity}`,
	});

	return (
		<div className="sorting-item" ref={setNodeRef} {...attributes} {...listeners} style={style}>	
			{img ? <img src={img} alt={identity} /> : <h1>{identity}</h1>}
		</div>
	);
}