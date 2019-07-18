<template>
	<div class="box">
		<div class="rect">
			
		</div>
		<div class="login-title">
			<h3>小米手机号码登录</h3>
		</div>
		<div class="login-input">
			<input type="text" placeholder="手机号码" v-model="userIphone" @blur="logan()" @focus="showClearP"/>
			<span class="qingk" @click.prevent="clearIphone" v-show="Clearip">X</span>
		</div>
		<div class="login-input">
			<input type="text" placeholder="短信验证码" v-model="useryz" @focus="yzmfc" @blur="yzmbl"/>
			<span v-show="show" @click="getCode" class="huodeyz">获取验证码</span>
			<span v-show="!show" class="huodeyz count">重新验证码({{count}}s)</span>
		</div>
		<div class="err" v-show="errShow"><span class="icon"></span>{{errtishi}}</div>
		<div class="login-button" @click.prevent="gotoShop">
			<span class="likeLogin">立即登录/注册</span>
		</div>
		<div class="login-index" @click.prevent="gotoZc">
			<a href="javaScript:;">用户名密码登录</a>
		</div>
		
		<div class="login-img">
			<img src="../../assets/images/mine/2019-06-26_230108.png" />
		</div>
		<div class="login-li">
			<ul>
				<li>简体</li>
				<li>繁体</li>
				<li>English</li>
				<li>常见问题</li>
				<li>隐私策略</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				useryz:'',
				userIphone:"",
				errtishi:'手机号格式不正确',
				errShow:false,
				Clearip:false,
				show:true,
				count:'',
				timer:null,
				tempzt:[],
				userzhanghu:'',
			}
		},
		methods:{
			logan:function(){
				var reg=/^1[3,4,5,7,8][0-9]{9}$/;
				if(reg.test(this.userIphone)){
					this.tempzt[0]="手机号码正确";
					this.userzhanghu='';
					this.userzhanghu=parseInt(Math.random()*10000000000);
				}else{
					this.errtishi="手机号格式不正确";
					this.errShow=true;
				}
				
			},
			gotoZc(){
				this.$router.push("/Zhuche")
			},
			clearIphone(){
				this.userIphone='';
				this.errShow=false;
			},
			showClearP(){
				this.tempzt[0]="";
				this.Clearip=true;
			},
			getCode(){
				const TIME_COUNT = 60;
				    if (!this.timer) {
				       this.count = TIME_COUNT;
				       this.show = false;
				       this.timer = setInterval(() => {
				    if (this.count > 0 && this.count <= TIME_COUNT) {
				        this.count--;
				    } else {
				        this.show = true;
				        clearInterval(this.timer);
				        this.timer = null;
				    }
				}, 1000)
				}
			},
			yzmbl(){
				var reg = /^[0-9]{6}$/;
				if(reg.test(this.useryz)){
					this.tempzt[1]="验证码正确";
				}else{
					this.errtishi="验证码不正确";
					this.errShow=true;
				}
			},
			yzmfc(){
				this.tempzt[1]="";
			},
			gotoShop(){
				var i = this.tempzt.length;
				for(var x=0;x<i;x++){
					if(this.tempzt[0]=='手机号码正确'&&this.tempzt[1]=='验证码正确'){
						window.sessionStorage.setItem('userIphone',this.userzhanghu);
						this.$router.push('/shoppublic');
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
    body{background-color: rgb(255,255,255);}
	.box{font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	.rect{width:48/64rem;height:48/64rem;margin: auto;margin-top:30/64rem;background-image: url(../../assets/images/icon/logo.png);
	background-repeat: no-repeat;background-position:46% 54%;background-size:69% 50%;}
	.login-title{height:40/64rem;line-height:40/64rem;text-align: center;font-size:17/64rem;font-weight: 500;margin-top:10/64rem;}
	.login-title h3{color: rgb(0,0,0);font-weight: 500;font-size:18/64rem;}
	.login-input{height:53/64rem;position: relative;}
	.login-input .huodeyz{
		position: absolute;
		right: 44/64rem;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
    	color: #2ea5e5;
	}
	.login-input .count{
		color: #666;
	}
	.login-input input{width:325.45/64rem;height:53/64rem;font-size:17/64rem;color: rgb(155,155,155);background:none;border:none;border-bottom:1px solid rgb(211,211,211);margin: 0 auto;display: block;outline: none;text-indent: 1em;}
	.login-button{width:335/64rem;height:44/64rem;background-color:#ff6700;margin:30/64rem auto ;text-align: center;border-radius:7/64rem;}
	.login-button .likeLogin{line-height:44/64rem;color: rgb(255,255,255);font-size:18/64rem;}
	.login-index{width:335/64rem;height:44/64rem;margin:30/64rem auto ;text-align: center;border:1px solid rgb(211,211,211);border-radius:7/64rem;}
	.login-index a{line-height:44/64rem;color:rgb(0,0,0);font-size:18/64rem;}
	.login-hpone{font-size:18/64rem;position: relative;left:23/64rem;top:-285/64rem;color:#9b9b9b;}
	.login-li{display: flex;justify-content: center;}
	.login-li li{float: left;margin:10/64rem;color: rgb(155,155,155);font-size:14/64rem;}
	.login-img img{margin: 0 auto;display: block;}
	.err{
		display: flex;
		align-items: center;
		line-height: 30/64rem;
		margin: 16/64rem 0;
		color: #F66;
		.icon{
			background: url(../../assets/images/icon/err.png) no-repeat center center;
			display: inline-block;
			width: 16/64rem;
			height: 16/64rem;
			background-size: 15/64rem 16/64rem;
			margin-left: 40/64rem;
			font-size: 15/64rem;
			margin-right: 8/64rem;
		}
	}
	.login-input .qingk{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: inline-block;
		height: 16/64rem;
		line-height: 16/64rem;
		width: 16/64rem;
		background: #B3B3B3;
		color: #fff;
		border-radius: 8/64rem;
		right: 44/64rem;
		text-align: center;
		font-size: 12/64rem;
	}
</style>