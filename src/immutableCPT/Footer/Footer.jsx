import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram , faTelegram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="container__size">
                    <div className="container__head">
                        <div className="sh">Finsweet</div>
                        <ul className="list">
                            <li className="link"><a href="\home">Home</a></li>
                            <li className="link"><a href="\blog">Blog</a></li>
                            <li className="link"><a href="\about">About</a></li>
                            <li className="link"><a href="\contact">Contact</a></li>
                            <li className="link"><a href="\privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="container__input">
                        <div className="container__input__size">
                            <div className="label">Subscribe to our news letter to get <br/> latest updates and news</div>
                            <form action="#">
                                <input type="text" placeholder="Enter Your Email" />
                                <button type="button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="container__comment">
                        <div className="comment">
                            <div className="lst">Finstreet 118 2561 Fintown</div>
                            <div className="lst">Hello@finsweet.com  020 7993 2905</div>
                        </div>
                        <div className="services">
                            <div className="src"><FontAwesomeIcon icon={faFacebook} className="img" /></div>
                            <div className="src"><FontAwesomeIcon icon={faTwitter} className="img" /></div>
                            <div className="src"><FontAwesomeIcon icon={faInstagram} className="img" /></div>
                            <div className="src"><FontAwesomeIcon icon={faTelegram} className="img" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;