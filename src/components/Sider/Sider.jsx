import {Layout, Menu} from 'antd';
import React from 'react'
import {UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import 'antd/dist/antd.css'
import {NavLink} from "react-router-dom";

const {Sider} = Layout;

function SiderFC() {
    return (
        <Sider trigger={null} collapsible>
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <NavLink to='/profile'>Профиль</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                    <NavLink to='/work-chat'>Рабочий чат</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined/>}>
                    <NavLink to='/flood-chat'>Не рабочий чат</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}


export default SiderFC;
