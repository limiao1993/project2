import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//引入组件mintui库header
import {Button,Header,Swipe,SwipeItem,Lazyload} from "mint-ui";

//注册当前项目中
//Vue.component(Button.name,Button);
//Vue.component(Header.name,Header);
//Vue.component(Swipe.name,Swipe);
//Vue.component(SwipeItem.name,SwipeItem);
//Vue.use(Lazyload);
//按需引入 改成完整引入
import MintUI from "mint-ui";
Vue.use(MintUI)
//2.引入vue-resource 发送ajax请求
import VueResource from "vue-resource"
Vue.use(VueResource);
//3.main.js创建过滤器
Vue.filter("dateFilter",function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  var d=date.getDate();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d}`;
});
//创建日期字符串 
Vue.filter("datetimeFilter",function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  var d=date.getDate();
  var h=date.getHours();
  var mi=date.getMinutes();
  var s=date.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
});
//配置VueResource 服务器根目录
Vue.http.options.root = "http://127.0.0.1:3000/"
//修改请求头 post
//Vue.http://options.emulateJSON =true
//4.创建一个vuex的实例对象
//4.1下载安装vuex npm i vuex -D
//4.2引入vuex实例
import Vuex from "vuex"
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{count:0},//购物车商品数量
  mutations:{
    increment(state,c){
      state.count+=parseInt(c)
    }, //修改共享数据
    substract(state){
      state.count-- //修改共享数据属性
    }
  },
  getters:{
    optCount:function(state){
      return state.count; //返回共享数据
    }
  }
});
//4.3创建vuex实例对象
//5.将vuex注册实例vue

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
