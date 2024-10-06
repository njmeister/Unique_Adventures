import { Outlet } from 'react-router-dom';
import Header from './components/general/Header';
import Footer from './components/general/Footer';

export default function App() {
	  return (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
  );
}