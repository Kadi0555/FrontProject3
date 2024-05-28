import React from "react";
import "./Box6.scss";
import Author from "../../ComponentsAll__pages/Authors/ListAuthor";
import IMG_CONTENT from "./images/content-baker-with-delicious-puff-in-cafeteria-6205509.png";
import IMG_Fashion from "./images/fashion-woman-cute-shoes-5704849.png";
import IMG_main from "./images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png";
import IMG_woman from "./images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png";

function Box6(){
    return(
        <div className="block__box6">
            <div className="container__size">
                <div className="labelOne">List of Authors</div>
                <div className="content">
                    <Author img={IMG_CONTENT} label={"Floyd Miles"} txt={"Content Writer @Company"}></Author>
                    <Author img={IMG_Fashion} label={"Floyd Miles"} txt={"Content Writer @Company"}></Author>
                    <Author img={IMG_main} label={"Floyd Miles"} txt={"Content Writer @Company"}></Author>
                    <Author img={IMG_woman} label={"Floyd Miles"} txt={"Content Writer @Company"}></Author>
                </div>
            </div>
        </div>
    )
}

export default Box6;