<template>
	<div class="carbox">
		<miHeader txt="购物车">
			<img slot="HleftImg" class="HleftImg" src="../../assets/images/icon/xiangleft.png" alt="" @click="goshopp"/>
			<img slot="HrightImg" class="HrightImg" src="../../assets/images/icon/search.png" alt="" @click="goSear"/>
		</miHeader>
		<div class="shop" v-show="ishow">
			<div class="shopitem">
				<div @click="diangou"><span class="gou" :class="{active:gouShow}"></span></div>
				<a href="" class="aimg">
					<img :src="shopList.urlimg" alt="">
				</a>
				<div class="shoppub">
					<p class="title">{{shopList.title}}</p>
					<p class="title">{{shopList.htitle}}</p>
					<p class="pri">售价 ：{{shopList.pri}}元<span class="jiage">合计：{{shopList.pri*shopList.shopNum}}元</span></p>
					<div class="num">
						<div class="numleft">
							<span class="zengjian" @click.prevent="zengjian"></span>
							<input type="text" v-model="shopList.shopNum">
							<span class="jianshao"  @click.prevent="jianshao"></span>
						</div>
						<div class="numright" @click="delShop">
							<span class="del"></span>
						</div>
					</div>
				</div>
			</div>
			<div class="fuwu">
				<div class="left">
					<img src="http://s1.mi.com/m/images/m/insurance.png" alt="">
					<span class="txt">意外保护 129元起</span>
				</div>
				<span class="right">选购</span>
			</div>
			<div class="fuwu">
				<div class="left">
					<img src="https://s1.mi.com/m/images/m/insurance.png" alt="">
					<span class="txt">延长保修服务 69元</span>
				</div>
				<span class="right">选购</span>
			</div>
		</div>
		<div class="mifen"  v-show="ishow">
			<a href="" class="aimgleft">
				<img src="https://i1.mifile.cn/a1/pms_1501236937.96732594.jpg" alt="">
			</a>
			<div class="mifenright">
				<p class="title">
					<span class="icon">赠送</span>
					<span>米粉卡日租卡</span>
				</p>
				<div class="minum">
					<span class="zengjian"></span>
					<input type="text" v-model="shopList.shopNum">
					<span class="jianshao" ></span>
				</div>
			</div>
		</div>
		<div class="tishi"  v-show="ishow">
			<p class="cuxiao">
				<span class="icon">赠送</span>
				<span>赠送米粉卡</span>
			</p>
			<p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
		</div>
		<carlike></carlike>
		<div class="jixicar">
			<div class="num">
			  <p class="txt">共计<span v-show="ishow">{{shopList.shopNum}}</span>
			  金额：</p>
			  <p class="moeny">
			  	<span class="pricolor"><span v-show="ishow">{{shopList.pri*shopList.shopNum}}</span></span>
			  	元
			  </p>
			</div>
			<div class="jixushop" @click.prevent="jixi">继续购物</div>
			<div class="jisuan" @click.prevent="jiesuan">去结算</div>
		</div>
	</div>
