<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
export default {
    name:"App",
    data(){
        return{
            ishow:true
        }
    },
    components:{
        FooterGuide
    },
    mounted(){
        this.$bus.$on("show",(data)=>{
            this.ishow=data
        })
    }


}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        background #f5f5f5
        
</style>