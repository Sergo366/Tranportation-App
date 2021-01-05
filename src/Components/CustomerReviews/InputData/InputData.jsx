import React, {useState} from "react"
import s from "./InputData.module.css"
import {createField, Input, TextArea} from "../../../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../Utilits/validators/validators";
import {reduxForm} from "redux-form";
import sanks from  '../../../Images/Reviews/sanks.png'

const InputData = React.memo(props => {

    const [dataFeedBack, setDataFeedBack] = useState(true)

    const onAddPost = (values) => {
            props.addPost(values.feedBack, values.yourNameFeedBack)

            if (values.feedBack && values.yourNameFeedBack){
                setDataFeedBack(false)
            }
    }

    return (
        <div className={s.duration} >
            {dataFeedBack
                ? <InputDataReduxForm  onSubmit={onAddPost}/>
                : <LeftReview/>
            }
        </div>
    )
})
export default InputData;



const MessagesUser = (props) => {
    return (
        <div className={s.border}>
            <div className={s.firstText}>
                <p>
                    Оставить отзыв
                </p>
            </div>

            <form onSubmit={props.handleSubmit}>

                <div className={s.titleInput}>
                    <p>
                        Полное имя
                    </p>
                </div>
                <div className={s.input}>
                    {createField("", "yourNameFeedBack", [required], Input, {})}
                </div>
                <div className={s.titleTextArea}>
                    <p>
                        Ваш отзыв
                    </p>
                </div>
                <div className={s.textAreaa}>
                    {createField("", "feedBack", [required], TextArea, {})}
                </div>

                <div>
                    <button className={s.otpravka}>
                        <p> Отправить</p>
                    </button>
                </div>
            </form>
        </div>
    )
}
const InputDataReduxForm = reduxForm({form: 'feedBack'})(MessagesUser);

const LeftReview = () =>{
    return(
        <div className={s.leftReview}>
            <img src={sanks} alt=""/>
        </div>
    )
}