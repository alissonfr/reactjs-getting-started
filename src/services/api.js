import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.github.com"
});

api.interceptors.request.use(async config => {
    const token = "";

    if(token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

export default api