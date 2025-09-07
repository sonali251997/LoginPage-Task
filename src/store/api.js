import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json"
    }
})


api.interceptors.request.use(
    (config) => {


        const persistedState = localStorage.getItem("persist:root");
        if (persistedState) {
            const parsedState = JSON.parse(persistedState);
            const authState = JSON.parse(parsedState.auth);
            if (authState?.accessToken) {
                config.headers.Authorization = `Bearer ${authState?.accessToken}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            console.error("Unauthorized! Token may have expired.");
        }
        return Promise.reject(error);
    }
);
export default api;