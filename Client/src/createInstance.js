import jwt_decode from "jwt-decode";
import axios from "axios";
import requestt from "./utils/request";

const refreshToken = async() => {
    try {
        const req = await requestt.post("/v1/auth/refresh", {
            withCredentials: true
        });
        return req.data;
    } catch (error) {
        console.log(error);
    }
}

const createInstance = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create({
        baseURL: 'http://localhost:5000/',
    });
        newInstance.interceptors.request.use(
        async(config) => {
            const decodedToken = jwt_decode(user?.accessToken);
            let date = new Date();
            if(decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(stateSuccess(refreshUser));
                config.headers["token"] =  "Bearer " +  data.accessToken;
            }
            return config;
        }, (err) => {
            return Promise.reject(err);
        }
    );

    return newInstance;
}

export default createInstance;