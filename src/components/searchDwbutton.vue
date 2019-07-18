<template>
	<div class="searchDw">
		<div class="dingweiD">
			<div class="dingweiHome">
				<router-link to="/home">
					<img src="../assets/images/tabbar/home.png"/>
					<span>首页</span>
				</router-link>
			</div>
			<div class="dingweiHome" @click.prevent="goOrder">
				<a hfef="javaScript:;">
					<img src="../assets/images/tabbar/car.png"/>
					<span>购物车</span>
					<i class="shopnum" v-show="numShow">{{num}}</i>
				</a>
			</div>
		</div>
		<div class="shoppingDw">
			<a href="javaScript:;">
				<span class="Dwqianggou"  @click.prevent="selshop">立即抢购</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default{
		name:"shopCar",
		data(){
			return{
				num:'',
				numShow:false,
				timer:null,
			}
		},
		methods:{
			selshop(){
				this.$store.state.shopSelect=!this.$store.state.shopSelect
			},
			goOrder(){
				var temp = window.sessionStorage.getItem('userIphone')
				if(temp!=null){
					this.$router.push('/shopCar')
				}else{
					this.$router.push('/login')
				}
				
			}
		},
		mounted(){
				if(this.$store.state.gounum>=1){
					this.num =this.$store.state.gounum;
					this.numShow=true;
				}else{
					this.numShow=false;
				}
				
		}
	}
</script>
<style lang="less">
	.searchDw{
		position: fixed;
		bottom: 10/64rem;
		height: .9rem;
		width: 90%;
		background: #fff;
		margin:0 20/64rem;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: .2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.dingweiD{
			display: flex;
			.dingweiHome{
				padding-left: 25/64rem;
				text-align: center;
				position: relative;
				img{
					width: 22/64rem;
					height: 22/64rem;
				}
				span{
					display: block;
					font-size: 14/64rem;
					color: #999999;
					font-family: "微软雅黑";
				}
				.shopnum{
					font-style: normal;
					display: inline-block;
					height: 16/64rem;
					line-height: 16/64rem;
					width: 16/64rem;
					background: #ed4d41;
					border-radius: 8/64rem;
					color: #fff;
					position: absolute;
					right: 0;
					top: -3/64rem;
					
				}
			}
		}
		.shoppingDw{
			padding-right: 35/64rem;
			.Dwqianggou{
				background: #FF6700;
				padding: .1rem .4rem;
				border-radius: 25/64rem;
				color: #fff;
				font-size: 14/64rem;
				font-family: "微软雅黑";
			}
		}
	}
</style>