import { useDroppable } from '@dnd-kit/core';

export default function MatchingModelA({ identity, style, img, text, className }) {
  const { setNodeRef } = useDroppable({
    id: `droppable-${identity}`,
  });

  return (
    <div className={className} ref={setNodeRef} style={style}>
     {img ? <img src={img} alt={identity} id={`${identity}`} /> : text ? <p>{text}</p> : <h1>{identity}</h1>}
    </div>
  );
}

