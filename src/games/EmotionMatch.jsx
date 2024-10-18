import React, { useState, useEffect } from 'react';
import MatchGame from '../components/matchingGames/MatchGame';
import OptionsList from '../components/util/OptionsList';
import matchGameStyles from '../components/matchingGames/matchGame.module.css';
import emotionMatchStyles from './css/emotionMatch.module.css';
import classNames from 'classnames';

const modelAList = [
    {
        identity: 'Happy',
        img: '/assets/img/emotionMatch/happy-face.svg',
        text: 'Happy',
    },
    {
        identity: 'Sad',
        img: '/assets/img/emotionMatch/sad-face.svg',
        text: 'Sad',
    },
    {
        identity: 'Angry',
        img: '/assets/img/emotionMatch/angry-face.svg',
        text: 'Angry',
    },
    {
        identity: 'Surprised',
        img: '/assets/img/emotionMatch/surprised-face.svg',
        text: 'Surprised',
    },
    {
        identity: 'Bored',
        img: '/assets/img/emotionMatch/bored-face.svg',
        text: 'Bored',
    },
    {
        identity: 'Confused',
        img: '/assets/img/emotionMatch/confused-face.svg',
        text: 'Confused',
    },
];

const modelBList = [
    { identity: 'Happy', text: 'Happy' },
    { identity: 'Sad', text: 'Sad' },
    { identity: 'Angry', text: 'Angry' },
    { identity: 'Surprised', text: 'Surprised' },
    { identity: 'Bored', text: 'Bored' },
    { identity: 'Confused', text: 'Confused' },
];

const instructions =
    'Can you name the emotion? Drag and drop the emotion to the matching face.';
const successMessage = 'Great job! You matched all the emotions!';

const options = [
    { name: 'Happy', type: 'checkbox' },
    { name: 'Sad', type: 'checkbox' },
    { name: 'Angry', type: 'checkbox' },
    { name: 'Surprised', type: 'checkbox' },
    { name: 'Bored', type: 'checkbox' },
    { name: 'Confused', type: 'checkbox' },
];

export default function EmotionMatch() {
    const [checkedItems, setCheckedItems] = useState([
        'Happy',
        'Sad',
        'Angry',
        'Surprised',
        'Bored',
        'Confused',
    ]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCheckboxChange = (option) => {
        setCheckedItems((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    return (
        <>
            <MatchGame
                modelAList={modelAList}
                modelBList={modelBList}
                successMessage={successMessage}
                instructions={instructions}
                checkedItems={checkedItems}
                customStyles={emotionMatchStyles}
            />
            {windowWidth > 1000 && (
                <OptionsList
                    options={options}
                    checkedItems={checkedItems}
                    onOptionChange={handleCheckboxChange}
                />
            )}
        </>
    );
}