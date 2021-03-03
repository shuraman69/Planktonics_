const avatarStyles = {
    maxWidth: "300px",
    maxHeight: "400px"
}
const Avatar = ({avatar}) => {
    return (
        <div>
            <img style={avatarStyles} src={avatar} alt='avatar'/>
        </div>
    )
}
export default Avatar