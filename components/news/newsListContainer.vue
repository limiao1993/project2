<template>
    <div class="app-newslist">
   <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/home/newsinfo?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                            <span>{{item.ctime | datetimeFilter}}</span>
                            <span>点击{{item.point}}次数</span>
                            </p>
						</div>
					</router-link>
				</li> 
        </ul>
        <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[],
                pageIndex:0,
                pageSize:5,
                hasMore:true,
                pageCount:2 ,
            }
        },
        methods:{
            //加载更多
            getMore(){
                this.hasMore=this.pageIndex <= this.pageCount;
                if(!this.hasMore){return}
                this.pageIndex++;
                var url = "http://127.0.0.1:3000/newslist";
                url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
                this.$http.get(url).then(result=>{
                    //console.log(result);
                    //concat拼接数组
                    var rows=this.list.concat(result.body.data);
                    this.list=rows;
                    //保存总页数
                    this.pageCount=result.body.pageCount;
                })
        }},
        created() {
            this.getMore();
        },
    }
</script>
<style >
 .app-newslist .mui-table-view li .mui-ellipsis{
     display:flex;
     font-size:12px;
     color:#226aff;
     justify-content:space-between;
 }
</style>