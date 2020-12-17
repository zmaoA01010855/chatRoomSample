import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = (props) => {
    const { user, dispatch } = useContext(AuthContext);

    const LogOutButton = () => {
        return (
            <button onClick={() => { dispatch({ type: "LOG_OUT" }) }}>Log out</button>
        );
    }

    return (
        <div className="nav-bar">
            <p onClick={() => { dispatch({ type: "LOG_OUT" }) }}>Chatroom</p>
            <nav>
                {(user.length !== 0) ? LogOutButton() : null}
            </nav>
        </div>
    );
}

export default Navbar;