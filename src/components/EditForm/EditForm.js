const EditForm = ({newMessage, setNewMessage, onSubmit}) => {
    return (
        <form onSubmit={event=>onSubmit(event)}>
            <label htmlFor="message">
                <input onChange={event => setNewMessage(event.target.value)} value={newMessage} type="text"
                       name='message'/>
            </label>
            <button type='submit'>Изменить</button>
        </form>
    );
}
export default EditForm