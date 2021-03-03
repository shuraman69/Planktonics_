import styles from './WorkChat.module.css'
import Message from "../Message/Message";

const WorkChat = ({sendMessage, textAreaValue, onTextAreaValueChange, messagesOfWorkChat}) => {
    return (
        <div className={styles.container}>
            <h2>Это рабочий чат. Здеь вы можете обсуждать рабочий процесс</h2>
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
export default WorkChat