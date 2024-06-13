
const constroutes = [
    {
        path: '/',
        component: () => import('../../layout/index.vue'),
        name: 'home',
        meta: {
            title: '首页'
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
            title: '404'
        },
    },
    {
        path: '/login',
        component: () => import('../../views/Login/loginRichu.vue'),
        name: 'login',
        meta: {
            title: '登录'
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login',
        name: 'any',
        meta: {
            title: '任意'
        },
    }
]

export default constroutes;