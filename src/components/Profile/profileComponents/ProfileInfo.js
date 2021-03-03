const ProfileInfo = ({userName, login}) => {
    return (
        <div>
            <h2>{`Ваше имя: ${userName}`}</h2>
            <h2>{`Ваше логин: ${login}`}</h2>
        </div>
    )
}
export default ProfileInfo