</template>
<script>
	import miHeader from "../../components/miHeader"
	import carlike from "../../components/carlike"
	export default {
		components: {
			miHeader,
			carlike
		},
		data() {
			return {
				ishow:false,
				shopList:'',
				gouShow:false
			}
		},
		mounted(){
			var temp = window.sessionStorage.getItem('shop');
			if(temp!=null){
				this.shopList='';
				this.shopList = JSON.parse(temp);
				console.log(this.shopList);
				this.ishow=true;
			}
		},
		methods:{
			goshopp(){
				this.$router.push('/shoppublic')
			},
			goSear(){
				this.$router.push('/homeSearch')
			},
			zengjian(){
				this.shopList.shopNum-=1;
				if(this.shopList.shopNum<=1){
					this.shopList.shopNum=1;
				}
			},
			jianshao(){
				this.shopList.shopNum+=1
			},
			diangou(){
				this.gouShow=!this.gouShow;
			},
			delShop(){
				window.sessionStorage.removeItem('shop');
				this.ishow=false;
			},
			jixi(){
				this.$router.push('/Home')
			},
			jiesuan(){
				var temp = window.sessionStorage.getItem('shop');
				if(temp!=null){
					this.$router.push("/order")
				}
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
	.carbox {
		width: 100%;
		padding-top: 51/64rem;
		background: #fafafa;
		font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
		.alogin {
			display: block;
			line-height: 60/64rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #fff;
			padding: 0 15/64rem;
			.aleft {
				width: 244/64rem;
				color: rgba(0, 0, 0, .87);
				font-size: 18/64rem;
			}
			.aright {
				width: 120/64rem;
				text-align: right;
				color: rgba(0, 0, 0, .54);
				.arightIcon {
					display: inline-block;
					height: 9/64rem;
					width: 9/64rem;
					border-top: 1px solid #3C3C3C;
					border-right: 1px solid #3C3C3C;
					transform: rotate(45deg);
				}
			}
		}
		.noitems {
			line-height: 46/64rem;
			height: 46/64rem;
			text-align: center;
			width: 100%;
			padding: 11/64rem 0;
			background: #EBEBEB;
			.noitemsbox {
				width: 230/64rem;
				line-height: 46/64rem;
				margin: 0 auto;
				align-items: center;
				display: flex;
				.icon {
					display: inline-block;
					width: 60/64rem;
					height: 46/64rem;
					background: url('https://m.mi.com/static/img/cartnull.daaf7926f8.png') no-repeat center center;
					background-size: 42/64rem 42/64rem;
					margin-right: 4/64rem;
				}
				.text {
					color: rgba(0, 0, 0, .27);
					margin-right: 4/64rem;
				}
				.guang {
					line-height: 26/64rem;
					height: 26/64rem;
					color: rgba(0, 0, 0, .87);
					border: 1px solid #ccc;
					padding: 0 8/64rem;
				}
			}
		}
		.shop {
			background: #fff;
			padding-bottom: 1/64rem;
			margin:  14/64rem 0;
			.shopitem {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				margin: 0 15/64rem;
				height: 131/64rem;
				.gou {
					display: inline-block;
					width: 22/64rem;
					height: 22/64rem;
					background: url(../../assets/images/icon/check_normal.png) no-repeat;
					background-size: 22/64rem 22/64rem;
				}
				.active{
					background: url(https://s1.mi.com/m/images/m/check_press.png) no-repeat;
					background-size: 22/64rem 22/64rem;
				}
				.aimg {
					width: 94/64rem;
					height: 100/64rem;
					border: 1px solid #eee;
					margin-left: 8/64rem;
					img {
						width: 94/64rem;
						height: 100/64rem;
					}
				}
				.shoppub {
					font-size: 15/64rem;
					margin-left: 12/64rem;
					.title {
						line-height: 20/64rem;
					}
					.pri {
						font-size: 14/64rem;
						color: #999;
						line-height: 16/64rem;
						margin: 4/64rem 0;
						.jiage {
							margin-left: 6/64rem;
						}
					}
					.num {
						display: flex;
						justify-content: space-between;
						.numleft {
							display: flex;
							border: 1px solid #ccc;
							width: 102/64rem;
							span {
								display: inline-block;
								height: 34/64rem;
								width: 34/64rem;
							}
							.zengjian {
								background-image: url(../../assets/images/icon/jian.png);
								background-repeat: no-repeat;
								background-position: center center;
								background-size: 14/64rem 14/64rem;
								background-color: #fafafa;
							}
							.jianshao {
								background-image: url(../../assets/images/icon/jia.png);
								background-repeat: no-repeat;
								background-position: center center;
								background-size: 14/64rem 14/64rem;
								background-color: #fafafa;
							}
							input {
								width: 34/64rem;
								height: 34/64rem;
								text-align: center;
								border: none;
								outline: none;
								color: #3C3C3C;
								font-size: 16/64rem;
							}
						}
						.numright {
							height: 34/64rem;
							width: 34/64rem;
							margin-right: -40/64rem;
							.del{
								display: inline-block;
								height: 34/64rem;
								width: 34/64rem;
								background: url(../../assets/images/icon/del.png) no-repeat center center;
								background-size: 34/64rem 34/64rem;
							}
						}
					}
				}
			}
			.fuwu {
				margin: 8/64rem 16/64rem;
				padding: 8/64rem 0;
				background: #f6f6f6;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 3/64rem;
				box-sizing: border-box;
				.left {
					font-size: 14/64rem;
					color: #3C3C3C;
					display: flex;
					align-items: center;
					padding-left: 10/64rem;
					img {
						width: 29/64rem;
						height: 29/64rem;
						margin-right: 6/64rem;
					}
				}
				.right {
					color: #FE6C01;
					margin-right: 20/64rem;
				}
			}
		}
		.mifen {
			padding: 14/64rem 30/64rem;
			display: flex;
			align-items: center;
			background: #fff;
			margin: 10/64rem 0;
			font-size: 13/64rem;
			.aimgleft {
				display: inline-block;
				width: 88/64rem;
				height: 88/64rem;
				border: 1px solid #ccc;
				border-radius: 2/64rem;
				margin-right: 14/64rem;
				img {
					width: 88/64rem;
					height: 88/64rem;
					border-radius: 2/64rem;
				}
			}
			.mifenright {
				color: #666;
				font-size: 16/64rem;
				.title {
					margin-bottom: 10/64rem;
					.icon {
						background: #5b77d6;
						color: #fff;
						padding: 3/64rem 4/64rem;
						border-radius: 2/64rem;
						font-size: 13/64rem;
					}
				}
				.minum {
					display: flex;
					border: 1px solid #ccc;
					width: 102/64rem;
					span {
						display: inline-block;
						height: 34/64rem;
						width: 34/64rem;
					}
					.zengjian {
						background-image: url(../../assets/images/icon/jian.png);
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 14/64rem 14/64rem;
						background-color: #fafafa;
					}
					.jianshao {
						background-image: url(../../assets/images/icon/jia.png);
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 14/64rem 14/64rem;
						background-color: #fafafa;
					}
					input {
						width: 34/64rem;
						height: 34/64rem;
						text-align: center;
						border: none;
						outline: none;
						color: #3C3C3C;
						font-size: 16/64rem;
					}
				}
			}
		}
		.tishi {
			box-sizing: border-box;
			background: #fff;
			p {
				line-height: 30/64rem;
				font-size: 13/64rem;
				color: #999;
				padding: 4/64rem 16/64rem;
			}
			.cuxiao {
				border-bottom: 1px solid #ccc;
				.icon {
					background: #5b77d6;
					color: #fff;
					padding: 2/64rem 4/64rem;
					border-radius: 2/64rem;
					.icon {
						background: #5b77d6;
						color: #fff;
						padding: 3/64rem 4/64rem;
						border-radius: 2/64rem;
						font-size: 13/64rem;
					}
				}
			}
		}
		.jixicar{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 58/64rem;
			line-height: 58/64rem;
			display: flex;
			box-sizing: border-box;
			.num,.jixushop,.jisuan{
				width: 33.33333%;
				text-align: center;
				font-size: 16/64rem;
			}
			.num{
				background: #fff;
				font-size: 14/64rem;
				color: #999;
				padding-top: 7/64rem;
				.txt{
					color: #999;
					line-height: 16/64rem;
					margin-bottom: 2/64rem;
				}
				.moeny{
					line-height: 20/64rem;
					.pricolor{
						color:#ff6700;
						font-size: 20/64rem;
						font-weight: bold;
					}
				}
			}
			.jisuan{
				background: #ff6700;
				color: #fff;
				font-weight: 400;
			}
			.jixushop{
				color: #333;
				font-weight: 400;
				background: #f4f4f4;
    			border: 1px solid #f4f4f4
			}
		}
	}
</style>