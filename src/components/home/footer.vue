<template>
    <div class="wrapper foot">
        <Row class="footer">
            <Col span="8">
                <div class="foot_title">
                    Products
                </div>
                <Row>
                    <Col span="12">
                        <p class="foot_p foot_p_first">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                    </Col>
                    <Col span="12">
                        <p class="foot_p foot_p_first">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                    </Col>
                </Row>
            </Col>
            <Col span="8">
                <div class="foot_title">
                    Company
                </div>
                <Row>
                    <Col span="12">
                        <p class="foot_p foot_p_first">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                        <p class="foot_p">Type something</p>
                    </Col>
                </Row>
            </Col>
            <Col span="8">
                <div class="foot_title">
                    CompanyCo  CompanyCompany  Co
                </div>
                <div class="enter_email">
                    <img class="logo" src="/static/img/language.png" alt="">
                    <p class="to_email">Enter your emall to get an lnvlte</p>
                    <Icon class="right_arrow" type="arrow-right-c"></Icon>
                </div>
                <p style="margin-top:10px; font-size:10px;color:#4b5955;padding-left:10px;">CompanyCo  CompanyCompanyCompanyCompany  Co</p>
                <div class="links">
                    <p class="follow clear">Follow us</p>
                    <p class="follow_link clear">
                        <Icon  type="ios-world-outline"></Icon>
                        <Icon type="social-twitter"></Icon>
                        <Icon type="social-github-outline"></Icon>
                        <Icon type="social-facebook"></Icon>
                        <Icon type="social-pinterest"></Icon>
                    </p>
                </div>
            </Col>
        </Row>
        <div class="login_info">
            <Row style="line-height:140px;">
                <Col span="6">
                    <Input class="login_input login_input1" placeholder="Username"></Input>
                </Col>
                <Col span="6">
                    <Input class="login_input login_input2" placeholder="Email"></Input>
                </Col>
                <Col span="6">
                    <Input class="login_input login_input3" placeholder="Create a password"></Input>
                </Col>
                <Col span="6">
                    <Button class="login_input login_input4">Sign up for Finchain</Button>
                </Col>
            </Row>
        </div>
        <div class="footer_footer">
            <p>@ 2018，FINCHAIN 360</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss">
    .foot{
        background: #222222;
        padding:48px 47px 42px 47px;
        .footer{
            font-family:Helvetica;

            .foot_title{
                font-size:20px;
                color:#ffffff;
                letter-spacing:0;
                text-align:left;
            }
            
            .foot_p{
                font-size:10px;
                color:#adb7b9;
                margin-top:42px;
            }
            .foot_p_first{
                margin-top:28px;
            }
            .enter_email{
                margin-top:11px;
                background:#2a2a2a;
                border-radius:5px;
                width:100%;
                height:60px;
                .to_email{
                    margin-left:20px;
                    line-height: 60px;
                    font-size:12px;
                    color:#a4aeb4;
                    letter-spacing:0;
                    display: inline-block;
                }
                .right_arrow{
                    height:60px;
                    position: absolute;
                    vertical-align: middle;
                    right:23px;
                    top:60px;
                    display:table-cell;
                    font-size:20px;
                    color:#fff;
                    margin-left:-50px;
                }
                .logo{
                    vertical-align: middle;
                    display: inline-block;
                    width:30px;
                    height:30px;
                    margin-left: 12px;
                }
            }
            .links{
                margin-top:120px;
                .follow{
                    font-size:20px;
                    color:#ffffff;
                    float: left;
                    line-height: 30px;
                    margin-right:30px;
                }
                .follow_link{
                    float: left;
                    line-height: 30px;
                    font-size:20px;
                    i{
                        margin-left: 50px;
                        color:#fff;
                    }
                }
            }
        }
        .login_info{
            margin-top:70px;
            height:140px;
            border-top:1px solid #2e2e2e;
            border-bottom:1px solid #2e2e2e;
            
            .login_input{
                vertical-align: middle;
                width:80%;
                height:50px;
                .ivu-input{
                    height:50px;
                    font-size:16px;
                    color:#888b8e;
                    padding-left:10px;
                }
            }
            .login_input1{
                margin-left: 15%;
            }
            .login_input4{
                margin-right:15%;
                background-image:linear-gradient(-180deg, #34cf57 0%, #049581 100%);
                border-radius:5px;
                padding:0;
                font-family:Helvetica-Bold;
                font-size:16px;
                color:#ffffff;
                border:none;
            }
            .login_input2{
                margin-left: 10%;
            }
            .login_input3{
                margin-left: 5%;
            }
        }
        .footer_footer{
            margin-top: 40px;
            color: #4c4c4c;
        }
    }
</style>
