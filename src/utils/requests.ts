import axios from "axios"
import { ElMessage } from "element-plus";
import userStore from "@/stores/modules/user";

const request = axios.create({
    baseURL: "http://localhost:5173/",
    timeout: 5000,
})

request.interceptors.request.use((config) => {
    const myUserStore = userStore();
    if (myUserStore.token) {
        config.headers.token = myUserStore.token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    let message = '';
    const status = error.response.status;

    switch (status) {
        case 401:
            message = "TOKEN过期"
            break;
        case 403:
            message = "无权访问"
            break;
        case 404:
            message = "请求页面错误"
            break;
        case 500:
            message = "服务器错误"
            break;
        default:
            message = "网络错误"
            break;
    }

    ElMessage({
        type: "error",
        message
    })
    return Promise.reject(error);
})

export default request;