import React from 'react'
import Bus from '../../Images/AboutUs/bus-Vito-09 1.png'
import firstIcon from '../../Images/AboutUs/first_icon.png'
import secondIcon from '../../Images/AboutUs/second_icon.png'
import decor from '../../Images/AboutUs/Decor-White.png'
import s from './AboutUs.module.css'
import {NavLink} from "react-router-dom";

const AboutUs = () => {
    return (
        <div className={s.BgPlusFlex}>
            <div className={s.bus}>
                <img src={Bus} alt=""/>
            </div>
            <div className={s.decor}>
                <img src={decor} alt=""/>
            </div>

            <div className={s.textBlock}>
                <div className={s.description}>
                    <div className={s.bgBlock}>
                        <div className={s.title}>
                            <h3>О нас</h3>
                            <p>Наши преимущества</p>
                        </div>
                        <div className={s.text}>
                            <p>Our content team features a very limited number of high-profile events on
                                visitlondon.com. If
                                you
                                would like to tell the team about your event, please send press releases and information
                                to
                                editorial@londonandpartners.com.</p>
                            <p>For guaranteed coverage, our commercial team offers sponsored event listings and other
                                paid
                                opportunities. Find out more about paid-for advertorials, event listings and other
                                sponsored
                                content, or get in touch via advertise@londonandpartners.com ...</p>
                        </div>
                        <div className={s.link}>
                            <NavLink to={'/aboutUs'}>Подробней</NavLink>
                        </div>
                    </div>
                </div>

                <div className={s.Value}>
                    <div className={s.iconNumb}>
                        <img src={firstIcon} alt=""/>
                        <p>1200</p>
                    </div>
                    <div className={s.valueText}>
                        <p>Доставленных посылок</p>
                    </div>
                </div>

                <div className={s.Value}>
                    <div className={s.iconNumb}>
                        <img src={secondIcon} alt=""/>
                        <p>3200</p>
                    </div>
                    <div className={s.valueText}>
                        <p>Перезвезенных пассажира</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default AboutUs