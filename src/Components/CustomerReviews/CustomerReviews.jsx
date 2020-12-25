import React from "react"
import s from "./CustomerReviews.module.css"
import decorBlueSVG from "../../Images/Reviews/Decor-BlueKvadrat.svg"
import TextUser from "./TextUser/TextUser";
import InputDataReduxForm from "./InputData/InputData";

const CustomerReviews = (props) => {

    const onAddPost = (values) => {
        return (
            props.addPost(values.feedBack, values.yourNameFeedBack)
            )
    }

    return (
        <div className={s.flex}>
            <div className={s.decorBlue}>
                <img src={decorBlueSVG} alt=""/>
            </div>
            <TextUser posts={props.posts}/>
            <InputDataReduxForm onSubmit={onAddPost}/>
        </div>
    )
}
export default CustomerReviews;