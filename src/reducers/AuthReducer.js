export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return [...state, { username: action.username, sessionId: action.sessionId }];
        case "LOG_OUT":
            return [];
        default:
            return state;
    }
}