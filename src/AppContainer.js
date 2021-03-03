import './App.css';
import React from 'react'
import 'antd/dist/antd.css'
import App from "./App";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginAC} from "./redux/reducers/loginReducer";
import {setMessagesFromLS} from "./redux/reducers/workChatReducer";
import {useHistory} from "react-router";


function AppContainer() {
    const dispatch = useDispatch()
    const login=useSelector(state=>state.login.user.login)
    const history=useHistory()
    if(!!login){
        history.push('/login')
    }
    useEffect(() => {
        //собираю пользователя, чтобы при обновлении страницы он не вылетал с сервиса
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"))
            let login = user.login
            let password = user.password
            let userName = user.name
            let avatar = user.avatar
            //AC=ActionCreator, логину заново , при обновлении
            const workMessages = JSON.parse(localStorage.getItem('workMessages'))
            dispatch(loginAC(login, password, userName, avatar))
            if (!!workMessages) {
                dispatch(setMessagesFromLS(workMessages))
            }
        }
    }, [])
    return <App/>
}


export default AppContainer
