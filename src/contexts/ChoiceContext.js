import React, { createContext, useEffect, useReducer } from 'react';
import { ChoiceReducer } from '../reducers/ChoiceReducer';
<<<<<<< HEAD
import { AuthReducer } from '../reducers/AuthReducer';
=======
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7

export const ChoiceContext = createContext()

const ChoiceContextProvider = (props) => {
    const [choice, dispatch] = useReducer(ChoiceReducer, []);
<<<<<<< HEAD
    const [user, authDispatch] = useReducer(AuthReducer, []);
=======
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7

    useEffect(() => {
        const params = {
            method: choice.method,
            headers: {
                "Context-Type": "application/json"
            },
            redirect: "body",
            body: JSON.stringify({
                userId: choice.userId,
                username: choice.username,
                sessionId: choice.sessionId
            })
        }
        fetch(choice.url, params)
            .then(data => data.json())
            .then(data => {
<<<<<<< HEAD
                authDispatch({
                    type: "LOGIN", userId: data.userId, username: data.username, sessionId: data.sessionId
                });
=======

>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7
            })
            .catch(err => console.log(err));
    }, [choice]);

    return (
        <ChoiceContext.Provider value={{ choice, dispatch }}>
            {props.children}
        </ChoiceContext.Provider>
    );
}

export default ChoiceContextProvider;