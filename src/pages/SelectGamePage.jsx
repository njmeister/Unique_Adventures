import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function SelectGamePage() {
  const location = useLocation();
  const isRootPath = location.pathname === '/play';

  return (
    <div className="page">
      {isRootPath && (
        <>
          <h1>Select a Game</h1>
          <ul>
            <li>
              <Link to="/play/petfoodmatch">Pet Food Match</Link>
            </li>
            <li>
              <Link to="/play/bubblepopcolor">Bubble Pop Color</Link>
            </li>
            <li>
              <Link to="/play/pinwheel">Pinwheel</Link>
            </li>
			<li>
			  <Link to="/play/tracegame">Trace Game</Link>
			</li>
			<li>
			  <Link to="/play/dragndropjack">Drag and Drop Jack-o-Lanterns</Link>
			</li>
			<li>
			  <Link to="/play/freedraw">Free Draw</Link>
			</li>
			<li>
				<Link to="/play/bubblefallleaves">Bubble Fall Leaves</Link>
			</li>
			{/* <li>
				<Link to="/play/applecount">Apple Count</Link>
			</li> */}
          </ul>
        </>
      )}
      <Outlet />
    </div>
  );
}