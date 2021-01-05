import React from 'react'
import {NavLink} from "react-router-dom";
import styled from 'styled-components'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav = ({ open }) =>{
    return(
        <Ul open={open}>
            <li><NavLink to="/feedback" className="menu-item">Отзывы</NavLink></li>
            <li><NavLink to="/aboutUs" className="menu-item">О нас</NavLink></li>
            <li><NavLink to="/transport" className="menu-item">Транспорт</NavLink></li>
            <li><NavLink to="/contacts" className="menu-item">Контакты</NavLink></li>
        </Ul>
    )
}
export default RightNav