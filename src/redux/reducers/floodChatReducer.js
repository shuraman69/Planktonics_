import st1 from '../../components/commons/floodChatStickers/st1.png'
import st2 from '../../components/commons/floodChatStickers/st2.png'
import st3 from '../../components/commons/floodChatStickers/st3.png'
import st4 from '../../components/commons/floodChatStickers/st4.png'
import st5 from '../../components/commons/floodChatStickers/st5.png'
import {setMessageToLS} from "../../components/helpers/helpers";

const SET_FLOOD_MESSAGE = 'SET_FLOOD_MESSAGE'
const SET_FLOOD_MESSAGE_FROM_LS = 'SET_FLOOD_MESSAGE_FROM_LS'
const SEND_FLOOD_STICKER = 'SEND_FLOOD_STICKER'
const EDIT_FLOOD_MESSAGE = 'EDIT_FLOOD_MESSAGE'
const DELETE_FLOOD_MESSAGE = 'DELETE_FLOOD_MESSAGE'

const initialState = {
    floodChat: [],
    floodStickers: [
        {sticker: st1, id: 0},
        {sticker: st2, id: 1},
        {sticker: st3, id: 2},
        {sticker: st4, id: 3},
        {sticker: st5, id: 4}
    ]
}
const floodChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLOOD_MESSAGE:
            return {
                ...state,
                floodChat: [...state.floodChat, action.floodMessage]
            }
        case SEND_FLOOD_STICKER:
            return {
                ...state,
                floodChat: [...state.floodChat, action.message]
            }
        case SET_FLOOD_MESSAGE_FROM_LS:
            return {
                ...state,
                floodChat: action.messages
            }
        case DELETE_FLOOD_MESSAGE:
            return {
                ...state,
                floodChat: state.floodChat.filter(m => m.id !== action.messageId)
            }
        case EDIT_FLOOD_MESSAGE:
            return {
                ...state,
                floodChat: state.floodChat.map(m => {
                    if (m.id == action.messageId) {
                        return {
                            ...m,
                            message: action.newMessage
                        }
                    }
                })
            }
        default:
            return state
    }

}
export const setFloodMessage = (floodMessage) => ({type: SET_FLOOD_MESSAGE, floodMessage})
export const sendFloodSticker = (message) => ({type: SEND_FLOOD_STICKER, message})
const deleteFloodMessageAC = (messageId) => ({type: DELETE_FLOOD_MESSAGE, messageId})
export const setFloodMessagesFromLS = (messages) => ({type: SET_FLOOD_MESSAGE_FROM_LS, messages})
const editFloodMessageAC = (messageId, newMessage) => ({type: EDIT_FLOOD_MESSAGE, messageId, newMessage})
export const sendFloodMessageThunk = (floodMessage) => {
    return (dispatch, getState) => {
        dispatch(setFloodMessage(floodMessage))
        const chat = JSON.stringify(getState().flood.floodChat)
        setMessageToLS('floodMessages', chat)
    }
}
export const sendFloodStickerThunk = (message) => {
    return (dispatch, getState) => {
        message.sticker = getState().flood.floodStickers[message.stickerId]
        dispatch(sendFloodSticker(message))
        const chat = JSON.stringify(getState().flood.floodChat)
        setMessageToLS('floodMessages', chat)
    }
}
export const deleteFloodMessage = (messageId) => {
    return (dispatch, getState) => {
        dispatch(deleteFloodMessageAC(messageId))
        const chat = JSON.stringify(getState().flood.floodChat)
        setMessageToLS('floodMessages', chat)
    }
}
export const editFloodMessage = (id, newMessage) => {
    return (dispatch, getState) => {
        dispatch(editFloodMessageAC(id, newMessage))
        const chat = JSON.stringify(getState().flood.floodChat)
        setMessageToLS('floodMessages', chat)
    }
}

export default floodChatReducer