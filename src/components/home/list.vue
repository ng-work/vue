<template>
    <div class="list">
        <div class="chart_menu">
            <Menu ref="" class="menus" mode="horizontal"  :active-name="activeName">
                <MenuItem v-for="(value,index) in menu" :name="value.name" :key="value.key + index">
                    {{value.name}}
                </MenuItem>
            </Menu>
           
            <Input icon="search" v-model="value" placeholder="Enter something..." style="width: 200px;"></Input>
            <ButtonGroup class="list_style">
                <Button class="jgg_show l_show" icon="android-apps"></Button>
                <Button class="list_show l_show" icon="navicon-round"></Button>
            </ButtonGroup>
        </div>
        <div class="currency_list clear">
            <div  v-for="(item,index) in array" v-if="index < 12" v-show="true" :key="index" :name='index' :class=" (index+1)%4 !== 0?'need_margin clear':'clear'" >
                <div class="draw_chart">
                    <img  :src='item.star?"/static/img/star1.png":"/static/img/star.png"' alt="">
                    <div class="charts" :id="'chart'+index"></div>
                </div>
                <div class="info_chart">
                    <p class="bizhong" style="">Ethereum {{item.bi}} <span :class="item.zhangfu >0?'span1 green':'span1 red'">{{item.zhangfu>0?"+"+item.zhangfu+"%":item.zhangfu+'%'}}</span></p>
                    <p class="price">{{ item.price }} {{ item.bi }}<span>${{ item.money }}</span></p>
                </div>
            </div>
            <div  v-for="(item,index) in array"  v-if="index >= 12" v-show='show_list' :key="index" :name='index' :class=" (index+1)%4 !== 0?'need_margin clear  animated '+animate:'clear  animated '+animate" >
                <div class="draw_chart">
                    <img  :src='item.str?"/static/img/star.png":"/static/img/star1.png"' alt="">
                    <div class="charts" :id="'chart'+index"></div>
                </div>
                <div class="info_chart">
                    <p class="bizhong" style="">Ethereum {{item.bi}} <span :class="item.zhangfu >0?'span1 green':'span1 red'">{{item.zhangfu>0?"+"+item.zhangfu+"%":item.zhangfu+'%'}}</span></p>
                    <p class="price">{{ item.price }} {{ item.bi }}<span>${{ item.money }}</span></p>
                </div>
            </div>
            
        </div>
        <div :class="'showall '+animate">
            <Button @click="showall">{{ button_info }}</Button>
        </div>
    </div>
</template>

<script>

let menu=[
    {key:"ETH",name:"ETH"},
    {key:"USDT",name:"USDT"},
    {key:"BTC",name:"BTC"}
];
    let list=[
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8,3,4,5,3.4,4.3,5.3,3.8,3.6,4.9,5.0,6.0],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-20.33",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"10.38",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"3120.33",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:0,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        },
        {
            bi:"ETH",
            star:1,
            charts:[1.2,3.4,2,0.5,0.9,1.8,2.5,2.8],
            zhangfu:"-0.3",
            price:"23",
            money:'334'

        }
    ]
    import echarts from 'echarts';
    export default {
        name:"list",
        data(){
            return {
                value:"",
                menu,
                activeName:"ETH",
                show_list:false,
                array:list,
                button_info:"See All",
                animate:"fadeInDown",
            }
        },
        mounted(){
            const that = this;
            this.echarts();
            window.onresize = () => {
                setTimeout(function(){
                    that.echarts();
                },100)
                
            }
        },
        
        methods:{
            echarts(val){
                var colors = ['#f6e89d', '#afccf0', '#f4d2af', "#7fd8c0"];  
                let that = this;
                this.array.map((item,index)=>{
                    console.log("123")
                    if (index > 11) return false;
                    let colorindex = parseInt(Math.random()* 4);
                    var el = document.getElementById("chart"+index);
                    if (el) {
                        console.log(el)
                        echarts.dispose(el)
                        let myChart = echarts.init(el);
                        let option1 = {
                                backgroundColor:'#fff',
                                grid:{
                                    left:0,
                                    right:0,
                                    bottom:0,
                                    top:0
                                },
                                xAxis: {
                                    show: false,
                                    name:'',
                                    type: 'category',
                                    boundaryGap: false,
                                },
                                yAxis:{ 
                                    show: false,
                                    splitLine:{show: false},
                                    type:'value',
                                },
                                
                                series: [
                                    {
                                        id:"买入",
                                        type: 'line',
                                        symbol: "",
                                        symbolSize: 0,
                                        name: '数量',
                                        data: item.charts,
                                        lineStyle: {
                                            color: colors[colorindex],
                                            width:1
                                        },
                                        areaStyle: {
                                            color:colors[colorindex],
                                            opacity:0.3
                                            
                                        }
                                    }
                                ]
                            };
                        myChart.hideLoading();
                        myChart.setOption(option1)
                    }
                })
            },
            echarts1(val){
                var colors = ['#f6e89d', '#afccf0', '#f4d2af', "#7fd8c0"];  
                let that = this;
                this.array.map((item,index)=>{
                    if (index > 11){
                        let colorindex = parseInt(Math.random()* 4);
                        var el = document.getElementById("chart"+index);
                        if (el) {
                            echarts.dispose(el)
                            let myChart = echarts.init(el);
                            let option1 = {
                                    backgroundColor:'#fff',
                                    grid:{
                                        left:0,
                                        right:0,
                                        bottom:0,
                                        top:0
                                    },
                                    xAxis: {
                                        show: false,
                                        name:'',
                                        type: 'category',
                                        boundaryGap: false,
                                    },
                                    yAxis:{ 
                                        show: false,
                                        splitLine:{show: false},
                                        type:'value',
                                    },
                                    
                                    series: [
                                        {
                                            id:"买入",
                                            type: 'line',
                                            symbol: "",
                                            symbolSize: 0,
                                            name: '数量',
                                            data: item.charts,
                                            lineStyle: {
                                                color: colors[colorindex],
                                                width:1
                                            },
                                            areaStyle: {
                                                color:colors[colorindex],
                                                opacity:0.3
                                                
                                            }
                                        }
                                    ]
                                };
                            myChart.hideLoading();
                            myChart.setOption(option1)
                        }
                    }
                })
            },
            showall(){
                if(this.show_list == true){
                    
                    this.button_info = "See All";
                    this.animate="fadeOutUp"
                    setTimeout(()=>{
                        this.show_list=false; 
                    },600)
                    
                }else{
                    this.animate="fadeInDown"
                    this.show_list=true; 
                    setTimeout(()=>{
                        this.echarts1();
                    },100)
                    this.button_info ='Retract';
                }
                
            }
        }
    }
