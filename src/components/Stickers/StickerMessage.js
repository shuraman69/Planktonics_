import styles from '../WorkChat/WorkChat.module.css'

const StickerMessage = ({sticker}) => {
    return (
        <div>
            <img className={`${styles.sticker} ${styles.sticker_m}`} src={sticker} alt="sticker"/>
        </div>
    )
}
export default StickerMessage