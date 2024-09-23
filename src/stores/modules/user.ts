/* 导入用户相关的小仓库 */
import { defineStore } from "pinia"
/* 创建用户小仓库 */

import { UserLogin, UserInfo, UserLoginout } from '../../api/user/index';

/* 引入路由（常量路由） */
import constroutes from '../../router/Routes/constroutes'

//操作本地存储的方法 SET_TOKEN

//引用类型
/* import type { UserState } from '../type/type'; */
const userStore = defineStore('User', {
    state: () => {
        return {
            token: localStorage.getItem("TOKEN"),
            //用户名
            username: '',
            //用户头像
            avatar: '',
            meunRoutes: constroutes,
        }
    },
    actions: {
        async UserLogins(data: any) {
            let result: any = await UserLogin(data);
            if (result.code == 200) {
                this.token = result.data;
                localStorage.setItem("TOKEN", result.data);
                return "ok"
            } else {
                return Promise.reject(new Error(result.message));
            }
        },
        //获取用户信息
        async userinfo() {
            let result: any = await UserInfo();
            if (result.code = 200) {
                this.username = result.data.name;
                this.avatar = result.data.avatar;
                return 'ok';
            } else {
                return Promise.reject("获取失败");
            }
        },

        async UserLogOut() {
            //通知退出服务
            let result = await UserLoginout();
            if (result) {
                this.username = '';
                this.avatar = '';
                this.token = '';
                localStorage.removeItem("TOKEN");
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message));
            }
        }
    },
    getters: {

    }
})

export default userStore