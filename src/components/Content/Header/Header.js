import {Layout} from 'antd';
import React from 'react'
import styles from './Header.module.css'
import 'antd/dist/antd.css'

const {Header} = Layout;

function HeaderFC({logout,login}) {
    return (
        <Header className="site-layout-background">
            <div className={styles.container}>
                <div className={styles.login}>{!!login?`Ваш логин: ${login}`:'Авторизуйтесь'}</div>
                <span onClick={() => logout()} className={styles.login_btn}>Выйти</span>
            </div>
        </Header>
    )
}


export default HeaderFC;
