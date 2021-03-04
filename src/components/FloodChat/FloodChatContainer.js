import FloodChat from "./FloodChat";
import {useState} from "react";
import {editFloodMessage, sendFloodMessageThunk, sendFloodStickerThunk} from "../../redux/reducers/floodChatReducer";
import {useEffect} from "react";
import EditMessageModal from "../EditForm/EditMessageModal";

const FloodChatContainer = ({getChatData, setActionId, actionId}) => {
    const floodChatData = getChatData(false)
    if (!floodChatData.login) {
        floodChatData.history.push('/login')
    }
    useEffect(() => {
        setActionId(false)
    }, [])
    const [floodTextAreaValue, setFloodTextAreaValue] = useState()
    const [newMessage, setNewMessage] = useState("")
    const [messId, setMessId] = useState(null)
    const onTextAreaValueChange = (event) => {
        setFloodTextAreaValue(event.target.value)
    }
    const sendMessage = () => {
        const message = {
            message: floodTextAreaValue,
            name: floodChatData.name,
            avatar: floodChatData.avatar,
            date: new Date().toLocaleTimeString(),
            id: Date.now()
        }
        floodChatData.dispatch(sendFloodMessageThunk(message))
    }
    const sendSticker = (stickerId) => {
        const message = {
            stickerId,
            name: floodChatData.name,
            avatar: floodChatData.avatar,
            date: new Date().toLocaleTimeString(),
            id: Date.now()
        }
        floodChatData.dispatch(sendFloodStickerThunk(message))
    }
    const onEditMessage = (messageId) => {
        floodChatData.setVisible(true)
        setMessId(messageId)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        floodChatData.setVisible(false)
        floodChatData.dispatch(editFloodMessage(messId, newMessage))
    }
    return (
        <>
            <FloodChat textAreaValue={floodTextAreaValue}
                       onTextAreaValueChange={onTextAreaValueChange}
                       sendMessage={sendMessage}
                       stickers={floodChatData.stickers}
                       messagesArray={floodChatData.messagesArray}
                       dispatch={floodChatData.dispatch}
                       sendSticker={sendSticker}
                       actionId={actionId}
                       onEditMessage={onEditMessage}
            />
            {floodChatData.visible &&
            <EditMessageModal
                onSubmit={onSubmit} newMessage={newMessage} setNewMessage={setNewMessage}
                setVisible={floodChatData.setVisible} visible={floodChatData.visible}/>}
        </>
    )
}
export default FloodChatContainer