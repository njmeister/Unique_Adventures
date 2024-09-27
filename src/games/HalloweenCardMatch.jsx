import CardMatchGame from '../components/CardMatchGame';
import { useState } from 'react';
import OptionsList from '../components/OptionsList';

const cardBack = [ 
    {backImg: '/assets/img/halloweenCardMatch/card-back.png', backText: 'Happy Halloween!'}
];

const cardFrontList = [
    {frontImg: '/assets/img/halloweenCardMatch/ghost.png', frontText: 'Ghost'},
    {frontImg: '/assets/img/halloweenCardMatch/pumpkin.png', frontText: 'Pumpkin'},
    {frontImg: '/assets/img/halloweenCardMatch/bat.png', frontText: 'Bat'},
    {frontImg: '/assets/img/halloweenCardMatch/spider.png', frontText: 'Spider'},
    {frontImg: '/assets/img/halloweenCardMatch/candy.png', frontText: 'Candy'},
    {frontImg: '/assets/img/halloweenCardMatch/witch.png', frontText: 'Witch'},
    {frontImg: '/assets/img/halloweenCardMatch/skull.png', frontText: 'Skull'},
    {frontImg: '/assets/img/halloweenCardMatch/vampire.png', frontText: 'Vampire'},
    {frontImg: '/assets/img/halloweenCardMatch/ghost.png', frontText: 'Ghost'},
    {frontImg: '/assets/img/halloweenCardMatch/pumpkin.png', frontText: 'Pumpkin'},
    {frontImg: '/assets/img/halloweenCardMatch/bat.png', frontText: 'Bat'},
    {frontImg: '/assets/img/halloweenCardMatch/spider.png', frontText: 'Spider'},
    {frontImg: '/assets/img/halloweenCardMatch/candy.png', frontText: 'Candy'},
    {frontImg: '/assets/img/halloweenCardMatch/witch.png', frontText: 'Witch'},
    {frontImg: '/assets/img/halloweenCardMatch/skull.png', frontText: 'Skull'},
    {frontImg: '/assets/img/halloweenCardMatch/vampire.png', frontText: 'Vampire'},
];

const options = [
    {name: 'Ghost', type: 'checkbox'},
    {name: 'Pumpkin', type: 'checkbox'},
    {name: 'Bat', type: 'checkbox'},
    {name: 'Spider', type: 'checkbox'},
    {name: 'Candy', type: 'checkbox'},
    {name: 'Witch', type: 'checkbox'},
    {name: 'Skull', type: 'checkbox'},
    {name: 'Vampire', type: 'checkbox'},
]

export default function HalloweenCardMatch() {
    const [checkedItems, setCheckedItems] = useState(['Ghost', 'Pumpkin', 'Bat', 'Spider', 'Candy', 'Witch', 'Skull', 'Vampire']);

    const handleCheckboxChange = (option) => {
        setCheckedItems((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    }

    return (
        <div>
            <CardMatchGame cardBack={cardBack} cardFrontList={cardFrontList} checkedItems={checkedItems} />
            <OptionsList options={options} checkedItems={checkedItems} onOptionChange={handleCheckboxChange} />
        </div>
    );
}