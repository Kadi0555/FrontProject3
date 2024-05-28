import React from "react"
import IMG from "./image/Profile picture.png"
import "./Box8.scss";

export default function Box8(){
    return(
        <div className="content__box8">
            <div className="container__size">
                <div className="content">
                    <div className="txt">TESTIMONIALs</div>
                    <h2>What people say about our blog</h2>
                    <div className="txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                </div>
                <div className="content">
                    <div className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="person">
                        <div className="image">
                            <img src={IMG} alt="" />
                        </div>
                        <div className="block__txt">
                            <div className="name">Jonathan Vallem</div>
                            <div className="city">New york, USA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}