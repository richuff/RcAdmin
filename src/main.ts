import { createApp } from 'vue'
import App from './App.vue'
import store from './stores/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Route from './router'
/* import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs' */

const app = createApp(App)
app.use(store)
app.use(Route)
/* app.use(ElementPlus,{
    locale:zhCn
}) */
app.use(ElementPlus)
//国际化，使用中文
/* app.use(ElementPlus,{
    locale:zhCn
}) */

app.mount('#app')
