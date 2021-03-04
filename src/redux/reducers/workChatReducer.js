import {setMessageToLS} from "../../components/helpers/helpers";

const SET_WORK_MESSAGE = 'SET_WORK_MESSAGE'
const SET_WORK_MESSAGE_FROM_LS = 'SET_WORK_MESSAGE_FROM_LS'
const DELETE_WORK_MESSAGE = 'DELETE_WORK_MESSAGE'
const initialState = {
    workChat: [],
}
const workChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORK_MESSAGE:
            return {
                ...state,
                workChat: [...state.workChat, action.workMessage]
            }
        case SET_WORK_MESSAGE_FROM_LS:
            return {
                ...state,
                workChat: action.messages
            }
        case DELETE_WORK_MESSAGE:
            return {
                ...state,
                workChat: state.workChat.filter(m => m.id !== action.messageId)
            }
        default:
            return state
    }
}
export const setMessage = (workMessage) => ({type: SET_WORK_MESSAGE, workMessage})
export const setMessagesFromLS = (messages) => ({type: SET_WORK_MESSAGE_FROM_LS, messages})
const deleteWorkMessageAC = (messageId) => ({type: DELETE_WORK_MESSAGE, messageId})
export const sendMessageThunk = (workMessage) => {
    return (dispatch, getState) => {
        dispatch(setMessage(workMessage))
        const chat = JSON.stringify(getState().work.workChat)
        setMessageToLS('workMessages', chat)
    }
}
export const deleteWorkMessage = (messageId) => {
    return (dispatch, getState) => {
        dispatch(deleteWorkMessageAC(messageId))
        const chat = JSON.stringify(getState().work.workChat)
        setMessageToLS('workMessages', chat)
    }
}

export default workChatReducer