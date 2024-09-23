import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Category from './Category/index.vue'

const allglobalComponents: any = { Category };

export default {
    install(app: any) {
        Object.keys(allglobalComponents).forEach(key => {
            app.component(key, allglobalComponents[key]);
        })

        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component);
        }
    }
}