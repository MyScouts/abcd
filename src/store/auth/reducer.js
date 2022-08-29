import {
    POST_LOGIN,
    POST_LOGIN_FAIL,
    POST_LOGIN_SUCCESS,
} from "./actionTypes";

const initialState = {
    isLoading: false,
    user: null,
    error: {
        message: "",
    },
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_LOGIN:
            return { ...state, isLoading: true, error: {} };
        case POST_LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLoading: false };
        case POST_LOGIN_FAIL:
            return {
                ...state,
                error: {
                    message: action.payload,
                },
                isLoading: false,
            };
        default:
            return { ...state };
    }
};

export default AuthReducer;