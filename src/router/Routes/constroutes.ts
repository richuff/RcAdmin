
const constroutes = [
    {
        path: '/',
        component: () => import('../../layout/index.vue'),
        name: 'home',
        meta: {
            title: '首页',
            isHidden: false
        },
        children: [{
            path: '/home',
            component: () => import('../../layout/menu/index.vue'),
            meta: {
                title: '主页'
            },
        }]
    },
    {
        path: '/404',
        component: () => import('../../views/404/indexRichu.vue'),
        name: '404',
        meta: {
            title: '404',
            isHidden: true
        },
    },
    {
        path: '/login',
        component: () => import('../../views/Login/loginRichu.vue'),
        name: 'login',
        meta: {
            title: '登录',
            isHidden: true
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login',
        name: 'any',
        meta: {
            title: '任意',
            isHidden: true
        },
    }
]

export default constroutes;