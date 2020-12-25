import React from "react"
import s from "./Discription.module.css"
import {NavLink} from "react-router-dom";
import Logo from "../../../Images/Data-Header/Wi-Fi.png";

const Discription = () =>{
    return(
        <div className={s.block}>
            <div className={s.title}>
                <p>Добро пожаловать на</p>
                <h1>Zaberi-bus</h1>
            </div>
            <div className={s.text}>
                <p>Paying your fare is very easy - simply touch your payment card of choice on the yellow card reader as you board the bus, or show the driver your ...</p>
                <NavLink to={"/aboutUs"}>О нашем сервисе</NavLink>
            </div>
            <div className={s.info}>
                 <div className={s.logoWifi}>
                     <img src={Logo} alt=""/>
                 </div>
                <div className={s.infoText}>
                    <p>будьте всегда онлайн</p>
                </div>

            </div>
        </div>
    )
}
export default Discription