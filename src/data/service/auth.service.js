import { AppClients } from '../../config/client.config';


const POST_REGISTER = "/auth/register";
const POST_LOGIN = "/auth/login";

const postLogin = (username, password) => {
    return AppClients.post(POST_LOGIN, { username, password });
}

export const AuthService = {
    postLogin,
}