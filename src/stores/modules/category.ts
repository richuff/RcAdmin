import { defineStore } from "pinia";
import { reqC1, reqC2, reqC3 } from "../../api/production/attr"
import type { CateGoryResponseData } from "../../api/production/type/type"
import type { CategoryState } from '../type/type'

let CateGoryStore = defineStore('Category', {
    state: (): CategoryState => {
        return {
            C1ID: "",
            C2ID: "",
            C3ID: "",
            C1Arr: [],
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
        },
        async getC2() {
            let result: CateGoryResponseData = await reqC2(this.C1ID);
            if (result.code == 200) {
                this.C2Arr = result.data;
            }
        },

        async getC3() {
            let result: CateGoryResponseData = await reqC3(this.C2ID);
            if (result.code == 200) {
                this.C3Arr = result.data;
            }
        }
    },
    getters: {

    }
})

export default CateGoryStore;