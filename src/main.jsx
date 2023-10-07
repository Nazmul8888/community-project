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
        path:'/services/:id',
        element: <PrivateRoute><Services></Services></PrivateRoute>,
        loader: ()=> fetch('/event.json'),
        
      },
      {
        path: '/register',
        element: <Register></Register>
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
