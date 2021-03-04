import './App.css';
import {Layout} from 'antd';
import React from 'react'
import 'antd/dist/antd.css'
import SiderFC from "./components/Sider/Sider";
import ContentContainer from "./components/Content/ContentContainer";


function App() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <SiderFC/>
            <ContentContainer/>
        </Layout>
    );
}


export default App;
