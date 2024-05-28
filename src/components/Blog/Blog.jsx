import React from "react";
import Header from "../../immutableCPT/Header/Header";
import Footer from "../../immutableCPT/Footer/Footer";
import Box1 from "./componentsBlog/Box1/Box1";
import Box2 from "./componentsBlog/Box2/Box2";
import Category from "../ComponentsAll__pages/category/category";
import TopFOOt from "../ComponentsAll__pages/TOPfooter/top";

import "./Blog.scss";

function Blog(){
    return(
        <div className="blog__container">
            <Header></Header>
            <div className="blog__content">
                <Box1></Box1>
                <Box2></Box2>
                <Category></Category>
                <TopFOOt></TopFOOt>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Blog;