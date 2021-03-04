import {deleteWorkMessage, setMessagesFromLS} from "../../redux/reducers/workChatReducer";
import {deleteFloodMessage, setFloodMessagesFromLS} from "../../redux/reducers/floodChatReducer";

export const setMessageToLS = (item, chat) => {
    if (localStorage.getItem(item)) {
        localStorage.removeItem(item)
        localStorage.setItem(item, chat)
    } else {
        localStorage.setItem(item, chat)
    }
}

export const takeMessagesFromLS = (item1, item2, dispatch) => {
    const workMessages = JSON.parse(localStorage.getItem(item1))
    const floodMessages = JSON.parse(localStorage.getItem(item2))
    debugger
    if (!!workMessages) {
        dispatch(setMessagesFromLS(workMessages))
    }
    if (!!floodMessages) {
        dispatch(setFloodMessagesFromLS(floodMessages))
    }
}
export const deleteMessage = (messageId, param, dispatch,) => {
    if (param) {
        dispatch(deleteWorkMessage(messageId))
    } else {
        dispatch(deleteFloodMessage(messageId))
    }
}
