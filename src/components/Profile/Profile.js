import Avatar from "./profileComponents/Avatar";
import ProfileInfo from "./profileComponents/ProfileInfo";

const styles = {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "800px"
}
const Profile = ({avatar, userName, login, nickname}) => {
    return (
        <div style={styles}>
            <Avatar avatar={avatar}/>
            <ProfileInfo userName={userName} nickname={nickname} login={login}/>
        </div>
    )
}
export default Profile