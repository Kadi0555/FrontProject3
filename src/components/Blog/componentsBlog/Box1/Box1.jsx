import React from "react";
import ButtonGLOBAL from "../../../ComponentsAll__pages/ButtonGLOBAL";
import IMG from "./images/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png";
import "./Box1.scss";

export default function Box1(){
    return(
        <div className="Box1__contain">
            <div className="container__size">
                <div className="block__contents">
                    <div className="content">
                        <div className="label">Featured Post</div>
                        <h1>Step-by-step guide to choosing great <br /> font pairs</h1>
                        <div className="text2024">By <a href="">Jogn Doe</a> | May 23,2024</div>
                        <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                        <ButtonGLOBAL color={'#FFD050'} Children={"Read More >"}></ButtonGLOBAL>
                    </div>
                    <div className="content">
                        <div className="contentImage">
                            <img src={IMG} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}