import React from "react";
import styles from './LoginForm.module.css'


const LoginForm = ({onSubmit,loginValue,passwordValue, onLoginChange, onPasswordChange}) => {
    return (
        <form style={styles} onSubmit={event => onSubmit(event)}>
            <label htmlFor="login">
                <input value={loginValue} onChange={event => onLoginChange(event)} type="text" placeholder='Введите свой логин'/>
            </label>
            <label htmlFor="password">
                <input value={passwordValue} onChange={event => onPasswordChange(event)} type="text" placeholder='Введите свой пароль'/>
            </label>
            <button type='submit'>Войти</button>
        </form>
    )
}
export default LoginForm