import React from "react";
import Text3 from "../components/text3blocks";

import IMG1 from "./images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";
import IMG2 from "./images/circle.png";

import "./box3.scss";

function box3(){
    return(
        <div className="container__box3">
            <div className="container__size">
                <div className="images">
                    <img src={IMG1} alt="" className="one"></img>
                    <img src={IMG2} alt="" className="two"></img>
                </div>
                <Text3 label={"Our team of creatives"} h2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} txt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}></Text3>
            </div>
        </div>
    )
}

export default box3;