import Profile from "./Profile";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const ProfileContainer = () => {
    const history = useHistory()
    const avatar = useSelector(state => state.login.user.avatar)
    const userName = useSelector(state => state.login.user.name)
    const nickname = useSelector(state => state.login.user.nickname)
    const login = useSelector(state => state.login.user.login)
    if (!login) {
        history.push('/login')
    }
    return <Profile avatar={avatar} nickname={nickname} userName={userName} login={login}/>
}
export default ProfileContainer