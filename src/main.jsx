import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Planos from './routes/Planos/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import MinhasBicicletas from './routes/MinhasBicicletas/index.jsx'
import Perfil from './routes/Perfil/index.jsx'
import Bikes from "./routes/Bike/index.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>,

      },
      {
        path: '/planos',
        element: <Planos/>
      },
      {
        path: '/vistoria',
        element: <Vistoria/>
      },
      {
        path: '/minhasbicicletas',
        element: <MinhasBicicletas/>
      },
      {
        path: '/perfil',
        element: <Perfil/>
      },
      {
        path: '/bikes',
        element: <Bikes/>
      }
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
