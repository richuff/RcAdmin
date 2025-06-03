import axios from "axios"
import { ElMessage } from "element-plus";

const request = axios.create({
    baseURL: "http://localhost:5173/",
    timeout: 10000,
})

request.interceptors.request.use((config) => {
<<<<<<< HEAD
    console.log(config.data);
=======
    const myUserStore = userStore();
    if (myUserStore.token) {
        config.headers.token = myUserStore.token;
    }
>>>>>>> 56a8778e9e5317507b7d344cda36908b812a3b4c
    return config;
},error => {
    return Promise.reject(error);
});

request.interceptors.response.use((response)=>{
    console.log(response.data);
    
    return response.data;
},(error)=>{
    let message = '';
    const status = error.response.status ? error.response.status : 0;

    switch(status){
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
        type:"error",
        message
    })
    return Promise.reject(error);
})

export default request;