<template>
    <div class="app-subswiper">
        <mt-swipe>
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url"/>
            </mt-swipe-item>
        </mt-swipe>
        
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props:["list"]//子组件接受父组件数据
    }
</script>
<style >
    .app-subswiper {
        height:100px;
    }
     .app-subswiper .mint-swipe .mint-swipe-items-wrap .mint-swipe-item img{
         width:100%;
     }
</style>