import {Modal} from 'antd';
import EditForm from "./EditForm";

const EditMessageModal = ({visible, newMessage, setNewMessage, onSubmit}) => {
    return (
        <Modal
            visible={visible}
            title="Редактировать сообщение"
            footer={null}
        >
            <EditForm onSubmit={onSubmit} newMessage={newMessage} setNewMessage={setNewMessage}/>
        </Modal>

    );
}


export default EditMessageModal