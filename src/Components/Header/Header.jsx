import React from "react";
import logoHeader from "../../Images/Header-images/Bus-Logo.svg"
import phone from "../../Images/Header-images/Phone.svg"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <div className={s.shadow}>
            <div className={s.header}>
                <div className={s.headerLogo}>
                    <img src={logoHeader} alt=""/>
                </div>
                <div>
                    <div className={s.contacts}>
                        <div className={s.phoneLogo}>
                            <img src={phone} alt=""/>
                        </div>
                        <div className={s.numberPhone}>
                            <a href="tel:380 00 000 00 00">380 000 00 00</a>
                        </div>
                    </div>
                </div>
                <menu className={s.menu}>
                    <div>
                        <NavLink to = "/feedback">Отзывы</NavLink>
                    </div>
                    <div>
                        <NavLink to = "/aboutUs">О нас</NavLink>
                    </div>
                    <div>
                        <NavLink to = "/transport">Транспорт</NavLink>
                    </div>
                    <div>
                        <NavLink to = "/contacts">Контакты</NavLink>
                    </div>
                </menu>
            </div>

        </div>
    )


}
export default Header