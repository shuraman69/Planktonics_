import styles from '../WorkChat/WorkChat.module.css'
import Message from "../Message/Message";

const FloodChat = ({sendMessage, textAreaValue, onTextAreaValueChange, messagesOfWorkChat}) => {
    return (
        <div className={styles.container}>
            <h2>Это не рабочий чат. Здеь вы можете общаться на нерабочие темы</h2>
            <div className={styles.chat}>
                {!!messagesOfWorkChat ? messagesOfWorkChat.map(m => <Message key={m.date} m={m}/>) : "Сообщений нет"}
            </div>
            <div className={styles.message}>
                <textarea onChange={event => onTextAreaValueChange(event)} name="message"/>
                <button value={textAreaValue} onClick={() => sendMessage()}>Отправить</button>
            </div>
        </div>
    )
}
export default FloodChat