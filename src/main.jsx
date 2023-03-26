import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ErrorPage from "./Pages/error-page";
import './index.scss'
import Intro from './Intro/Intro';

const router = createBrowserRouter([
  {
    path: "/brandingmind/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/brandingmind",
    element: <Intro />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
