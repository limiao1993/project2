<template>
<div class="app-homeContainer">
   <mt-header fixed title="鲜花商城"></mt-header>
   <!--轮播图-->
   <mt-swipe :auto="2000"> 
        <mt-swipe-item v-for="item in list" ::key="item.id"><img :src="item.img_url">
        </mt-swipe-item>
   </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../img/1 (1).png">
		                    <div class="mui-media-body">特价鲜花</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><!--a @click.stop.prevent="jumpShop()-->
                        <router-link to="/home/goodslist">
		                    <img src="../../img/1 (2).png">
		                    <div class="mui-media-body">爱情鲜花</div><!--/a--></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><!--a href="#"-->
                        <router-link to="/home/goodslist">
		                    <img src="../../img/1 (3).png">
		                    <div class="mui-media-body">生日鲜花</div><!--/a--></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><!--a href="#"-->
                        <router-link to="/home/photo">
		                    <img src="../../img/1 (4).png">
		                    <div class="mui-media-body">图片列表</div><!--/a--></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/1 (5).png">
		                    <div class="mui-media-body">绿植</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../img/6.jpg">
		                    <div class="mui-media-body">全部鲜花</div></a></li>
		         </ul> 
   </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
            //jumpShop(){
                //this.$router.push("/home/shop?id=3");},
            getImage(){
                //发送ajax请求
                var url="http://127.0.0.1:3000/imagelist"
                this.$http.get(url).then(result=>{
                    this.list=result.body;//获取返回的数据保存在list中
                })
            }
        },
        created() {
            this.getImage();
        },
    }
</script>
<style>
    .app-homeContainer .mint-swipe{
        height:150px;
    }
    .app-homeContainer .mint-swipe img{
       width:100%;
    }
    /*调整6宫格*/
    .app-homeContainer .mui-grid-view.mui-grid-9 {
        background:#fff;
        border:0;
    }
   .app-homeContainer .mui-grid-view.mui-grid-9 img{
        width:100px;
        height:100px;
    }
    .app-homeContainer .mui-grid-view.mui-grid-9 .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
         font-size:13px;
     }
</style>