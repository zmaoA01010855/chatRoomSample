import React, { useState } from 'react';

const MessageInputComponent = (props) => {
    const [input, setInput] = useState("");
    const { setMessage } = props;

    return (
        <div className="input-container">
            <form>
                <input type="text" name="message" placeholder="Input message here" onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => { setMessage(input); setInput("") }}>Send</button>
            </form>
        </div>
    );
}

export default MessageInputComponent;