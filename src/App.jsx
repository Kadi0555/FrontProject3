import React from "react";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/PrivacyPolicy/Privacy";
import Error404 from "./components/Error/Error404";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,     
        errorElement:<Error404/> 
    },
    {
        path:'/blog',
        element:<Blog/>,
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/contact',
        element:<Contact/>,
    },
    {
        path:'/privacy',
        element:<Privacy/>,
    }
]);

export default class App extends React.Component{
    render(){
        return(
            <div className="container__app">
                <div className="container">
                    <RouterProvider router={Router}/>
                </div>
            </div>
        )
    }
}