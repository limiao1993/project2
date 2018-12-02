<template>
    <div class="app-shop">
         
         <!--1图片轮播-->
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!--图片轮播-->
						<swiper-box :list="imagelist"></swiper-box>
					</div>
				</div>
			</div>
         <!--商品列表-->
         <div class="mui-card">
				<div class="mui-card-header" >商品列表</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!--mui左侧是图片 右侧是文字-->
                        <ul class="mui-table-view">
				            <li class="mui-table-view-cell mui-media" v-for="item in cartlist" :key="item.id">
					            <a href="javascript:;">
						        <img class="mui-media-object mui-pull-left" src="">
						    <div class="mui-media-body">
							{{item.title}}
							    <p class='mui-ellipsis'>
                                    <span class="price">￥{{item.price}}</span>
                                    <span class="count">
                                    <!--数字按钮-->
                                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub(item.id)">-</button>
					                        <input id="test" class="mui-input-numbox" type="number" :value="item.count" />
					                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd(item.id)">+</button>
				                        </div>
                                    </span>
                                </p>
						    </div>
                                </a>
				            </li>
                        </ul>
                        <!--数字按钮-->
						<div>合计：{{getSubTotal}}</div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
//引入子组件 轮播图
//注册当前对象
//在模板中调用轮播图组件
//data声明组件
//发送 异步请求获取图片列保存data
import swiper from '../sub/swiper.vue'
    export default {
        data() {
            return {
				imagelist:[],
				cartlist:[]
			}
        },
		methods:{
			cartSub(id){
				for(var item of this.cartlist){
					if(item.id==id){ 
					if(item.count<2) return;
					item.count--;
					break;
					}
				}
			},
			cartAdd(id){
				//1.获取数组中每个元素
				for(var item of this.cartlist){
					if(item.id==id){
						item.count++;
						break;
					}
				}
			},
			getCartList(){
				this.$http.get("shopCart").then(result=>{
					this.cartlist=result.body
				})
			},
			getImageList(){
				this.$http.get("imagelist").then(result=>{
					this.imagelist=result.body
				});
			}
		},
        created() {
			this.getCartList();
            this.getImageList();
        },
		components:{
			"swiper-box":swiper
		},
		computed:{
			getSubTotal:function(){
				//计算商品
				var sum =0;
				for (var item of this.cartlist){
					sum+= item.price*item.count;
				}
				return sum;
			}
		}
    }

</script>
<style>
</style>