import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Nav';

export default function Header() {
	const [currentPage, setCurrentPage] = useState('');
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname.substring(1);
		console.log(path);
		setCurrentPage(path ? path : 'About');
	}, [location]);

	const handlePageChange = (page) => setCurrentPage(page);

  return (
	<header className="header">
	  <h1><Link to="/">Noah Meister</Link></h1>
	  <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
	</header>
  );
}