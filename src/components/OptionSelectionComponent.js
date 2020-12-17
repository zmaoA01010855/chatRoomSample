import React from 'react';

const OptionSelectionComponent = (props) => {
    const { setOptionOpen, setNewSession } = props;
    return (
        <div className="option-button-container">
            <button onClick={() => {
                setOptionOpen(true);
                setNewSession(true);
            }}>Create new session</button>
            <button onClick={() => {
                setOptionOpen(true);
                setNewSession(false);
            }}>Already have session</button>
        </div>
    );
}

export default OptionSelectionComponent;