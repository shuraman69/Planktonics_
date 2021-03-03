import {Layout} from 'antd';
import React from 'react'
import 'antd/dist/antd.css'
import {Route} from 'react-router-dom'
import Login from "../Login/Login";
import HeaderContainer from "./Header/HeaderContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import WorkChatContainer from "../WorkChat/WorkChatContainer";

const {Content} = Layout;
const contentStyles = {
    margin: '24px 16px',
    padding: 24,
    minHeight: 280,
}

function ContentFC() {
    return (
        <Layout className="site-layout">
            <HeaderContainer/>
            <Content
                className="site-layout-background"
                style={contentStyles}
            >
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/work-chat' render={() => <WorkChatContainer/>}/>
            </Content>
        </Layout>
    );
}


export default ContentFC;
