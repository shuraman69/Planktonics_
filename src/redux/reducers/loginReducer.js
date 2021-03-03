import users from "../users";
import {setMessagesFromLS} from "./workChatReducer";

const LOGIN = "LOGIN"
const LOG_OUT = "LOG_OUT"
const USERS = users;
const initialState = {
    user: {
        login: null,
        password: null,
        name: null,
        avatar: null
    }
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {login: action.login, password: action.password, name: action.name, avatar: action.avatar}
            }
        case LOG_OUT:
            return {
                ...state,
                user: {login: null, password: null, token: null}
            }
        default:
            return state
    }
}

export const loginAC = (login, password, name, avatar) => ({type: LOGIN, login, password, name, avatar})
export const logoutAC = () => ({type: LOG_OUT})

export const loginThunk = (login, password) => {
    return (dispatch, getState) => {
        //поиск нужного пользователя в users.js
        USERS.forEach(u => {
            if (u.login === login && u.password === password) {
                dispatch(loginAC(login, password, u.name, u.avatar))
                //сохраняю юзера в стораж, чтобы использовать useEffect в appContainer
                const user = getState().login.user
                localStorage.setItem("user", JSON.stringify(user))
                const workMessages = JSON.parse(localStorage.getItem('workMessages'))
                if (!!workMessages) {
                    dispatch(setMessagesFromLS(workMessages))
                }
                alert("Вы вошли!")
            }
        })
    }
}

export default loginReducer