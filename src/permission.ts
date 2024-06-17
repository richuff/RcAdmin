import router from './router/index'
//@ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import userStore from './stores/modules/user';
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

router.afterEach((to: any, from: any) => {
    NProgress.done();
})

