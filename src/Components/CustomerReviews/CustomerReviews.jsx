import React from "react"
import s from "./CustomerReviews.module.css"
import decorBlueSVG from "../../Images/Reviews/Decor-BlueKvadrat.svg"
import TextUser from "./TextUser/TextUser";
import InputData from "./InputData/InputData";

const CustomerReviews = (props) => {



    return (
        <div className={s.flex}>
            <div className={s.decorBlue}>
                <img src={decorBlueSVG} alt=""/>
            </div>
            <TextUser posts={props.posts}/>
            <InputData addPost={props.addPost}/>
        </div>
    )
}
export default CustomerReviews;