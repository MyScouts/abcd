import axios from "axios";

const REACT_APP_APP_URL = 'http://localhost:5000/api/admin/';

const axiosApi = axios.create({
    baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
    return config;
});

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

async function get(url, config) {
    return await axiosApi
        .get(url,
            {
                ...config,
            })
        .then((response) => response.data);
}

async function post(url, data, config) {
    return await axiosApi
        .post(url,
            data,
            {
                ...config,
            })
        .then((response) => response.data);
}

export const AppClients = {
    get,
    post
}