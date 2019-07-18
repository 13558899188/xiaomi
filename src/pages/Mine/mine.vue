<template>
	<div class="box">
		<div class="header" @click="userxie"> <!--头部-->
			<div class="head">
				<img src="https://m.mi.com/static/img/avatar.76a75b8f17.png"/>
			</div>
			<span class="login" v-show="usershow">登录/注册</span>
			<span class="login user" v-show="!usershow">{{user}}</span>
		</div>
		<div class="nav">
			<div>
				<span @click="time()">我的订单</span>
			</div>
			<div class="fize">
				<span @click="time()">全部订单</span>
			</div>
			<div>
				
			</div>
		</div>
		<div class="moneny">   <!--支付模块-->
			<div class="pay"  @click="time()">   <!--待付款-->
				<span>待付款</span>
			</div>
			<div class="take"  @click="time()">  <!--待收货-->
				<span>待收货</span>
			</div>
			<div class="change"  @click="add()">  <!--退换修-->
				<span>退换修</span>
			</div>
		</div>
		<div class="vip" @click="logan()">  <!--会员中心-->
			<div class="icon"></div>
			<div class="navli">
				<span>会员中心</span>
				<div class="after"></div>
			</div>
		</div>
		<div class="vip" @click="web()">  <!--会员中心-->
			<div class="icontwo"></div>
			<div class="navli">
				<span>我的优惠</span>
				<div class="after"></div>
			</div>
		</div>
		<div class="vip" @click="See()">  <!--会员中心-->
			<div class="iconone"></div>
			<div class="navli">
				<span>服务中心</span>
				<div class="after"></div>
			</div>
		</div>
		<div class="vip" @click="mhome">  <!--会员中心-->
			<div class="iconerr"></div>
			<div class="navli">
				<span>小米之家</span>
				<div class="after"></div>
			</div>
		</div>
		<div class="vip" @click="thd()">  <!--会员中心-->
			<div class="iconarr"></div>
			<div class="navli">
				<span>F码通道</span>
				<div class="after"></div>
			</div>
		</div>
		<div class="vip" @click="homeset">  <!--会员中心-->
			<div class="iconkpl"></div>
			<div class="navli">
				<span>设置</span>
				<div class="after"></div>
			</div>
		</div>
		<div>
</div>
		<Tabbar></Tabbar>
		<div class="xieyibox" v-show="ageshow">
			<div class="xieyi">
				<p class="title">协议声明</p>
				<div class="userxieyi">
					<a href="#">《小米商城用户协议》</a>
					<a href="#">《账号协议》</a>
					<a href="#">《隐私政策》</a>
				</div>
				<p class="yishang">请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
				<div class="agreeBtn">
					<span class="disagree" @click="disAgreement">不同意</span>
					<span class="agree" @click="agreement">同意</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Tabbar from '../../components/tabbar'
	export default{	
		components:{
			Tabbar
		},
		data:function(){
			return {
				ageshow:false,
				usershow:true,
				user:''
			}
		},
		mounted(){
			var temp = window.sessionStorage.getItem('userIphone')
			if(temp!=null){
				this.user=window.sessionStorage.getItem('userIphone');
				this.usershow=false;
			}
		},
		methods:{
		See(){
			window.location.href="http://localhost:8080/#/Serve"
		},
		logan(){
			window.location.href="http://localhost:8080/#/member"
		},
		thd(){
			window.location.href="http://localhost:8080/#/fma"
		},
		web(){
			window.location.href="http://localhost:8080/#/couponlist"
		},
		time(){
			window.location.href="http://localhost:8080/#/Commodity"
		},
		add(){
			window.location.href="http://localhost:8080/#/applyafter"
		},
		userxie(){
			var temp = window.sessionStorage.getItem('userIphone')
			if(temp!=null){
				
			}else{
				this.ageshow=!this.ageshow;
			}
		},
		agreement(){
			this.ageshow=!this.ageshow;
			this.$router.push('/login');
		},
		disAgreement(){
			this.ageshow=!this.ageshow;
		},
		mhome(){
			this.$router.push('/Mhome');
		},
		homeset(){
			this.$router.push('/set');
		}
	}
}
</script>

