import { defineStore } from "pinia";
import { reqC1, reqC2, reqC3 } from "../../api/production/attr"
import type { CateGoryResponseData } from "../../api/production/type/type"
import type { CategoryState } from '../type/type'

let CateGoryStore = defineStore('Category', {
    state: (): CategoryState => {
        return {
            C1Arr: [],
            C1ID: 0,
            C2Arr: [],
            C3Arr: []
        }
    },
    actions: {
        async getC1() {
            let result: CateGoryResponseData = await reqC1();
            if (result.code == 200) {
                this.C1Arr = result.data;
            }
        }
    },
    getters: {

    }
})

export default CateGoryStore;