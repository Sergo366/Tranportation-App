import React from "react"
import s from "./InputData.module.css"
import {createField, Input, TextArea} from "../../../Common/FormsControl/FormsControl";
import {required} from "../../../Utilits/validators/validators";
import {reduxForm} from "redux-form";

const InputData = React.memo(props => {
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

                <div className={s.button}>
                    <button >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    )
})
const    InputDataReduxForm = reduxForm({form: 'feedBack'})(InputData);
export default InputDataReduxForm;
