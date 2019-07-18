<template>
	<div>
		<div class="rect">
			
		</div>
		<div class="login-title">
			<h3>小米用户名登录</h3>
		</div>
	<div class="zhuche-account">
			<input type="text" placeholder="邮箱/手机号码/小米ID" v-model="account" @keyup="logan()" @blur="think()"/>
	</div>
	<div class="zhuche-passworld">
		   <input :type="inputType" placeholder="密码" v-model="passworld" @focus="yzmfc" @blur="yzmbl"/>
	</div>
	<div class="delect" v-show="tr" @click="time()">
		x
	</div>
	<div class="err" v-show="errShow"><span class="icon"></span>{{errtishi}}</div>
	<div class="zhuche-login" @click.prevent="gotoMine">
		<a href="javaScript:;">登录</a>
	</div>
	<div class="zhuche-honpe" @click.prevent="gotoIphone">
		<a href="javaScript:;">手机短信登录/注册</a>
	</div>
	<div class="showpassworld" @click="dianji()">
		<img src="../../assets/images/mine/2019-07-02_181751.png" />
	</div>
	<div class="reverse">
		<span>立即注册</span>|
		<span>忘记密码？</span>
	</div>
	<fieldset class="oth_type_tit">
		<legend align="center" class="oth_type_txt">其他方式登录</legend>
	</fieldset>
	<div class="qitalogin">
		<img src="../../assets/images/icon/qitalogin.png"/>
	</div>
	<ul class="area">
		<li><a href="#">简体</a></li>|
		<li><a href="#">繁体</a></li>|
		<li><a href="#">English</a></li>|
		<li><a href="#">常见问题</a></li>|
		<li><a href="#">隐私政策</a></li>
	</ul>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				account:"",
				tr:false,
				passworld:"",
				inputType:"password",
				eye:true,
				word:"",
				that:"",
				errtishi:'手机号格式不正确',
				errShow:false,
				tempzt:[],
			}
		},
		methods:{
			logan:function(){
				if(this.account!==""){
					this.tr=true
				}
			},
			time:function(){
				this.account="";
				this.tr=false
			},
			dianji:function(){
				if(this.inputType=="password"){
				    this.inputType="text"	
				}else if(this.inputType=="text"){
					this.inputType="password"
				}
			},
			think:function(){
				this.word=/^[1][3,4,5,7,8][0-9]{9}$/
				if(this.account==""){
					this.errtishi="账号不能为空";
					this.errShow=true;
				}else if(this.word.test(this.account)){
					this.errShow=false;
					this.tempzt[0]="账户正确";
					window.sessionStorage.setItem('userIphone',this.account);
					this.$router.push("/Mine");
				}else{
					this.errtishi="账号输入不正确，请重新输入";
					this.errShow=true;
				}
			},
			gotoIphone(){
				this.$router.push("/Login")
			},
			yzmbl(){
				var reg = /^[a-zA-Z0-9]{6-15}$/;
				if(reg.test(this.passworld)){
					this.tempzt[1]="密码正确";
				}else{
					this.errtishi="密码不正确";
					this.errShow=true;
				}
			},
			yzmfc(){
				this.passworld='';
				this.tempzt[1]="";
			},
			gotoMine(){
				var i = this.tempzt.length;
				for(var x=0;x<i;x++){
					if(this.tempzt[0]=='账户正确'&&this.tempzt[1]=='密码正确'){
						window.sessionStorage.setItem('userIphone',this.account);
						this.$router.push('/Mine');
					}
				}
			}
		}
	}
</script>
<style lang="less">
	.rect{width:48px;height:48px;margin: auto;margin-top:30px;background-image: url(../../assets/images/icon/logo.png);
	background-repeat: no-repeat;background-position:46% 54%;background-size:69% 50%;}
	.login-title{height:40px;line-height:40px;text-align: center;font-size:17px;font-weight: 500;margin-top:10px;}
	.login-title h3{color: rgb(0,0,0);font-weight: 500;font-size:18px;}
	.zhuche-account{display: flex;justify-content: center;}
	.zhuche-account input{width:335px;height:54px;font-size:19px; border-left: none;border-top:none;border-right:none; zoom:1;
    outline: medium;}
    .delect{border-radius:50px;background-color: rgb(179,179,179);width:15px;height:16px;font-size:16px;text-align: center;line-height:16px;
    color: rgb(255,255,255);position: absolute;left:339px;top:151px;}
    .zhuche-passworld{display: flex;justify-content: center;}
    .zhuche-passworld input{width:335px;height:54px;border-top:none;border-left:none;border-right:none;zoom:1;
    outline:medium;font-size:19px;color: #777;}
    .zhuche-login {width:335px;height:44px;background-color:rgb(255,103,0);border-radius:8px;margin:20px auto;text-align: center;}
    .zhuche-login a{line-height:44px;font-size:18px;color: rgb(255,255,255);}
    .zhuche-honpe{width:335px;height:44px;background-color:rgb(255,255,255);border-radius:8px;margin: auto;text-align: center;margin-top:20px;
    border:1px solid rgb(211,211,211);}
    .zhuche-honpe a{font-size:18px;line-height:44px;color: black;}
    .showpassworld{position: absolute;left:331px;top:207px;}
    .err{
		display: flex;
		align-items: center;
		line-height: 30/64rem;
		margin: 16/64rem 0;
		color: #F66;
		font-size: 15/64rem;
		.icon{
			background: url(../../assets/images/icon/err.png) no-repeat center center;
			display: inline-block;
			width: 16/64rem;
			height: 16/64rem;
			background-size: 15/64rem 16/64rem;
			margin-left: 40/64rem;
			font-size: 16/64rem;
			margin-right: 8/64rem;
		}
	}
	.reverse{
		width: 176/64rem;
		text-align: center;
		display: flex;
		align-items: center;
		font-size: 16/64rem;
		padding: 16/64rem 0;
		margin: 0 auto;
		color: #777;
		span{
			display: inline-block;
			padding: 0 6/64rem;
			
		}
	}
	.oth_type_tit{
		border: none;
		border-top: 1px solid #f2f2f2;
   		padding-top: 10/64rem;
   		margin:  0 10/64rem;
   		box-sizing: border-box;
   		.oth_type_txt{
   			font-size: 12/64rem;
    		color: #b0b0b0;
    		width: 80/64rem;
   		}
	}
	.qitalogin{
		margin: 10/64rem 0;
       img{
       	display: block;
       	margin: 0 auto;
       }
	}
	.area{
		display: flex;
		align-items: center;
		color: #999;
		width: 320/64rem;
		margin: 120/64rem auto 0;
		li{
			
			a{
				color: #999;
				padding: 0 8/64rem;
			}
		}
		
	}
</style>
