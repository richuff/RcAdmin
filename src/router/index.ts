import {createRouter,createWebHashHistory} from 'vue-router';
import constroutes from './Routes/constroutes'

const Route =createRouter({
    history:createWebHashHistory(),
    routes:constroutes
})

export default Route;