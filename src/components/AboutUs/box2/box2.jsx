import React from "react";
import Text3 from "../components/text3blocks";

import IMG1 from "./images/ground-group-growth-hands-461049.png";
import IMG2 from "./images/shapes.png";

import "./box2.scss";

function box2(){
    return(
        <div className="container__box2">
            <div className="container__size">
                <Text3 label={"Our team of creatives"} h2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} txt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}></Text3>
                <div className="images">
                    <img src={IMG1} alt="" className="one"></img>
                    <img src={IMG2} alt="" className="two"></img>
                </div>
            </div>
        </div>
    )
}

export default box2;