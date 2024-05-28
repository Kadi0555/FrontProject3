import React from "react";
import "./post.scss"

export default function Post(props){
    return(
        <div className="content__post">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <div className="post__content">
                <div className="content__label">{props.label}</div>
                <h2>{props.h2}</h2>
                <div className="content__txt">{props.txt}</div>
            </div>
        </div>
    )
}