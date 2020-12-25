import React from 'react'
import s from "./MapFooter.module.css";
import map from "../../../Images/Footer/Map-screen.png";
import iconTime from "../../../Images/Footer/iconTime.svg";
import contactsIcon from "../../../Images/Footer/ContactsIcon.svg";

const MapFooter = () => {
    return (
        <div className={s.container}>
            <div className={s.bg}>
                <img src={map} alt=""/>
            </div>
            <div className={s.window}>
                <div className={s.iconTime}>
                    <img src={iconTime} alt=""/>
                </div>
                <div className={s.timeToWork}>
                    <p>Часы работы</p>
                    <p>Пон-Птн • 7:00-17:00</p>
                </div>
                <div className={s.contactsIcon}>
                    <img src={contactsIcon} alt=""/>
                </div>
                <div className={s.tel}>
                    Телефон и почта
                </div>
                <div className={s.number}>
                    <a href="tel:+38 000 000 00 00">+38 000 000 00 00</a>
                </div>
                <div className={s.mail}>
                    <a href="mailto:userMail@domain.com">userMail@domain.com</a>
                </div>
            </div>
        </div>
    )
}
export default MapFooter;