 const constroutes = [
    {
        path:'/home',
        component:() => import('../../views/Home/homeRichu.vue'),
        name:'home'
    },
    {
        path:'/404',
        component:() => import('../../views/404/indexRichu.vue'),
        name:'404'
    },
    {
        path:'/login',
        component:() => import('../../views/Login/loginRichu.vue'),
        name:'login'
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'any'
    }
]

export default constroutes;