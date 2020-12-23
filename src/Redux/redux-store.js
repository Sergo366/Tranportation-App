import {combineReducers, createStore} from "redux";
import formDataReducer from "./formDataReducer";
import { reducer as formReducer} from "redux-form"
import CustomerReviewsReducer from "./CustomerReviewsReducer";


const reducers = combineReducers({
    formData: formDataReducer,
    CustomerReviews: CustomerReviewsReducer,
    form: formReducer,
})

let store = createStore(reducers);
export default store;