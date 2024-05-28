import React from "react";
import BlockCT from "./blockCT";
import "./category.scss";
import VECTOR from "./images/Vector.png";
import ICON from "./images/Icon.png";
import ECONOMY from "./images/economy.png";
import CYBORG from "./images/cyborg.png";

function Category(){
    return (
        <div className="content__category">
            <div className="container__size">
                <div className="label">Choose A Catagory</div>
                <div className="contents">
                    <BlockCT img={VECTOR}  label={"Business"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."} ></BlockCT>
                    <BlockCT img={ICON}  label={"Startup"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}></BlockCT>
                    <BlockCT img={ECONOMY}  label={"Economy"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}></BlockCT>
                    <BlockCT img={CYBORG}  label={"Technology"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}></BlockCT>
                </div>
            </div>
        </div>
    )
}

export default Category;