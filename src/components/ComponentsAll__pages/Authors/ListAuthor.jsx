import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram , faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./author.scss";

function Author(props){
    return(
        <div className="Author__block">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <div className="text">
                <div className="label">{props.label}</div>
                <div className="txt">{props.txt}</div>
            </div>
            <div className="messengers">
                <div className="msg"><FontAwesomeIcon icon={faFacebook} className="img" /></div>
                <div className="msg"><FontAwesomeIcon icon={faInstagram} className="img" /></div>
                <div className="msg"><FontAwesomeIcon icon={faTelegram} className="img" /></div>
                <div className="msg"><FontAwesomeIcon icon={faTwitter} className="img" /></div>
            </div>
        </div>
    )
}

export default Author;