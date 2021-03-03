import WorkChat from "./WorkChat";
import {sendMessageThunk} from "../../redux/reducers/workChatReducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useHistory} from "react-router";

const WorkChatContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const login = useSelector(state => state.login.user.login)
    const name = useSelector(state => state.login.user.name)
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
            name,
            avatar,
            date: new Date().toLocaleTimeString()
        }
        dispatch(sendMessageThunk(message))
    }
    return <WorkChat textAreaValue={textAreaValue}
                     onTextAreaValueChange={onTextAreaValueChange}
                     sendMessage={sendMessage}
                     messagesOfWorkChat={messagesOfWorkChat}
    />
}
export default WorkChatContainer