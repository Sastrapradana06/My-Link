import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './pages/service.jsx';


const router = createBrowserRouter([
  // + Home
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
