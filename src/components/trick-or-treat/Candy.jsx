import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Candy({ img, name }) {
    return (
        <div className="candy" id={name}>
            <img src={img} alt={name}/>
        </div>
    );
}