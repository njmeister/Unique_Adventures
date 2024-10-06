import { useState } from 'react';

export default function Door({ isOpen }) {
    return (
        <div className="door">
            <img 
                src="/assets/img/trickOrTreat/door.svg" 
                alt="door" 
                style={isOpen ? { transform: 'translate(-95%, 0%) scaleX(-1)' } : {}}
            />
        </div>
    );
}