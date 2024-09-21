import { useDroppable } from '@dnd-kit/core';

export default function MatchingModelA({ identity, style, img, text}) {
  const { setNodeRef } = useDroppable({
    id: `droppable-${identity}`,
  });

  return (
    <div className="modelA-container" ref={setNodeRef} style={style}>
     {img ? <img src={img} alt={identity} /> : text ? <p>{text}</p> : <h1>{identity}</h1>}
    </div>
  );
}

