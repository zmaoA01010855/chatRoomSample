export const AuthReducer = (state, action) => {
    switch (action.type) {
<<<<<<< HEAD
        case "LOGIN":
            return [...state, { username: action.username, sessionId: action.sessionId }];
        case "LOG_OUT":
            return [];
=======
        case "Login":
            return state;
        case "Sign In":
            return state;
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7
        default:
            return state;
    }
}