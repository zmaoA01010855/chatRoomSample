import React from 'react';
import '../../css/chatroom.css';
import MessageContextProvider from '../../contexts/MessageContext';
import UserList from './UserList';
import DialogWindow from './DialogWindow';

const ChatRoomUI = (props) => {
    return (
        <MessageContextProvider>
            <div className="chatroom-ui-container">
                <UserList />
                <DialogWindow />
            </div>
        </MessageContextProvider>
    );
}

export default ChatRoomUI;