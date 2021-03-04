import users from "../users";
import {setMessagesFromLS} from "./workChatReducer";
import {setFloodMessagesFromLS} from "./floodChatReducer";
import {takeMessagesFromLS} from "../../components/helpers/helpers";

const LOGIN = "LOGIN"
const LOG_OUT = "LOG_OUT"
const USERS = users;
const initialState = {
    user: {
        login: null,
        password: null,
        name: null,
        nickname: null,
        avatar: null
    }
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    login: action.login,
                    password: action.password,
                    name: action.name,
                    nickname: action.nickname,
                    avatar: action.avatar
                }
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

export const loginAC = (login, password, name, nickname, avatar) => ({
    type: LOGIN,
    login,
    password,
    name,
    nickname,
    avatar
})
export const logoutAC = () => ({type: LOG_OUT})

export const loginThunk = (login, password) => {
    return (dispatch, getState) => {
        //поиск нужного пользователя в users.js
        USERS.forEach(u => {
            if (u.login === login && u.password === password) {
                //Логинизация
                dispatch(loginAC(login, password, u.name, u.nickname, u.avatar))
                //сохраняю юзера в стораж, чтобы использовать useEffect в appContainer
                const user = getState().login.user
                localStorage.setItem("user", JSON.stringify(user))
                //собираю сообщения, если они есть
                takeMessagesFromLS('workMessages', 'floodMessages', dispatch)
                alert("Вы вошли!")
            }
        })
    }
}

export default loginReducer