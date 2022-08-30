import { takeLatest, put, call } from "redux-saga/effects";

import { POST_LOGIN, } from "./actionTypes";

import {
    postLoginSuccess,
    postLoginFail,
} from "./actions";
import { AuthService } from "../../data/service/auth.service";


function* onPostLogin({ payload: { password, username } }) {
    try {
        const response = yield call(AuthService.postLogin, username, password);
        yield put(postLoginSuccess(response.data));
    } catch (error) {
        yield put(postLoginFail(error?.response?.data?.message[0] || "Fuck you"));
    }
}

function* AuthSaga() {
    yield takeLatest(POST_LOGIN, onPostLogin);
}

export default AuthSaga;