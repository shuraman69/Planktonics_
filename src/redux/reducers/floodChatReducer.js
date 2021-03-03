const initialState = {
    floodChat: [

    ]

}
const floodChatReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

/*export const loginAC = (login, password, name, avatar) => ({type: LOGIN, login, password, name, avatar})
export const logoutAC = () => ({type: LOG_OUT})

export const loginThunk = (login, password) => {
    return (dispatch, getState) => {
        //поиск нужного пользователя в users.js
        USERS.forEach(u => {
            if (u.login === login && u.password === password) {
                dispatch(loginAC(login, password, u.name, u.avatar))
                //сохраняю юзера в стораж, чтобы использовать useEffect в appContainer
                const user = getState().login.user
                localStorage.setItem("user", JSON.stringify(user))
                alert("Вы вошли!")
            }
        })
    }
}*/

export default floodChatReducer