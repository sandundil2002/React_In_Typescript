export const initialState = "UserName";

export const nameReducer = (state = initialState, action: {type: string, payload: {firstName: string, lastName: string}}) => {
    switch (action.type) {
        case "PUSH_NAME":
            return action.payload.firstName + " " + action.payload.lastName;
        default:
            return state;
    }
};