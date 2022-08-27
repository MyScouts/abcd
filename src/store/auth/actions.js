import {
    POST_LOGIN,
    POST_LOGIN_FAIL,
    POST_LOGIN_SUCCESS,
} from "./actionTypes";



export const postLogin = (username, password ) => {
    return {
        type: POST_LOGIN,
        payload: { username, password }
    };
};

export const postLoginSuccess = (user) => {
    return {
        type: POST_LOGIN_SUCCESS,
        payload: user,
    };
};

export const postLoginFail = (error) => {
    return {
        type: POST_LOGIN_FAIL,
        payload: error,
    };
};