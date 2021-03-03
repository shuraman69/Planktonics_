import FloodChat from "./FloodChat";
import {sendMessageThunk} from "../../redux/reducers/workChatReducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useHistory} from "react-router";

const FloodChatContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const login = useSelector(state => state.login.user.login)
    const nickname = useSelector(state => state.login.user.nickname)
    const avatar = useSelector(state => state.login.user.avatar)
    const messagesOfWorkChat = useSelector(state => state.work.workChat)
    const [textAreaValue, setTextAreaValue] = useState()
    if (!login) {
        history.push('/login')
    }
    const onTextAreaValueChange = (event) => {
        setTextAreaValue(event.target.value)
    }
    const sendMessage = () => {

        const message = {
            message: textAreaValue,
            nickname,
            avatar,
            date: new Date().toLocaleTimeString()
        }
        dispatch(sendMessageThunk(message))
    }
    return <FloodChat textAreaValue={textAreaValue}
                     onTextAreaValueChange={onTextAreaValueChange}
                     sendMessage={sendMessage}
                     messagesOfWorkChat={messagesOfWorkChat}
    />
}
export default FloodChatContainer