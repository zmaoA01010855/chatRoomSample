import { v4 as uuidv4 } from "uuid";

export const ChoiceReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_NEW_SESSION":
            return [...state, {
                sessionId: uuidv4(),
                userId: uuidv4(),
                username: action.username,
                method: "POST",
<<<<<<< HEAD
                url: "localhost:8000/new"
=======
                url: "localhost:3000/new"
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7
            }];
        case "EXISTING_SEESION":
            return [...state, {
                sessionId: action.sessionId,
                userId: action.userId,
                username: action.username,
                method: "POST",
<<<<<<< HEAD
                url: "localhost:8000/" + action.session_id
=======
                url: "localhost:3000/" + action.session_id
>>>>>>> 1a7e478ac24f60065099dfec42f9d1159a5329e7
            }];
        default:
            return state;
    }
}