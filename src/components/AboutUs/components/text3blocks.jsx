import React from "react";

export default function Text3(props){
    return(
        <div className="container__text3" style={{display:"grid",width:'516px',height:'249px'}}>
            <div className="content3">{props.label}</div>
            <div className="content3">{props.h2}</div>
            <div className="content3">{props.txt}</div>
        </div>
    )
}