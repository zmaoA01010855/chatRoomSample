<<<<<<< HEAD
import React, { createContext, useEffect, useReducer } from 'react';
=======
import React, { createContext, useReducer } from 'react';
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, dispatch] = useReducer(AuthReducer, [], () => {
        const localUserData = localStorage.getItem("chatroom_user");
        return localUserData ? JSON.parse(localUserData) : [];
    });

<<<<<<< HEAD
    useEffect(() => {
        localStorage.setItem("chatroom_user", JSON.stringify(user));
    }, [user]);
=======
    // uesEffect(() => {
    //     localStorage.setItem("chatroom_user", JSON.stringify(user));
    // }, [user]);
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;