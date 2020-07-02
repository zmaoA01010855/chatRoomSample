import React, { createContext, useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, dispatch] = useReducer(AuthReducer, [], () => {
        const localUserData = localStorage.getItem("chatroom_user");
        return localUserData ? JSON.parse(localUserData) : [];
    });

    // uesEffect(() => {
    //     localStorage.setItem("chatroom_user", JSON.stringify(user));
    // }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;