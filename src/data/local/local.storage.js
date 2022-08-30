export const saveToken = (token) => sessionStorage.setItem("ACCESS_TOKEN", token);
export const getToken = () => localStorage.getItem("ACCESS_TOKEN");
export const clearToken = () => localStorage.clear("ACCESS_TOKEN");