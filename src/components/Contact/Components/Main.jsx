import React from "react";
import CntThree from './contentThree';
import "./main.scss";

export default function Main(){
    return(
        <div className="container__main">
            <div className="container__size">
                <div className="content__text">
                    <div className="label">Contact us</div>
                    <h2>Let’s Start a Conversation</h2>
                    <div className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                </div>
                <div className="content__register">
                    <div className="register__label">
                        <CntThree label={"Working hours"} h3={"Monday To Friday \n 9:00 AM to 8:00 PM"} text={"Our Support Team is available 24/7"}></CntThree>
                        <CntThree label={"Contact Us"} h3={"020 7993 2905"} text={"hello@finsweet.com"}></CntThree>
                    </div>
                    <form action="">
                        <input type="name" placeholder="Full Name"/>
                        <input type="email" placeholder="Your Email"/>
                        <input type="password" placeholder="Password"/>
                        <textarea placeholder="Message" cols="30" rows="10"></textarea>
                        <button type="button">Send Message</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}