// 路由器对象模块

import Vue from "vue"
import VueRouter from "vue-router"
// 引入组件模块
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue"

// 声明使用插件
Vue.use(VueRouter)


const router= new VueRouter({
    //所有路由
    routes:[
        {
            path:"/msite",
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/order",
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/profile",
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/search",
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                showFooter:false
            }
        },
        {
            path:"/",
            redirect:"/msite"
        }
    ]
})

export default router