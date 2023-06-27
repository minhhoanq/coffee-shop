import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const post = async (path, option = {}) => {
    const response = await request.post(path, option);
    return response;
};

export default request;
