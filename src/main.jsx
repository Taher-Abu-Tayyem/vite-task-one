import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import { DataProvider } from './Context/Data.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: "/Home",
    element: <Home />,
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>

<RouterProvider router={router} />
</DataProvider>

  </StrictMode>
)
