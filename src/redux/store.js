import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import workChatReducer from "./reducers/workChatReducer";
import floodChatReducer from "./reducers/floodChatReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    work: workChatReducer,
    flood: floodChatReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store
export default store