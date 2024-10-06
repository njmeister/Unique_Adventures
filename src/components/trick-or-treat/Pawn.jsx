// import { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import WordPop from '../util/WordPop';

// export default function Pawn() {
// 	const [wordPopup, setWordPopup] = useState(false);

// 	const handleClick = () => {
// 		setWordPopup(!wordPopup);
// 	};

// 	return (
// 		<>
// 			<div className="pawn" onClick={handleClick}>
// 				<img src="/assets/img/trickOrTreat/pawn.svg" alt="pawn" />
// 			</div>
// 			<div className="trick-or-treat-msg">
// 				{wordPopup && (
// 					<div className="trick">
// 						<WordPop text="Trick" delay={0} />
// 					</div>
// 				)}
// 				{wordPopup && (
// 					<div className="or">
// 						<WordPop text="Or" delay={250} />
// 					</div>
// 				)}
// 				{wordPopup && (
// 					<div className="treat">
// 						<WordPop text="Treat!" delay={500} />
// 					</div>
// 				)}
// 			</div>
// 		</>
// 	);
// }

import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import WordPop from '../util/WordPop';

export default function Pawn({ onPawnClick, isPawnClicked }) {
    const [wordPopup, setWordPopup] = useState(false);
	const [thankYouPopup, setThankYouPopup] = useState(false);
	const [pawnClickCount, setPawnClickCount] = useState(0);

	useEffect(() => {
		if (!isPawnClicked && pawnClickCount > 0) {
			setThankYouPopup(true);
			setTimeout(() => {
				setThankYouPopup(false);
			}, 2000);
		}
		setWordPopup(isPawnClicked);
	}, [isPawnClicked]);

    const handleClick = () => {
        setWordPopup(!wordPopup);
        onPawnClick(); // Notify parent component
		setPawnClickCount(pawnClickCount + 1);
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