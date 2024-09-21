import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PlayPage() {
	return (
		<div className="page">
			<Outlet />
		</div>
	);
}