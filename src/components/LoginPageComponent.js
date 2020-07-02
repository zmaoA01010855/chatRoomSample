import React, { useState, useContext } from 'react';
import { ChoiceContext } from '../contexts/ChoiceContext';
import OptionSelectionComponent from './OptionSelectionComponent';
import NewSessionComponent from './NewSessionComponent';
import ExistingSessionComponent from './ExistingSessionComponent';

const LoginPageComponent = () => {
    const { dispatch } = useContext(ChoiceContext);
    const [username, setName] = useState("");
    const [sessionId, setSessionId] = useState("");
    const [isOptionOpen, setOptionOpen] = useState(false);
    const [isNewSession, setNewSession] = useState(false);


    return (
        <div className="login-page-container">
            <p>Let's start the conversation!</p>
            {isOptionOpen ? (isNewSession ? <NewSessionComponent dispatch={dispatch} username={username} setName={setName} setOptionOpen={setOptionOpen} />
                : <ExistingSessionComponent dispatch={dispatch} username={username} setName={setName} sessionId={sessionId} setSessionId={setSessionId} setOptionOpen={setOptionOpen} />)
                : <OptionSelectionComponent dispatch={dispatch} setOptionOpen={setOptionOpen} setNewSession={setNewSession} />}
        </div>
    );
}

export default LoginPageComponent;