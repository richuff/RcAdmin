const constroutes = [
    {
        path: '/',
        component: () => import('../../layout/index.vue'),
        name: 'home',
        redirect: '/home',
        meta: {
            isHidden: false,
            isHid: true
        },
        children: [{
            path: '/home',
            component: () => import('../../views/Home/homeRichu.vue'),
            meta: {
                title: '主页',
                icon: 'HomeFilled'
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
    },
    {
        path: '/screen',
        component: () => import('../../screen/index.vue'),
        name: 'screen',
        meta: {
            title: '数据大屏',
            isHidden: false,
            icon: 'Promotion'
        }
    },
    {
        path: '/acl',
        component: () => import('../../layout/index.vue'),
        name: 'acl',
        redirect: '/acl/user',
        meta: {
            title: '权限管理',
            isHidden: false,
            icon: 'Lock'
        },
        children: [
            {
                path: '/acl/user',
                name: 'User',
                component: () => import('../../acl/user/index.vue'),
                meta: {
                    title: '用户管理',
                    isHidden: false,
                    icon: 'User'
                }
            },
            {
                path: '/acl/role',
                name: 'Role',
                component: () => import('../../acl/role/index.vue'),
                meta: {
                    title: '角色管理',
                    isHidden: false,
                    icon: 'UserFilled'
                }
            },
            {
                path: '/acl/permission',
                name: 'Permission',
                component: () => import('../../acl/permission/index.vue'),
                meta: {
                    title: '权限管理',
                    isHidden: false,
                    icon: 'Monitor'
                }
            }
        ]
    },
    {
        path: '/product',
        component: () => import('../../layout/index.vue'),
        name: 'product',
        redirect: '/product/trademark',
        meta: {
            title: '商品管理',
            isHidden: false,
            icon: 'Goods'
        },
        children: [
            {
                path: '/product/trademark',
                name: 'Trademark',
                component: () => import('../../product/trademark/index.vue'),
                meta: {
                    title: '品牌管理',
                    isHidden: false,
                    icon: 'ShoppingCartFull'
                }
            },
            {
                path: '/acl/attr',
                name: 'Attr',
                component: () => import('../../product/attr/index.vue'),
                meta: {
                    title: '属性管理',
                    isHidden: false,
                    icon: 'ChromeFilled'
                }
            },
            {
                path: '/product/spu',
                name: 'Spu',
                component: () => import('../../product/spu/index.vue'),
                meta: {
                    title: 'SPU管理',
                    isHidden: false,
                    icon: 'Calendar'
                }
            },
            {
                path: '/product/sku',
                name: 'Sku',
                component: () => import('../../product/sku/index.vue'),
                meta: {
                    title: 'SKU管理',
                    isHidden: false,
                    icon: 'Orange'
                }
            }
        ]
    }
]

export default constroutes;