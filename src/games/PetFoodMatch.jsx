import React, { useState } from "react";
import MatchGame from "../components/MatchGame";
import "./css/petFoodMatch.css";

const modelAAnimalList = [
	{ identity: "Dog", img: "/assets/img/petFoodMatch/dog.svg", text: "Dog", successSound: "/assets/audio/petFoodMatch/dogHappy.mp3", failureSound: "/assets/audio/petFoodMatch/dogSad.mp3"},
	{ identity: "Cat", img: "/assets/img/petFoodMatch/cat.svg", text: "Cat", successSound: "/assets/audio/petFoodMatch/catHappy.mp3", failureSound: "/assets/audio/petFoodMatch/catSad.mp3"},
	{ identity: "Bird", img: "/assets/img/petFoodMatch/bird.svg", text: "Bird", successSound: "/assets/audio/petFoodMatch/birdHappy.mp3", failureSound: "/assets/audio/petFoodMatch/birdSad.mp3"},
	{ identity: "Fish", img: "/assets/img/petFoodMatch/fish.svg", text: "Fish", successSound: "/assets/audio/petFoodMatch/fishHappy.mp3", failureSound: "/assets/audio/petFoodMatch/fishSad.mp3"},
	{ identity: "Rabbit", img: "/assets/img/petFoodMatch/rabbit.svg", text: "Rabbit", successSound: "/assets/audio/petFoodMatch/rabbitHappy.mp3", failureSound: "/assets/audio/petFoodMatch/rabbitSad.wav"},
];
const modelBAnimalList = [
	{ identity: "Dog", img: "/assets/img/petFoodMatch/dogFood.svg"},
	{ identity: "Cat", img: "/assets/img/petFoodMatch/catFood.svg"},
	{ identity: "Bird", img: "/assets/img/petFoodMatch/birdFood.svg"},
	{ identity: "Fish", img: "/assets/img/petFoodMatch/fishFood.svg"},
	{ identity: "Rabbit", img: "/assets/img/petFoodMatch/rabbitFood.svg"},
];

const modelAColorList = [
	{ identity: "Dog1", img: "/assets/img/petFoodMatch/dog.svg", text: "Dog", successSound: "/assets/audio/petFoodMatch/dogHappy.mp3", failureSound: "/assets/audio/petFoodMatch/dogSad.mp3"},
	{ identity: "Dog2", img: "/assets/img/petFoodMatch/dog2.svg", text: "Dog", successSound: "/assets/audio/petFoodMatch/dogHappy.mp3", failureSound: "/assets/audio/petFoodMatch/dogSad.mp3"},
	{ identity: "Dog3", img: "/assets/img/petFoodMatch/dog3.svg", text: "Dog", successSound: "/assets/audio/petFoodMatch/dogHappy.mp3", failureSound: "/assets/audio/petFoodMatch/dogSad.mp3"},
	{ identity: "Dog4", img: "/assets/img/petFoodMatch/dog4.svg", text: "Dog", successSound: "/assets/audio/petFoodMatch/dogHappy.mp3", failureSound: "/assets/audio/petFoodMatch/dogSad.mp3"},
	{ identity: "Dog5", img: "/assets/img/petFoodMatch/dog5.svg", text: "Dog", successSound: "/assets/audio/petFoodMatch/dogHappy.mp3", failureSound: "/assets/audio/petFoodMatch/dogSad.mp3"},
];

const modelBColorList = [
	{ identity: "Dog1", img: "/assets/img/petFoodMatch/dogFood.svg"},
	{ identity: "Dog2", img: "/assets/img/petFoodMatch/dog2Food.svg"},
	{ identity: "Dog3", img: "/assets/img/petFoodMatch/dog3Food.svg"},
	{ identity: "Dog4", img: "/assets/img/petFoodMatch/dog4Food.svg"},
	{ identity: "Dog5", img: "/assets/img/petFoodMatch/dog5Food.svg"},
];

const animalInstructions = "Can you find eveyone's favorite food?";
const colorInstructions = "Each dog has a favorite color. Can you find each dog's bowl?";

const successMessage = "Everyone is fed!";
const background = "/assets/img/petFoodMatch/background.svg";

export default function PetFoodMatch() {
	const [lesson, setLesson] = useState("");

	const renderLesson = () => {
		switch (lesson) {
			case "animals":
				return (
					<MatchGame modelAList={modelAAnimalList} modelBList={modelBAnimalList} successMessage={successMessage} background={background} instructions={animalInstructions}/>
				);
			case "colors":
				return (
					<MatchGame modelAList={modelAColorList} modelBList={modelBColorList} successMessage={successMessage} background={background} instructions={colorInstructions}/>
				);
			default:
				return (
					<div className="lesson-select-container">
						<div className="match-game-background">
							<img src={background} />
						</div>
						{/* <div className="modelB-list"></div> */}
						<div className="lesson-select">
							<h3>What would you like to learn today?</h3>
							<div className="lesson-select-buttons">
								<button onClick={() => setLesson("animals")}>Animals</button>
								<button onClick={() => setLesson("colors")}>Colors</button>
							</div>
						</div>
					</div>
				);
		}
	}


	return (
		<div className="page">
			{renderLesson()}
		</div>
	);
}