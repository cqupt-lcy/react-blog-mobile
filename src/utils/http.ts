import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,
})

httpInstance.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
)
httpInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)
export { httpInstance }