import React from "react";
import Post from "../../../ComponentsAll__pages/post/post";
import IMG1 from "./images/One.png";
import IMG2 from "./images/Two.png";
import IMG3 from "./images/Tree.png";
import IMG4 from "./images/Four.png";

import "./Box2.scss";

function Box2(){
    return(
        <div className="content__box2">
            <div className="container__size">
                <div className="label__post">
                    All posts
                </div>
                <div className="slider__main">
                    <div className="main__content">
                        <Post img={IMG1} label={"Startup"} h2={"Design tips for designers that cover everything you need"} txt={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}></Post>
                    </div>
                    <div className="main__content">
                        <Post img={IMG2} label={"BUSINESS"} h2={"How to build rapport with your web design clients"} txt={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}></Post>
                    </div>
                    <div className="main__content">
                        <Post img={IMG3} label={"Startup"} h2={"Logo design trends to avoid in 2022"} txt={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}></Post>
                    </div>
                    <div className="main__content">
                        <Post img={IMG4} label={"TECHNOLOGY"} h2={"8 Figma design systems you can download for free today"} txt={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}></Post>
                    </div>
                    <div className="main__content">
                        <Post img={IMG2} label={"ECONOMY"} h2={"Font sizes in UI design: The complete guide to follow"} txt={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}></Post>
                    </div>
                </div>
                <div className="clicked__slide">
                    <div className="slide__prev">Prev</div>
                    <div className="slide__next">Next</div>
                </div>
            </div>
        </div>
    )
}

export default Box2;