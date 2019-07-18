<template>
	<div class="homePhbox">
		<miBanner swiperId="homeSwiper">
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="https://i8.mifile.cn/v1/a1/ee3abb1e-168b-b2ba-0b7e-d6105e3f04e6!720x360.webp" /></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="https://i8.mifile.cn/v1/a1/d6106062-40f2-4e25-1e45-fa7ff40440f1!720x360.webp" /></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="https://i8.mifile.cn/v1/a1/5226a61a-1c39-4b80-5eb6-cc4a27ec810e!720x360.webp" /></a>
			</div>
		</miBanner>
		<div class="contentbox">
			<div class="banNav">
				<img src="https://i8.mifile.cn/v1/a1/10b80c17-9f7c-d30c-945f-4d4dc3316252!720x152.webp" alt="" class="titleimg" />
				<div class="banNavItem">
					<a href="#" class="aimg"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/018bc1330f53d93d5e4241402e27d36f.jpg?thumb=1&w=696&h=436" alt="" /></a>
					<div class="banNavPub">
						<div class="htitle">
							<p class="title">Redmi K20 Pro </p>
							<p class="num"><span class="fuhao">￥</span>2499起</p>
						</div>
						<div class="btn">
							<p class="pub">骁龙855处理器, 弹出式极界全面屏</p>
							<span class="shopbtn">立即购买</span>
						</div>
					</div>
				</div>
			</div>
			<ul class="shopItemBox">
				<li class="shopItem" v-for="item in shopList">
					<a href="#" class="aimg">
						<img v-lazy.container="item.productImg" alt="" />
					</a>
					<div class="shopb">
						<p class="title">{{item.productName}}</p>
						<p class="tedian">{{item.productdet}}</p>
						<p class="num"><span class="fuhao">￥</span>{{item.productPrice}}起</p>
						<span class="shopbtn">立即购买</span>
					</div>
				</li>
			</ul>
		    <div class="banNav">
				<img src="https://i8.mifile.cn/v1/a1/2e509b4e-0ace-9581-83c6-7d0e91ca023f!720x152.webp" alt="" class="titleimg" />
				<div class="banNavItem">
					<a href="#" class="aimg"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/018bc1330f53d93d5e4241402e27d36f.jpg?thumb=1&w=696&h=436" alt="" /></a>
					<div class="banNavPub">
						<div class="htitle">
							<p class="title">Redmi K20 Pro </p>
							<p class="num"><span class="fuhao">￥</span>2499起</p>
						</div>
						<div class="btn">
							<p class="pub">骁龙855处理器, 弹出式极界全面屏</p>
							<span class="shopbtn">立即购买</span>
						</div>
					</div>
				</div>
			</div>
		    <ul class="shopItemBox">
				<li class="shopItem" v-for="item in Cpulist">
					<a href="#" class="aimg">
						<img v-lazy.container="item.productImg" alt="" />
					</a>
					<div class="shopb">
						<p class="title">{{item.productName}}</p>
						<p class="tedian">{{item.productdet}}</p>
						<p class="num"><span class="fuhao">￥</span>{{item.productPrice}}起</p>
						<span class="shopbtn">立即购买</span>
					</div>
				</li>
			</ul>
            <div class="banNav">
				<img src="https://i8.mifile.cn/v1/a1/f2913df4-93f5-bf89-c579-6727e20bc778!720x152.webp" alt="" class="titleimg" />
				<div class="banNavItem">
					<a href="#" class="aimg"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b9f864a457dc01d563f9b0c551392b31.jpg?thumb=1&w=696&h=436" alt="" /></a>
					<div class="banNavPub">
						<div class="htitle">
							<p class="title">小米平板4  8 / 10.1 英寸</p>
							<p class="num"><span class="fuhao">￥</span>1099起</p>
						</div>
						<div class="btn">
							<p class="pub">大屏幕，长续航，追剧更尽兴</p>
							<span class="shopbtn">立即购买</span>
						</div>
					</div>
				</div>
			</div>
			<ul class="shopItemBox">
				<li class="shopItem" v-for="item in qitaList">
					<a href="#" class="aimg">
						<img v-lazy.container="item.productImg" alt="" />
					</a>
					<div class="shopb">
						<p class="title">{{item.productName}}</p>
						<p class="tedian">{{item.productdet}}</p>
						<p class="num"><span class="fuhao">￥</span>{{item.productPrice}}起</p>
						<span class="shopbtn">立即购买</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import miBanner from './miBanner'
	export default {
		name: 'homePhbox',
		components: {
			miBanner,
		},
		data() {
			return {
				shopList: [{
					"productImg": "https://i8.mifile.cn/v1/a1/86143982-11ca-5249-e90c-eecfdb9b98a0!344x280.webp",
					"productName": "Redmi K20",
					"productdet": "弹出全面屏，4800万三摄",
					"productPrice": "1999"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/fb85df14-31c6-3584-aeff-4fe61b992e5a!344x280.webp",
					"productName": "小米9",
					"productdet": "全息幻彩机身，骁龙855",
					"productPrice": "2799"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/22f203ab-44f4-6b89-06b4-e01e6f00c7f8!344x280.webp",
					"productName": "Redmi 7A",
					"productdet": "骁龙8核处理器",
					"productPrice": "549"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/ea80f62f-f7d4-e055-4c60-ab60cf4eb9f3!344x280.webp",
					"productName": "Redmi Note 7 Pro",
					"productdet": "索尼4800万超清拍照 ",
					"productPrice": "1399"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/4848e768-dd4e-a61b-0c80-e90f8d5e469e!344x280.webp",
					"productName": "Redmi Note 7",
					"productdet": "4800万拍照 长续航",
					"productPrice": "999"
				}, {
					"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d208d0271539c323f45f0990dfdd55f3.jpg?thumb=1&w=344&h=280",
					"productName": "Redmi 7 ",
					"productdet": "4000mAh超长续航",
					"productPrice": "699"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/111cd2ee-0e6a-b286-d713-30a7fce817a3!344x280.webp",
					"productName": "黑鲨游戏手机 2",
					"productdet": "骁龙855，立体触控",
					"productPrice": "2699"
				}, {
					"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a20b33a5ee800e73a65e2f0e151b4a73.jpg?thumb=1&w=344&h=280",
					"productName": "小米9 SE",
					"productdet": "索尼4800万三摄，骁龙712",
					"productPrice": "1999"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/a1207748-44f0-9cc1-d5e8-09c9104cc984!344x280.webp",
					"productName": "小米8 青春版",
					"productdet": "索尼2400万自拍，超级夜景",
					"productPrice": "1049"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/cfb94869-7bc6-7d77-56f7-abe34606b519!344x280.webp",
					"productName": "小米8 SE",
					"productdet": "小屏旗舰机，AI超感光双摄",
					"productPrice": "1599"
				}, {
					"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb2ebb6fadaf67dfe765ce5866daac62.jpg?thumb=1&w=344&h=280",
					"productName": "小米8 屏幕指纹版",
					"productdet": "8GB+128GB特惠，享6期免息",
					"productPrice": "1999"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/fc9bd6c3-543b-aee9-b8a9-28f6bb50c191!344x280.webp",
					"productName": "小米8",
					"productdet": "相机全新升级，骁龙845",
					"productPrice": "2049"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/b7ad9e53-bc1e-dcc9-3175-3221cc043d64!344x280.webp",
					"productName": "小米MIX 3",
					"productdet": "DxO百分拍照手机",
					"productPrice": "2599"
				}, {
					"productImg": "https://i8.mifile.cn/v1/a1/2c685a6e-6585-01bd-b97d-bd4600d9a6a5!344x280.webp",
					"productName": "小米 Play 4GB+64GB",
					"productdet": "5.84小水滴全面屏 ",
					"productPrice": "749"
				}],
				Cpulist:[{
					"productImg":"https://i8.mifile.cn/v1/a1/fc9bd6c3-543b-aee9-b8a9-28f6bb50c191!344x280.webp",
					"productName":"小米8",
					"productdet":"相机全新升级，骁龙845",
					"productPrice":"2049"
					},
					{
					"productImg":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb2ebb6fadaf67dfe765ce5866daac62.jpg?thumb=1&w=344&h=280",
					"productName":"小米8 屏幕指纹版",
					"productdet":"8GB+128GB特惠，享6期免息",
					"productPrice":"1999"
					},
					{
					"productImg":"https://i8.mifile.cn/v1/a1/3972e11c-f4f4-9ad3-6919-bbf99468d106!344x280.webp",
					"productName":"小米MIX 3",
					"productdet":"DxO百分拍照手机",
					"productPrice":"2599"
					},
					{
					"productImg":"https://i8.mifile.cn/v1/a1/d1fd65ec-2401-60a7-0da0-11b0939da4c8!344x280.webp",
					"productName":"小米MIX 2S",
					"productdet":"四曲面陶瓷机身，骁龙845",
					"productPrice":"1999"
					},
					{
					"productImg":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4252109ac87ae9dd1508efa43b78b7ff.jpg?thumb=1&w=344&h=280",
					"productName":"黑鲨游戏手机",
					"productdet":"液冷散热，独立图像处理芯片",
					"productPrice":"2299"
					},
					{
					"productImg":"https://i8.mifile.cn/v1/a1/78167306-bf53-ba9f-434e-643e8e912686!344x280.webp",
					"productName":"黑鲨游戏手机 Helo",
					"productdet":"双液冷，更能打",
					"productPrice":"3199"
					}],
				qitaList:[ {
					"productImg":"https://i8.mifile.cn/v1/a1/d1613aa8-d162-5705-44b9-85bcf326c7af!344x280.webp",
					"productName":"小米Max 3",
					"productdet":"超大屏，超大电量",
					"productPrice":"1299"
					},
					{
					"productImg":"https://i8.mifile.cn/v1/a1/b178eac6-ab77-60bb-2263-164252c5f28b!344x280.webp",
					"productName":"小米Play（附带流量卡）",
					"productdet":"自带高速流量",
					"productPrice":"899"
					}]	
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang='less'>
	.homePhbox {
		width: 100%;
		height: 100%;
		.homeSwiper {
			background: #ccc;
			border-bottom: 1px solid #ccc;
			img {
				display: block;
			}
		}
		.contentbox {
			width: 100%;
			background: #E6E7FB;
			.banNav {
				.titleimg {
					width: 100%;
					height: 88/64rem;
					display: block;
				}
				.banNavItem {
					padding: 0 8/64rem;
					box-sizing: border-box;
					.aimg {
						display: block;
						img {
							width: 100%;
							height: 250/64rem;
							display: block;
						}
					}
					.banNavPub {
						background: #fff;
						display: flex;
						padding: 12/64rem 10/64rem;
						display: flex;
						flex-wrap: wrap;
						.htitle {
							width: 100%;
							display: flex;
							align-items: center;
							line-height: 21/64rem;
							justify-content: space-between;
							margin-bottom: 5/64rem;
							.title {
								color: rgba(0, 0, 0, .87);
								font-size: 16/64rem;
							}
							.num {
								font-size: 15/64rem;
								color: red;
								.fuhao {
									font-size: 12/64rem;
								}
							}
						}
						.btn {
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							line-height: 17/64rem;
							.pub {
								font-size: 13/64rem;
								color: #777;
							}
							.shopbtn {
								display: block;
								width: 116/64rem;
								height: 34/64rem;
								line-height: 34/64rem;
								background: #ea625b;
								text-align: center;
								color: #fff;
								border-radius: 4/64rem;
								font-size: 14/64rem;
							}
						}
					}
				}
			}
			.shopItemBox{
				display: flex;
				flex-wrap: wrap;
				padding: 0 8/64rem;
				box-sizing: border-box;
				.shopItem{
					width: 193/64rem;
					height: 276/64rem;
					overflow:hidden;
					margin-top: 7/64rem;
					.aimg{
						display: block;
						img{
							width: 193/64rem;
							height: 161/64rem;
							display: block;
						}
					}
					&:nth-child(even){
						margin-left: 7/64rem;
						width: 194/64rrem;
						img{
							width: 194/64rem;
						}
					}
					.shopb{
						height: 110/64rem;
						background: #fff;
						width: 100%;
						text-align: center;
						padding-top: 10/64rem;
						.title{
							color:rgba(0,0,0,.87);
							font-size: 16/64rem;
							line-height: 20/64rem;
						}
						.tedian{
							color: rgba(0,0,0,.54);
							font-size: 12/64rem;
							line-height: 20/64rem;
						}
						.num{
							color: #ea625b;
							line-height: 20/64rem;
						}
						.shopbtn {
								display: inline-block;
								width: 116/64rem;
								height: 34/64rem;
								line-height: 34/64rem;
								background: #ea625b;
								text-align: center;
								color: #fff;
								border-radius: 4/64rem;
								font-size: 14/64rem;
							}
					}
				}
			}
		}
	}
</style>