import {defineStore} from 'pinia';

//第一个参数 仓库名
//第二个参数 小仓库的配置对象
//会返回一个函数
const userinfoStore = defineStore("info",{
    state:()=>{
        return {
            count:99,
            n1:66,
            n2:33
        }
    },
    actions:{
        getNumber(){
            this.count = 11111;
        }
    },
    getters:{
        getadd():number{
            return this.n1+this.n2;
        }
    }
});

export default userinfoStore