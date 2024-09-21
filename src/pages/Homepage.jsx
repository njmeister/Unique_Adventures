import React, { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import AudioBox from '../components/AudioBox';
import { Stage, Layer, Line } from 'react-konva';

export default function Homepage() {


    return (
        <div className="page">
            <h2>Home Page</h2>

			<AudioBox />
        </div>
    );
}