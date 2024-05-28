import React from "react";
import "./Box5.scss";
import ButtonGLOBAL from '../../ComponentsAll__pages/ButtonGLOBAL';
import IMG from "./images/close-up-photography-of-man-wearing-sunglasses-1212984.png";

function Box5(){
    return(
        <>
            <div className="block__box5">
                <div className="container__size">
                    <div className="content__position">
                        <div className="image">
                            <img src={IMG} alt="" />
                        </div>
                        <div className="block__content">
                            <div className="text">Why we started</div>
                            <div className="label">It started out as a simple idea and evolved into our passion</div>
                            <div className="textTwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
                            <ButtonGLOBAL color="#FFD050" Children="Discover our story >"></ButtonGLOBAL>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box5;