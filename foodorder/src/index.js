import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/ContactUs';
import Cart from './components/Cart';
 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>

      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contactus",
        element:<Contact/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
    ]
  },
 
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < RouterProvider router={appRouter}/>
);
