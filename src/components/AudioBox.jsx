import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function AudioBox() {
    const [currentTime, setCurrentTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [prevSliderValue, setPrevSliderValue] = useState(0);
    const playerRef = useRef(null);
    const sliderRef = useRef(null);

    const handleSliderChange = (e) => {
        const sliderValue = parseFloat(e.target.value);
        const player = playerRef.current;
        const duration = player.getDuration();
        const newTime = (sliderValue / 100) * duration;

        const delta = sliderValue - prevSliderValue;
        const newSpeed = delta > 0 ? 1 + delta / 10 : 1 + delta / 10;

        setPlaybackSpeed(newSpeed);
        player.seekTo(newTime / duration, 'fraction');
        player.getInternalPlayer().playbackRate = Math.abs(newSpeed);
        if (delta < 0) {
            player.getInternalPlayer().playbackRate = -Math.abs(newSpeed);
        }

        setPrevSliderValue(sliderValue);
    };

    const handleProgress = (state) => {
        setCurrentTime(state.playedSeconds);
        if (sliderRef.current) {
            sliderRef.current.value = (state.played / 1) * 100;
        }
    };

    return (
        <div className="audio-box">
            <ReactPlayer
                ref={playerRef}
                url="/assets/audio/test-audio.wav"
                playing
                controls
                onProgress={handleProgress}
                playbackRate={playbackSpeed}
                width="100%"
                height="50px"
            />
            <input
                ref={sliderRef}
                type="range"
                min="0"
                max="100"
                step="0.1"
                defaultValue="0"
                onChange={handleSliderChange}
				style={{ width: '100%' }}
            />
            <label>Playback Speed: {playbackSpeed.toFixed(2)}x</label>
        </div>
    );
}