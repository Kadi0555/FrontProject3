import React from "react"
export default function Posts(props){
    return(
        <>
            <div className="content">
                <div className="label">{props.label}</div>
                <h2>{props.h2}</h2>
            </div>
        </>
    )
}