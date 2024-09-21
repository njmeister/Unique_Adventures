import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function MatchingModelB({ identity, disabled, className, img }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${identity}`,
	disabled: disabled,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className={className} ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {img ? <img src={img} alt={identity} /> : <h1>{identity}</h1>}
    </div>
  );
}