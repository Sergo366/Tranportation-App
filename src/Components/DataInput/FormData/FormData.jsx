import React, {useEffect, useState} from "react"
import {createField, Input} from "../../../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../Utilits/validators/validators";
import {reduxForm, reset} from "redux-form";
import {Field} from "redux-form";
import s from "./FormData.module.css"
import Autobus from "../../../Images/Data-Header/AutoBus.png"
import grayBG from "../../../Images/Data-Header/Decor_secondBlock.svg"


const FormData = (props) => {

    const [addClass, setAddClass] = useState(false)

    const toggleAddClass = () => {
        setAddClass(true)

    }


    return (
        <div>
            <div className={s.flex} style={{
                backgroundImage: `url(${grayBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `100% 100%`
            }}>
                <form onSubmit={props.handleSubmit}>
                    <div className={s.radioButton}>
                        <Field name="radio" component="input" value="Место" type={'radio'}/>место
                        <Field name="radio" component="input" value="Посылка" type={'radio'}/>посылка
                    </div>
                    <div className={s.stile}>
                        <p>Откуда</p>
                        {createField("Не выбрано", "fromWhere", [required], Input)}

                    </div>
                    <div className={s.stile}>
                        <p>Куда</p>
                        {createField("Не выбрано", "whereTo", [required], Input)}

                    </div>
                    <div className={s.stile}>
                        <p>Дата</p>
                        {createField("", "date", [required], Input, {type: "date"})}
                    </div>
                    <div className={s.stile}>
                        <p>Ваше имя</p>
                        {createField("Не выбрано", "name", [required], Input,)}

                    </div>
                    <div className={s.stile}>
                        <p>Номер телефона</p>
                        {createField("Не выбрано", "number", [required, maxLengthCreator(12)], Input, {type: "tel"})}

                    </div>
                    <div className={s.button}>
                        <button onClick={toggleAddClass}>Отправить запрос</button>
                    </div>
                </form>
                {addClass
                    ? <div className={s.data}>
                        <div>
                            <p><strong>Ваш заказ:</strong></p>
                            <p>{props.radio}</p>
                            <p>{props.fromWhere}</p>
                            <p>{props.whereTo}</p>
                            <p>{props.date}</p>
                            <p>{props.name}</p>
                            <p>{props.telNumber}</p>
                        </div>
                        {setTimeout( () =>{setAddClass(false)},5000)}
                    </div>

                    : null}

                <div className={s.autobus}>
                    <img src={Autobus} alt=""/>
                </div>
            </div>
        </div>
    )
}
const LoginReduxForm = reduxForm({form: 'proposal'})(FormData);
export default LoginReduxForm;
