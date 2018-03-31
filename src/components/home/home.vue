<template>
    <div class="banner">
        <div class="img-banner">
            <img src="/static/img/banner.png" alt="">
            <Menu ref="main_menu" class="header-menu" mode="horizontal" @on-select="route" :active-name="activeName">
                <MenuItem v-for="(value,index) in menu" :name="value.name" :key="value.name + index">
                    {{value.text}}
                </MenuItem>
            </Menu>
            <div class="login">
                <Button class="log-in-out">登录</Button>or<Button class="log-in-out">注册</Button>
                <img src="/static/img/language.png" alt="">
            </div>
            <div class="text">
                <h1 class='h1'>Type something Type</h1>
            </div>
        </div>
    </div>
</template>

<script>
let menu = [
  {name:'home',text:'首页'},
  {name:'trading',text:'交易中心'},
  {name:'assets',text:'数字资产'},
  {name:'user',text:'个人中心'},
  {name:'market',text:'行情中心'},
]
    export default {
        data() {
          return {
              menu,
              activeName:"home"
          }
        },
        mounted(){
           
        },
        methods:{
            route(name){
                console.log(name)
            }
        }
    }
</script>
<style lang="scss">
    .banner{
        width:100%;
        position: relative;
        .img-banner img{
            width:100%;
            display: block;
        }
        .header-menu{
            position: absolute;
            top:0;
            left: 140px;
            background: none;
            .ivu-menu-item{
                color:#fff;
                font-size:16px;
                border-bottom: 0px solid transparent;
            }
            .ivu-menu-item:hover{
                border-bottom:none;
            }
        }
        .ivu-menu-horizontal {
            height: 80px;
            line-height: 80px;
        }
        .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active{
            color: #2d8cf0;
            border-bottom: none;
        }
        .header-menu:after{
            height:0px;
        }
        .login{
            position: absolute;
            top:0;
            right:40px;
            line-height: 80px;
            height:80px;
            color:#fff;
            .log-in-out{
                border:none;
                background: none;
                color:#fff;
            }
            .ivu-btn:focus {
                -webkit-box-shadow: none;
                box-shadow: none;
            }
            img{
                width: 21px;
                height: 21px;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .text{
            position: absolute;
            width:100%;
            height:100%;
            color:#fff;
            top:0;
            left:0;
            .h1{
                height:90px;
                font-family:PingFangSC-Semibold;
                font-size:64px;
                color:#ffffff;
                letter-spacing:0;
                text-align:center;
                margin-top:230px;
                font-weight:400;
            }
        }
    }
</style>

