import "./Box3.scss";
import React from "react";

function Box3(){
    return(
        <>
            <div className="box3__content">
                <div className="container__size">
                    <div className="block__color">
                        <div className="color"></div>
                        <div className="color"></div>
                    </div>
                    <div className="block__contents">
                        <div className="content">
                            <div className="txt">ABOUT US</div>
                            <h2>We are a community of content writers who share their learnings</h2>                            
                            <div className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <a href="#" className="link">Read More</a>
                        </div><div className="content">
                            <div className="txt">Our mision</div>
                            <h2>Creating valuable content for  creatives all around the world</h2>                            
                            <div className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box3;