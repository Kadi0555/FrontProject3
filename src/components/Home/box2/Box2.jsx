import Label__h1 from "../componentsHome/Label__h1";
import ButtonGLOBAL from "../../ComponentsAll__pages/ButtonGLOBAL";
import Post from "./componentsBOX2/Post";
import feature from "./images/feature.png"
import "./Box2.scss";

export default function Box2(){
    return(
        <>
            <div className="content__box2">
                <div className="container__size">
                    <div className="content">
                        <div className="content__featuredPost">
                            <div className="label__box2">Featured Post</div>
                            <div className="block__cont">
                                <div className="image">
                                    <img src={feature} alt="" />
                                </div>
                                <Label__h1></Label__h1>
                                <ButtonGLOBAL color="#FFD050" Children="Read More"></ButtonGLOBAL>
                            </div>
                        </div>
                        <div className="content__allPosts">
                            <div className="label">
                                <label htmlFor="">All Posts</label>
                                <a href="#">View All</a>
                            </div>
                            <div className="block__cont">
                                <Post label={'By John Deo   l   Aug 23, 2021 '} h2={`8 Figma design systems that \n you can download for free today.`}></Post>
                                <Post label={'By John Deo   l   Aug 23, 2021 '} h2={"8 Figma design systems that you can download for free today."}></Post>
                                <Post label={'By John Deo   l   Aug 23, 2021 '} h2={"8 Figma design systems that you can download for free today."}></Post>
                                <Post label={'By John Deo   l   Aug 23, 2021 '} h2={"8 Figma design systems that you can download for free today."}></Post>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}