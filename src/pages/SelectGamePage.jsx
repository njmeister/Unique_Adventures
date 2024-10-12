import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './selectGamePage.css';

export default function SelectGamePage() {
    return (
        <>
            <h1>Select a Game</h1>
            <div className="game-list">
                <Link to="/play/petfoodmatch" className="select-screen">
                    <img
                        src="/assets/img/petFoodMatch/pet-food-select-screen.png"
                        alt="Pet Food Match"
                        id="pet-food-match-select-screen"
                    />
                    <p id="pet-food-match-title">Pet Food Match</p>
                </Link>
                <Link to="/play/bubblepopcolor" className="select-screen">
                    <img src="/assets/img/bubblePopColor/bubble-pop-color-select-screen.png" alt="Bubble Pop" id="bubble-pop-select-screen" />
                    <p id="bubble-pop-title">Bubble Pop</p>
                </Link>
                <Link to="/play/pinwheel" className="select-screen">
                    <img src="/assets/img/Pinwheel/wheel.svg" alt="Pinwheel" id="pinwheel-wheel-select-screen" />
                    <img src="assets/img/Pinwheel/pin.svg" alt="Pinwheel" id="pinwheel-pin-select-screen" />
                    <p id="pinwheel-title">Pinwheels</p>
                </Link>
                <Link to="/play/tracegame" className="select-screen">
                    <img src="/assets/img/traceGame/trace-select-screen.png" alt="Trace Game" id="trace-select-screen" />
                    <p id="trace-title">Trace Game</p>
                </Link>
                <Link to="/play/dragndropjack" className="select-screen">
                    <img
                        src="/assets/img/jack-o-lantern/jack-select-screen_1.svg"
                        alt="Jack-O-Lantern Carving"
                        id="jack-select-screen"
                    />
                    <p id="jack-title">Jack-O-Lantern Carving</p>
                </Link>
                <Link to="/play/freedraw" className="select-screen">
                    <img src="/assets/img/freeDraw/free-draw-select-screen.png" alt="Free Draw" id="free-draw-select-screen" />
                    <p id="free-draw-title">Free Draw</p>
                </Link>
                <Link to="/play/bubblefallleaves" className="select-screen">
                    <img src="/assets/img/leafFall/leaf-pile_2.png" alt="Leaf Fall" id="leaf-fall-select-screen" />
                    <p id="leaf-fall-title">Leaf Fall</p>
                </Link>
                <Link to="/play/applecount" className="select-screen">
					<img src="/assets/img/appleCount/apple-count-select-screen.svg" alt="Apple Count" id="apple-count-select-screen" />
					<p id="apple-count-title">Apple Count</p>
				</Link>
				<Link to="/play/halloweencardmatch" className="select-screen">
					<img src="/assets/img/halloweenCardMatch/halloween-card-match-select-screen.png" alt="Halloween Card Match" id="halloween-card-match-select-screen" />
					<p id="halloween-card-match-title">Halloween Card Match</p>
				</Link>
				<Link to="/play/emotionmatch" className="select-screen">
					<img src="/assets/img/emotionMatch/happy-face.svg" alt="Emotion Match" id="emotion-match-select-screen" />
					<p id="emotion-match-title">Emotion Match</p>
				</Link>
				<Link to="/play/trickortreat" className="select-screen">
					<img src="/assets/img/trickOrTreat/trick-or-treat-select-screen.png" alt="Trick or Treat" id="trick-or-treat-select-screen" />
					<p id="trick-or-treat-title">Trick or Treat</p>
				</Link>
            </div>
            <Outlet /> {/* This will render the nested routes */}
        </>
    );
}