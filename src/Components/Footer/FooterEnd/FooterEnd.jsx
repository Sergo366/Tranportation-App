import React from 'react'
import s from './FooterEnd.module.css'
import decorBlueSVG from "../../../Images/Reviews/Decor-BlueKvadrat.svg"
import logoFooter from "../../../Images/Header-images/Bus-Logo.svg"

const FooterEnd = () =>{
    return(
        <div className={s.content}>
            <div className={s.footerIcon}>
                <div className={s.icon}>
                    <img src={decorBlueSVG} alt=""/>
                </div>
                <div>
                    <img src={logoFooter} alt=""/>
                </div>
                <div className={s.icon}>
                    <img src={decorBlueSVG} alt=""/>
                </div>
            </div>
            <div className={s.footerText}>
                <p>Copyright © 2019. Zaberi-Bus. Все права защищены.</p>
            </div>
        </div>
    )
}
export default FooterEnd
