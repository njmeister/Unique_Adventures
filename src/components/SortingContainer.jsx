import { useDroppable } from '@dnd-kit/core';

export default function MatchingModelA({ identity, img, text, goal, value}) {
  const { setNodeRef } = useDroppable({
	id: `droppable-${identity}`,
  });

  return (
	<div className="sorting-container" ref={setNodeRef}>
	 {img ? <img src={img} alt={identity} /> : text ? <p>{text}</p> : <h1>{identity}</h1>}
	 {text && <p>{text}</p>}
	</div>
  );
}