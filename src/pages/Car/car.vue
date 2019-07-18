<template>
	<div class="carbox">
		<miHeader txt="购物车">
			<img @click="backSearch()" slot="HleftImg" class="HleftImg" src="../../assets/images/icon/xiangleft.png" alt="" />
			<img slot="HrightImg" class="HrightImg"  src="../../assets/images/icon/search.png" alt="" />
		</miHeader>
		<div class="alogin" @click="login" v-show="ishow">
		   <span class="aleft">
		   	登录后享受更多优惠
		   </span>
		   <span class="aright">
		  		 去登录 <i class="arightIcon"></i>
		   </span>
		</div>
		<div class="noitems" @click="shop" v-show="ishow">
		   <div class="noitemsbox">
		   	 <span class="icon"></span>
		     <span class="text">购物车还是空的</span>
		     <span class="guang">去逛逛</span>
		   </div>
		</div>
        <carlike></carlike>
        <Tabbar></Tabbar>
	</div>
</template>
<script>
	import miHeader from "../../components/miHeader"
	import carlike from "../../components/carlike"
	import Tabbar from '../../components/tabbar'
	export default{
		components:{
			miHeader,
			carlike,
			Tabbar
		},
		data(){
			return{
				ishow:true,
			}
		},
		mounted(){
			var temp = window.sessionStorage.getItem('shop');
			if(temp!=null){
				this.ishow=false;
			}else{
				this.ishow=true;
			}
		},
		methods:{
			backSearch(){
				this.$router.push('/shoppublic')
			},
			login(){
				this.$router.push('/Login')
			},
			shop(){
				this.$router.push('/Home')
			}
		}
	}
</script>

<style lang='less'>
	.carbox{
		width: 100%;
		padding-top: 51/64rem;
		.alogin{
			display: block;
			line-height: 60/64rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #fff;
			padding: 0 15/64rem;
			.aleft{
				width: 244/64rem;
				color: rgba(0,0,0,.87);
				font-size: 18/64rem;
			}
			.aright{
				width: 120/64rem;
				text-align: right;
				color: rgba(0,0,0,.54);
				.arightIcon{
					display: inline-block;
					height: 9/64rem;
					width: 9/64rem;
					border-top: 1px solid #3C3C3C;
					border-right: 1px solid #3C3C3C;
					transform: rotate(45deg);
				}
			}
		}
		.noitems{
			line-height: 46/64rem;
			height:46/64rem;
			text-align: center;
			width: 100%;
			padding: 11/64rem 0;
			background: #EBEBEB;
			.noitemsbox{
				width: 230/64rem;
				line-height: 46/64rem;
				margin: 0 auto;
				align-items: center;
				display: flex;
				.icon{
					display: inline-block;
					width: 60/64rem;
					height: 46/64rem;
					background: url('https://m.mi.com/static/img/cartnull.daaf7926f8.png') no-repeat center center;
					background-size: 42/64rem 42/64rem ;
					margin-right: 4/64rem;
				}
				.text{
					color: rgba(0,0,0,.27);
					margin-right: 4/64rem;
				}
				.guang{
					line-height: 26/64rem;
					height: 26/64rem;
					color: rgba(0,0,0,.87);
					border: 1px solid #ccc;
					padding: 0 8/64rem;
				}
			}
		}
		
	}
</style>