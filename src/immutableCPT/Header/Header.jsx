import React from "react";
import "./Header.scss";
function Header(){
    return (
        <header>
            <div className="container">
                <div className="container__size">
                    <div className="container__content">
                        <div className="sh">
                            Finsweet
                        </div>
                        <div className="content__two">
                            <ul className="list">
                                <li className="link"><a href="\">Home</a></li>
                                <li className="link"><a href="\blog">Blog</a></li>
                                <li className="link"><a href="\about">About</a></li>
                                <li className="link"><a href="\contact">Contact</a></li>
                            </ul>
                            <div className="button">
                                <button> Subsribe </button>
                            </div>
                        </div>
                        <div className="burger" onClick={() =>{
                            let brg = document.body.querySelector('.burger');
                            let cntTwo = document.body.querySelector('.content__two');
                            let blockOVER = document.body.querySelector('.container__content');
                            brg.classList.toggle('active');
                            cntTwo.classList.toggle('active');
                            blockOVER.classList.toggle('active');
                        }}>
                            <span className="spn"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;