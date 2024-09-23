import { createApp } from 'vue'
import App from './App.vue'
import store from './stores/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Route from './router'
<<<<<<< HEAD
/* import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs' */
=======
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs'
//svg
import 'virtual:svg-icons-register'

import globalComponents from './components/index'
>>>>>>> 56a8778e9e5317507b7d344cda36908b812a3b4c

const app = createApp(App)
app.use(store)
app.use(Route)
<<<<<<< HEAD
/* app.use(ElementPlus,{
    locale:zhCn
}) */
app.use(ElementPlus)
//国际化，使用中文
/* app.use(ElementPlus,{
    locale:zhCn
}) */

=======
//app.use(ElementPlus)
app.use(globalComponents)
//国际化，使用中文
app.use(ElementPlus, {
    locale: zhCn
})
//使用进度条鉴权业务
import './permission'
>>>>>>> 56a8778e9e5317507b7d344cda36908b812a3b4c
app.mount('#app')
