import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutPage from './pages/AboutPage.jsx'
import BoardPage from './pages/BoardPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import { element } from 'prop-types';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
	{
	  path: '/',
	  element: <App />,
	  errorElement: <ErrorPage />,
	  children: [
		{
		  index: true,
		  element: <AboutPage />,
		},
		{
		  path: 'projects',
		  element: <BoardPage />,
		},
		{
		  path: 'projects/:id',
		  element: <ProjectPage />,
		},
		{
		  path: 'contact',
		  element: <ContactPage />,
		},
		{
			path: 'resume',
			element: <ResumePage />,
		},
	  ],
	},
  ]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
  );
