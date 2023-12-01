import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import LandingPage from './routes/landingPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import HomePage from './routes/HomePage.jsx';
import AboutMe from './routes/AboutMePage.jsx';
import ContactPage from './routes/ContactPage.jsx';
import MainProjectPage from './routes/MainProjectPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "porfolio",
    element: <HomePage />,
  },
  {
    path: "aboutme",
    element: <AboutMe />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "project",
    element: <MainProjectPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