</script>

<style lang='scss'>


    .list{
        width:100%;
        min-width:1440px;
        min-height:300px;
        background: #353535;
        padding:30px 48px;
        .chart_menu{
            text-align: center;
            .menus {
                display: inline-block;
                height: 60px;
                line-height: 60px;
                background: none;
                vertical-align: middle;
                .ivu-menu-item{
                    color:#fff;
                    border-bottom:none;
                    padding:0;
                    margin-right:65px;
                }
                .ivu-menu-item:hover{
                   border-bottom: 2px solid #2d8cf0;
                }
                .ivu-menu-item-selected{
                    color:#fff;
                    border-bottom: 2px solid #2d8cf0;
                }
                
            }
            .menus:after{
                height:0;
            }
            .ivu-input-icon-normal + .ivu-input{
                padding-right: 0;
                padding-left:32px;
            }
            .ivu-input-icon{
                left:0 ;
            }
            .ivu-input{
                background:#404448;
                border-radius:3px;
                width:202px;
                height:30px;
                border:none;
                color:#8d8f8c;
            }
            .list_style{
                float:right;
                margin-top: 15px;
                width:60px;
                .ivu-btn{
                    padding:3px 9px;
                    font-size:14px;
                }
                .ivu-btn:focus {
                    -webkit-box-shadow: none;
                    box-shadow: none;
                }
                .l_show{
                    width:30px;
                    height:30px;
                }
                .jgg_show{
                    background: #2d8cf0;
                    border:none;
                    color:#fff;
                    float: left;
                }
                .list_show{
                    border:none;
                    background: #f4f4f4;
                    color:#333;
                    float: right;
                }
            }
            
           
        }
        .currency_list{
            margin-top: 30px;
            & > div{
                float: left;
                margin-bottom: 10px;
                width:23.5%;
                // background: #ccc;
                margin-bottom:50px;
                .draw_chart{
                    background:#ffffff;
                    box-shadow:0 2px 16px 0 rgba(0,0,0,0.52);
                    border-radius:5px;
                    width:100%;
                    height:178px;
                    margin-bottom: 8px;
                    position: relative;
                    overflow: hidden;
                    img{
                        position: absolute;
                        width:20px;
                        height:20px;
                        left:12px;
                        top:12px;
                    }
                    .charts{
                        width:103%;
                        height:120px;
                        position: absolute;
                        left:-5px;
                        bottom: -5px;
                        // background: #f00;

                    }
                }
                @media screen and (min-width:1440px){
                    .draw_chart{
                        height:200px;
                        .charts{
                            height:140px;
                        }
                    }
                    
                }
                .info_chart{
                    .bizhong{
                        line-height:30px; 
                        height:30px; 
                        color:#fff;
                        font-family:Helvetica;
                        padding-left:30px;
                        .span1{
                            font-family:Helvetica-Bold;
                            line-height: 30px;
                            display: inline-block;
                            padding:0 15px;
                            min-width:60px;
                            text-align: center;
                            background: #2a2a2a;
                            border-radius:5px;
                            float:right;
                        }
                        .red{
                            color:#ff750d;
                        }
                        .green{
                            color:#3ec47b;
                        }
                    }
                    .price{
                        font-family:Helvetica-Light;
                        font-size:14px;
                        color:#fff;
                        span{
                            margin-left: 10px;
                            color:#0babf2;
                        }
                    }
                   
                }
            }
            .need_margin{
                margin-right: 2%;
            }
        }
        .showall{
            width:100%;
            margin: 30px 0;
            text-align: center;
            button{
                background-image:linear-gradient(-180deg, #3fc67c 0%, #009688 100%);
                border-radius:5px;
                width:216px;
                height:38px;
                border:none;
                margin-top:27px;
                color:#fff;
                font-size:14px;
            }
            .ivu-btn:focus {
                -webkit-box-shadow: none;
                box-shadow: none;
            }
        }
    }
</style>