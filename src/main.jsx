import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Login from './components/Page/Login/Login';
import Register from './components/Page/Register/Register';
import AuthProvider from './Hoks/Provider/AuthProvider';
import Services from './components/Page/Services';
import PrivateRoute from './Hoks/Route/PrivateRoute';
import ContactUs from './components/Page/Contact/ContactUs';
import CarsoulHero from './components/CarsoulHero/CarsoulHero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/event.json')
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path:'/services/',
        element: <PrivateRoute><Services></Services></PrivateRoute>,
        loader: ()=> fetch('/categories.json'),
        
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/carsoul',
        element: <CarsoulHero></CarsoulHero>,
      },
      
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
