import React, {useState} from "react";
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/reducers/loginReducer";
import {useHistory} from "react-router";


const LoginFormContainer = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history=useHistory()
    const onLoginChange = (event) => {
        setLogin(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(loginThunk(login, password))
        history.push('/profile')

        //loginThunk(login, password)
    }
    return <LoginForm passwordValue={password} loginValue={login} onSubmit={onSubmit}
                      onPasswordChange={onPasswordChange} onLoginChange={onLoginChange}/>
}


///take login from state

export default LoginFormContainer;