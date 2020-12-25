import React from "react"
import DataPage from "../DataInput/DataPage";
import CustomerReviewsContainer from "../CustomerReviews/CustomerReviewsContainer";
import s from "./HomePage.module.css";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";


const HomePage = () =>{
    return(
        <div className={s.container} >
            <DataPage/>
            <CustomerReviewsContainer/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
export default HomePage;