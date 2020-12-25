import React from "react"
import s from "./TextUser.module.css"
import kivitski from "../../../Images/Reviews/kovitski_.png"
import ImageSlider from "../../../Utilits/Carousel/ImagesSlider";


const Post = props => {
    return (
            <div className={s.flex}>
                <div>
                    <div>
                        <img src={kivitski} alt=""/>
                    </div>
                    <div>

                        <ImageSlider posts={props.posts}/>

                    </div>
                </div>
            </div>
    )
}
export default Post;

