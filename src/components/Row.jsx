import { useSpring, animated } from 'react-spring';

export default function Row({ title, description, image }) {

	const imageSpring = useSpring({
		from: { transform: 'translateX(-200%)' },
		to: { transform: 'translateX(0%)' },
		config: {mass: .75, tension: 120, friction: 14},
	});

	const descriptionSpring = useSpring({
		from: { transform: 'translateX(150%)' },
		to: { transform: 'translateX(0%)' },
		config: {mass: .75, tension: 120, friction: 14},
	});

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="content">
            {image && (
                <animated.div className="img-container" style={imageSpring}>
                    <img src={image} alt={title} />
                </animated.div>
            )}
			<animated.div className="description" style={descriptionSpring}>
            	<p>{description}</p>
			</animated.div>
        </div>
    </div>
  );
}