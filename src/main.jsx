import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import App from './App';
import './index.css';

const Homepage = lazy(() => import('./pages/Homepage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<div>Loading...</div>}><Homepage /></Suspense>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
  );