<style lang='less' scoped="scoped">
     body{background-color: rgb(245,245,245);font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	 .box{max-width: 640/64rem;width: 100%;}
	.header{height:83.31/64rem;background-color: rgb(243,125,15);background-image: url(../../assets/images/mine/+QKAAAAAElFTkSuQmCC.png);
	background-repeat: no-repeat;background-size:58% 97%;display: flex;align-items: center;}
    .nav{height:41.66/64rem;border-bottom:1/64rem solid rgb(217,217,217);display:flex;background-color: rgb(255,255,255);}
    .nav div:nth-last-child(3){width:100/64rem;height:41.66/64rem;line-height:41.66/64rem;margin-left:30/64rem;}
    .nav div a{color: rgba(0,0,0,.87);line-height:41.66/64rem;margin-left:20/64rem;font-size:14/64rem;}
    .nav div:nth-last-child(2){width:200/64rem;height:41.66/64rem;line-height:41.66/64rem;}
    .nav div:nth-last-child(1){width:70.84/64rem;height:41.66/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
     background-repeat: no-repeat;background-position:-15% 50%;transform: rotate(180deg);background-size:35% 50%}
    .moneny{height:87.95/64rem;display: flex;justify-content: space-between;background-color: rgb(255,255,255);border-bottom:1/64rem solid #ccc;}
   .pay{width:100/64rem;height:87.95/64rem;background-image:url(../../assets/images/mine/9AarxBVRHAqjy3WJLRA5zqjfecAE025XKGpTw9zgc8wACEIAABCAAAQh16SPAAD22hrFVOZLnAAAAAElFTkSuQmCC.png);
   background-repeat: no-repeat;background-position:50% 39%;background-size:29% 32%;}
   .pay{text-align: center;font-size:13/64rem;line-height:123/64rem;}
   .pay span{color: rgba(0,0,0,.87);}
    .take{width:100/64rem;height:87.95/64rem;background-image: url(../../assets/images/mine/Fyz2YWQ177VpTeSr2tBH87NYVkxSriKQCCQCiUAikAiUWvsnwABTSwDIZ7YMEAAAAABJRU5ErkJggg==.png);
    background-repeat: no-repeat;background-position:50% 39%;background-size:29% 32%;}
     .take{text-align: center;font-size:13/64rem;line-height:123/64rem;}
   .take span{color: rgba(0,0,0,.87);}
    .change{width:100/64rem;height:87.95/64rem;background-image: url(../../assets/images/icon/nav-4.d68723895f.png);
    background-repeat: no-repeat;background-position:50% 39%;background-size:29% 32%;}
    .change{text-align: center;font-size:13/64rem;line-height:123/64rem;}
   .change span{color: rgba(0,0,0,.87);}
    .vip{height:54.16/64rem;display: flex;background-color: rgb(255,255,255);}
    .icon{width:54.16/64rem;height:54.16/64rem;background-image: url(../../assets/images/mine/23Ljv1mAAAAAElFTkSuQmCC.png);
    background-repeat: no-repeat;background-position:50% 40%;background-size:50% 50%;}
    .navli{width:100%;height:54.16/64rem;border-bottom:1/64rem solid rgb(217,217,217);display: flex;justify-content: space-between;}
    .after{width:70.84/64rem;height:54.16/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
    background-repeat: no-repeat;background-position:10% 50%;transform: rotate(180deg);background-size:35% 40%}
    .navli span{color: rgba(0,0,0,.87);line-height:54.16/64rem;margin-left:10/64rem;font-size:14/64rem;}
    .icontwo{width:54.16/64rem;height:54.16/64rem;background-image:url(../../assets/images/mine/ETwEGAHbgsxy9Nu+hAAAAAElFTkSuQmCC.png);
    background-repeat: no-repeat;background-position:50% 40%;background-size:50% 50%;}
    .iconone{width:54.16/64rem;height:54.16/64rem;background-image:url(../../assets/images/mine/+WcP2BRZYYIF5w38A2GNKeqdUlbgAAAAASUVORK5CYII=.png);
    background-repeat: no-repeat;background-position:50% 40%;background-size:50% 50%;}
    .iconerr{width:54.16/64rem;height:54.16/64rem;background-image:url(../../assets/images/icon/miHome.png);
    background-repeat: no-repeat;background-position:50% 40%;background-size:50% 50%;}
    .iconarr{width:54.16/64rem;height:54.16/64rem;background-image:url(../../assets/images/mine/nmPOt4V6XqGZ9oAAAAASUVORK5CYII=.png);
    background-repeat: no-repeat;background-position:50% 40%;background-size:50% 50%;}
    .iconkpl{width:54.16/64rem;height:54.16/64rem;background-image:url(../../assets/images/icon/i-setting.fb9625b3f2.png);
    background-repeat: no-repeat;background-position:50% 40%;background-size:50% 50%;}
    .fize span{float: right;}
    .head{margin: 0 10/64rem  0 20/64rem;
    width: 51/64rem;
    height: 51/64rem;
    overflow: hidden;
    /*box-sizing: border-box;*/
    border-radius: 100%;
    border: 3px solid hsla(0,0%,100%,.4);
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    }
    .head img{width:49/64rem;height:49/64rem;margin-top: 1px;}
    .login{
    	color: #fff;
    }
    .xieyibox{
    	position: fixed;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	background-color: rgba(0,0,0,.3);
    	z-index: 999;
    	.xieyi{
    		position: absolute;
    		top: 50%;
    		left: 50%;
    		transform: translate(-50%,-50%);
    		width: 376/64rem;
    		height: 240/64rem;
    		background: #fff;
    		border-radius: 8/64rem;
    		box-sizing: border-box;
			padding: 0 20/64rem;
			position: relative;
			.title{
				text-align: center;
				padding-top: 20/64rem;
				padding-bottom: 14/64rem;
				font-size: 17/64rem;
				font-weight: 500
				;
			}
			.userxieyi{
				margin-bottom: 6/64rem;
				a{
				  color: #ff6700;
				  font-size: 15/64rem;
				}
			}
			.yishang{
				color: #676767;
				line-height: 20/64rem;
				font-size: 15/64rem;
			}
			.agreeBtn{
				position: absolute;
				width: 100%;
				bottom: 0;
				left: 0;
				height: 57/64rem;
				line-height: 57/64rem;
				border-top: 1/64rem solid #eee;
				display: flex;
				justify-content: space-between;
				font-size: 17/64rem;
				span{
					flex: 1;
					text-align: center;
				}
				.disagree{
					border-right: 1/64rem solid #eee;
				}
				.agree{
					color: #ff6700;
				}
			}
    	}
    }
</style>