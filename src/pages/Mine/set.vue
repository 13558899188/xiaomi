<template>
	<div class="setbox">
		<div class="Commodity">
			<div @click.prevent="back"></div>
			<div><a href="#">个人中心</a></div>
			<div  @click.prevent="goSearch"></div>
		</div>
		<ul class="itembox">
			<li class="item" v-for="item in itemList">
				<router-link :to="item.dizhi" class="atit">
					{{item.title}}
				  <span class="icon"></span>
				</router-link>
			</li>
		</ul>
		<div class="btn" @click.prevent="tuichu" v-show="dengluShow">退出账号</div>
	</div>
</template>

<script>
	export default{
		name:'set',
		methods:{
			back(){
				this.$router.push('/Mine')
			},
			goSearch(){
				this.$router.push('/homeSearch')
			},
			tuichu(){
				window.sessionStorage.removeItem('userIphone');
				this.$router.push('/Mine')
			}
		},
		data(){
			return{
				itemList:[
				{title:'地址管理',dizhi:''},
				{title:'经营证照',dizhi:''},
				{title:'协议规则',dizhi:''},
				{title:'小米商城用户协议',dizhi:''},
				{title:'小米帐号使用协议',dizhi:''},
				{title:'隐私政策',dizhi:''}
				],dengluShow:false
			}
		},
		mounted(){
			var temp = window.sessionStorage.getItem('userIphone')
			if(temp!=null){
				this.user=window.sessionStorage.getItem('userIphone');
				this.dengluShow=true;
			}
		}
	}
	
	
</script>

<style lang="less" scoped="scoped">
	.fma{display: flex;justify-content: center;margin-top:10px;}
	.fma input{width:352/64rem;height:34/64rem;border:1px solid rgb(246,246,246);font-size: 14/64rem;outline: none;}
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);font-size: 16/64rem;}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.itembox{
		box-sizing: border-box;
		.item{
			border-bottom: 1px solid #eee;
			line-height:36/64rem;
			padding: 0 16/64rem;
			.atit{
				display: block;
				color: #3c3c3c;
				font-size: 15/64rem;
				position: relative;
				.icon{
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%) rotate(45deg);
					display: inline-block;
					height: 9/64rem;
					width: 9/64rem;
					border-top: 1px solid #ccc;
					border-right: 1px solid #ccc;
				}
			}
			
		}
	}
	.btn{
		display: block;
		line-height: 58/64rem;
		width: 100%;
		background-color: #f4f4f4;
	    text-align: center;
	    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    z-index: 100;
	    font-size: 15/64rem;
	    color: #3c3c3c;
	}
	
</style>