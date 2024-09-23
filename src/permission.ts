//引入路由模块
import router from './router/index'
//@ts-ignore
//引入nprogress和css文件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
//引入仓库模块
import userStore from './stores/modules/user';
//路由前鉴权
router.beforeEach(async (to: any, from: any, next: any) => {
    document.title = "VT-" + to.meta.title;
    let UserStore = userStore();
    NProgress.start();
    let token = UserStore.token;
    if (token) {
        if (to.path == '/login') {
            next({ path: '/', query: { redirect: from.path } });
        } else {
            let username = UserStore.username;
            if (username) {
                next();
            } else {
                try {
                    await UserStore.userinfo();
                    next();
                } catch (error) {
                    UserStore.UserLogOut();
                    next({ path: '/login', query: { redirect: from.path } });
                }
            }
        }
    } else {
        if (to.path == '/login') {
            next();
        } else {
            next({ path: '/login', query: { redirect: to.path } });
        }
    }
})

//路由后鉴权，关闭进度条
router.afterEach((to: any, from: any) => {
    NProgress.done();
})

