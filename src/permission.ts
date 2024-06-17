import router from './router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
router.beforeEach((to: any, from: any, next: any) => {
    NProgress.start();
    next();
})

router.afterEach((to: any, from: any) => {
    NProgress.done();
})

