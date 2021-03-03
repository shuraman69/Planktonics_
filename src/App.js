import './App.css';
import {Layout} from 'antd';
import React from 'react'
import 'antd/dist/antd.css'
import ContentFC from "./components/Content/Content";
import SiderFC from "./components/Sider/Sider";


function App() {
    return (
        <Layout style={{minHeight:'100vh'}}>
            <SiderFC/>
            <ContentFC/>
        </Layout>
    );
}


export default App;
