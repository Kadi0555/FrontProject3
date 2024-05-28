import React from "react";
import "./box4.scss";

import Author from "../../ComponentsAll__pages/Authors/ListAuthor";

import imgFLoyd from "./images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png";
import img2 from "./images/content-baker-with-delicious-puff-in-cafeteria-6205509.png";
import img3 from "./images/fashion-woman-cute-shoes-5704849.png";
import img4 from "./images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png";


export default function box4(){
   return(
        <div className="container__box4">
            <div className="container__size">
                <div className="block__contents">
                    <div className="content__label">List of Authors</div>
                    <div className="content__one">
                        <Author img={imgFLoyd} label={'Floyd Miles'} txt={'Content Writer @Company'}></Author>
                        <Author img={img2} label={'Dianne Russell'} txt={'Content Writer @Company'}></Author>
                        <Author img={img3} label={'Jenny Wilson'} txt={'Content Writer @Company'}></Author>
                        <Author img={img4} label={'Leslie Alexander'} txt={'Content Writer @Company'}></Author>
                    </div>
                    <div className="content__two">
                        <Author img={img4} label={'Leslie Alexander'} txt={'Content Writer @Company'}></Author>
                        <Author img={imgFLoyd} label={'Floyd Miles'} txt={'Content Writer @Company'}></Author>
                        <Author img={img2} label={'Dianne Russell'} txt={'Content Writer @Company'}></Author>
                        <Author img={img3} label={'Jenny Wilson'} txt={'Content Writer @Company'}></Author>

                    </div>
                </div>
            </div>
        </div>
   ) 
}