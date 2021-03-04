import React, {useState} from 'react'
import 'antd/dist/antd.css'
import ContentFC from "./Content";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";


function ContentContainer() {
    const history = useHistory()
    const dispatch = useDispatch()
    const login = useSelector(state => state.login.user.login)
    const name = useSelector(state => state.login.user.name)
    const nickname = useSelector(state => state.login.user.nickname)
    const avatar = useSelector(state => state.login.user.avatar)
    const messagesOfWorkChat = useSelector(state => state.work.workChat)
    const messagesOfFloodChat = useSelector(state => state.flood.floodChat)
    const floodStickers = useSelector(state => state.flood.floodStickers)
    const [actionId, setActionId] = useState(null)
    const [visible, setVisible] = useState(false)

    //Собираю данные для компонент FloodChat и WorkChat в зависимости от параметра
    const getChatData = (param) => {
        return {
            history,
            dispatch,
            login,
            name: param ? name : nickname,
            stickers: floodStickers,
            avatar,
            messagesArray: param ? messagesOfWorkChat : messagesOfFloodChat,
            visible,
            setVisible
        }
    }
    return <ContentFC
        actionId={actionId} setActionId={setActionId}
        getChatData={getChatData}/>
}


export default ContentContainer;
