import styles from '../WorkChat/WorkChat.module.css'
import Message from "../Message/Message";
import Stickers from "../Stickers/Stickers";

const FloodChat = ({
                       sendMessage,
                       textAreaValue,
                       onTextAreaValueChange,
                       messagesArray,
                       stickers,
                       sendSticker,
                       actionId,
                       dispatch,
                       onEditMessage
                   }) => {
    return (
        <div className={styles.container}>
            <h2>Это не рабочий чат. Здесь вы можете общаться на нерабочие темы</h2>
            <div className={styles.chat_container}>
                <div className={styles.chat_f}>
                    {!!messagesArray && messagesArray.map(m => <Message
                        onEditMessage={onEditMessage}
                        dispatch={dispatch}
                        actionId={actionId}
                        m={m}/>)}
                </div>
                <Stickers sendSticker={sendSticker} stickers={stickers}/>
            </div>
            <div className={styles.message}>
                <textarea onChange={event => onTextAreaValueChange(event)} name="message"/>
                <button value={textAreaValue} onClick={() => sendMessage()}>Отправить</button>
            </div>
        </div>
    )
}
export default FloodChat