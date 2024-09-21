import React, { Suspense, lazy } from 'react';

// Dynamically import game components
const SelectGamePage = lazy(() => import('../pages/SelectGamePage'));
const PetFoodMatch = lazy(() => import('../games/PetFoodMatch'));
const BubblePopColor = lazy(() => import('../games/BubblePopColor'));
const PinwheelPage = lazy(() => import('../games/PinwheelPage'));
const TraceGame = lazy(() => import('../games/TraceGame'));
const DragNDropJack = lazy(() => import('../games/DragNDropJack'));
const FreeDraw = lazy(() => import('../games/FreeDraw'));
const BubbleFallLeaves = lazy(() => import('../games/BubbleFallLeaves'));
const AppleCount = lazy(() => import('../games/AppleCount'));

const playRoutes = [
  {
    path: 'play',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SelectGamePage />
      </Suspense>
    ),
    children: [
      {
        path: 'petfoodmatch',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PetFoodMatch />
          </Suspense>
        ),
      },
      {
        path: 'bubblepopcolor',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BubblePopColor />
          </Suspense>
        ),
      },
      {
        path: 'bubblefallleaves',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BubbleFallLeaves />
          </Suspense>
        ),
      },
      {
        path: 'pinwheel',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PinwheelPage />
          </Suspense>
        ),
      },
      {
        path: 'tracegame',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TraceGame />
          </Suspense>
        ),
      },
      {
        path: 'dragndropjack',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DragNDropJack />
          </Suspense>
        ),
      },
      {
        path: 'freedraw',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FreeDraw />
          </Suspense>
        ),
      },
      {
        path: 'applecount',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AppleCount />
          </Suspense>
        ),
      },
    ],
  },
];

export default playRoutes;