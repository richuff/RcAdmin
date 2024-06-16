/* 导入用户相关的小仓库 */
import { defineStore } from "pinia"
/* 创建用户小仓库 */

import { UserLogin, UserInfo } from '../../api/user/index';

/* 引入路由（常量路由） */
import constroutes from '../../router/Routes/constroutes'

//引用类型
/* import type { UserState } from '../type/type'; */
const userStore = defineStore('User', {
    state: () => {
        return {
            token: localStorage.getItem("TOKEN"),
            username: '',
            avatar: '',
            meunRoutes: constroutes,
        }
    },
    actions: {
        async UserLogins(data: any) {
            let result: any = await UserLogin(data);
            console.log(this.token);

            if (result.code == 200) {
                this.token = result.data.token;
                localStorage.setItem("TOKEN", result.data.token);
                return "ok"
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
        //获取用户信息
        async userinfo() {
            let result: any = await UserInfo();
            if (result.code = 200) {
                this.username = result.data.checkUser.username;
                this.avatar = result.data.checkUser.avatar;
            } else {
            }
        },

        UserLogOut() {
            //通知退出服务
            this.username = '';
            this.avatar = '';
            this.token = '';
            localStorage.removeItem("TOKEN");
        }
    },
    getters: {

    }
})

export default userStore