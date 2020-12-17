import React, { useContext } from 'react';
import { MessageContext } from '../../contexts/MessageContext';

const UserList = (props) => {
    const { userList } = useContext(MessageContext);

    const listContainer = (userId, name, state, image) => {
        return (
            <li key={userId}>
                <div className="user-image-container">
                    <img alt={name} src={image} />
                </div>
                <div className="user-info-container">
                    <p>{name}</p>
                    {state ? <p>{state}</p> : <p>Not avaliable</p>}
                </div>
            </li>
        )
    }

    return (
        <div className="user-list">
            <ul>
                {userList.map((user) => {
                    return listContainer(user.userId, user.username, user.state, user.image);
                })}
            </ul>
        </div>
    );
}

export default UserList;