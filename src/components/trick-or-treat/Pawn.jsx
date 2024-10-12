import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import WordPop from '../util/WordPop';

export default function Pawn({ onPawnClick, isPawnClicked, isInteracted }) {
    const [wordPopup, setWordPopup] = useState(false);
	const [thankYouPopup, setThankYouPopup] = useState(false);
	const [pawnClickCount, setPawnClickCount] = useState(0);

	// Trigger the thank you popup when the pawn is clicked
	useEffect(() => {
		if (!isPawnClicked && pawnClickCount > 0) {
			setThankYouPopup(true);
			setTimeout(() => {
				setThankYouPopup(false);
			}, 2000);
		}
		setWordPopup(isPawnClicked);
	}, [isPawnClicked]);

	// Handle the pawn click event
    const handleClick = () => {
		if (!isInteracted) {
	        setWordPopup(!wordPopup);
    	    onPawnClick(); // Notify parent component
			setPawnClickCount(pawnClickCount + 1);
		}

    };

    return (
        <>
            <div className="pawn" onClick={handleClick}>
                <img src="/assets/img/trickOrTreat/pawn.svg" alt="pawn" />
            </div>
            <div className="trick-or-treat-msg">
                {wordPopup && (
                    <div className="trick">
                        <WordPop text="Trick" delay={0} />
                    </div>
                )}
                {wordPopup && (
                    <div className="or">
                        <WordPop text="Or" delay={250} />
                    </div>
                )}
                {wordPopup && (
                    <div className="treat">
                        <WordPop text="Treat!" delay={500} />
                    </div>
                )}
            </div>
			<div className="thank-you-msg">
				{thankYouPopup && (
					<div className="thank-you">
						<WordPop text="Thank You!" delay={50} />
					</div>
				)}
			</div>
        </>
    );
}