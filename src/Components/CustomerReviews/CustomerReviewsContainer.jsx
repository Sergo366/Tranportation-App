import React from "react"
import CustomerReviews from "./CustomerReviews";
import {connect} from "react-redux";
import {compose} from "redux";
import {addPostAC} from "../../Redux/CustomerReviewsReducer";


const mapStateToProps = (state) => {
    return {
        posts: state.CustomerReviews.posts,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (feedBack, name) => {
            dispatch(addPostAC(feedBack, name))
        }
    }
}

export default  compose(
    connect(mapStateToProps, mapDispatchToProps)
    (CustomerReviews)) ;