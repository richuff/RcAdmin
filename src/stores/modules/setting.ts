import { defineStore } from "pinia"

const SettingStore = defineStore('Setting', {
    state: () => {
        return {
            isfold: false,
            isrefresh: false
        }
    },
})

export default SettingStore;