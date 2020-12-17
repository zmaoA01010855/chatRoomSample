export const MessageReducer = (state, action) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            return action.message;
        case "REVOKE_MESSAGE":
            return state.filter((message) => message.convId != action.convId);
        default:
            return state;
    }
}