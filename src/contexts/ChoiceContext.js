import React, { createContext, useEffect, useReducer } from 'react';
import { ChoiceReducer } from '../reducers/ChoiceReducer';

export const ChoiceContext = createContext()

const ChoiceContextProvider = (props) => {
    const [choice, dispatch] = useReducer(ChoiceReducer, []);

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