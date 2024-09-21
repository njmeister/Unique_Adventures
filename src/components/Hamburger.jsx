import React, { useState } from 'react';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hamburgerMenu">
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      {isOpen && (
        <div className="menu">
          <a href="/">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>
      )}
    </nav>
  );
}