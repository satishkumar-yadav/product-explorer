import axios from "axios";
// import { baseURL } from "./endpoints";

const baseURL = "https://dummyjson.com";
// console.log(baseURL);

const api = axios.create({
    baseURL: baseURL , 
    headers: { "Content-Type": "application/json" },
    // withCredentials: true,
})
 
export default api;   