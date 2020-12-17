import React, { createContext, useEffect, useReducer } from 'react';
import { ChoiceReducer } from '../reducers/ChoiceReducer';
import { AuthReducer } from '../reducers/AuthReducer';

export const ChoiceContext = createContext()

const ChoiceContextProvider = (props) => {
    const [choice, dispatch] = useReducer(ChoiceReducer, []);
    const [user, authDispatch] = useReducer(AuthReducer, []);

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
                authDispatch({
                    type: "LOGIN", userId: data.userId, username: data.username, sessionId: data.sessionId
                });
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