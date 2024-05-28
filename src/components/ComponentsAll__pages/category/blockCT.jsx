import React from "react";

function BlockCT(props){
    return(
        <>
            <div className="content">
                <div className="block__image">
                    <img src={props.img} alt="" />
                </div>
                <div className="label">{props.label}</div>
                <div className="text">{props.text}</div>
            </div>
        </>
        
    );
};

export default BlockCT;