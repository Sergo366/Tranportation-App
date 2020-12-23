import React from "react"
import LoginReduxForm from "./FormData";
import {connect} from "react-redux";
import {compose} from "redux";
import {sendMessageAC} from "../../../Redux/formDataReducer";
import DataFromRequest from "./FormDataRequest";
import {Route} from "react-router-dom";




const FormDataContainer = (props) => {
    const onSubmit = (values) => {
       props.sendInput(values.fromWhere, values.whereTo, values.name, values.number, values.date, values.radio)
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}
                             whereTo={props.whereTo} name={props.name} fromWhere={props.fromWhere}
                            telNumber={props.telNumber} date={props.date} radio={props.radio}/>
        </div>
    )
}



const mapStateToProps = (state) =>{
    return {
        fromWhere: state.formData.fromWhere,
        whereTo: state.formData.whereTo,
        name: state.formData.name,
        telNumber: state.formData.telNumber,
        date: state.formData.date,
        radio:state.formData.radio

    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sendInput: (fromWhere,whereTo,name,number,date,radio) =>{
            dispatch(sendMessageAC(fromWhere,whereTo,name,number,date,radio));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps))
(FormDataContainer);


