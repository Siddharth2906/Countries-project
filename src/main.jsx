import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Component/Header.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CountryDetail from './Component/CountryDetail.jsx'


const react= createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/country/:name',
      element:<CountryDetail/>
    }
  ]
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
<Header/>
<RouterProvider router={react}/>
  </StrictMode>,
)
