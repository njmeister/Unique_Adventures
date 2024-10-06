import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Candy({ img, name, onClick }) {
    return (
        <div className="candy">
            <img src={img} alt={name} id={name.toLowerCase().replace(' ', '-')} onClick={() => onClick(name)} />
        </div>
    );
}