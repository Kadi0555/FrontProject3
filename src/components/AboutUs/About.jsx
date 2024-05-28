import React from "react";

import Box1 from "./box1/box1";
import Box2 from "./box2/box2";
import Box3 from "./box3/box3";
import Box4 from "./box4/box4";

import "./About.scss";

import Header from "./../../immutableCPT/Header/Header";
import TopFooter from "../ComponentsAll__pages/TOPfooter/top";
import Footer from "./../../immutableCPT/Footer/Footer";

function About(){
    return (
        <>
            <Header></Header>
            <div className="About__container">
                <Box1></Box1>
                <Box2></Box2>
                <Box3></Box3>
                <Box4></Box4>
            </div>
            <TopFooter></TopFooter>
            <Footer></Footer>
        </>
    )
}

export default About;