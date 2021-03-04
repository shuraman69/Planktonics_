import WorkChat from "./WorkChat";
import {sendMessageThunk} from "../../redux/reducers/workChatReducer";
import {useEffect, useState} from "react";

const WorkChatContainer = ({getChatData, deleteId, actionId, setActionId}) => {
    const [textAreaValue, setTextAreaValue] = useState()
    const workChatData = getChatData(true)
    useEffect(() => {
        setActionId(true)
    }, [])
    if (!workChatData.login) {
        workChatData.history.push('/login')
    }
    const onTextAreaValueChange = (event) => {
        setTextAreaValue(event.target.value)
    }
    const sendMessage = () => {
        const message = {
            message: textAreaValue,
            name: workChatData.name,
            avatar: workChatData.avatar,
            date: new Date().toLocaleTimeString(),
            id: Date.now()
        }
        workChatData.dispatch(sendMessageThunk(message))
    }
    return <WorkChat textAreaValue={textAreaValue}
                     onTextAreaValueChange={onTextAreaValueChange}
                     sendMessage={sendMessage}
                     dispatch={workChatData.dispatch}
                     messagesArray={workChatData.messagesArray}
                     deleteId={deleteId}
                     actionId={actionId}
                     setVisible={workChatData.setVisible}
    />
}
export default WorkChatContainer