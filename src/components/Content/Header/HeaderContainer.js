import React from 'react'
import 'antd/dist/antd.css'
import {useDispatch, useSelector} from "react-redux";
import HeaderFC from "./Header";
import {logoutAC} from "../../../redux/reducers/loginReducer";

function HeaderContainer() {
    const dispatch = useDispatch()
    const login = useSelector(state => state.login.user.login)
    const logout = () => {
        dispatch(logoutAC())
        localStorage.removeItem('user')
        alert("Вы вышли")
    }
    return (
        <HeaderFC logout={logout} login={login}/>
    )
}


export default HeaderContainer;
