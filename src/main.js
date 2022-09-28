// 入口js文件
import Vue from "vue"
import App from "./App.vue"
import router from "./router"



new Vue({
    render:(b)=>b(App),
    beforeCreate(){
        Vue.prototype.$bus=this
    },
    router
}).$mount("#app")