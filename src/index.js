import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import LandingPage from './components/landingpage';
import NextPage from './components/nextpage';
import YesPage from './components/yespage';
import InstructionsPage from './components/instructionspage';
import GamePage from './components/gamepage';
import ResultPage from './components/resultpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage></LandingPage>
  },
  {
    path: '/next',
    element: <NextPage></NextPage>
  },
  {
    path: '/yes',
    element: <YesPage></YesPage>
  },
  {
    path: '/instructions',
    element: <InstructionsPage></InstructionsPage>
  },
  {
    path: '/game',
    element: <GamePage></GamePage>
  },
  {
    path: '/result',
    element: <ResultPage></ResultPage>
  },
  {
    path: '*',
    element: <LandingPage></LandingPage>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
