import axios from "axios";


export const API_URL = 'http://localhost:5454';

const jwt = localStorage.getItem("jwt");

const api = axios.create({
    baseURL:API_URL,
    headers:{
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
    }
})

export default api;