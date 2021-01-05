import React from "react";
import logoHeader from "../../Images/Header-images/Bus-Logo.svg"
import phone from "../../Images/Header-images/Phone.svg"
import s from "./Header.module.css"
import a from "./HeaderAdaptive.module.css"
import {NavLink} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu'
import styled from 'styled-components'
import RightNav from "./RightNav";
import Burger from "./Burger";


const Nav = styled.nav`
   width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const HeaderBurger = (props) => {

    return (
        <Nav>
            <div className={a.logo}>
                Nav Bar
            </div>
            <Burger/>
        </Nav>
    );

}
export default HeaderBurger



/*const Header = (props) => {

    return (
        <div className={a.wrapper}>
            <div className={a.header}>
                <div className={a.container}>
                    <div className={a.header__body}>

                        <a href="#" className={a.header__logo}>
                            <img src={logoHeader} alt=""/>
                        </a>
                        <div className={a.contacts}>
                            <div className={a.phoneLogo}>
                                <img src={phone} alt=""/>
                            </div>
                            <div className={a.numberPhone}>
                                <a href="tel:380 00 000 00 00">380 000 00 00</a>
                            </div>
                        </div>

                        <div className={a.header__burger}>
                            <span></span>
                        </div>


                        <nav className={a.header__menu}>
                            <div className={a.header__list}>
                                <NavLink to="/feedback">Отзывы</NavLink>
                            </div>
                            <div className={a.header__list}>
                                <NavLink to="/aboutUs">О нас</NavLink>
                            </div>
                            <div className={a.header__list}>
                                <NavLink to="/transport">Транспорт</NavLink>
                            </div>
                            <div className={a.header__list}>
                                <NavLink to="/contacts">Контакты</NavLink>
                            </div>

                        </nav>


                    </div>
                </div>
            </div>
        </div>

    )
}*/
