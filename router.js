import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import homeContainer from "./components/tabbar/HomeContainer.vue"
import newsListContainer from "./components/news/newsListContainer.vue"
import newInfoContainer from "./components/news/newInfoContainer.vue"
import shopContainer from "./components/tabbar/ShopContainer.vue"
import goodsList from "./components/goods/GoodsList.vue"
import goodinfo from "./components/goods/Goodinfo.vue"
import photo from "./components/photo/PhotoContainer.vue"
import login from "./components/home/LoginContainer.vue"
Vue.use(Router)

export default new Router({
  routes: [
{path:"/home/login",component:login},
    {path:"/home/photo",component:photo},
    {path:'/shop',component:shopContainer},
   {path:'/home/newsinfo',component:newInfoContainer},
    {path:'/home/newslist',component:newsListContainer},
    {path:'/home',component: homeContainer},
    {path:'/',redirect:'/home'},
    {path:'/home/goodslist',component:goodsList},
    {path:'/home/goodsinfo/:id',component:goodinfo},
  ]
})
