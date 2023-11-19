import SobreNos from './pages/SobreNos';
import MainPage from './pages/MainPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client'



const router = createBrowserRouter([
  {
    path: "sobrenos",
    element: <SobreNos/>
  },
  {
    path: "principal",
    element: <MainPage/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

