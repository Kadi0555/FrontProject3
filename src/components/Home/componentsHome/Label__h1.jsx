import React from "react";

function Label__h1(props){
    return(
        <>
            <div className="label">
                    <div className="text" style={{fontWeight:'200'}}>Posted on <span style={{fontWeight:"700",color:'white'}}>startup</span> </div>
                    <h1>Step-by-step guide to choosing <br /> great font pairs</h1>
                    <div className="textTwo">
                        <div className="text"> <span style={{color:'#FFD050'}}>By James West</span> |  May 23, 2022 </div>
                        <div className="text two">{props.label}</div>
                        <span className="close" onClick={props.onClick}></span>
                    </div>
            </div>
        </>
    )
}
export default Label__h1;