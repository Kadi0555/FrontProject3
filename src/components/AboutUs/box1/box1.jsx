import React from "react";
import "./box1.scss";

import Text3 from "../components/text3blocks";

function box1(){
    return(
        <div className="box1__container">
            <div className="container__size">
                <div className="content">
                    <div className="block__label">
                        <p>ABOUT US</p>
                        <p>We are a team of content writers who share their learnings</p>
                    </div>
                    <div className="txt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div className="content">
                    <div className="block__k">
                        <div className="k">
                            <div className="h2">12+</div>
                            <div className="text">Blogs Published</div>
                        </div>
                        <div className="k">
                            <div className="h2">18K+</div>
                            <div className="text">Views on Finsweet</div>
                        </div>
                        <div className="k">
                            <div className="h2">30K+</div>
                            <div className="text">Total active Users</div>       
                        </div>
                    </div>
                    <div className="block__color">
                        <div className="color"></div>
                        <div className="color"></div>
                    </div>
                </div>
                <div className="content">
                    <Text3 label={'Our mision'} h2={'Creating valuable content for creatives all around the world'} txt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'}></Text3>
                    <Text3 label={'Our Vision'} h2={'A platform that empowers individuals to improve'} txt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'}></Text3>
                </div>
            </div>
        </div>
    )
}

export default box1;