import styles from './Message.module.css'

const Message = ({m}) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <img className={styles.avatar} src={m.avatar}/>
                </div>
                <div className={styles.main_message}>
                    <div className={styles.name}>{m.name}</div>
                    <div className={styles.message}>{m.message}</div>
                </div>
            </div>
            <div className={styles.date}>{m.date}</div>
        </div>
    )
}
export default Message