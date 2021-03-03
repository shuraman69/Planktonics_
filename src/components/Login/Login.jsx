import styles from './Login.module.css'
import LoginFormContainer from "../LoginForm/LoginFormContainer";

const Login = () => {
    return (
        <div className={styles.container}>
            <LoginFormContainer/>
        </div>
    )
}

export default Login