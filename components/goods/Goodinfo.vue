<template>
 <div class="app-goodinfo">
    <!--1商品轮播区域-->
   
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!--换了一种轮播方式 把轮播单独封装起来 很多地方都需要用 方便调用-->
                        <swiper-box :list="imglist"></swiper-box>
					</div>
				</div>
			</div>
        
    <!--2商品购买区域-->
    <div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
							市场价：<del>￥{{info.old}}</del>
							销售价：<span class="now">￥{{info.now}}</span>
						</p>
						<p>
							购买数量：
							<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" v-model="val"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				</div>

						</p>
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click="addCartTo">加入购物车</mt-button>
						</p>
                    </div>
				</div>
				<div class="mui-card-footer"></div>
			</div>
    <!--3商品参数区域-->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{info.pid}}</p>
                        <p>商品颜色：粉红色</p>
						<p>商品运费：0</p>
					</div>
				</div>
				<div class="mui-card-footer"></div>
			</div>
 </div>
</template>
<script>
//父组件GoodInfo.vue 引入子组件轮播
import swiper from '../sub/swiper.vue';
//import mui from '../../lib/mui/js/mui.js';
//1.引入
//2.注册
//3.调用
import {Toast} from "mint-ui";
    export default {
        data(){
            return {
				imglist:[],
				val:1,
				info:{}
            }
        },
		methods:{
			addCartTo(){
				//1.将商品编号和数量保存服务器
				//2.获取商品变啊后
				//获取商品数量
				//发送请求
				//更新app.vue组件购物车
				//console.log("添加至购物车")
				var id=this.$route.params.id;
				var count = this.val;
				this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
					if(result.body.code==1){
						//添加成功 就更新购物车数量
						this.$store.commit("increment",count);
						Toast(result.body.msg);
					}else{
						Toast(result.body.msg);
					}
				});

			},
			getGoodInfo(){
				var id=this.$route.params.id;
				
				this.$http.get("goodsinfo?id="+id).then(result=>{
					this.info =result.body;
					console.log(this.info);
				})
			},
			goodAdd(){
				if(this.val<=999){ 
				this.val++;
				}
			},
			goodSub(){
				if(this.val>1){ 
				this.val--;}
			},
			getImageList(){
				this.$http.get("imagelist").then(result=>{
					this.imglist=result.body;
				})
			}
		},
        created() {
			this.getGoodInfo();
			this.getImageList();
            //console.log(this.$route.params.id);
        },
        components:{
            "swiper-box":swiper
        }
    }
</script>
<style >
    
</style>