import styles from "../WorkChat/WorkChat.module.css";

const Stickers = ({stickers, sendSticker}) => {
    return (
        <div className={styles.stickers}>
            {stickers.map(s => <img onClick={() => sendSticker(s.id)} id={s.id} className={styles.sticker}
                                    alt='sticker'
                                    src={s.sticker}/>)}
        </div>
    )
}
export default Stickers