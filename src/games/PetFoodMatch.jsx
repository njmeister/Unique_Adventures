import React, { useState, useEffect } from 'react';
import MatchGame from '../components/MatchGame';
import OptionsList from '../components/OptionsList';
import './css/petFoodMatch.css';

const modelAAnimalList = [
	{
		identity: 'Dog',
		img: '/assets/img/petFoodMatch/dog.svg',
		text: 'Dog',
		successSound: '/assets/audio/petFoodMatch/dogHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/dogSad.mp3',
	},
	{
		identity: 'Cat',
		img: '/assets/img/petFoodMatch/cat.svg',
		text: 'Cat',
		successSound: '/assets/audio/petFoodMatch/catHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/catSad.mp3',
	},
	{
		identity: 'Bird',
		img: '/assets/img/petFoodMatch/bird.svg',
		text: 'Bird',
		successSound: '/assets/audio/petFoodMatch/birdHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/birdSad.mp3',
	},
	{
		identity: 'Fish',
		img: '/assets/img/petFoodMatch/fish.svg',
		text: 'Fish',
		successSound: '/assets/audio/petFoodMatch/fishHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/fishSad.mp3',
	},
	{
		identity: 'Rabbit',
		img: '/assets/img/petFoodMatch/rabbit.svg',
		text: 'Rabbit',
		successSound: '/assets/audio/petFoodMatch/rabbitHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/rabbitSad.wav',
	},
];
const modelBAnimalList = [
	{ identity: 'Dog', img: '/assets/img/petFoodMatch/dogFood.svg' },
	{ identity: 'Cat', img: '/assets/img/petFoodMatch/catFood.svg' },
	{ identity: 'Bird', img: '/assets/img/petFoodMatch/birdFood.svg' },
	{ identity: 'Fish', img: '/assets/img/petFoodMatch/fishFood.svg' },
	{ identity: 'Rabbit', img: '/assets/img/petFoodMatch/rabbitFood.svg' },
];

const modelAColorList = [
	{
		identity: 'Red',
		img: '/assets/img/petFoodMatch/dog.svg',
		text: 'Dog',
		successSound: '/assets/audio/petFoodMatch/dogHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/dogSad.mp3',
	},
	{
		identity: 'Blue',
		img: '/assets/img/petFoodMatch/dog2.svg',
		text: 'Dog',
		successSound: '/assets/audio/petFoodMatch/dogHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/dogSad.mp3',
	},
	{
		identity: 'Yellow',
		img: '/assets/img/petFoodMatch/dog3.svg',
		text: 'Dog',
		successSound: '/assets/audio/petFoodMatch/dogHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/dogSad.mp3',
	},
	{
		identity: 'Purple',
		img: '/assets/img/petFoodMatch/dog4.svg',
		text: 'Dog',
		successSound: '/assets/audio/petFoodMatch/dogHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/dogSad.mp3',
	},
	{
		identity: 'Green',
		img: '/assets/img/petFoodMatch/dog5.svg',
		text: 'Dog',
		successSound: '/assets/audio/petFoodMatch/dogHappy.mp3',
		failureSound: '/assets/audio/petFoodMatch/dogSad.mp3',
	},
];

const modelBColorList = [
	{ identity: 'Red', img: '/assets/img/petFoodMatch/dogFood.svg' },
	{ identity: 'Blue', img: '/assets/img/petFoodMatch/dog2Food.svg' },
	{ identity: 'Yellow', img: '/assets/img/petFoodMatch/dog3Food.svg' },
	{ identity: 'Purple', img: '/assets/img/petFoodMatch/dog4Food.svg' },
	{ identity: 'Green', img: '/assets/img/petFoodMatch/dog5Food.svg' },
];

const animalInstructions = "Can you find everyone's favorite food?";
const colorInstructions = "Each dog has a favorite color. Can you find each dog's bowl?";

const successMessage = 'Everyone is fed!';
const background = '/assets/img/petFoodMatch/background.svg';

const animalOptions = [
	{ name: 'Background', type: 'checkbox' },
  { name: 'Dog', type: 'checkbox' },
  { name: 'Cat', type: 'checkbox' },
  { name: 'Bird', type: 'checkbox' },
  { name: 'Fish', type: 'checkbox' },
  { name: 'Rabbit', type: 'checkbox' },
];

const colorOptions = [
	{ name: 'Background', type: 'checkbox' },
  { name: 'Red', type: 'checkbox' },
  { name: 'Blue', type: 'checkbox' },
  { name: 'Yellow', type: 'checkbox' },
  { name: 'Purple', type: 'checkbox' },
  { name: 'Green', type: 'checkbox' },
];

const defaultOptions = [
	{ name: 'Background', type: 'checkbox'}
];

export default function PetFoodMatch() {
  const [lesson, setLesson] = useState('');
  const [checkedItems, setCheckedItems] = useState(['Background']);

  useEffect(() => {
    if (lesson === 'animals') {
      setCheckedItems(animalOptions.map(option => option.name));
    } else if (lesson === 'colors') {
      setCheckedItems(colorOptions.map(option => option.name));
    }
  }, [lesson]);

  const handleCheckboxChange = (option, value) => {
    setCheckedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const renderLesson = () => {
    switch (lesson) {
      case 'animals':
        return (
          <MatchGame
            modelAList={modelAAnimalList}
            modelBList={modelBAnimalList}
            successMessage={successMessage}
            background={background}
            instructions={animalInstructions}
            checkedItems={checkedItems}
          />
        );
      case 'colors':
        return (
          <MatchGame
            modelAList={modelAColorList}
            modelBList={modelBColorList}
            successMessage={successMessage}
            background={background}
            instructions={colorInstructions}
            checkedItems={checkedItems}
          />
        );
      default:
        return (
          <div className="lesson-select-container">
            <div className="match-game-background">
			{checkedItems.includes('Background') && <img src={background} />}
            </div>
            <div className="lesson-select">
              <h3>What would you like to learn today?</h3>
              <div className="lesson-select-buttons">
                <button onClick={() => setLesson('animals')}>Animals</button>
                <button onClick={() => setLesson('colors')}>Colors</button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {renderLesson()}
      <OptionsList options={lesson === 'animals' ? animalOptions : lesson === 'colors' ? colorOptions : defaultOptions} onOptionChange={handleCheckboxChange} checkedItems={checkedItems} />
    </>
  );
}