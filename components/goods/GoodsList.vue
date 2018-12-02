<template>
    <div class="app-goodslist">
        <!--商品列表项-->
        <div class="goods-item" v-for="item in list" :key="item.id">
            <img :src="item.img_url" @click="getDetail(item.id)"/>
            <h4 class="title">{{item.title}}</h4>
            <div class="info">
                <p class="price">
                <span class="now">{{item.now}}</span>
                 <span class="old">{{item.old}}</span>
                </p>
                <p class="sell">
                <span>热卖中</span>
                 <span>剩{{item.q}}</span>
                </p> 
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                list:[{id:1,img_url:"http://127.0.0.1:3000/img/FH62125370(1).jpg",title:"情真如初*香槟玫瑰x33枝",now:"299",old:"399",q:"3"},
                {id:2,img_url:"http://127.0.0.1:3000/img/FH62125370(2).jpg",title:"忘情巴黎&粉色、香槟玫瑰x33枝",now:"199",old:"299",q:"5"},
                {id:3,img_url:"http://127.0.0.1:3000/img/FH62125370(3).jpg",title:"纯静如水_11枝粉玫瑰预订",now:"198",old:"289",q:"2"},
                {id:4,img_url:"http://127.0.0.1:3000/img/FH62125370(4).jpg",title:"进口郁金香鲜花芍药混搭花束",now:"298",old:"389",q:"6"},
                ]
            }
        },
        methods:{
            getDetail(id){
                //需要商品id才能跳转
                console.log(id)
                this.$router.push("/home/goodsinfo/"+id);
            }
        }
    }
</script>
<style >
    .app-goodslist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:7px;
    }
.app-goodslist .goods-item{
    width:49%;
    border:1px solid #ccc;
    box-shadow:0 0 8px #ccc;
    margin:4px 0;
    padding:2px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:293px;
}
.app-goodslist .goods-item img{
    width:100%;
}
.app-goodslist .goods-item .now{
    color:red;
    font-weight:bold;
    font-size:16px;
    margin-right:10px;
}
.app-goodslist .goods-item .old{
    font-size:12px;
    text-decoration:line-through;
}
</style>