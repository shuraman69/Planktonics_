import './App.css';
import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import App from "./App";
import {useDispatch} from "react-redux";
import {loginAC} from "./redux/reducers/loginReducer";
import {takeMessagesFromLS} from "./components/helpers/helpers";


function AppContainer() {
    const dispatch = useDispatch()
    useEffect(() => {
        //собираю пользователя, чтобы при обновлении страницы он не вылетал с сервиса
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"))
            let login = user.login
            let password = user.password
            let userName = user.name
            let userNickname = user.nickname
            let avatar = user.avatar
            //AC=ActionCreator, логиню заново , при обновлении
            dispatch(loginAC(login, password, userName, userNickname, avatar))
            takeMessagesFromLS('workMessages', 'floodMessages', dispatch)
        }
    }, [])
    return <App/>
}


export default AppContainer
