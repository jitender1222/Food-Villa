import React from "react";

import  ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import About from "./Components/About";

 const App=()=>{
    return <>
    <Header />
    <Outlet />

    </>
 }

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement:<ErrorPage />,

        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact />
            }
        ]
    },
])  

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

export default App;


