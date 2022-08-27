import {
    POST_LOGIN,
    POST_LOGIN_FAIL,
    POST_LOGIN_SUCCESS,
} from "./actionTypes";

const initialState = {
    isLoading: false,
    user: {},
    error: {
        message: "",
    },
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case POST_LOGIN:
            state = { ...state, isLoading: true };
            break;
        case POST_LOGIN_SUCCESS:
            state = { ...state, user: action.payload, isLoading: false };
            break;

        case POST_LOGIN_FAIL:
            state = {
                ...state,
                error: {
                    message: action.payload,
                },
                isLoading: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default AuthReducer;