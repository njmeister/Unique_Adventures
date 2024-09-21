import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<h1>Unique Adventures</h1>
			<h2><Link to="/play">Games</Link></h2>
		</header>
	);
}