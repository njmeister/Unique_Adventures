import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import App from './App';
import './index.css';
import playRoutes from './routes/PlayRoutes';

// Dynamically import components
const Homepage = lazy(() => import('./pages/Homepage'));
const SelectGamePage = lazy(() => import('./pages/SelectGamePage'));

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to="/play" replace />,
            },
            {
                path: 'play',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SelectGamePage />
                    </Suspense>
                ),
            },
            ...playRoutes, // Spread the playRoutes array to add individual game routes
        ],
    },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);