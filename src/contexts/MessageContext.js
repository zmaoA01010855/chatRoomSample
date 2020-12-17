import React, { createContext, useState, useReducer, useContext, useEffect } from 'react';
import { MessageReducer } from '../reducers/MessageReducer';
import { AuthContext } from './AuthContext';

export const MessageContext = createContext();

const MessageContextProvider = (props) => {
    const messageList = [{
        "_id": {
            "$oid": "5eaf71a624212a5e241f4bca"
        },
        "sessionId": 1,
        "convId": 1,
        "senderId": 1,
        "username": "Wils Brook",
        "image": "https://randomuser.me/api/portraits/med/men/33.jpg",
        "content": "safdasdfdsafasdfasdfasdfsafafeewsdfwefasefdsaefasfasrefewafsfewaefafasdasdasdasdasdasdawdasdefgawegregfzsdfewfEdcsZdfcewaf",
        "time": new Date().toDateString()
    }];

    const userList = [{
        "_id": {
            "$oid": "5eaf95e624212a5e241f4bcb"
        },
        "userId": 1,
        "username": "test1",
        "image": "https://randomuser.me/api/portraits/med/men/33.jpg",
        "state": "Online"
    }];

    const [message, setMessage] = useState("");
    const [messages, dispatch] = useReducer(MessageReducer, messageList);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const params = {
            method: "POST",
            headers: {
                "Context-Type": "application/json"
            },
            redirect: "body",
            body: JSON.stringify({
                userId: user.userId,
                content: message
            })
        }
        fetch("http:/localhost:8080/" + user.sessionId, params)
            .then(data => data.json)
            .then(data => {
                dispatch({ type: "SEND_MESSAGE", message: JSON.parse(data) });
            }).catch(err => console.log(err));
    }, [message]);

    return (
        <MessageContext.Provider value={{ userList, message, setMessage, messages, dispatch }}>
            {props.children}
        </MessageContext.Provider>
    );
}

export default MessageContextProvider;
