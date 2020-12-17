import React from 'react';

const MessageCardComponent = (props) => {
    const { username, image, time, content } = props.message;
    return (
        <div className="message-card-container">
            <div className="message-card-image">
                <img alt={username} src={image} />
            </div>
            <div className="message-card-info">
                <div className="message-card-intro">
                    <b>{username}</b>
                    <p>{time}</p>
                </div>
                <div className="message-card-content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default MessageCardComponent;