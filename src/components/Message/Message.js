import styles from './Message.module.css'
import StickerMessage from "../Stickers/StickerMessage";
import {deleteMessage} from "../helpers/helpers";

const Message = ({m, dispatch, actionId, onEditMessage}) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <img className={styles.avatar} src={m.avatar}/>
                </div>
                <div className={styles.main_message}>
                    <div className={styles.name}>{m.name}</div>
                    {m.sticker ? <StickerMessage sticker={m.sticker.sticker}/> :
                        <div className={styles.message}>{m.message}</div>}
                </div>
            </div>
            <div>
                <span onClick={() => onEditMessage(m.id)}>РЕД</span>
                <span onClick={() => deleteMessage(m.id, actionId, dispatch)}>УДАЛ</span>
                <div className={styles.date}>{m.date}</div>
            </div>
        </div>
    )
}
export default Message