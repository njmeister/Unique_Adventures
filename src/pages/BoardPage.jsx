import Board from '../components/Board';

export default function BoardPage() {

	const projects = [
		{
			title: "Community Connection's Site",
			img: "/assets/images/communityConnection1.png",
			description: "Community Connection's Site is a simple informational website for a small non-profit organization in central Illinois.",
			link: "https://communityconnectionil.com/",
			expandedDescription: "Community Connection is a small non-profit organization in central Illinois. I have been assissting them with updates and maintenance of their existing WordPress site since June 2024. The site is built on WordPress with custom themes and plugins written in PHP.",
		},
		{
			title: "Game Invaders",
			img: "/assets/images/gameInvaders1.png",
			description: "Game Invaders is a web application that allows users to play browser-based games.",
			link: "https://game-invaders2-7cffceb5a29e.herokuapp.com/",
			github: "https://github.com/FailedPastry/project-game?tab=readme-ov-file",
			expandedDescription: "Game Invaders is a web application that allows users to play browser-based games. The application is built with the MERN stack and Apollo GraphQL. It is deployed on Heroku. This project was a collaboration; my primary role was back-end development and site structure."
		},
		{
			title: "Book Search Engine",
			img: "/assets/images/bookSearchEngine1.png",
			description: "Book Search Engine is a web application that allows users to search for books and save them to a list.",
			link: "https://book-search-engine-qp3b.onrender.com/",
			github: "https://github.com/njmeister/Book-Search-Engine",
			expandedDescription: "Book Search Engine is a web application that allows users to search for books and save them to a list. The application is built with the MERN stack, Apollo GraphQL, and google books api. The application is deployed on Render."

		},
		{
			title: "Book Blend",
			img: "/assets/images/bookblend1.png",
			description: "Book Blend is a web application that allows users to rate and leave comments on books they've read.",
			link: "https://book-blend-reviews-e430070779d0.herokuapp.com/",
			github: "https://github.com/sinclairems/BookBlendReviews",
			expandedDescription: "Book Blend is a web application that allows users to rate and leave comments on books they've read. The application is built with a Node.js/Express.js server, a MySQL database, and a Handlebars.js front end. The application is deployed on Heroku. This project was a collaboration; my primary role was back-end development."
		},
		{
			title: "Witchy Weather",
			img: "/assets/images/witchyweather1.png",
			description: "Witchy Weather tracks current astronomical events and advises the user on optimal times for spellcasting.",
			link: "https://avadeisler.github.io/Witchy_Weather/",
			github: "https://github.com/avadeisler/Witchy_Weather",
			expandedDescription: "Witchy Weather is a web application that tracks current astronomical events and advises the user on optimal times for spellcasting. The application is built with HTML, CSS, and JavaScript and uses third-party APIs to gather data. The application is deployed on GitHub Pages. This project was a collaboration; my primary role was integrating the APIs."
		},
		{
			title: "JATE",
			img: "/assets/images/jate1.png",
			description: "Just Another Text Editor is a simple Progressive Web App text editor.",
			link: "https://pwa-text-editor-nxla.onrender.com",
			github: "https://github.com/njmeister/PWA_Text_Editor",
			expandedDescription: "Just Another Text Editor is a simple Progressive Web App text editor. The application is built with JavaScript and WebPack and is deployed on Render."
		},
		{
			title: "Tech Blog",
			img: "/assets/images/techBlog1.png",
			description: "Tech Blog is a mock blog site where users can create an account, make posts, and comment on other users' posts.",
			link: "https://njm-tech-blog-75452fdd6827.herokuapp.com/",
			github: "https://github.com/njmeister/Tech-Blog",
			expandedDescription: "Tech Blog is a mock blog site where users can create an account, make posts, and comment on other users' posts. The application is built with a Node.js/Express.js server, a MySQL database, and a Handlebars.js front end. The application is deployed on Heroku."
		},
		{
			title: "Note Taker",
			img: "/assets/images/noteTaker1.png",
			description: "Note Taker is a simple note-taking application that allows users to create, save, and delete notes.",
			link: "https://rocky-bayou-45322-d85580837a71.herokuapp.com/",
			github: "https://github.com/njmeister/Note-Taker",
			expandedDescription: "Note Taker is a simple note-taking application that allows users to create, save, and delete notes. The application is built with a Node.js/Express.js server and is deployed on Heroku."
		},
		{
			title: "Weather Dashboard",
			img: "/assets/images/weatherDashboard.png",
			description: "Weather Dashboard is a simple weather application that allows users to search for a city and view the current weather and a 5-day forecast.",
			link: "https://njmeister.github.io/Challenge6-WeatherDashboard/",
			github: "https://github.com/njmeister/Challenge6-WeatherDashboard",
			expandedDescription: "Weather Dashboard is a simple weather application that allows users to search for a city and view the current weather and a 5-day forecast. The application is built with HTML, CSS, and JavaScript and uses OpenWeather APIs to gather data. The application is deployed on GitHub Pages."
		},
	]
	  return (
	<div className="boardPage">
	  <h2>Projects</h2>
	  <Board projects={projects} />
	</div>
  );
}