import React from "react";

export default function ContentThree(props){
    return(
        <div className="register__cnt">
            <div className="register__labe">{props.label}</div>
            <h3>{props.h3}</h3>
            <div className="register__text">{props.text}</div>
        </div>
    )
}