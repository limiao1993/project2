
<template>
    <div class="app-login">
        <form>
            用户名:<input type="text" name="uname" v-model
            ="unameval"><br>
            密码：<input type="text" name="upwd" v-model="upwdval"><br/>
            <input type="button" id="btn" value="登陆" @click="btnSubmit">
        </form>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default{
        data (){
            return {
                unameval:"",
                upwdval:""
            }
        },
        methods:{
            btnSubmit(){
                //console.log(111)
                var u =this.unameval;
                var p = this.upwdval;
                //console.log(u+"-"+p)
                //发送ajax请求
                this.$http.get("login?uname="+u+"&upwd="+p).then(result=>{
                    if(result.body.code==1){
                        Toast(result.body.msg)
                        this.$router.push("/");
                    }else{
                        Toast(result.body.msg);
                    }
                })
            }
        }
    }
</script>
<style >
    
</style>