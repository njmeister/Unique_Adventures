import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Nav({ currentPage, handlePageChange}) {

	  return (
	<nav className="nav">
		<h2>
			<Link 
				to="/" 
				onClick={() => handlePageChange('About')} 
				className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
			>
				About
			</Link>
		</h2>
		<h2>
			<Link 
				to="/projects"
				onClick={() => handlePageChange('projects')}
				className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
			>
				Projects
			</Link>
		</h2>
		<h2>
			<Link 
				to="/contact"
				onClick={() => handlePageChange('contact')}
				className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
			>
				Contact
			</Link>
		</h2>
		<h2>
			<Link 
				to="/resume"
				onClick={() => handlePageChange('resume')}
				className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
			>
				Resume
			</Link>
		</h2>
		<Hamburger />
	</nav>
  );
}