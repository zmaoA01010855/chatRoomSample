import React from 'react';

const ExistingSessionComponent = (props) => {
    const { sessionId, setSessionId, username, setName, dispatch, setOptionOpen } = props;
    return (
        <div className="detail-info-container">
            <form onClick={() => { dispatch({ type: "EXISTING_SEESION", sessionId, username }) }}>
                <input type="text" name="username" placeholder="Your name" onChange={(e) => { setName(e.target.name) }} required />
                <input type="text" name="sessionId" placeholder="Session ID" onChange={(e) => { setSessionId(e.target.name) }} required />
                <button>Start your conversation!</button>
            </form>
            <button onClick={() => {
                setOptionOpen(false);
            }}>Back</button>
        </div>
    );
}

export default ExistingSessionComponent;