import { defineStore } from "pinia"

const SettingStore = defineStore('Setting', {
    state: () => {
        return {
            isfold: false
        }
    },
})

export default SettingStore;