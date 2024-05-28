import React from "react"
import ButtonGlobal from '../../ComponentsAll__pages/ButtonGLOBAL';
import "./top.scss";

export default function Top(){
    return(
        <div className="conten">
            <div className="container__top">
                <div className="label">Join our team to be a part of our story</div>
                <div className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                <ButtonGlobal color={"#FFD050"} Children={"Join Now"}></ButtonGlobal>
            </div>
        </div>
        
    )
}