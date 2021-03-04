import styles from './WorkChat.module.css'
import Message from "../Message/Message";

const WorkChat = ({
                      sendMessage,
                      textAreaValue,
                      onTextAreaValueChange,
                      messagesArray,
                      dispatch,
                      actionId,
                      setVisible
                  }) => {
    return (
        <div className={styles.container}>
            <h2>Это рабочий чат. Здесь вы можете обсуждать рабочий процесс</h2>
            <div className={styles.chat_container}>
                <div className={styles.chat}>
                    {!!messagesArray ? messagesArray.map(m => <Message setVisible={setVisible} actionId={actionId}
                                                                       dispatch={dispatch} key={m.id}
                                                                       m={m}/>) : "Сообщений нет"}
                </div>
            </div>
            <div className={styles.message}>
                <textarea onChange={event => onTextAreaValueChange(event)} name="message"/>
                <button value={textAreaValue} onClick={() => sendMessage()}>Отправить</button>
            </div>
        </div>
    )
}
export default WorkChat