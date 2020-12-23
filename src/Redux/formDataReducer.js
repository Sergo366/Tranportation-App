
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState ={
    fromWhere: null,
    whereTo: null,
    name: null,
    telNumber: null,
    date: null,
    radio: null,
}

const formDataReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:

            return{
                ...state,
                fromWhere:action.fromWhere,
                whereTo:action.whereTo,
                name:action.name,
                telNumber:action.number,
                date:action.date,
                radio: action.radio
            };


        default:
            return state;

    }


}

export const sendMessageAC = (fromWhere, whereTo, name, number, date, radio) =>({type:SEND_MESSAGE, fromWhere, whereTo, name, number, date, radio})

export default formDataReducer;