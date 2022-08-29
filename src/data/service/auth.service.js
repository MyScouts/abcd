import { AppClients } from '../../config/client.config';


const POST_REGISTER = "/auth/register";
const POST_LOGIN = "/auth/login";

const postLogin = async (username, password) => {
    return await AppClients.post(POST_LOGIN, { username, password });
}

export const AuthService = {
    postLogin,
}