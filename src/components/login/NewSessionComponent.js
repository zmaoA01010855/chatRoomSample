import React from 'react';

const NewSessionComponent = (props) => {
    const { username, setName, dispatch, setOptionOpen } = props;

    return (
        <div className="detail-info-container">
            <form onClick={() => { dispatch({ type: "CREATE_NEW_SESSION", username }) }}>
                <input type="text" name="username" placeholder="Your name" onChange={(e) => { setName(e.target.name) }} required />
                <button>Start your conversation!</button>
            </form>
            <button onClick={() => {
                setOptionOpen(false);
            }}>Back</button>
        </div>
    );
}

export default NewSessionComponent;