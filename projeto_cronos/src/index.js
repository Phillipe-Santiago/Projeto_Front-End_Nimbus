import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SobreNos from './pages/SobreNos';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: "sobrenos",
    element: <SobreNos/>
  },
  {
    path: "",
    element: <MainPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
