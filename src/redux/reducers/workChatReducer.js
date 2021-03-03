const SET_WORK_MESSAGE = 'SET_WORK_MESSAGE'
const SET_WORK_MESSAGE_FROM_LS = 'SET_WORK_MESSAGE_FROM_LS'
const initialState = {
    workChat: []

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
        default:
            return state
    }
}
export const setMessage = (workMessage) => ({type: SET_WORK_MESSAGE, workMessage})
export const setMessagesFromLS = (messages) => ({type: SET_WORK_MESSAGE_FROM_LS, messages})
export const sendMessageThunk = (workMessage) => {
    return (dispatch, getState) => {
        dispatch(setMessage(workMessage))
        if (localStorage.getItem('workMessages')) {
            localStorage.removeItem('workMessages')
            localStorage.setItem('workMessages', JSON.stringify(getState().work.workChat))
        } else {
            localStorage.setItem('workMessages', JSON.stringify(getState().work.workChat))
        }
    }
}
export default workChatReducer