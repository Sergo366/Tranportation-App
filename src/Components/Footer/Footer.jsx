import React from 'react'
import s from './Footer.module.css'
import MapFooter from "./MapFooter/MapFooter";
import FooterEnd from "./FooterEnd/FooterEnd";


const Footer = () => {
    return (
        <div className={s.container}>
            <MapFooter/>
            <FooterEnd/>
        </div>
    )
}
export default Footer
