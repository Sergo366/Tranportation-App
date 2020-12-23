import React from "react"
import DataPage from "../DataInput/DataPage";
import CustomerReviewsContainer from "../CustomerReviews/CustomerReviewsContainer";
import s from "./HomePage.module.css";


const HomePage = () =>{
    return(
        <div className={s.container} >
            <DataPage/>
            <CustomerReviewsContainer/>
        </div>
    )
}
export default HomePage;