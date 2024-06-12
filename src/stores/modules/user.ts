/* 导入用户相关的小仓库 */
import {defineStore} from "pinia"
/* 创建用户小仓库 */

import {UserLogin} from '../../api/user/index';
const userStore = defineStore('User',{
    state: ()=>{
        return {
            token: localStorage.getItem("TOKEN"),
        }
    },
    actions:{
        async UserLogins(data:any){
            let result: any = await UserLogin(data);
            console.log(this.token);
            
            if (result.code == 200){
                this.token =result.data.token;
                localStorage.setItem("TOKEN",result.data.token);
                return "ok"
            }else{
                return Promise.reject(new Error(result.data.message));
            }
        }
    },
    getters:{
        
    }
})

export default userStore