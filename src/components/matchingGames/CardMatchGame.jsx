import React, { useState, useEffect } from 'react';
import FlippingCard from '../util/FlippingCard';
import '../css/cardMatchGame.css';
import Confetti from '../util/Confetti';

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export default function CardMatchGame({
	cardBack,
	cardFrontList,
	checkedItems,
}) {
	const [activeCard, setActiveCard] = useState(null);
	const [matchedCards, setMatchedCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [shuffledCardFrontList, setShuffledCardFrontList] = useState([]);
	const [allMatched, setAllMatched] = useState(false);
	const [enabledFlip, setEnabledFlip] = useState(true);

	useEffect(() => {
		setShuffledCardFrontList(shuffleArray([...cardFrontList]));
	}, [cardFrontList]);

	const filteredCardFrontList = shuffledCardFrontList.filter((card) =>
		checkedItems.includes(card.frontText)
	);

	const handleCardClick = (card) => {
		if (
			!enabledFlip ||
			matchedCards.includes(card) ||
			flippedCards.includes(card)
		)
			return;

		setFlippedCards([...flippedCards, card]);

		if (activeCard === null) {
			setActiveCard(card);
		} else {
			if (activeCard.frontText === card.frontText) {
				setMatchedCards([...matchedCards, activeCard, card]);
				setActiveCard(null);

				if (matchedCards.length === filteredCardFrontList.length - 2) {
					setAllMatched(true);
				}
			} else {
				setEnabledFlip(false);
				setTimeout(() => {
					setFlippedCards(
						flippedCards.filter((c) => c !== activeCard && c !== card)
					);
					setActiveCard(null);
					setEnabledFlip(true);
				}, 1000);
			}
		}
	};

	return (
		<>
			<div className="card-game-container">
				{filteredCardFrontList.map((cardFront, index) => (
					<FlippingCard
						key={index}
						backImg={cardBack[0].backImg}
						frontImg={cardFront.frontImg}
						backText={cardBack[0].backText}
						frontText={cardFront.frontText}
						flipped={flippedCards.includes(cardFront)}
						onFlip={() => handleCardClick(cardFront)}
					/>
				))}
			</div>
			{allMatched && (
				<>
					<h2 style={{textAlign: 'center'}}>Congratulations! You matched all the cards!</h2>
					<Confetti />
				</>
			)}
		</>
	);
}
