import { v4 as uuidv4 } from "uuid";

export const ChoiceReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_NEW_SESSION":
            return [...state, {
                sessionId: uuidv4(),
                userId: uuidv4(),
                username: action.username,
                method: "POST",
                url: "localhost:3000/new"
            }];
        case "EXISTING_SEESION":
            return [...state, {
                sessionId: action.sessionId,
                userId: action.userId,
                username: action.username,
                method: "POST",
                url: "localhost:3000/" + action.session_id
            }];
        default:
            return state;
    }
}