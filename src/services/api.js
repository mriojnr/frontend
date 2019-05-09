import axios from "axios";

const api = axios.create({
    baseURL: "https://omnistackk-backend.herokuapp.com"
});

export default api;