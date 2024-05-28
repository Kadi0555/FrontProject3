import React from "react";
import Box1 from "./box1/Box1";
import Box2 from "./box2/Box2";
import Box3 from "./box3/Box3";
import Box4 from "./box4/Box4";
import Box5 from "./box5/Box5";
import Box6 from "./box6/Box6";
import Box7 from "./box7/Box7";
import Box8 from "./box8/Box8";
import Box9 from "./box9/Box9";

import Header from "../../immutableCPT/Header/Header";
import Footer from "../../immutableCPT/Footer/Footer";

import "./Home.scss";

export default function Home(){
    return (
        <>
            <Header></Header>
            <main>
                <div className="content">
                    <Box1></Box1>
                </div>
                <div className="content">
                    <Box2></Box2>
                </div>
                <div className="content">
                    <Box3></Box3>
                </div>
                <div className="content">
                    <Box4></Box4>
                </div>
                <div className="content">
                    <Box5></Box5>
                </div>
                <div className="content">
                    <Box6></Box6>
                </div>
                <div className="content">
                    <Box7></Box7>
                </div>
                <div className="content">
                    <Box8></Box8>
                </div>
                <div className="content">
                    <Box9></Box9>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}