import React, { useContext, useEffect } from 'react';
import MessageCardComponent from './MessageCardComponent';
import MessageInputComponent from './MessageInputComponent';
import { MessageContext } from '../../contexts/MessageContext';

const DialogWindow = (props) => {
    const { setMessage, messages } = useContext(MessageContext);

    const scrollToBottom = () => {
        const dialog = document.querySelector(".message-container");
        dialog.scrollTop = dialog.scrollHeight;
    }

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <div className="dialog-window-container">
            <div className="message-container">
                {messages.map((message) => <MessageCardComponent key={message.sessionId} message={message} />)}
            </div>
            <MessageInputComponent setMessage={setMessage} />
        </div>
    );
}

export default DialogWindow;