import {createRouter,createWebHistory} from 'vue-router';
import constroutes from './Routes/constroutes'

const Route =createRouter({
    history:createWebHistory(),
    routes:constroutes
})

export default Route;