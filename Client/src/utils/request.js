import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5000/',
});

request.interceptors.request.use(function (config) {
    const token = localStorage.getItem('persist:shop/user');
    console.log(JSON.parse(token).token)
    config.headers.token =  token ? `Bearer ${token}` : '';
    return config;
});

export default request;
